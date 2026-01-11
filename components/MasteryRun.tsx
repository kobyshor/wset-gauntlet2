
import React, { useState, useEffect, useMemo } from 'react';
import { Question, UserAnswerRecord, Tier } from '../types';
import { getMasteryRun } from '../services/gauntletEngine';
import { calculateSM2, mapResultToQuality } from '../services/sm2';

interface MasteryRunProps {
  progress: Record<string, UserAnswerRecord>;
  onComplete: (newProgress: Record<string, UserAnswerRecord>) => void;
  onExit: () => void;
  isDemoMode?: boolean;
}

export const MasteryRun: React.FC<MasteryRunProps> = ({ progress, onComplete, onExit, isDemoMode = false }) => {
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [sessionResults, setSessionResults] = useState<Record<string, { isCorrect: boolean; selectedOptionId: string }>>({});
  const [showAbandonConfirm, setShowAbandonConfirm] = useState(false);
  const [isRunComplete, setIsRunComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const run = getMasteryRun(progress);
      setSessionQuestions(run);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);

  const currentQuestion = sessionQuestions[currentIndex];

  const handleSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOption || !currentQuestion) return;
    
    const option = currentQuestion.options.find(o => o.id === selectedOption);
    const isCorrect = !!option?.isCorrect;
    
    setSessionResults(prev => ({ 
      ...prev, 
      [currentQuestion.id]: { isCorrect, selectedOptionId: selectedOption } 
    }));
    setIsAnswered(true);
  };

  // Fix: Add handleNext to move to the next question or complete the run
  const handleNext = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsRunComplete(true);
    }
  };

  const handleFinalize = () => {
    const updatedProgress = { ...progress };
    // Fixed: Explicitly typed entries to prevent 'unknown' inference error in some TS environments
    (Object.entries(sessionResults) as [string, { isCorrect: boolean; selectedOptionId: string }][]).forEach(([qId, result]) => {
      const existing = updatedProgress[qId] || {
        questionId: qId,
        lastAnsweredAt: 0,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        isCorrect: false,
        seenCount: 0
      };

      const quality = mapResultToQuality(result.isCorrect);
      const { interval, repetitions, easeFactor } = calculateSM2(
        quality,
        existing.interval,
        existing.repetitions,
        existing.easeFactor
      );

      updatedProgress[qId] = {
        ...existing,
        lastAnsweredAt: Date.now(),
        easeFactor,
        interval,
        repetitions,
        isCorrect: result.isCorrect,
        seenCount: existing.seenCount + 1
      };
    });
    onComplete(updatedProgress);
  };

  const handleAbandonRequest = () => {
    setShowAbandonConfirm(true);
  };

  const confirmAbandon = () => {
    onExit();
  };

  const cancelAbandon = () => {
    setShowAbandonConfirm(false);
  };

  const formatExplanation = (text: string) => {
    const linkingWords = ['Because', 'Therefore', 'As a result', 'Consequently', 'Since', 'Which leads to', 'However', 'In contrast', 'Thus', 'So', 'Specifically'];
    let formatted = text;
    linkingWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      formatted = formatted.replace(regex, `<span class="highlight-link">${word}</span>`);
    });
    return formatted;
  };

  const runStats = useMemo(() => {
    if (!isRunComplete) return null;
    const total = sessionQuestions.length;
    // Fixed: Explicitly typed values to prevent 'unknown' inference error when mapping session results
    const correctCount = (Object.values(sessionResults) as { isCorrect: boolean; selectedOptionId: string }[]).filter(r => r.isCorrect).length;
    const percentage = Math.round((correctCount / total) * 100);
    
    let grade = "Unsuccessful";
    let color = "text-rose-500";
    if (percentage >= 85) { grade = "Distinction"; color = "text-cyan-400"; }
    else if (percentage >= 70) { grade = "Merit"; color = "text-amber-400"; }
    else if (percentage >= 55) { grade = "Pass"; color = "text-blue-400"; }

    const incorrectQuestions = sessionQuestions.filter(q => !sessionResults[q.id]?.isCorrect);
    
    const focusRegions = Array.from(new Set(incorrectQuestions.map(q => q.region)));
    const focusCategories = Array.from(new Set(incorrectQuestions.map(q => q.category)));

    return { total, correctCount, percentage, grade, color, incorrectQuestions, focusRegions, focusCategories };
  }, [isRunComplete, sessionResults, sessionQuestions]);

  if (sessionQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mb-6"></div>
        <h2 className="text-xl font-medium text-slate-200 tracking-tight serif">Assembling Your Gauntlet...</h2>
        <button onClick={onExit} className="mt-8 text-slate-600 hover:text-slate-400 text-xs font-bold uppercase tracking-widest py-2 px-4 border border-slate-800 rounded-lg m3-transition">Cancel</button>
      </div>
    );
  }

  if (isRunComplete && runStats) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col max-w-2xl mx-auto border-x border-slate-900 shadow-2xl relative p-6 pb-32">
        <header className="text-center py-12 space-y-4">
          <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Gauntlet Performance Log</h2>
          <div className={`text-6xl font-black serif italic tracking-tighter ${runStats.color}`}>{runStats.grade}</div>
          <div className="text-slate-200 text-xl font-medium tracking-tight">You secured {runStats.correctCount} of {runStats.total} protocols ({runStats.percentage}%)</div>
        </header>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl text-center space-y-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Accuracy</span>
            <div className="text-3xl font-black text-white">{runStats.percentage}%</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl text-center space-y-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Errors</span>
            <div className="text-3xl font-black text-rose-500">{runStats.incorrectQuestions.length}</div>
          </div>
        </div>

        {runStats.incorrectQuestions.length > 0 ? (
          <div className="space-y-10">
            <section className="space-y-4">
              <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.4em]">Critical Knowledge Gaps</h3>
              <div className="space-y-3">
                {runStats.incorrectQuestions.map(q => (
                  <div key={q.id} className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl space-y-3">
                    <div className="flex justify-between items-start">
                       <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">{q.region}</span>
                       <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">T{q.tier}</span>
                    </div>
                    <p className="text-slate-300 font-medium leading-snug">{q.questionText}</p>
                    <div className="pt-3 border-t border-slate-800/50">
                       <p className="text-[13px] text-slate-500 italic" dangerouslySetInnerHTML={{ __html: formatExplanation(q.explanationText) }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.4em]">Recommended Study Focus</h3>
              <div className="flex flex-wrap gap-2">
                {runStats.focusRegions.map(r => (
                  <span key={r} className="px-4 py-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-xl text-xs font-bold uppercase tracking-widest">Review {r}</span>
                ))}
                {runStats.focusCategories.map(c => (
                  <span key={c} className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-xl text-xs font-bold uppercase tracking-widest">Master {c}</span>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="text-center py-10 space-y-4">
             <div className="text-5xl">🏆</div>
             <p className="text-slate-400 serif italic text-lg">Flawless execution. Your logic chain is consistent with the primary text.</p>
          </div>
        )}

        <div className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent max-w-2xl mx-auto z-30">
          <button 
            onClick={handleFinalize}
            className={`w-full font-bold py-6 rounded-[2rem] text-xl shadow-2xl m3-transition flex items-center justify-center gap-4 ${runStats.percentage >= 85 ? 'bg-cyan-600 hover:bg-cyan-500' : 'bg-amber-600 hover:bg-amber-500'} text-white`}
          >
            <span>SYNCHRONIZE & EXIT</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </div>
    );
  }

  const currentOptionObj = currentQuestion.options.find(o => o.id === selectedOption);
  const progressPercent = ((currentIndex + 1) / sessionQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col max-w-2xl mx-auto border-x border-slate-900 shadow-2xl relative">
      {showAbandonConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-2xl max-w-sm w-full text-center">
            <h3 className="text-2xl font-bold text-white mb-3 serif">Abandon Run?</h3>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">Your progress in this current session will be lost.</p>
            <div className="flex flex-col gap-3">
              <button onClick={confirmAbandon} className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-4 rounded-2xl m3-transition shadow-lg">YES, ABANDON</button>
              <button onClick={cancelAbandon} className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-4 rounded-2xl m3-transition">STAY IN RUN</button>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 bg-slate-900/90 backdrop-blur sticky top-0 z-10 border-b border-slate-800">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Protocol {currentIndex + 1} / {sessionQuestions.length}</span>
          <button onClick={handleAbandonRequest} className="text-slate-500 hover:text-rose-500 text-xs font-bold uppercase tracking-wider py-2 px-3 rounded-lg">Abandon</button>
        </div>
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-amber-500 transition-all duration-500 ease-out" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <div className="flex-grow p-6 overflow-y-auto space-y-6 pb-32">
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${
            currentQuestion.tier === Tier.Tier4 ? 'bg-purple-600 text-white shadow-lg' :
            currentQuestion.tier === Tier.Tier3 ? 'bg-amber-600 text-white shadow-md' :
            currentQuestion.tier === Tier.Tier2 ? 'bg-blue-600 text-white' :
            'bg-slate-700 text-slate-300'
          }`}>
            Tier {currentQuestion.tier}: {
              currentQuestion.tier === 4 ? 'EXPERT' :
              currentQuestion.tier === 3 ? 'DISTINCTION' :
              currentQuestion.tier === 2 ? 'MERIT' : 'PASS'
            }
          </span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">{currentQuestion.category}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-medium text-slate-50 leading-snug tracking-tight serif">{currentQuestion.questionText}</h2>

        <div className="space-y-4">
          {currentQuestion.options.map(opt => (
            <button
              key={opt.id}
              disabled={isAnswered}
              onClick={() => handleSelect(opt.id)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex justify-between items-center group ${
                selectedOption === opt.id 
                  ? (isAnswered ? (opt.isCorrect ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-rose-500/10 border-rose-500 text-rose-400') : 'bg-amber-500/10 border-amber-500 text-amber-300 shadow-xl') 
                  : (isAnswered && opt.isCorrect ? 'bg-emerald-500/5 border-emerald-500/30 text-emerald-500/80' : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40')
              }`}
            >
              <span className="text-lg font-normal leading-normal">{opt.text}</span>
              <div className="flex items-center shrink-0 ml-3">
                {isAnswered && opt.isCorrect && <span className="text-emerald-500 text-2xl font-bold">✓</span>}
                {isAnswered && selectedOption === opt.id && !opt.isCorrect && <span className="text-rose-500 text-2xl font-bold">✕</span>}
              </div>
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8 pt-4">
            <div className={`p-6 rounded-[1.5rem] border-l-4 ${currentOptionObj?.isCorrect ? 'bg-emerald-950/30 border-emerald-500 text-emerald-50' : 'bg-rose-950/30 border-rose-500 text-rose-50'}`}>
               <h4 className="font-bold text-[11px] uppercase mb-2 tracking-[0.15em] opacity-70">{currentOptionObj?.isCorrect ? 'VALID LOGIC' : 'CRITICAL ERROR'}</h4>
               <p className="text-[16px] leading-relaxed font-medium">{currentOptionObj?.feedback}</p>
            </div>

            <div className="bg-slate-900/60 p-8 rounded-[2rem] border border-slate-800 shadow-sm relative overflow-hidden">
               <h4 className="font-bold text-amber-500 text-[10px] uppercase mb-5 tracking-[0.25em] flex items-center">
                <span className="mr-4 h-px w-10 bg-amber-500/20"></span> THE BOOK PROTOCOL
               </h4>
               <p className="text-slate-100 leading-relaxed mb-8 text-xl md:text-2xl serif italic tracking-tight" dangerouslySetInnerHTML={{ __html: formatExplanation(currentQuestion.explanationText) }} />
               <div className="mt-6 pt-6 border-t border-slate-800/60">
                  <h4 className="font-bold text-slate-500 text-[10px] uppercase mb-4 tracking-[0.25em] flex items-center">
                    <span className="mr-4 h-px w-10 bg-slate-700/50"></span> GEOGRAPHIC ANCHOR
                  </h4>
                  <div className="text-[15px] font-medium text-amber-500/90 bg-black/40 p-5 rounded-2xl border border-amber-500/10 tracking-tight flex items-center gap-3">
                    <span className="text-xl">📍</span>
                    <span>{currentQuestion.mentalMapText}</span>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 fixed bottom-0 left-0 right-0 max-w-2xl mx-auto z-20">
        {!isAnswered ? (
          <button onClick={handleSubmit} disabled={!selectedOption} className="w-full bg-amber-600 disabled:bg-slate-800 disabled:text-slate-600 text-white font-bold py-5 rounded-[1.5rem] text-xl shadow-2xl m3-transition hover:bg-amber-500">CONFIRM LOGIC</button>
        ) : (
          <button onClick={handleNext} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 rounded-[1.5rem] text-xl shadow-2xl m3-transition">
            {currentIndex === sessionQuestions.length - 1 ? 'CONCLUDE RUN' : 'NEXT PROTOCOL'}
          </button>
        )}
      </div>
    </div>
  );
};
