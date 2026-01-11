
// Added React to the import to fix the "Cannot find namespace 'React'" error.
import React, { useMemo, useState } from 'react';
import { UserAnswerRecord, UserStats, Tier } from '../types';
import { QUESTIONS } from '../data/questions';
import { WRITTEN_QUESTIONS } from '../data/writtenQuestions';
import { User } from 'firebase/auth';

interface DashboardProps {
  progress: Record<string, UserAnswerRecord>;
  onStartRun: () => void;
  onStartWritten: (questionId: string) => void;
  isDemoMode: boolean;
  onToggleDemo: () => void;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  progress, 
  onStartRun, 
  onStartWritten, 
  isDemoMode, 
  onToggleDemo,
  user,
  onLogin,
  onLogout
}) => {
  const [clickCount, setClickCount] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);

  const stats: UserStats = useMemo(() => {
    const totalBank = QUESTIONS.length;
    const answeredRecords = (Object.values(progress) as UserAnswerRecord[]).filter(r => !r.questionId.startsWith('swq_'));
    
    // "Mastered" remains strict for the specific stat (reps >= 3)
    const masteredCount = answeredRecords.filter(r => r.repetitions >= 3 && r.isCorrect).length;
    // "Correct" tracks any question answered correctly at least once
    const correctCount = answeredRecords.filter(r => r.isCorrect).length;
    
    const heatmap: Record<string, { total: number; correct: number }> = {};
    QUESTIONS.forEach(q => {
      if (!heatmap[q.region]) heatmap[q.region] = { total: 0, correct: 0 };
      heatmap[q.region].total++;
      if (progress[q.id]?.isCorrect) heatmap[q.region].correct++;
    });

    return {
      totalQuestions: totalBank,
      correctAnswers: correctCount,
      coveragePercentage: Math.round((correctCount / totalBank) * 100) || 0,
      regionHeatmap: heatmap,
      streak: masteredCount
    };
  }, [progress]);

  const writtenMastery = useMemo(() => {
    const totalParts = WRITTEN_QUESTIONS.reduce((a, b) => a + b.parts.length, 0);
    const completedParts = Object.keys(progress).filter(id => id.includes('swq_') && progress[id].isCorrect).length;
    return {
      completed: completedParts,
      total: totalParts,
      isPerfect: completedParts === totalParts
    };
  }, [progress]);

  const tierStats = useMemo(() => {
    return [Tier.Tier1, Tier.Tier2, Tier.Tier3, Tier.Tier4].map(t => {
      const qsAtTier = QUESTIONS.filter(q => q.tier === t);
      const passedAtTier = qsAtTier.filter(q => {
        const p = progress[q.id];
        return p && p.isCorrect;
      }).length;
      return { 
        tier: t, 
        label: t === Tier.Tier1 ? 'Pass' : t === Tier.Tier2 ? 'Merit' : t === Tier.Tier3 ? 'Distinction' : 'Expert',
        percentage: Math.round((passedAtTier / qsAtTier.length) * 100) || 0 
      };
    });
  }, [progress]);

  const isUltimateMaster = stats.streak === stats.totalQuestions && writtenMastery.isPerfect;

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      onToggleDemo();
      setClickCount(0);
    }
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 space-y-16 pb-48 min-h-screen transition-colors duration-1000 ${isUltimateMaster ? 'bg-slate-900 border-x border-cyan-500/20 shadow-[0_0_100px_rgba(34,211,238,0.05)]' : 'bg-slate-950'}`}>
      
      {/* Auth Bar */}
      <div className="flex justify-end pt-2">
        {user ? (
          <button onClick={onLogout} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>{user.displayName?.split(' ')[0] || 'User'} (Sign Out)</span>
          </button>
        ) : (
          <button 
            onClick={onLogin} 
            className="flex items-center gap-3 bg-white hover:bg-slate-200 text-slate-900 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg active:scale-95"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span>Sign in with Google</span>
          </button>
        )}
      </div>

      {/* Ultimate Mastery Certificate Overlay */}
      {showCertificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md animate-in zoom-in duration-500">
           <div className="bg-gradient-to-br from-slate-100 to-white p-1 rounded-3xl shadow-[0_0_80px_rgba(255,255,255,0.2)] max-w-2xl w-full">
              <div className="bg-white border-[12px] border-double border-slate-200 rounded-3xl p-12 text-center space-y-8 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
                 <div className="relative z-10">
                    <span className="text-slate-400 text-[11px] font-black uppercase tracking-[0.5em]">The Vintner Guild</span>
                    <h3 className="text-5xl font-black text-slate-900 serif italic mt-4 mb-2">Certification of Mastery</h3>
                    <p className="text-slate-500 font-medium tracking-tight border-t border-slate-100 pt-8 max-w-md mx-auto">
                       This acknowledges that the candidate has successfully traversed the Vintner's Gauntlet, achieving Distinction-level logic across all 233+ syllabus data points.
                    </p>
                    <div className="my-12 flex justify-center">
                       <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center shadow-xl ring-8 ring-amber-100 animate-bounce">
                          <span className="text-4xl">🍷</span>
                       </div>
                    </div>
                    <div className="flex justify-between items-end border-t border-slate-100 pt-8 opacity-60">
                       <div className="text-left">
                          <span className="block text-[10px] uppercase font-bold text-slate-400">Status</span>
                          <span className="text-slate-800 font-black text-sm uppercase">Exam Ready</span>
                       </div>
                       <div className="text-right">
                          <span className="block text-[10px] uppercase font-bold text-slate-400">Date</span>
                          <span className="text-slate-800 font-black text-sm uppercase">{new Date().toLocaleDateString()}</span>
                       </div>
                    </div>
                 </div>
              </div>
              <button 
                 onClick={() => setShowCertificate(false)}
                 className="w-full py-6 text-white bg-slate-800 hover:bg-slate-700 font-bold rounded-b-3xl transition-colors uppercase tracking-[0.2em] text-xs"
              >
                 Return to Hall of Fame
              </button>
           </div>
        </div>
      )}

      <header className="text-center py-8 relative">
        {isUltimateMaster && (
          <div className="absolute inset-0 flex items-center justify-center -z-10 blur-3xl opacity-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        )}
        <h1 
          onClick={handleSecretClick}
          className={`text-5xl md:text-7xl font-bold mb-4 tracking-tighter serif cursor-pointer select-none transition-all duration-700 ${isUltimateMaster ? 'text-white' : 'text-amber-500'}`}
        >
          {isUltimateMaster ? "GAUNTLET CONQUERED" : "VINTNER'S GAUNTLET"}
          {isDemoMode && <span className="text-[10px] align-middle ml-2 text-emerald-500 font-black animate-pulse">DEV</span>}
        </h1>
        <p className={`text-[11px] uppercase tracking-[0.4em] font-bold transition-colors ${isUltimateMaster ? 'text-cyan-400' : 'text-slate-500'}`}>
          {isUltimateMaster ? "VINTNER ELITE STATUS ACHIEVED" : "WSET LEVEL 3 MASTERY ENGINE"}
        </p>
      </header>

      {/* Main Mastery Progress Card */}
      <div className={`border rounded-[3rem] p-12 shadow-2xl relative overflow-hidden transition-all duration-1000 ${isUltimateMaster ? 'bg-slate-800 border-cyan-500/50' : 'bg-slate-900 border-slate-800'}`}>
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[14rem] font-bold text-white leading-none tracking-tighter serif">{stats.coveragePercentage}</span>
        </div>
        
        <div className="relative z-10 space-y-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className={`text-[12px] font-bold uppercase tracking-[0.25em] transition-colors ${isUltimateMaster ? 'text-cyan-400' : 'text-slate-400'}`}>
                {isUltimateMaster ? "Ultimate Logic Secured" : "Protocol Coverage"}
              </h2>
              <div className="text-8xl font-black text-white tracking-tighter serif">{stats.coveragePercentage}%</div>
            </div>
            
            <div className="grid grid-cols-2 gap-5 w-full md:w-auto">
              <MiniStat label="Seen" value={Object.keys(progress).filter(k => !k.startsWith('swq_')).length} total={QUESTIONS.length} />
              <MiniStat label="Mastered" value={stats.streak} total={QUESTIONS.length} isCyan={isUltimateMaster} />
            </div>
          </div>

          <div className="space-y-4 bg-black/40 p-6 rounded-[2rem] border border-white/5 shadow-inner">
             <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className={isUltimateMaster ? 'text-cyan-400' : 'text-amber-500'}>Your Progress</span>
                <span className="text-purple-400">{isUltimateMaster ? "Proctor's Approval ✓" : "Lucy (Ghost) 75% 👻"}</span>
             </div>
             <div className="h-4 w-full bg-slate-800 rounded-full relative overflow-hidden shadow-inner">
                {!isUltimateMaster && (
                  <div className="absolute top-0 left-0 h-full bg-purple-500/20 w-[75%] transition-all duration-1000 border-r-2 border-purple-500 animate-pulse"></div>
                )}
                <div 
                  className={`absolute top-0 left-0 h-full transition-all duration-1000 ${isUltimateMaster ? 'bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.8)]' : 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]'}`} 
                  style={{ width: `${stats.coveragePercentage}%` }}
                ></div>
             </div>
          </div>
        </div>
      </div>

      {/* Syllabus Scaffolding (Tier Breakdown) */}
      <section className="space-y-8">
        <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.5em]">Syllabus Scaffolding</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {tierStats.map(tier => (
            <div key={tier.tier} className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 relative overflow-hidden group hover:border-amber-500/30 transition-colors">
              <div className="flex justify-between items-center relative z-10">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{tier.label}</span>
                <span className="text-lg font-black text-white">{tier.percentage}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden relative z-10">
                <div 
                  className={`h-full transition-all duration-1000 ${tier.percentage === 100 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                  style={{ width: `${tier.percentage}%` }}
                ></div>
              </div>
              <div className="absolute -bottom-2 -right-2 opacity-[0.05] pointer-events-none select-none group-hover:opacity-10 transition-opacity">
                <span className="text-6xl font-black italic">T{tier.tier}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge Atlas (Region Heatmap) */}
      <section className="space-y-8">
        <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.5em]">Knowledge Atlas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(stats.regionHeatmap).map(([region, data]) => {
            const perc = Math.round((data.correct / data.total) * 100);
            const isEmerald = perc === 100;
            return (
              <div key={region} className={`p-6 rounded-3xl border m3-transition min-h-[140px] flex flex-col justify-between relative overflow-hidden ${isEmerald ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.05)]' : 'bg-slate-900 border-slate-800'}`}>
                <div className="flex justify-between items-start">
                   <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{region}</div>
                   {isEmerald && <span className="text-emerald-500 text-[10px] animate-pulse">●</span>}
                </div>
                
                <div className="flex-grow flex items-center justify-center">
                   <div className="text-5xl font-black text-white serif italic tracking-tighter">{perc}%</div>
                </div>

                <div className="flex justify-end mt-2">
                   <div className="text-[11px] text-slate-600 font-bold uppercase tracking-tighter">{data.correct} / {data.total}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Written Section with Marks */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
           <h3 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.5em]">Written Logic Gauntlet</h3>
           <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest border ${writtenMastery.isPerfect ? 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
              {writtenMastery.completed} / {writtenMastery.total} Secured
           </span>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {WRITTEN_QUESTIONS.map(wq => {
            const partMasteryCount = wq.parts.filter(p => progress[`${wq.id}_${p.id}`]?.isCorrect).length;
            const isCompleted = partMasteryCount === wq.parts.length;
            return (
              <button
                key={wq.id}
                onClick={() => onStartWritten(wq.id)}
                className={`w-full text-left p-8 rounded-[2.5rem] group border m3-transition flex items-center justify-between ${isCompleted ? 'bg-cyan-900/10 border-cyan-500/30 shadow-[0_0_25px_rgba(34,211,238,0.05)]' : 'bg-slate-900 border-slate-800 hover:border-amber-500/50'}`}
              >
                <div className="space-y-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isCompleted ? 'text-cyan-500' : 'text-slate-500'}`}>{wq.category}</span>
                  <h4 className={`text-xl font-bold serif group-hover:text-white transition-colors ${isCompleted ? 'text-cyan-100' : 'text-slate-200'}`}>{wq.title}</h4>
                  <p className="text-slate-500 text-sm font-medium">{partMasteryCount}/{wq.parts.length} Distinction Logic Chains</p>
                </div>
                <div className={`p-4 rounded-3xl transition-all ${isCompleted ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-amber-500 group-hover:bg-amber-600 group-hover:text-white'}`}>
                  {isCompleted ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Start Button Container */}
      <div className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent z-30 pointer-events-none">
        <div className="max-w-2xl mx-auto pointer-events-auto">
          <button 
            onClick={onStartRun}
            className={`w-full font-bold py-7 rounded-[2rem] text-2xl shadow-2xl m3-transition transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-6 ${isUltimateMaster ? 'bg-cyan-600 hover:bg-cyan-500 text-white' : 'bg-amber-600 hover:bg-amber-500 text-white'}`}
          >
            <span className="serif italic">{isUltimateMaster ? "START MOCK EXAM" : "ENTER MCQ GAUNTLET"}</span>
            <span className="bg-black/30 px-5 py-2 rounded-2xl text-[14px] font-black tracking-tight uppercase">
              {isUltimateMaster ? "50 Questions" : "20 Protocols"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Fixed the missing "React" namespace error by importing React at the top.
const MiniStat: React.FC<{ label: string; value: number; total: number; isCyan?: boolean }> = ({ label, value, total, isCyan }) => (
  <div className={`p-6 rounded-[2rem] border text-center min-w-[120px] shadow-inner transition-all duration-1000 ${isCyan ? 'bg-cyan-950/20 border-cyan-500/20' : 'bg-black/30 border-white/5'}`}>
    <div className={`text-3xl font-black tracking-tighter serif ${isCyan ? 'text-cyan-400' : 'text-white'}`}>{value}<span className="text-slate-600 text-sm font-medium ml-0.5">/{total}</span></div>
    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-2">{label}</div>
  </div>
);
