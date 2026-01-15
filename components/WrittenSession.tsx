
import React, { useState, useEffect, useMemo } from 'react';
import { WrittenQuestion, WrittenQuestionPart, LogicBlock, UserAnswerRecord } from '../types';
import { GoogleGenAI } from "@google/genai";

interface WrittenSessionProps {
  question: WrittenQuestion;
  onExit: () => void;
  onSaveProgress: (id: string, score: number) => void;
  isDemoMode?: boolean;
}

type ScaffoldingLevel = 'wheels' | 'balanced' | 'hand';

export const WrittenSession: React.FC<WrittenSessionProps> = ({ question, onExit, onSaveProgress, isDemoMode = false }) => {
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [scaffolding, setScaffolding] = useState<ScaffoldingLevel>('hand');
  const [selectedBlocks, setSelectedBlocks] = useState<LogicBlock[]>([]);
  const [grading, setGrading] = useState<Record<string, { score: number, feedback: string, loading: boolean }>>({});
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  const currentPart = question.parts[currentPartIndex];
  const currentAnswer = userAnswers[currentPart.id] || "";

  const linkingWords = ['Because', 'Therefore', 'Consequently', 'As a result', 'Which means', 'This results in', 'Due to', 'However', 'Thus'];

  const bridgeBlocks: LogicBlock[] = useMemo(() => 
    linkingWords.map(word => ({ id: `bridge-${word}`, text: word, type: 'bridge' })),
    []
  );

  const usedLinkingWords = linkingWords.filter(word => 
    currentAnswer.toLowerCase().includes(word.toLowerCase())
  );

  useEffect(() => {
    if (scaffolding === 'wheels') {
      const generatedText = selectedBlocks.map(b => b.text).join(' ');
      setUserAnswers(prev => ({ ...prev, [currentPart.id]: generatedText }));
    }
  }, [selectedBlocks, scaffolding]);

  const toggleBlock = (block: LogicBlock) => {
    setSelectedBlocks(prev => [...prev, block]);
  };

  const removeBlockAt = (index: number) => {
    setSelectedBlocks(prev => {
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  };

  const handleGrade = async () => {
    if (!isDemoMode && currentAnswer.length < 5) return;

    setGrading(prev => ({ ...prev, [currentPart.id]: { score: 0, feedback: "", loading: true } }));

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        Act as a strict WSET Level 3 Examiner. Grade this Short Written Answer.
        
        COMMAND VERBS IN PROMPT: ${currentPart.prompt}
        MAX MARKS: ${currentPart.marks}
        MODEL ANSWER: ${currentPart.modelAnswer}
        RUBRIC POINTS: ${currentPart.rubric.join(', ')}
        
        USER ANSWER: "${currentAnswer}"
        
        STRICT GRADING RULES:
        1. Identify: +1 mark for naming the factor.
        2. Describe: +1 mark for stating features.
        3. Explain: MARKS ARE ONLY GIVEN IF THERE IS A LOGICAL LINK (Linking words like 'because', 'therefore', etc).
        
        Provide a JSON response:
        {
          "score": number,
          "feedback": "Be tough but fair. Specifically mention if they missed the 'Explain' part."
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });

      const text = response.text || "{}";
      const result = JSON.parse(text);
      setGrading(prev => ({ ...prev, [currentPart.id]: { ...result, loading: false } }));
      
      const percentageScore = Math.round((result.score / currentPart.marks) * 100);
      onSaveProgress(`${question.id}_${currentPart.id}`, percentageScore);
      
      setShowModelAnswer(true);
    } catch (e) {
      console.error(e);
      setGrading(prev => ({ ...prev, [currentPart.id]: { score: 0, feedback: "AI evaluation unavailable.", loading: false } }));
      setShowModelAnswer(true);
    }
  };

  const nextPart = () => {
    if (currentPartIndex < question.parts.length - 1) {
      setCurrentPartIndex(prev => prev + 1);
      setShowModelAnswer(false);
      setSelectedBlocks([]);
    } else {
      onExit();
    }
  };

  const currentPercentage = useMemo(() => {
    const result = grading[currentPart.id];
    if (!result) return 0;
    return Math.round((result.score / currentPart.marks) * 100);
  }, [grading, currentPart]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col max-w-3xl mx-auto border-x border-slate-900 shadow-2xl relative">
      <div className="p-6 bg-slate-900/90 backdrop-blur sticky top-0 z-10 border-b border-slate-800">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">
              {question.category} {isDemoMode && <span className="ml-2 text-emerald-500">[DEMO]</span>}
            </span>
            <h1 className="text-xl font-bold text-white serif">{question.title}</h1>
          </div>
          <button onClick={onExit} className="text-slate-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {!showModelAnswer && (
          <div className="flex bg-black/40 p-1 rounded-2xl mb-4 border border-slate-800">
            {[
              { id: 'wheels', label: 'Guided Help', icon: '💡' },
              { id: 'balanced', label: 'Reference', icon: '📖' },
              { id: 'hand', label: 'Free Text', icon: '✍️' }
            ].map(lv => (
              <button
                key={lv.id}
                onClick={() => {
                  setScaffolding(lv.id as ScaffoldingLevel);
                  setSelectedBlocks([]);
                }}
                className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${
                  scaffolding === lv.id ? 'bg-amber-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="mr-2">{lv.icon}</span> {lv.label}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          {question.parts.map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-all ${i <= currentPartIndex ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'bg-slate-800'}`}></div>
          ))}
        </div>
      </div>

      <div className="flex-grow p-8 overflow-y-auto space-y-8 pb-40">
        <div className="space-y-5">
          <div className="flex justify-between items-start gap-4">
             <h2 className="text-2xl font-medium text-slate-100 serif leading-relaxed flex-grow">
              {currentPart.prompt}
            </h2>
            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl flex flex-col items-center shrink-0">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Marks</span>
               <span className="text-lg font-bold text-amber-500">{currentPart.marks}</span>
            </div>
          </div>

          {scaffolding === 'wheels' ? (
            <div className="space-y-6">
              <div className="min-h-[140px] p-6 bg-slate-900/50 border-2 border-dashed border-slate-800 rounded-[2rem] flex flex-wrap gap-3 items-start content-start">
                {selectedBlocks.length === 0 ? (
                  <span className="text-slate-600 italic serif text-lg p-2">Click blocks below to build your answer...</span>
                ) : (
                  selectedBlocks.map((block, i) => (
                    <div key={i} className="flex items-center gap-2 animate-in fade-in zoom-in duration-300">
                      <button 
                        onClick={() => removeBlockAt(i)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium border group transition-all relative ${
                        block.type === 'factor' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20' :
                        block.type === 'connector' ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20' :
                        block.type === 'bridge' ? 'bg-amber-600/20 border-amber-500 text-amber-500 font-bold hover:bg-amber-600/30' :
                        'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                      }`}>
                        {block.text}
                        <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[8px] rounded-full w-3 h-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">×</span>
                      </button>
                      {i < selectedBlocks.length - 1 && <span className="text-slate-700 font-bold">→</span>}
                    </div>
                  ))
                )}
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span> 1. EXPLANATION CONNECTORS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {bridgeBlocks.map(block => (
                      <button
                        key={block.id}
                        onClick={() => toggleBlock(block)}
                        className="px-4 py-2 rounded-xl text-xs font-bold transition-all border bg-slate-900 border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-white"
                      >
                        {block.text}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> 2. KEY SYLLABUS FACTS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPart.logicBlocks?.map(block => (
                      <button
                        key={block.id}
                        onClick={() => toggleBlock(block)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-800`}
                      >
                        {block.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : scaffolding === 'balanced' ? (
            <div className="space-y-6">
              <textarea
                value={currentAnswer}
                onChange={(e) => setUserAnswers({ ...userAnswers, [currentPart.id]: e.target.value })}
                disabled={showModelAnswer}
                placeholder="Type your response... use the facts below for reference."
                className="w-full h-48 bg-slate-900/50 border-2 border-slate-800 rounded-[2rem] p-8 text-lg text-slate-200 focus:border-amber-500/50 outline-none m3-transition resize-none serif leading-relaxed"
              />
              <div className="flex flex-wrap gap-2 opacity-60">
                {currentPart.logicBlocks?.map(block => (
                   <span key={block.id} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[10px] text-slate-500 font-bold uppercase">{block.text}</span>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative">
              <textarea
                value={currentAnswer}
                onChange={(e) => setUserAnswers({ ...userAnswers, [currentPart.id]: e.target.value })}
                disabled={showModelAnswer}
                placeholder="Write your answer. Remember to Identify, Describe, and Explain."
                className="w-full h-80 bg-slate-900/50 border-2 border-slate-800 rounded-[2rem] p-8 text-lg text-slate-200 focus:border-amber-500/50 outline-none m3-transition resize-none serif leading-relaxed"
              />
            </div>
          )}

          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800/50">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] flex items-center">
                <span className="mr-3 h-px w-6 bg-slate-800"></span> Word Connection Tracker
              </h4>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${usedLinkingWords.length > 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                {usedLinkingWords.length} Detected
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {linkingWords.map(word => {
                const isUsed = currentAnswer.toLowerCase().includes(word.toLowerCase());
                return (
                  <span 
                    key={word} 
                    className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-tight border m3-transition ${
                      isUsed 
                        ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]' 
                        : 'bg-slate-950 border-slate-800 text-slate-600 opacity-50'
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {showModelAnswer && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10">
             <div className="bg-gradient-to-br from-cyan-900/20 to-slate-900 border border-cyan-500/30 rounded-[3rem] p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div className="relative z-10">
                   <h3 className="text-cyan-400 font-black text-[11px] uppercase tracking-[0.4em] mb-4">EXAMINER ANALYSIS</h3>
                   <p className="text-slate-300 text-xl leading-relaxed serif italic">
                      High marks require linking the main factor to the final outcome. Your response used <span className="text-amber-400 font-bold">{usedLinkingWords.length}</span> connecting words. WSET markers award marks for showing the cause-and-effect relationship.
                   </p>
                </div>
             </div>

            {grading[currentPart.id]?.loading ? (
              <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 flex flex-col items-center gap-5">
                <div className="h-12 w-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.4em]">Examiner is marking your answer...</p>
              </div>
            ) : (
              <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none">
                   <span className="text-[10rem] font-bold text-white serif italic">{grading[currentPart.id]?.score}</span>
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-amber-500 font-black text-[11px] uppercase tracking-[0.3em]">MARKING REPORT</h3>
                    <div className="text-4xl font-black text-white tabular-nums serif italic">
                      {grading[currentPart.id]?.score} 
                      <span className="text-slate-700 text-xl font-medium"> / {currentPart.marks}</span>
                      <span className={`ml-4 text-xs px-2 py-1 rounded uppercase tracking-widest align-middle ${
                        currentPercentage >= 85 ? 'bg-cyan-500/20 text-cyan-400' :
                        currentPercentage >= 70 ? 'bg-amber-500/20 text-amber-400' :
                        currentPercentage >= 55 ? 'bg-blue-500/20 text-blue-400' :
                        'bg-rose-500/20 text-rose-400'
                      }`}>
                        {currentPercentage >= 85 ? 'Distinction' : currentPercentage >= 70 ? 'Merit' : currentPercentage >= 55 ? 'Pass' : 'Below Pass'}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-100 text-lg leading-relaxed italic border-l-4 border-amber-500 pl-8 serif py-2">{grading[currentPart.id]?.feedback}</p>
                </div>
              </div>
            )}

            <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 space-y-8">
              <h3 className="text-emerald-500 font-black text-[11px] uppercase tracking-[0.3em]">IDEAL EXAM ANSWER</h3>
              <p className="text-slate-100 text-xl md:text-2xl leading-relaxed serif italic tracking-tight">{currentPart.modelAnswer}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-8 bg-slate-900/95 backdrop-blur-2xl border-t border-slate-800 fixed bottom-0 left-0 right-0 max-w-3xl mx-auto z-20">
        {!showModelAnswer ? (
          <button
            onClick={handleGrade}
            disabled={!isDemoMode && currentAnswer.length < 5}
            className="w-full bg-amber-600 disabled:bg-slate-800 disabled:text-slate-600 text-white font-bold py-6 rounded-[2rem] text-xl shadow-2xl m3-transition hover:bg-amber-500 active:scale-[0.98] flex items-center justify-center gap-4"
          >
            <span>SUBMIT TO EXAMINER</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        ) : (
          <button
            onClick={nextPart}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-6 rounded-[2rem] text-xl shadow-2xl m3-transition active:scale-[0.98] flex items-center justify-center gap-4"
          >
            <span>{currentPartIndex === question.parts.length - 1 ? 'FINISH PRACTICE' : 'PROCEED TO NEXT PART'}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </button>
        )}
      </div>
    </div>
  );
};
