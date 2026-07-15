import React, { useEffect, useState } from 'react';
import { useJourneyStore } from './store/journeyStore.ts';
import mockJourney from '../../../content/journeys/how-others-experience-me.json';
import { RankedSelection } from '@mindprint/shared-types';
import { db } from './data/db.ts';
import '@mindprint/ui/src/index.css';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { generateQuestionPool } from '@mindprint/assessment-engine';

const fullJourney = {
  ...mockJourney,
  questions: [...mockJourney.questions, ...generateQuestionPool()]
};

const ShareCard = ({ result }: { result: any }) => {
  const [copied, setCopied] = useState(false);

  const svgString = `<svg width="320" height="200" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="background:#161616; font-family:sans-serif; border: 1.5px solid #cf9f3d; border-radius:12px;">
    <rect width="100%" height="100%" fill="#161616"/>
    <text x="20" y="35" fill="#cf9f3d" font-size="16" font-weight="bold" letter-spacing="1">MINDPRINT</text>
    <text x="20" y="52" fill="#88898c" font-size="10">how others experience me</text>
    <text x="20" y="90" fill="#f5f5f5" font-size="14" font-weight="bold">${result.primaryArchetype?.name || 'Explorer'}</text>
    <text x="20" y="110" fill="#cfd1d4" font-size="10">${result.primaryArchetype?.description ? result.primaryArchetype.description.substring(0, 40) + '...' : ''}</text>
    ${result.dimensions.map((dim: any, i: number) => `
      <text x="180" y="${80 + i * 35}" fill="#cfd1d4" font-size="10" font-weight="bold">${dim.name}</text>
      <text x="300" y="${80 + i * 35}" fill="#cf9f3d" font-size="10" text-anchor="end">${dim.score}%</text>
      <rect x="180" y="${87 + i * 35}" width="120" height="4" fill="#0d0d0d" rx="2"/>
      <rect x="180" y="${87 + i * 35}" width="${(dim.score / 100) * 120}" height="4" fill="#cf9f3d" rx="2"/>
    `).join('')}
    <text x="20" y="180" fill="#cf9f3d" font-size="9" letter-spacing="0.5">mindprint.app</text>
  </svg>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(svgString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '16px', marginBottom: '24px', textAlign: 'center' }}>
      <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '16px' }}>Share Your Result</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: svgString }} />
      <button className="btn btn-secondary" onClick={copyToClipboard} style={{ fontSize: '0.85rem', padding: '6px 12px', border: '1px solid var(--border-card)' }}>
        {copied ? 'Copied Vector to Clipboard!' : 'Copy SVG Share Card'}
      </button>
    </div>
  );
};

const PersonalMap = ({ result }: { result: any }) => {
  const directnessDim = result.dimensions.find((d: any) => d.id === 'directness');
  const socialDim = result.dimensions.find((d: any) => d.id === 'social_energy');
  const x = directnessDim ? directnessDim.score : 50;
  const y = socialDim ? socialDim.score : 50;

  return (
    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
      <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '4px' }}>Your Personal Map</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px' }}>
        Visualizing Directness vs. Social Energy quadrants.
      </p>

      {/* 2D Quadrant Grid */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        paddingBottom: '100%', 
        background: '#0a0a0a', 
        border: '1px solid rgba(255, 255, 255, 0.05)', 
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {/* Grid Axis Lines */}
        <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
        <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', background: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Quadrant Labels */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
          <strong style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 700 }}>Socratic Connector</strong>
          <span style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.7rem', display: 'block', marginTop: '2px' }}>(Low Dir / High Soc)</span>
        </div>
        <div style={{ position: 'absolute', top: '12px', right: '12px', textAlign: 'right', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
          <strong style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 700 }}>Empathic Challenger</strong>
          <span style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.7rem', display: 'block', marginTop: '2px' }}>(High Dir / High Soc)</span>
        </div>
        <div style={{ position: 'absolute', bottom: '12px', left: '12px', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
          <strong style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 700 }}>Quiet Strategist</strong>
          <span style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.7rem', display: 'block', marginTop: '2px' }}>(Low Dir / Low Soc)</span>
        </div>
        <div style={{ position: 'absolute', bottom: '12px', right: '12px', textAlign: 'right', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
          <strong style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 700 }}>Independent Explorer</strong>
          <span style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.7rem', display: 'block', marginTop: '2px' }}>(High Dir / Low Soc)</span>
        </div>

        {/* Plot Golden Glowing Dot */}
        <div style={{
          position: 'absolute',
          left: `${x}%`,
          bottom: `${y}%`,
          width: '16px',
          height: '16px',
          background: 'var(--accent-primary)',
          borderRadius: '50%',
          transform: 'translate(-50%, 50%)',
          boxShadow: '0 0 16px 6px var(--accent-primary)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }} />
      </div>

      {/* Axis Guide */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '12px' }}>
        <span>← Less Direct</span>
        <span>More Direct →</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
        <span>↓ Less Social</span>
        <span>More Social ↑</span>
      </div>
    </div>
  );
};

const getArchetypeLikesDislikes = (archetypeId: string) => {
  switch (archetypeId) {
    case 'socratic-connector':
      return {
        like: "Diplomatic, empathetic, active listeners who ensure everyone feels included.",
        dislike: "Can seem passive-aggressive, indecisive, or hesitant to take a clear stand."
      };
    case 'independent-explorer':
      return {
        like: "Highly self-reliant, candid, efficient, and brings fresh independent ideas.",
        dislike: "Can seem cold, distant, uncollaborative, or dismissive of others' emotions."
      };
    case 'quiet-strategist':
      return {
        like: "Calm, observant, highly analytical, and offers deeply considered insights.",
        dislike: "Difficult to read, and prolonged silence can feel like critical evaluation."
      };
    case 'empathic-challenger':
      return {
        like: "Passionately honest, highly engaging, and pushes the team to grow out of care.",
        dislike: "Can be abrasive, confrontational, overwhelming, or quick to challenge."
      };
    default:
      return {
        like: "Authentic, adaptive, and highly responsive to personal surroundings.",
        dislike: "May struggle with consistency when situations change rapidly."
      };
  }
};

export default function App() {
  const {
    currentSession,
    currentQuestionId,
    responses,
    isOffline,
    isLoading,
    initializeSession,
    submitAnswer,
    navigateBack,
    completeJourney,
    setOfflineStatus
  } = useJourneyStore();

  const [deviceId] = useState(() => {
    let id = localStorage.getItem('mindprint_device_id');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('mindprint_device_id', id);
    }
    return id;
  });

  const [selectedRanks, setSelectedRanks] = useState<RankedSelection[]>([]);
  const [localResult, setLocalResult] = useState<any>(null);

  // Anonymous Account Upgrade States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUser, setRegisteredUser] = useState<string | null>(() => localStorage.getItem('mindprint_username'));
  const [upgradeError, setUpgradeError] = useState<string | null>(null);
  const [upgradeSuccess, setUpgradeSuccess] = useState(false);
  const [resultsTab, setResultsTab] = useState<'overview' | 'map' | 'history'>('overview');
  const [historySessions, setHistorySessions] = useState<any[]>([]);

  // User Login States
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  useEffect(() => {
    if (resultsTab === 'history' && registeredUser) {
      fetch(`http://localhost:3000/v1/user/sessions?username=${registeredUser}`)
        .then(res => res.json())
        .then(data => {
          if (data.sessions) setHistorySessions(data.sessions);
        })
        .catch(err => console.error('[History] Fetch failed:', err));
    }
  }, [resultsTab, registeredUser]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    try {
      let data;
      let offlineSim = false;
      try {
        const response = await fetch('http://localhost:3000/v1/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: loginUsername, password: loginPassword, deviceId }),
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || 'Login failed');
        }
        data = await response.json();
      } catch (netErr: any) {
        if (netErr.message && netErr.message.includes('Login failed')) {
          throw netErr;
        }
        console.warn('Network login failed, trying local simulation:', netErr);
        const simUsersRaw = localStorage.getItem('mindprint_simulated_users') || '[]';
        const simUsers = JSON.parse(simUsersRaw);
        const matched = simUsers.find((u: any) => u.username === loginUsername && u.password === loginPassword);
        if (!matched) {
          throw new Error('Incorrect credentials or account not found in local simulation.');
        }
        data = { username: loginUsername };
        offlineSim = true;
      }

      localStorage.setItem('mindprint_username', data.username);
      setRegisteredUser(data.username);
      setShowLoginModal(false);

      if (!offlineSim) {
        try {
          const sessRes = await fetch(`http://localhost:3000/v1/user/sessions?username=${data.username}`);
          const sessData = await sessRes.json();

          if (sessData.sessions && sessData.sessions.length > 0) {
            await db.transaction('rw', [db.journeySessions, db.localResults], async () => {
              for (const item of sessData.sessions) {
                if (item.session) {
                  await db.journeySessions.put(item.session);
                }
                if (item.result) {
                  await db.localResults.put(item.result);
                }
              }
            });

            const mostRecent = sessData.sessions[sessData.sessions.length - 1];
            if (mostRecent.session) {
              useJourneyStore.setState({ currentSession: mostRecent.session });
              if (mostRecent.result) {
                setLocalResult(mostRecent.result);
              }
            }
          }
        } catch (apiErr) {
          console.warn('Could not fetch historical sessions from API:', apiErr);
        }
      } else {
        const allSessions = await db.journeySessions.toArray();
        if (allSessions.length > 0) {
          const mostRecentSess = allSessions[allSessions.length - 1];
          useJourneyStore.setState({ currentSession: mostRecentSess });
          const mostRecentResult = await db.localResults.get(mostRecentSess.id);
          if (mostRecentResult) {
            setLocalResult(mostRecentResult);
          }
        }
      }
    } catch (err: any) {
      setLoginError(err.message);
    }
  };

  // Onboarding & Legal states
  const [onboardingStep, setOnboardingStep] = useState<number>(-2);
  const [legalConsentChecked, setLegalConsentChecked] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleRegisterUpgrade = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpgradeError(null);
    setUpgradeSuccess(false);

    try {
      let data;
      try {
        const response = await fetch('http://localhost:3000/v1/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password, deviceId }),
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || 'Upgrade failed');
        }
        data = await response.json();
      } catch (netErr: any) {
        if (netErr.message && netErr.message.includes('Upgrade failed')) {
          throw netErr;
        }
        console.warn('Network register failed, falling back to local simulation:', netErr);
        const simUsersRaw = localStorage.getItem('mindprint_simulated_users') || '[]';
        const simUsers = JSON.parse(simUsersRaw);
        if (simUsers.some((u: any) => u.username === username)) {
          throw new Error('Username already exists in local simulation');
        }
        simUsers.push({ username, password, deviceId });
        localStorage.setItem('mindprint_simulated_users', JSON.stringify(simUsers));
        data = { username };
      }

      localStorage.setItem('mindprint_username', data.username);
      setRegisteredUser(data.username);
      setUpgradeSuccess(true);
    } catch (err: any) {
      setUpgradeError(err.message);
    }
  };

  // Results Rating and Feedback States
  const [overallRating, setOverallRating] = useState(0);
  const [insightFeedbacks, setInsightFeedbacks] = useState<Record<string, 'up' | 'down'>>({});

  const handleFeedbackSubmit = async (type: 'overall' | 'insight', rating?: number, insightId?: string, feedbackText?: string) => {
    const payload = {
      sessionId: currentSession?.id || '',
      type,
      rating,
      insightId,
      feedback: feedbackText
    };

    // Queue sync operation locally for offline persistence
    const feedbackSyncOp = {
      operationId: crypto.randomUUID(),
      entityType: 'feedback' as const,
      entityId: currentSession?.id || '',
      operationType: 'upsert' as const,
      payload,
      createdAt: new Date().toISOString(),
      attemptCount: 0,
      nextAttemptAt: null,
      status: 'pending' as const
    };
    await db.syncOperations.put(feedbackSyncOp);

    // Trigger sync run
    import('./data/sync.ts').then(m => m.syncPendingOperations());
  };

  // PWA SW Register & Update prompts
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  // Custom PWA Installer prompt
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstallable(false);
    }
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`[PWA] Install choice: ${outcome}`);
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => setOfflineStatus(false);
    const handleOffline = () => setOfflineStatus(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [setOfflineStatus]);

  // Load active session or result
  useEffect(() => {
    initializeSession(deviceId);
  }, [initializeSession, deviceId]);

  // If session is completed, try to load results
  useEffect(() => {
    if (currentSession?.status === 'completed') {
      db.localResults.get(currentSession.id).then(res => {
        if (res) setLocalResult(res);
      });
    } else {
      setLocalResult(null);
    }
  }, [currentSession]);

  // Reset selected option ranks when question changes
  useEffect(() => {
    setSelectedRanks([]);
  }, [currentQuestionId]);

  if (onboardingStep === -2) {
    return (
      <div className="glass-panel animate-float animate-fade-in" style={{ 
        maxWidth: '520px', 
        margin: '80px auto', 
        padding: '45px 35px', 
        textAlign: 'center',
        border: '1px solid rgba(207, 159, 61, 0.25)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6), var(--shadow-glow)'
      }}>
        {/* Animated Glow Circle Container around the logo */}
        <div className="animate-glow-pulse" style={{ 
          width: '120px', 
          height: '120px', 
          margin: '0 auto 28px auto', 
          borderRadius: '50%', 
          background: 'rgba(207, 159, 61, 0.05)',
          border: '1px solid rgba(207, 159, 61, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px'
        }}>
          <img src="icon-512.png" alt="MindPrint Logo" style={{ width: '80px', height: '80px', borderRadius: '16px' }} />
        </div>

        <h1 style={{ 
          fontSize: '2.4rem', 
          fontWeight: 800,
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '8px',
          letterSpacing: '-0.5px'
        }}>
          MindPrint
        </h1>
        
        <p style={{ 
          color: 'var(--accent-primary)', 
          fontSize: '1rem', 
          fontWeight: 600, 
          marginBottom: '24px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          How do others experience you?
        </p>

        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.98rem', 
          lineHeight: '1.6', 
          marginBottom: '32px'
        }}>
          Discover the behavioral blindspots you cannot easily see from the inside. 
          Through 12 adaptive, situation-based questions, MindPrint maps your social presence, directness, and reflection.
        </p>

        {/* Feature Highlights Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '12px', 
          textAlign: 'left', 
          marginBottom: '35px',
          background: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '18px'
        }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-primary)' }}>✦</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}><strong>Completely Anonymous</strong> (no PII or emails collected)</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-primary)' }}>🔒</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}><strong>Local-First Storage</strong> (data is private to your device)</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-primary)' }}>🔄</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}><strong>Cross-Device Sync</strong> (restore sessions anytime)</span>
          </div>
        </div>

        <button 
          className="btn btn-primary" 
          style={{ width: '100%', padding: '16px', fontSize: '1.1rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }} 
          onClick={() => {
            localStorage.setItem('mindprint_onboarding_completed', 'true');
            setOnboardingStep(-1);
          }}
        >
          Begin Discovery
        </button>

        <div style={{ fontSize: '0.9rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>Returning user? </span>
          <span 
            onClick={() => setShowLoginModal(true)} 
            style={{ color: 'var(--accent-primary)', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline' }}
          >
            Log in to restore data
          </span>
        </div>
      </div>
    );
  }



  if (isLoading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-primary)' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Loading journey...</p>
      </div>
    );
  }

  // --- RENDERING RESULT SCREEN ---
  if (currentSession?.status === 'completed' && localResult) {
    return (
      <div className="glass-panel" style={{ maxWidth: '600px', margin: '40px auto', padding: '30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src="icon-512.png" alt="MindPrint Logo" style={{ width: '80px', height: '80px', borderRadius: '16px', marginBottom: '15px' }} />
          <h1 style={{ fontSize: '2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>
            Your MindPrint
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Persona profile results computed locally</p>
        </div>

          {/* 5-Star Accuracy Rating */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '16px', marginBottom: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box' }}>
            <p style={{ color: 'var(--text-secondary)', margin: '0 0 10px 0', fontSize: '0.9rem' }}>How accurate is your MindPrint profile?</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '1.6rem', lineHeight: 1 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star}
                  onClick={() => {
                    setOverallRating(star);
                    handleFeedbackSubmit('overall', star);
                  }}
                  style={{ 
                    cursor: 'pointer', 
                    color: star <= overallRating ? '#cf9f3d' : 'rgba(255,255,255,0.15)',
                    transition: 'color 0.2s ease'
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            {overallRating > 0 && <p style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', margin: '8px 0 0 0' }}>Thank you for your rating!</p>}
          </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '12px' }}>
          <button 
            onClick={() => setResultsTab('overview')}
            style={{
              flex: 1,
              padding: '10px',
              background: resultsTab === 'overview' ? 'rgba(207, 159, 61, 0.1)' : 'transparent',
              border: 'none',
              borderBottom: resultsTab === 'overview' ? '2px solid var(--accent-primary)' : 'none',
              color: resultsTab === 'overview' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: '4px'
            }}
          >
            Overview
          </button>
          <button 
            onClick={() => setResultsTab('map')}
            style={{
              flex: 1,
              padding: '10px',
              background: resultsTab === 'map' ? 'rgba(207, 159, 61, 0.1)' : 'transparent',
              border: 'none',
              borderBottom: resultsTab === 'map' ? '2px solid var(--accent-primary)' : 'none',
              color: resultsTab === 'map' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: '4px'
            }}
          >
            Personal Map
          </button>
          <button 
            onClick={() => setResultsTab('history')}
            style={{
              flex: 1,
              padding: '10px',
              background: resultsTab === 'history' ? 'rgba(207, 159, 61, 0.1)' : 'transparent',
              border: 'none',
              borderBottom: resultsTab === 'history' ? '2px solid var(--accent-primary)' : 'none',
              color: resultsTab === 'history' ? 'var(--accent-primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: '4px'
            }}
          >
            History
          </button>
        </div>

        {resultsTab === 'overview' && (
          <>
            {localResult.primaryArchetype && (
              <div style={{ background: 'rgba(207, 159, 61, 0.08)', border: '1px solid rgba(207, 159, 61, 0.3)', borderRadius: '14px', padding: '20px', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-primary)', fontWeight: 700 }}>Primary Archetype</span>
                <h2 style={{ fontSize: '1.6rem', marginTop: '4px', marginBottom: '8px', color: '#fff' }}>{localResult.primaryArchetype.name}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: 0 }}>{localResult.primaryArchetype.description}</p>
                {(() => {
                  const feedback = getArchetypeLikesDislikes(localResult.primaryArchetype.id);
                  return (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(207, 159, 61, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>💚 What others love</span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{feedback.like}</span>
                      </div>
                      <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.05)', paddingLeft: '12px' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--danger)', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>💔 What others dislike</span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{feedback.dislike}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {localResult.primaryArchetype && (
              <div style={{ 
                background: 'rgba(235, 94, 40, 0.08)', 
                border: '1px solid rgba(235, 94, 40, 0.3)', 
                borderRadius: '14px', 
                padding: '20px', 
                marginBottom: '24px' 
              }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#ffb703', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  ⚠️ Your Behavioral Blindspots
                </span>
                <h3 style={{ fontSize: '1.15rem', marginTop: '8px', marginBottom: '15px', color: '#fff' }}>
                  Self-Perception vs. Social Presence
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: 'rgba(0, 0, 0, 0.2)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>What you tell yourself</span>
                    <p style={{ color: '#fff', fontSize: '0.85rem', margin: '4px 0 0 0', lineHeight: '1.4' }}>
                      {localResult.primaryArchetype.id === 'socratic-connector' && "I am supportive, consensus-building, and try to guide others gently to realizations."}
                      {localResult.primaryArchetype.id === 'independent-explorer' && "I am self-reliant, highly rational, and value truth and efficiency above all."}
                      {localResult.primaryArchetype.id === 'quiet-strategist' && "I am observant, deliberate, and analyze situations deeply before offering input."}
                      {localResult.primaryArchetype.id === 'empathic-challenger' && "I am honest, direct, and challenge group ideas because I care about doing things right."}
                    </p>
                  </div>
                  <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '16px' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#ffb703', fontWeight: 600 }}>What others say about you</span>
                    <p style={{ color: '#fff', fontSize: '0.85rem', margin: '4px 0 0 0', lineHeight: '1.4' }}>
                      {localResult.primaryArchetype.id === 'socratic-connector' && "You can be passive-aggressive, indecisive, or avoid taking a clear stand to protect your image."}
                      {localResult.primaryArchetype.id === 'independent-explorer' && "You can be distant, cold, uncollaborative, or dismissive of other people's feelings."}
                      {localResult.primaryArchetype.id === 'quiet-strategist' && "You can be aloof, disapproving, or completely disengaged from the social group."}
                      {localResult.primaryArchetype.id === 'empathic-challenger' && "You can be abrasive, confrontational, overwhelming, or quick to attack other views."}
                    </p>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                  {localResult.primaryArchetype.id === 'socratic-connector' && 
                    "Because you guide conversations through indirect questions, others might misinterpret you as passive-aggressive, indecisive, or slow to make a stand. They may feel you are hiding your true opinion."}
                  {localResult.primaryArchetype.id === 'independent-explorer' && 
                    "Your frank, self-reliant approach can make others experience you as distant, uncollaborative, or overly critical. They might feel you are isolating yourself or rejecting the group."}
                  {localResult.primaryArchetype.id === 'quiet-strategist' && 
                    "Because you process interactions deeply and stay silent, others might misinterpret your quietness as critical judgment, disapproval, or complete disinterest in the social group."}
                  {localResult.primaryArchetype.id === 'empathic-challenger' && 
                    "Your combination of high honesty and high energy can make others experience you as abrasive, confrontational, or overwhelming. They may feel attacked even when you act out of care."}
                </p>
              </div>
            )}

            {localResult.secondaryArchetype && (
              <div style={{ background: 'rgba(166, 124, 30, 0.05)', border: '1px solid rgba(166, 124, 30, 0.2)', borderRadius: '14px', padding: '20px', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>Secondary Archetype</span>
                <h2 style={{ fontSize: '1.4rem', marginTop: '4px', marginBottom: '8px', color: '#fff' }}>{localResult.secondaryArchetype.name}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: 0 }}>{localResult.secondaryArchetype.description}</p>
                {(() => {
                  const feedback = getArchetypeLikesDislikes(localResult.secondaryArchetype.id);
                  return (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(166, 124, 30, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>💚 What others love</span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{feedback.like}</span>
                      </div>
                      <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.05)', paddingLeft: '12px' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--danger)', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>💔 What others dislike</span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{feedback.dislike}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#fff' }}>Your Profile Dimensions</h3>
              {localResult.dimensions.map((dim: any) => (
                <div key={dim.id} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 600 }}>{dim.name}</span>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{dim.score}%</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', position: 'relative', margin: '8px 0' }}>
                    <div style={{
                      position: 'absolute',
                      left: `${dim.score}%`,
                      top: '50%',
                      width: '14px',
                      height: '14px',
                      background: 'var(--accent-primary)',
                      borderRadius: '50%',
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 10px var(--accent-primary)',
                      zIndex: 2,
                      transition: 'left 0.5s ease-out'
                    }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px', marginBottom: '16px' }}>
                    <span>{dim.lowPole}</span>
                    <span>{dim.highPole}</span>
                  </div>
                </div>
              ))}
            </div>

            {localResult.insights.length > 0 && (
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#fff' }}>Core Insights</h3>
                {localResult.insights.map((ins: any) => (
                  <div key={ins.id} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ color: 'var(--accent-primary)', margin: 0, fontSize: '1rem' }}>{ins.title}</h4>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button 
                          onClick={() => {
                            const newInsightFeedbacks = { ...insightFeedbacks, [ins.id]: 'up' as const };
                            setInsightFeedbacks(newInsightFeedbacks);
                            handleFeedbackSubmit('insight', undefined, ins.id, 'up');
                          }}
                          style={{
                            background: insightFeedbacks[ins.id] === 'up' ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#fff',
                            padding: '4px 8px',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            transition: 'background 0.2s ease'
                          }}
                        >
                          👍
                        </button>
                        <button 
                          onClick={() => {
                            const newInsightFeedbacks = { ...insightFeedbacks, [ins.id]: 'down' as const };
                            setInsightFeedbacks(newInsightFeedbacks);
                            handleFeedbackSubmit('insight', undefined, ins.id, 'down');
                          }}
                          style={{
                            background: insightFeedbacks[ins.id] === 'down' ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#fff',
                            padding: '4px 8px',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            transition: 'background 0.2s ease'
                          }}
                        >
                          👎
                        </button>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginTop: '8px', marginBottom: 0 }}>{ins.body}</p>
                    {ins.alternativeBody && (
                      <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.85rem', color: '#ffb703' }}>
                        <strong>⚠️ Blindspot Warning:</strong> {ins.alternativeBody}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {resultsTab === 'map' && (
          <PersonalMap result={localResult} />
        )}

        {resultsTab === 'history' && (
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#fff' }}>Assessment History</h3>
            {historySessions.length === 0 ? (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>No past assessments found on server sync registries.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {historySessions.map((item, idx) => (
                  <div 
                    key={item.session.id} 
                    onClick={() => {
                      if (item.result) setLocalResult(item.result);
                      setResultsTab('overview');
                    }}
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.02)', 
                      border: '1px solid var(--border-card)', 
                      borderRadius: '12px', 
                      padding: '16px', 
                      cursor: 'pointer',
                      transition: 'border 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-card)'}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                      <span>Journey {idx + 1}</span>
                      <span>{new Date(item.session.completedAt || item.session.updatedAt).toLocaleDateString()}</span>
                    </div>
                    <h4 style={{ color: '#fff', margin: 0, fontSize: '1rem' }}>
                      {item.result?.primaryArchetype?.name || 'Explorer Profile'}
                    </h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Share Result Component */}
        <ShareCard result={localResult} />

        {/* Save Result / Log In Container */}
        <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
          {registeredUser ? (
            <p style={{ color: 'var(--success)', fontSize: '0.95rem', margin: 0 }}>
              ✓ Logged in as <strong>{registeredUser}</strong>. Your session is secured.
            </p>
          ) : (
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#fff' }}>Save Result Permanently</h3>
              <form onSubmit={handleRegisterUpgrade} style={{ marginBottom: '16px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '14px', lineHeight: '1.4' }}>
                  Choose a username and password to secure your results. We value your privacy and do NOT collect email addresses.
                </p>
                
                <div style={{ marginBottom: '12px' }}>
                  <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px 14px', background: '#0d0d0d', border: '1px solid var(--border-card)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
                <div style={{ marginBottom: '14px' }}>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px 14px', background: '#0d0d0d', border: '1px solid var(--border-card)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                {upgradeError && (
                  <p style={{ color: 'var(--danger)', fontSize: '0.85rem', marginBottom: '12px' }}>{upgradeError}</p>
                )}
                {upgradeSuccess && (
                  <p style={{ color: 'var(--success)', fontSize: '0.85rem', marginBottom: '12px' }}>Account created successfully!</p>
                )}

                <button className="btn btn-primary" type="submit" style={{ width: '100%', padding: '10px' }}>
                  Upgrade to Permanent Account
                </button>
              </form>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '10px' }}>Already registered?</p>
                <button className="btn btn-secondary" onClick={() => setShowLoginModal(true)} style={{ width: '100%', padding: '10px' }}>
                  Log In to Sync Data
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
          <button className="btn btn-secondary" style={{ flex: 1 }} onClick={async () => {
            await db.journeySessions.clear();
            await db.responses.clear();
            await db.localResults.clear();
            initializeSession(deviceId);
          }}>
            Restart Journey
          </button>
          
          <button className="btn btn-secondary" style={{ flex: 1, border: '1px solid var(--danger)', color: 'var(--danger)' }} onClick={async () => {
            if (confirm("Are you sure you want to delete all local data? This action is permanent and complies with GDPR rights.")) {
              await db.journeySessions.clear();
              await db.responses.clear();
              await db.localResults.clear();
              await db.syncOperations.clear();
              localStorage.clear();
              setOnboardingStep(-2);
              setLegalConsentChecked(false);
              setRegisteredUser(null);
            }
          }}>
            Wipe Data (GDPR)
          </button>
        </div>
      </div>
    );
  }

  // Find current question details
  const journey = fullJourney;
  const currentQuestion = journey.questions.find(q => q.id === currentQuestionId);

  // --- RENDERING QUESTION SCREENS ---
  if (currentQuestion) {
    const totalQuestions = 12;
    const answeredCount = responses.length;
    const percentProgress = Math.round((answeredCount / totalQuestions) * 100);

    const handleOptionClick = (optionId: string) => {
      if (currentQuestion.type === 'single_choice') {
        // Toggle selection for single choice
        const isSelected = selectedRanks.some(r => r.answerOptionId === optionId);
        if (isSelected) {
          setSelectedRanks([]);
        } else {
          setSelectedRanks([{ answerOptionId: optionId, rank: 1 }]);
        }
      } else {
        // Ranked choice logic: toggle selection rank
        const existingIdx = selectedRanks.findIndex(r => r.answerOptionId === optionId);
        if (existingIdx !== -1) {
          // Remove it and update remaining ranks
          const removedRank = selectedRanks[existingIdx].rank;
          const filtered = selectedRanks.filter(r => r.answerOptionId !== optionId);
          const updated = filtered.map(r => {
            if (r.rank > removedRank) {
              return { ...r, rank: r.rank - 1 };
            }
            return r;
          });
          setSelectedRanks(updated);
        } else {
          // Add rank if capacity not exceeded
          const maxSel = currentQuestion.maxSelections ?? 3;
          if (selectedRanks.length < maxSel) {
            setSelectedRanks([
              ...selectedRanks,
              { answerOptionId: optionId, rank: selectedRanks.length + 1 }
            ]);
          }
        }
      }
    };

    const isSubmitDisabled = selectedRanks.length < (currentQuestion.minSelections ?? 1);

    return (
      <div className="glass-panel" style={{ maxWidth: '600px', margin: '40px auto', width: '90%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '0.85rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>
            Question {answeredCount + 1} of {totalQuestions}
            <span 
              onClick={async () => {
                await db.journeySessions.clear();
                await db.responses.clear();
                await db.localResults.clear();
                localStorage.clear();
                setOnboardingStep(-2);
                window.location.reload();
              }}
              style={{ color: 'var(--accent-primary)', marginLeft: '12px', cursor: 'pointer', textDecoration: 'underline', fontWeight: 600 }}
            >
              Reset
            </span>
          </span>
          <span style={{ background: isOffline ? 'var(--danger)' : 'var(--success)', padding: '3px 8px', borderRadius: '20px', color: '#fff', fontSize: '0.75rem', fontWeight: 600 }}>
            {isOffline ? 'Offline Mode' : 'Online'}
          </span>
        </div>

        {/* Progress bar */}
        <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px', marginBottom: '30px', overflow: 'hidden' }}>
          <div style={{ width: `${percentProgress}%`, height: '100%', background: 'var(--accent-gradient)', borderRadius: '2px', transition: 'width 0.3s ease' }} />
        </div>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px', lineHeight: '1.4' }}>
          {currentQuestion.prompt}
        </h2>
        
        {currentQuestion.instructions && (
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
            {currentQuestion.instructions}
          </p>
        )}

        <div style={{ marginBottom: '30px' }}>
          {currentQuestion.answerOptions.map((opt: any) => {
            const rankObj = selectedRanks.find(r => r.answerOptionId === opt.id);
            const isSelected = !!rankObj;
            let className = "option-card";
            if (isSelected) {
              className += rankObj.rank === 1 ? " selected-primary" : " selected-secondary";
            }

            return (
              <div key={opt.id} className={className} onClick={() => handleOptionClick(opt.id)}>
                <span style={{ fontSize: '0.95rem', paddingRight: '12px' }}>{opt.label}</span>
                {currentQuestion.type === 'ranked_choice' && (
                  <div className="option-badge">
                    {isSelected ? rankObj.rank : ''}
                  </div>
                )}
                {currentQuestion.type === 'single_choice' && (
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: isSelected ? '2px solid var(--accent-primary)' : '2px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    flexShrink: 0
                  }}>
                    {isSelected && (
                      <div style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'var(--accent-primary)'
                      }} />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
          {answeredCount > 0 && (
            <button className="btn btn-secondary" style={{ flex: 1 }} onClick={navigateBack}>
              Back
            </button>
          )}
          {(currentQuestion.type === 'ranked_choice' || currentQuestion.type === 'single_choice') && (
            <button 
              className="btn btn-primary" 
              style={{ flex: 2 }} 
              disabled={isSubmitDisabled}
              onClick={() => submitAnswer(selectedRanks)}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }

  // --- RENDERING LAUNCH/COMPLETE SCREEN ---
  return (
    <div className="glass-panel" style={{ maxWidth: '600px', margin: '80px auto', textAlign: 'center', padding: '40px' }}>
      <img src="icon-512.png" alt="MindPrint Logo" style={{ width: '100px', height: '100px', borderRadius: '16px', marginBottom: '20px' }} />
      <h1 style={{ fontSize: '2.2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '12px' }}>
        MindPrint
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '30px', lineHeight: '1.6' }}>
        Understand the patterns in how others experience you. Fully functional offline, with secure local persistence.
      </p>

      <button className="btn btn-primary" style={{ width: '100%', padding: '14px 28px', marginBottom: isInstallable ? '12px' : '0px' }} onClick={completeJourney}>
        View Results
      </button>

      {isInstallable && (
        <button className="btn btn-secondary" style={{ width: '100%', padding: '14px 28px', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }} onClick={handleInstallClick}>
          Install MindPrint App
        </button>
      )}

      {/* PWA Update Toast */}
      {needRefresh && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--accent-primary)',
          borderRadius: '12px',
          padding: '16px 20px',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          animation: 'slideUp 0.3s ease'
        }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>New update is available!</span>
          <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={() => updateServiceWorker(true)}>
            Update
          </button>
        </div>
      )}
      {showLoginModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: '#161616', border: '1px solid var(--accent-primary)', borderRadius: '12px', padding: '24px', maxWidth: '400px', width: '90%' }}>
            <h3 style={{ color: '#fff', marginBottom: '8px' }}>Log In</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '16px' }}>Enter your username and password to restore and sync assessments.</p>
            <form onSubmit={handleLoginSubmit}>
              <div style={{ marginBottom: '12px' }}>
                <input 
                  type="text" 
                  placeholder="Username" 
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  required
                  style={{ width: '100%', padding: '10px 14px', background: '#0d0d0d', border: '1px solid var(--border-card)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  style={{ width: '100%', padding: '10px 14px', background: '#0d0d0d', border: '1px solid var(--border-card)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>
              {loginError && (
                <p style={{ color: 'var(--danger)', fontSize: '0.85rem', marginBottom: '12px' }}>{loginError}</p>
              )}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn btn-secondary" type="button" onClick={() => setShowLoginModal(false)} style={{ flex: 1 }}>Cancel</button>
                <button className="btn btn-primary" type="submit" style={{ flex: 1 }}>Log In</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
