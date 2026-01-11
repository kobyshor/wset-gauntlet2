
import React, { useState, useEffect } from 'react';
import { UserAnswerRecord, WrittenQuestion } from './types';
import { Dashboard } from './components/Dashboard';
import { MasteryRun } from './components/MasteryRun';
import { WrittenSession } from './components/WrittenSession';
import { WRITTEN_QUESTIONS } from './data/writtenQuestions';
import { auth, loadUserData, saveUserData, loginWithGoogle, logoutUser } from './services/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

const STORAGE_KEY = 'vintners_gauntlet_v1';

const App: React.FC = () => {
  const [view, setView] = useState<'dashboard' | 'run' | 'written'>('dashboard');
  const [activeWrittenId, setActiveWrittenId] = useState<string | null>(null);
  const [progress, setProgress] = useState<Record<string, UserAnswerRecord>>({});
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [authError, setAuthError] = useState<{ type: 'domain' | 'general', message: string, detail?: string } | null>(null);

  // 1. Listen for Auth State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setAuthError(null); 
      
      if (currentUser) {
        // User just logged in, try to load cloud data
        const cloudData = await loadUserData(currentUser.uid);
        if (cloudData) {
          if (Object.keys(cloudData).length > 0) {
            setProgress(cloudData);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudData)); 
          } else {
            await saveUserData(currentUser.uid, progress);
          }
        } else {
           await saveUserData(currentUser.uid, progress);
        }
      } else {
        // User logged out
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          try {
            setProgress(JSON.parse(saved));
          } catch (e) { console.error(e); }
        }
      }
      setLoadingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  // 2. Initial Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const localData = JSON.parse(saved);
        if (!user) {
          setProgress(localData);
        }
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, []);

  const saveProgress = (newProgress: Record<string, UserAnswerRecord>) => {
    setProgress(newProgress);
    
    // Always save to local
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    
    // If logged in, save to Cloud
    if (user) {
      saveUserData(user.uid, newProgress);
    }
  };

  const handleRunComplete = (newProgress: Record<string, UserAnswerRecord>) => {
    saveProgress(newProgress);
    setView('dashboard');
    window.scrollTo(0, 0);
  };

  const handleWrittenProgress = (id: string, score: number) => {
    const existing = progress[id] || {
      questionId: id,
      lastAnsweredAt: 0,
      easeFactor: 2.5,
      interval: 0,
      repetitions: 0,
      isCorrect: false,
      seenCount: 0
    };

    const updated = {
      ...existing,
      lastAnsweredAt: Date.now(),
      isCorrect: score >= 80,
      seenCount: existing.seenCount + 1,
      repetitions: Math.max(existing.repetitions, score === 100 ? 5 : 1)
    };

    saveProgress({ ...progress, [id]: updated });
  };

  const startWritten = (id: string) => {
    setActiveWrittenId(id);
    setView('written');
  };

  const toggleDemoMode = () => {
    setIsDemoMode(prev => !prev);
  };

  const activeWrittenQuestion = WRITTEN_QUESTIONS.find(q => q.id === activeWrittenId);

  const resetProgress = () => {
    if (window.confirm("Are you sure? This will wipe all memory progress.")) {
      setProgress({});
      localStorage.removeItem(STORAGE_KEY);
      if (user) saveUserData(user.uid, {});
    }
  };

  const getCleanDomain = () => {
    let hostname = window.location.hostname;
    if (!hostname) {
        let href = window.location.href;
        if (href.startsWith('blob:')) {
            href = href.replace('blob:', '');
        }
        try {
            const url = new URL(href);
            hostname = url.hostname;
        } catch (e) {
            hostname = href;
        }
    }
    return hostname;
  };

  // Auth Handlers
  const handleLogin = async () => {
    setAuthError(null);
    try {
      await loginWithGoogle();
    } catch (e: any) {
      console.error("Login attempt failed:", e);
      
      if (e.code === 'auth/unauthorized-domain' || e.message?.includes('auth/unauthorized-domain')) {
        const cleanDomain = getCleanDomain();

        setAuthError({ 
          type: 'domain', 
          message: cleanDomain,
          detail: window.location.href
        });
      } else {
        setAuthError({ 
          type: 'general', 
          message: e.message || "Unknown error" 
        });
      }
    }
  };

  const handleLogout = async () => {
    if (window.confirm("Log out? Your local data will remain on this device.")) {
      await logoutUser();
    }
  };

  if (loadingAuth && Object.keys(progress).length === 0) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-amber-500">Loading your vintage...</div>;
  }

  return (
    <div className="min-h-screen relative">
      {/* Error Banner for Auth Issues */}
      {authError && (
        <div className="bg-rose-900 border-b border-rose-500 p-4 sticky top-0 z-[100] shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="text-rose-100 flex-1">
                {authError.type === 'domain' ? (
                  <>
                    <p className="font-bold text-lg mb-1 flex items-center gap-2">
                      <span>⚠️</span> Configuration Required
                    </p>
                    <p className="text-sm opacity-90 mb-3">
                      This domain is not authorized by Firebase. Please add this domain to your Firebase Console (Authentication &gt; Settings &gt; Authorized Domains).
                    </p>
                    <div className="flex flex-col gap-2 bg-black/30 p-3 rounded font-mono text-xs mb-3">
                      <div className="flex items-center gap-2">
                          <span className="text-rose-300">Domain to add:</span>
                          <strong className="text-white select-all bg-rose-950/50 px-2 py-0.5 rounded">{authError.message}</strong>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="font-bold">Login Error</p>
                    <p className="text-sm">{authError.message}</p>
                  </>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <button 
                  onClick={() => setAuthError(null)}
                  className="px-4 py-2 bg-rose-800 hover:bg-rose-700 rounded text-sm font-bold text-white transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {view === 'dashboard' && (
        <div className="pb-10">
          <Dashboard 
            progress={progress} 
            onStartRun={() => setView('run')}
            onStartWritten={startWritten}
            isDemoMode={isDemoMode}
            onToggleDemo={toggleDemoMode}
            user={user}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />
          <div className="max-w-4xl mx-auto px-4 mt-8 flex flex-col items-center gap-4 opacity-30 hover:opacity-100 transition-opacity">
            <button 
              onClick={resetProgress}
              className="text-xs text-rose-500 underline uppercase tracking-tighter"
            >
              Reset Knowledge Graph
            </button>
            
            <div className="flex items-center gap-2">
               {isDemoMode && (
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">
                  Master Override Active
                </span>
              )}
            </div>

            {/* Always visible debug for domain */}
            {!user && (
              <div className="text-[9px] text-slate-700 font-mono text-center">
                Detected Domain: {getCleanDomain() || "Unknown"}
              </div>
            )}
          </div>
        </div>
      )}
      
      {view === 'run' && (
        <MasteryRun 
          progress={progress} 
          onComplete={handleRunComplete} 
          onExit={() => setView('dashboard')}
          isDemoMode={isDemoMode}
        />
      )}

      {view === 'written' && activeWrittenQuestion && (
        <WrittenSession 
          question={activeWrittenQuestion}
          onExit={() => setView('dashboard')}
          onSaveProgress={handleWrittenProgress}
          isDemoMode={isDemoMode}
        />
      )}
    </div>
  );
};

export default App;
