import React, { useEffect, useState } from 'react';
import { useJourneyStore } from './store/journeyStore.ts';
import mockJourney from '../../../content/journeys/how-others-experience-me.json';
import { RankedSelection } from '@mindprint/shared-types';
import { db } from './data/db.ts';
import '@mindprint/ui/src/index.css';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { generateQuestionPool } from '@mindprint/assessment-engine';
import { TRANSLATIONS } from './data/translations.ts';

const getApiBaseUrl = () => {
  if (typeof window === 'undefined') return 'http://localhost:3000';
  const hostname = window.location.hostname;
  if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
    if (/^(192\.168\.|10\.|172\.)/.test(hostname)) {
      return `http://${hostname}:3000`;
    }
  }
  return 'http://localhost:3000';
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

const PersonalMap = ({ result, allSessions = [] }: { result: any; allSessions?: any[] }) => {
  const currentLanguage = useJourneyStore(state => state.currentLanguage);

  // Group into self-assessments vs others' feedbacks
  const selfAssessments = allSessions.filter(item => !item.session.feedbackFor);
  const feedbackAssessments = allSessions.filter(item => item.session.feedbackFor);

  // Map self-assessments to coordinates
  let selfPoints = selfAssessments.map(item => {
    const directnessDim = item.result?.dimensions?.find((d: any) => d.id === 'directness');
    const socialDim = item.result?.dimensions?.find((d: any) => d.id === 'social_energy');
    const dx = directnessDim ? directnessDim.score : 50;
    const dy = socialDim ? socialDim.score : 50;
    const date = new Date(item.session.completedAt || item.session.startedAt);
    return {
      cx: Math.round(dx * 4),
      cy: Math.round((100 - dy) * 4),
      label: date.toLocaleDateString(currentLanguage === 'tr' ? 'tr-TR' : 'en-US', { month: 'short', day: 'numeric' })
    };
  });

  // Fallback to active result if no chronological points found
  if (selfPoints.length === 0 && result) {
    const directnessDim = result.dimensions?.find((d: any) => d.id === 'directness');
    const socialDim = result.dimensions?.find((d: any) => d.id === 'social_energy');
    const dx = directnessDim ? directnessDim.score : 50;
    const dy = socialDim ? socialDim.score : 50;
    selfPoints = [{
      cx: Math.round(dx * 4),
      cy: Math.round((100 - dy) * 4),
      label: currentLanguage === 'tr' ? 'Mevcut' : 'Current'
    }];
  }

  // Map feedbacks to coordinates
  const feedbackPoints = feedbackAssessments.map((item, idx) => {
    const directnessDim = item.result?.dimensions?.find((d: any) => d.id === 'directness');
    const socialDim = item.result?.dimensions?.find((d: any) => d.id === 'social_energy');
    const dx = directnessDim ? directnessDim.score : 50;
    const dy = socialDim ? socialDim.score : 50;
    return {
      cx: Math.round(dx * 4),
      cy: Math.round((100 - dy) * 4),
      label: `${currentLanguage === 'tr' ? 'Geri Bildirim' : 'Feedback'} ${idx + 1}`
    };
  });

  // Calculate self path string
  let pathD = "";
  if (selfPoints.length > 1) {
    pathD = `M ${selfPoints[0].cx} ${selfPoints[0].cy} ` + selfPoints.slice(1).map(p => `L ${p.cx} ${p.cy}`).join(' ');
  }

  const title = currentLanguage === 'tr' ? "Davranışsal Perspektif Haritanız" : "Behavioral Perspective Map";
  const desc = currentLanguage === 'tr' 
    ? "Kendi kendinizi değerlendirmeleriniz (çizgi) ile başkalarının hakkınızdaki görüşlerini (noktalar) karşılaştırın." 
    : "Comparing your chronological self-assessments (connected path) against how others perceive you (individual dots).";

  return (
    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
      <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '4px' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '20px' }}>{desc}</p>

      {/* SVG 2D Grid Map Container */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        background: '#0a0a0a', 
        border: '1px solid rgba(255, 255, 255, 0.05)', 
        borderRadius: '8px',
        overflow: 'hidden',
        paddingBottom: '100%'
      }}>
        {/* Quadrant Labels */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', maxWidth: '42%', opacity: 0.65, fontSize: '0.65rem', fontWeight: 'bold', pointerEvents: 'none', lineHeight: '1.2', color: 'rgba(255,255,255,0.85)' }}>
          {currentLanguage === 'tr' ? "SOKRATİK BAĞLAYICI" : "SOCRATIC CONNECTOR"}<br/>
          <span style={{ fontSize: '0.55rem', opacity: 0.7 }}>(Low Dir / High Soc)</span>
        </div>
        <div style={{ position: 'absolute', top: '12px', right: '12px', maxWidth: '42%', opacity: 0.65, fontSize: '0.65rem', fontWeight: 'bold', textAlign: 'right', pointerEvents: 'none', lineHeight: '1.2', color: 'rgba(255,255,255,0.85)' }}>
          {currentLanguage === 'tr' ? "EMPATİK MEYDAN OKUYAN" : "EMPATHIC CHALLENGER"}<br/>
          <span style={{ fontSize: '0.55rem', opacity: 0.7 }}>(High Dir / High Soc)</span>
        </div>
        <div style={{ position: 'absolute', bottom: '12px', left: '12px', maxWidth: '42%', opacity: 0.65, fontSize: '0.65rem', fontWeight: 'bold', pointerEvents: 'none', lineHeight: '1.2', color: 'rgba(255,255,255,0.85)' }}>
          {currentLanguage === 'tr' ? "SESSİZ STRATEJİST" : "QUIET STRATEGIST"}<br/>
          <span style={{ fontSize: '0.55rem', opacity: 0.7 }}>(Low Dir / Low Soc)</span>
        </div>
        <div style={{ position: 'absolute', bottom: '12px', right: '12px', maxWidth: '42%', opacity: 0.65, fontSize: '0.65rem', fontWeight: 'bold', textAlign: 'right', pointerEvents: 'none', lineHeight: '1.2', color: 'rgba(255,255,255,0.85)' }}>
          {currentLanguage === 'tr' ? "BAĞIMSIZ KAŞİF" : "INDEPENDENT EXPLORER"}<br/>
          <span style={{ fontSize: '0.55rem', opacity: 0.7 }}>(High Dir / Low Soc)</span>
        </div>

        <svg viewBox="0 0 400 400" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block' }}>
          <defs>
            {/* Glow filters for self path */}
            <filter id="glow-self" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            {/* Glow filters for feedback points */}
            <filter id="glow-feedback" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            {/* Geographic thermal heatmap gradient */}
            <radialGradient id="thermal-heat" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff3b30" stopOpacity="0.45" />
              <stop offset="25%" stopColor="#ff9500" stopOpacity="0.38" />
              <stop offset="50%" stopColor="#ffcc00" stopOpacity="0.3" />
              <stop offset="75%" stopColor="#4cd964" stopOpacity="0.22" />
              <stop offset="90%" stopColor="#007aff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#007aff" stopOpacity="0" />
            </radialGradient>
            {/* Blurring layer to merge overlapping thermal pockets */}
            <filter id="thermal-blur">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          {/* Background Heatmap Layer with Thermal Blur */}
          <g id="heatmap-layer" filter="url(#thermal-blur)">
            {selfPoints.map((pt, idx) => (
              <circle key={`heat-self-${idx}`} cx={pt.cx} cy={pt.cy} r="70" fill="url(#thermal-heat)" />
            ))}
            {feedbackPoints.map((pt, idx) => (
              <circle key={`heat-feed-${idx}`} cx={pt.cx} cy={pt.cy} r="70" fill="url(#thermal-heat)" />
            ))}
          </g>

          {/* Grid Axis Lines */}
          <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="4" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="4" />

          {/* Render Feedback Assessments (Others' Perspectives - Dotted Halo) */}
          {feedbackPoints.map((pt, idx) => (
            <g key={`feedback-${idx}`}>
              <circle cx={pt.cx} cy={pt.cy} r="10" fill="rgba(46, 204, 113, 0.15)" stroke="#2ecc71" strokeWidth="1.5" strokeDasharray="2" filter="url(#glow-feedback)" />
              <circle cx={pt.cx} cy={pt.cy} r="4" fill="#2ecc71" />
            </g>
          ))}

          {/* Render Self-Assessment Chronological Connected Path Line */}
          {pathD && (
            <path d={pathD} fill="none" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" filter="url(#glow-self)" />
          )}

          {/* Render Self-Assessment Points */}
          {selfPoints.map((pt, idx) => {
            const isLatest = idx === selfPoints.length - 1;
            return (
              <g key={`self-${idx}`}>
                <circle 
                  cx={pt.cx} 
                  cy={pt.cy} 
                  r={isLatest ? 8 : 6} 
                  fill={isLatest ? "var(--accent-primary)" : "rgba(207, 159, 61, 0.7)"} 
                  stroke={isLatest ? "#fff" : "#111"} 
                  strokeWidth="1.5" 
                  filter={isLatest ? "url(#glow-self)" : "none"}
                />
                <text 
                  x={pt.cx} 
                  y={isLatest ? pt.cy - 14 : pt.cy + 16} 
                  textAnchor="middle" 
                  fill={isLatest ? "#fff" : "var(--accent-primary)"} 
                  fontSize={isLatest ? "9" : "8"} 
                  fontWeight="bold"
                >
                  {pt.label} {isLatest && selfPoints.length > 1 && `(${currentLanguage === 'tr' ? 'Son' : 'Latest'})`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '16px', fontSize: '0.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ display: 'inline-block', width: '12px', height: '12px', background: 'var(--accent-primary)', borderRadius: '50%' }}></span>
          <span style={{ color: 'var(--text-secondary)' }}>
            {currentLanguage === 'tr' ? "Kişisel Değerlendirmeler (Çizgi)" : "Self-Assessments (Connected)"}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ display: 'inline-block', width: '12px', height: '12px', background: 'rgba(46, 204, 113, 0.15)', borderRadius: '50%', border: '1.5px dashed #2ecc71' }}></span>
          <span style={{ color: 'var(--text-secondary)' }}>
            {currentLanguage === 'tr' ? "Geri Bildirimler (Noktalar)" : "Feedback (Dotted)"}
          </span>
        </div>
      </div>
    </div>
  );
};


const getArchetypeLikesDislikes = (archetypeId: string, lang: string = 'en') => {
  const data: Record<string, Record<string, { like: string, dislike: string }>> = {
    en: {
      'socratic-connector': {
        like: "Deeply collaborative, warm, consensus-oriented, and guides dialogue gently.",
        dislike: "Can seem passive-aggressive, indecisive, or hesitant to take a clear stand."
      },
      'independent-explorer': {
        like: "Highly self-reliant, candid, efficient, and brings fresh independent ideas.",
        dislike: "Can seem cold, distant, uncollaborative, or dismissive of others' emotions."
      },
      'quiet-strategist': {
        like: "Calm, observant, highly analytical, and offers deeply considered insights.",
        dislike: "Difficult to read, and prolonged silence can feel like critical evaluation."
      },
      'empathic-challenger': {
        like: "Passionately honest, highly engaging, and pushes the team to grow out of care.",
        dislike: "Can be abrasive, confrontational, overwhelming, or quick to challenge."
      }
    },
    fr: {
      'socratic-connector': {
        like: "Très collaboratif, chaleureux, orienté consensus et guide le dialogue en douceur.",
        dislike: "Peut sembler passif-agressif, indécis ou hésitant à prendre position."
      },
      'independent-explorer': {
        like: "Autonome, franc, efficace et apporte des idées indépendantes et fraîches.",
        dislike: "Peut paraître froid, distant, peu collaboratif ou méprisant envers les émotions."
      },
      'quiet-strategist': {
        like: "Calme, observateur, analytique et propose des réflexions mûrement réfléchies.",
        dislike: "Difficile à cerner, et un long silence peut être perçu comme un jugement critique."
      },
      'empathic-challenger': {
        like: "Honnête, passionné, engagé et pousse l'équipe à grandir par bienveillance.",
        dislike: "Peut être abrasif, conflictuel, écrasant ou prompt à contester."
      }
    },
    de: {
      'socratic-connector': {
        like: "Sehr kooperativ, warmherzig, konsensbewusst, lenkt Gespräche einfühlsam.",
        dislike: "Kann passiv-agressiv, unentschlossen oder zögerlich bei klaren Aussagen wirken."
      },
      'independent-explorer': {
        like: "Sehr selbstständig, offen, effizient, bringt frische unabhängige Ideen ein.",
        dislike: "Kann kühl, distanziert, unkooperativ oder gefühlsabweisend wirken."
      },
      'quiet-strategist': {
        like: "Ruhig, aufmerksam, sehr analytisch, bietet gut durchdachte Erkenntnisse.",
        dislike: "Schwer zu lesen; langes Schweigen kann wie kritische Bewertung wirken."
      },
      'empathic-challenger': {
        like: "Leidenschaftlich ehrlich, sehr engagiert, treibt das Team aus Fürsorge voran.",
        dislike: "Kann schroff, konfrontativ, erdrückend oder schnell herausfordernd sein."
      }
    },
    ru: {
      'socratic-connector': {
        like: "Стремится к сотрудничеству, теплый, дипломатичный, мягко направляет диалог.",
        dislike: "Может казаться пассивно-агрессивным, нерешительным или уклоняющимся от позиции."
      },
      'independent-explorer': {
        like: "Самодостаточный, искренний, эффективный, предлагает свежие независимые идеи.",
        dislike: "Может казаться холодным, отстраненным, несклонным к сотрудничеству или чувствам других."
      },
      'quiet-strategist': {
        like: "Спокойный, наблюдательный, аналитичный, предлагает глубокие выводы.",
        dislike: "Трудно понять; долгое молчание может восприниматься как критическая оценка."
      },
      'empathic-challenger': {
        like: "Страстно честный, вовлеченный, подталкивает команду к росту из лучших побуждений.",
        dislike: "Может казаться резким, агрессивным, подавляющим или склонным спорить."
      }
    },
    tr: {
      'socratic-connector': {
        like: "Derinden iş birlikçi, sıcak, uzlaşmacı ve diyaloğu nazikçe yönlendirir.",
        dislike: "Pasif-agresif, kararsız veya net bir duruş sergilemekte tereddütlü görünebilir."
      },
      'independent-explorer': {
        like: "Kendine son derece yeten, açık sözlü, verimli ve bağımsız fikirler sunan.",
        dislike: "Soğuk, mesafeli, iş birliğine kapalı veya başkalarının duygularını önemsemez görünebilir."
      },
      'quiet-strategist': {
        like: "Sakin, gözlemci, yüksek derecede analitik ve derin düşünülmüş fikirler sunan.",
        dislike: "Okunması zor ve uzun sessizliği eleştirel bir yargılama gibi hissettirebilir."
      },
      'empathic-challenger': {
        like: "Tutkuyla dürüst, son derece girişken ve gelişim odaklı şekilde ekibi zorlayan.",
        dislike: "Kırıcı, çatışmacı, ezici veya meydan okumaya çok hevesli görünebilir."
      }
    }
  };

  const currentLang = data[lang] ? lang : 'en';
  return data[currentLang][archetypeId] || {
    like: lang === 'tr' ? "Otantik, uyumlu ve çevresine duyarlı." : "Authentic, adaptive, and highly responsive to personal surroundings.",
    dislike: lang === 'tr' ? "Durumlar hızlı değiştiğinde tutarlılıkta zorlanabilir." : "May struggle with consistency when situations change rapidly."
  };
};

export default function App() {
  const {
    currentSession,
    currentQuestionId,
    responses,
    isOffline,
    isLoading,
    currentLanguage,
    initializeSession,
    submitAnswer,
    navigateBack,
    completeJourney,
    setOfflineStatus,
    setLanguage
  } = useJourneyStore();

  const pool = generateQuestionPool(currentLanguage);
  
  // Translate the static mockJourney questions
  const translatedQuestions = mockJourney.questions.map(q => {
    const tq = TRANSLATIONS[currentLanguage]?.questions?.[q.id];
    if (!tq) return q;
    return {
      ...q,
      prompt: tq.prompt,
      instructions: tq.instructions || q.instructions,
      answerOptions: q.answerOptions.map(opt => ({
        ...opt,
        label: tq.options?.[opt.id] || opt.label
      }))
    };
  });

  const journey = {
    ...mockJourney,
    questions: [...translatedQuestions, ...pool]
  };

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
  const [allMapSessions, setAllMapSessions] = useState<any[]>([]);

  // User Login States
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareTab, setShareTab] = useState<'app' | 'feedback'>('app');

  useEffect(() => {
    async function loadSessions() {
      try {
        // 1. Local Dexie sessions
        const localSess = await db.journeySessions.where('status').equals('completed').toArray();
        const localRes = await db.localResults.toArray();
        
        const localCombined = localSess.map(s => {
          const r = localRes.find(res => res.sessionId === s.id);
          return { session: s, result: r };
        }).filter(item => item.result);

        // 2. Fetch server sessions if registered
        let serverCombined: any[] = [];
        if (registeredUser) {
          try {
            const res = await fetch(`${getApiBaseUrl()}/v1/user/sessions?username=${registeredUser}`);
            const data = await res.json();
            if (data.sessions) {
              serverCombined = data.sessions;
              setHistorySessions(data.sessions);
            }
          } catch (netErr) {
            console.warn('[History] Remote fetch failed, using local sessions:', netErr);
          }
        }

        // 3. Merge unique by session ID
        const allSessions = [...localCombined];
        for (const item of serverCombined) {
          if (!allSessions.some(x => x.session.id === item.session.id)) {
            allSessions.push(item);
          }
        }

        // Sort chronological
        allSessions.sort((a, b) => new Date(a.session.completedAt || a.session.startedAt).getTime() - new Date(b.session.startedAt).getTime());
        setAllMapSessions(allSessions);
      } catch (err) {
        console.error('[MapSessions] Failed to load:', err);
      }
    }

    loadSessions();

    let intervalId: any;
    if (registeredUser) {
      intervalId = setInterval(loadSessions, 8000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [resultsTab, registeredUser]);

  const handleLogout = async () => {
    localStorage.removeItem('mindprint_username');
    setRegisteredUser(null);
    try {
      await db.journeySessions.clear();
      await db.responses.clear();
      await db.localResults.clear();
    } catch (dbErr) {
      console.warn('Could not clear local tables on logout:', dbErr);
    }
    window.location.reload();
  };

  const renderShareModal = () => {
    if (!showShareModal) return null;

    const feedbackUrl = `https://ozlphrt.github.io/MindPrint/?feedbackFor=${encodeURIComponent(registeredUser || 'Guest_' + deviceId.slice(0, 6))}`;
    const appUrl = "https://ozlphrt.github.io/MindPrint/";
    const activeUrl = shareTab === 'feedback' ? feedbackUrl : appUrl;

    const trTitle = shareTab === 'feedback' ? "Geri Bildirim Topla" : "Uygulamayı Paylaş";
    const enTitle = shareTab === 'feedback' ? "Collect Feedback" : "Share MindPrint";

    const trDesc = shareTab === 'feedback' 
      ? "Çevrenizdekilerin sizi nasıl algıladığını öğrenmek için bu QR kodunu taratıp anketi sizin adınıza doldurmalarını sağlayın." 
      : "Cihazlar arasında anında geçiş yapmak veya uygulamayı açmak için bu QR kodunu taratın.";
    const enDesc = shareTab === 'feedback' 
      ? "Let others scan this QR code to complete the survey on your behalf and collect data on how they think you would react." 
      : "Scan this QR code to quickly open this app on another device.";

    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3000 }}>
        <div style={{ background: '#161616', border: '1px solid var(--accent-primary)', borderRadius: '12px', padding: '24px', maxWidth: '340px', width: '90%', textAlign: 'center', boxShadow: 'var(--shadow-glow)' }}>
          
          {/* Tab Switcher */}
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '3px', marginBottom: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <button 
              onClick={() => setShareTab('app')}
              style={{
                flex: 1,
                padding: '6px 10px',
                fontSize: '0.75rem',
                fontWeight: 600,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                background: shareTab === 'app' ? 'var(--accent-primary)' : 'transparent',
                color: shareTab === 'app' ? '#121212' : 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
            >
              {currentLanguage === 'tr' ? "Uygulama" : "App"}
            </button>
            <button 
              onClick={() => setShareTab('feedback')}
              style={{
                flex: 1,
                padding: '6px 10px',
                fontSize: '0.75rem',
                fontWeight: 600,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                background: shareTab === 'feedback' ? 'var(--accent-primary)' : 'transparent',
                color: shareTab === 'feedback' ? '#121212' : 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
            >
              {currentLanguage === 'tr' ? "Geri Bildirim Al" : "Get Feedback"}
            </button>
          </div>

          <h3 style={{ color: '#fff', marginBottom: '6px', fontSize: '1.15rem', fontWeight: 700 }}>
            {currentLanguage === 'tr' ? trTitle : enTitle}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', marginBottom: '16px', lineHeight: 1.35 }}>
            {currentLanguage === 'tr' ? trDesc : enDesc}
          </p>
          
          <div style={{ background: '#fff', padding: '12px', borderRadius: '8px', display: 'inline-block', marginBottom: '16px' }}>
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(activeUrl)}`} 
              alt="QR Code" 
              style={{ width: '160px', height: '160px', display: 'block' }} 
            />
          </div>

          <button
            className="btn btn-secondary"
            style={{ width: '100%', padding: '10px' }}
            onClick={() => setShowShareModal(false)}
          >
            {currentLanguage === 'tr' ? "Kapat" : "Close"}
          </button>
        </div>
      </div>
    );
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    try {
      let data;
      let offlineSim = false;
      let response;

      try {
        response = await fetch(`${getApiBaseUrl()}/v1/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: loginUsername, password: loginPassword, deviceId }),
        });
      } catch (netErr: any) {
        console.warn('Network login connection failed, trying local simulation:', netErr);
        
        const simUsersRaw = localStorage.getItem('mindprint_simulated_users') || '[]';
        let simUsers = JSON.parse(simUsersRaw);
        const matched = simUsers.find((u: any) => 
          u.username.toLowerCase() === loginUsername.toLowerCase() && 
          u.password.toLowerCase() === loginPassword.toLowerCase()
        );
        if (!matched) {
          throw new Error('Incorrect credentials or account not found in local simulation.');
        }
        data = { username: matched.username };
        offlineSim = true;
      }

      if (!offlineSim && response) {
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || 'Login failed');
        }
        data = await response.json();
      }

      localStorage.setItem('mindprint_username', data.username);
      setRegisteredUser(data.username);
      setShowLoginModal(false);

      if (!offlineSim) {
        try {
          const sessRes = await fetch(`${getApiBaseUrl()}/v1/user/sessions?username=${data.username}`);
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
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [legalConsentChecked, setLegalConsentChecked] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const [hasCompletedSessions, setHasCompletedSessions] = useState(false);
  const [lastCompletedSession, setLastCompletedSession] = useState<any | null>(null);

  useEffect(() => {
    async function checkCompleted() {
      try {
        const completed = await db.journeySessions.where('status').equals('completed').toArray();
        if (completed.length > 0) {
          completed.sort((a, b) => new Date(b.completedAt || b.startedAt).getTime() - new Date(a.completedAt || a.startedAt).getTime());
          setHasCompletedSessions(true);
          setLastCompletedSession(completed[0]);
        } else {
          setHasCompletedSessions(false);
          setLastCompletedSession(null);
        }
      } catch (err) {
        console.warn('Could not check completed sessions:', err);
      }
    }
    checkCompleted();
  }, [currentSession]);

  const handleRegisterUpgrade = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpgradeError(null);
    setUpgradeSuccess(false);

    try {
      let data;
      let offlineSim = false;
      let response;

      try {
        response = await fetch(`${getApiBaseUrl()}/v1/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password, deviceId }),
        });
      } catch (netErr: any) {
        console.warn('Network register connection failed, falling back to local simulation:', netErr);
        const simUsersRaw = localStorage.getItem('mindprint_simulated_users') || '[]';
        const simUsers = JSON.parse(simUsersRaw);
        if (simUsers.some((u: any) => u.username === username)) {
          throw new Error('Username already exists in local simulation');
        }
        simUsers.push({ username, password, deviceId });
        localStorage.setItem('mindprint_simulated_users', JSON.stringify(simUsers));
        data = { username };
        offlineSim = true;
      }

      if (!offlineSim && response) {
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || 'Upgrade failed');
        }
        data = await response.json();
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
    const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    const isFeedbackInvitation = typeof window !== 'undefined' && !!new URLSearchParams(window.location.search).get('feedbackFor');
    const languages = [
      { code: 'en', flag: 'us', label: 'English' },
      { code: 'fr', flag: 'fr', label: 'Français' },
      { code: 'de', flag: 'de', label: 'Deutsch' },
      { code: 'ru', flag: 'ru', label: 'Русский' },
      { code: 'tr', flag: 'tr', label: 'Türkçe' },
    ];
    const currentLangObj = languages.find(l => l.code === currentLanguage) || languages[0];

    return (
      <div className="glass-panel animate-float animate-fade-in" style={{ 
        maxWidth: '430px', 
        margin: '20px auto', 
        padding: '24px', 
        textAlign: 'center',
        border: '1px solid rgba(207, 159, 61, 0.25)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6), var(--shadow-glow)'
      }}>
        {/* Language switcher & Signed in status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', position: 'relative' }}>
          {registeredUser ? (
            <span 
              onClick={handleLogout}
              title={currentLanguage === 'tr' ? "Çıkış Yap" : "Log Out"}
              style={{ fontSize: '0.8rem', color: 'var(--success)', fontWeight: 600, cursor: 'pointer' }}
            >
              👤 {registeredUser}
            </span>
          ) : (
            <div />
          )}
          
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            style={{
              background: '#161616',
              border: '1.5px solid rgba(207, 159, 61, 0.4)',
              borderRadius: '8px',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              color: '#fff',
              outline: 'none'
            }}
          >
            <img 
              src={`https://flagcdn.com/w40/${currentLangObj.flag}.png`} 
              alt={currentLangObj.label} 
              style={{ width: '16px', height: '11px', borderRadius: '1px', objectFit: 'cover' }} 
            />
            <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>▼</span>
          </button>

          {isLangOpen && (
            <div style={{
              position: 'absolute',
              top: '32px',
              right: 0,
              background: '#161616',
              border: '1px solid rgba(207, 159, 61, 0.3)',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
              zIndex: 100,
              padding: '4px 0',
              minWidth: '110px'
            }}>
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setIsLangOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 10px',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease',
                    background: currentLanguage === lang.code ? 'rgba(207, 159, 61, 0.1)' : 'transparent',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(207, 159, 61, 0.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = currentLanguage === lang.code ? 'rgba(207, 159, 61, 0.1)' : 'transparent'}
                >
                  <img 
                    src={`https://flagcdn.com/w40/${lang.flag}.png`} 
                    alt={lang.label} 
                    style={{ width: '16px', height: '11px', borderRadius: '1px', objectFit: 'cover' }} 
                  />
                  <span style={{ fontSize: '0.8rem', color: '#fff' }}>{lang.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Feedback Mode Banner */}
        {(() => {
          const queryParams = new URLSearchParams(window.location.search);
          const feedbackFor = queryParams.get('feedbackFor');
          if (!feedbackFor) return null;
          return (
            <div style={{
              background: 'rgba(207, 159, 61, 0.1)',
              border: '1px solid rgba(207, 159, 61, 0.3)',
              borderRadius: '8px',
              padding: '10px 14px',
              marginBottom: '16px',
              textAlign: 'left',
              fontSize: '0.8rem',
              color: 'var(--accent-primary)',
              lineHeight: 1.35
            }}>
              <strong>📝 {currentLanguage === 'tr' ? "Geri Bildirim Modu" : "Feedback Mode"}:</strong>{' '}
              {currentLanguage === 'tr' 
                ? `Bu testi ${feedbackFor} adlı kullanıcının davranışlarını değerlendirmek için çözüyorsunuz.` 
                : `You are answering this survey as you perceive ${feedbackFor} would behave.`}
            </div>
          );
        })()}

        {/* Animated Glow Circle Logo */}
        <div className="animate-glow-pulse" style={{ 
          width: '60px', 
          height: '60px', 
          margin: '0 auto 12px auto', 
          borderRadius: '50%', 
          background: 'rgba(207, 159, 61, 0.05)',
          border: '1px solid rgba(207, 159, 61, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px'
        }}>
          <img src="icon-512.png" alt="MindPrint Logo" style={{ width: '40px', height: '40px', borderRadius: '8px' }} />
        </div>

        <h1 style={{ 
          fontSize: '1.8rem', 
          fontWeight: 800,
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '2px',
          letterSpacing: '-0.5px'
        }}>
          MindPrint
        </h1>
        
        <p style={{ 
          color: 'var(--accent-primary)', 
          fontSize: '0.8rem', 
          fontWeight: 600, 
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {t.welcomeSubtitle}
        </p>

        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.85rem', 
          lineHeight: '1.4', 
          marginBottom: '16px'
        }}>
          {t.welcomeDesc}
        </p>

        {/* Feature Highlights Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '8px', 
          textAlign: 'left', 
          marginBottom: '18px',
          background: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
          padding: '12px'
        }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem' }}>✦</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
              {t.anonymous.includes(' (') ? (
                <>
                  <strong>{t.anonymous.split(' (')[0]}</strong> ({t.anonymous.split(' (')[1]}
                </>
              ) : (
                <strong>{t.anonymous}</strong>
              )}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem' }}>🔒</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
              {t.localFirst.includes(' (') ? (
                <>
                  <strong>{t.localFirst.split(' (')[0]}</strong> ({t.localFirst.split(' (')[1]}
                </>
              ) : (
                <strong>{t.localFirst}</strong>
              )}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem' }}>🔄</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
              {t.crossDevice.includes(' (') ? (
                <>
                  <strong>{t.crossDevice.split(' (')[0]}</strong> ({t.crossDevice.split(' (')[1]}
                </>
              ) : (
                <strong>{t.crossDevice}</strong>
              )}
            </span>
          </div>
        </div>

        {hasCompletedSessions && !isFeedbackInvitation && (
          <button 
            className="btn btn-secondary" 
            style={{ 
              width: '100%', 
              padding: '12px', 
              fontSize: '0.95rem', 
              marginBottom: '12px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.5px',
              border: '1.5px solid var(--accent-primary)',
              background: 'rgba(207, 159, 61, 0.05)',
              color: 'var(--accent-primary)',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600
            }} 
            onClick={async () => {
              if (lastCompletedSession) {
                const res = await db.localResults.get(lastCompletedSession.id);
                if (res) {
                  setLocalResult(res);
                  useJourneyStore.setState({ currentSession: lastCompletedSession });
                }
              }
              localStorage.setItem('mindprint_onboarding_completed', 'true');
              setOnboardingStep(-1);
            }}
          >
            {currentLanguage === 'tr' ? "Sonuçlarımı Gör" : "View Last Results"}
          </button>
        )}

        <button 
          className="btn btn-primary" 
          style={{ width: '100%', padding: '12px', fontSize: '0.95rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }} 
          onClick={() => {
            localStorage.setItem('mindprint_onboarding_completed', 'true');
            setOnboardingStep(-1);
          }}
        >
          {t.beginBtn}
        </button>

        {!isFeedbackInvitation && (
          <div style={{ fontSize: '0.8rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {!registeredUser && (
              <>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>{t.returningUser}</span>
                  <span 
                    onClick={() => setShowLoginModal(true)} 
                    style={{ color: 'var(--accent-primary)', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline' }}
                  >
                    {t.loginRestore}
                  </span>
                </div>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
              </>
            )}
            <span 
              onClick={() => setShowShareModal(true)} 
              title={currentLanguage === 'tr' ? "Paylaş" : "Share"}
              style={{ 
                color: 'var(--accent-primary)', 
                cursor: 'pointer', 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                borderRadius: '6px',
                background: 'rgba(207, 159, 61, 0.1)',
                border: '1px solid rgba(207, 159, 61, 0.2)',
                transition: 'background 0.2s ease, transform 0.1s ease'
              }}
            >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" style={{ display: 'block' }}>
              <circle cx="18" cy="5" r="3" fill="currentColor" />
              <circle cx="6" cy="12" r="3" fill="currentColor" />
              <circle cx="18" cy="19" r="3" fill="currentColor" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </span>
        </div>
      )}

        {showLoginModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
            <div style={{ background: '#161616', border: '1px solid var(--accent-primary)', borderRadius: '12px', padding: '24px', maxWidth: '400px', width: '90%', textAlign: 'left' }}>
              <h3 style={{ color: '#fff', marginBottom: '8px' }}>{t.loginTitle}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '16px' }}>{t.loginDesc}</p>
              <form onSubmit={handleLoginSubmit}>
                <div style={{ marginBottom: '12px' }}>
                  <input 
                    type="text" 
                    placeholder={t.usernamePlaceholder} 
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px 14px', background: '#0d0d0d', border: '1px solid var(--border-card)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <input 
                    type="password" 
                    placeholder={t.passwordPlaceholder} 
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
                  <button className="btn btn-secondary" type="button" onClick={() => setShowLoginModal(false)} style={{ flex: 1 }}>{t.cancelBtn}</button>
                  <button className="btn btn-primary" type="submit" style={{ flex: 1 }}>{t.loginTitle}</button>
                </div>
              </form>
            </div>
          </div>
        )}
        {renderShareModal()}
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

  // --- RENDERING FEEDBACK THANK YOU SCREEN ---
  if (currentSession?.status === 'completed' && currentSession?.feedbackFor) {
    const feedbackFor = currentSession.feedbackFor;
    const title = currentLanguage === 'tr' ? "Geri Bildiriminiz İletildi!" : "Feedback Submitted!";
    const body = currentLanguage === 'tr' 
      ? `Teşekkür ederiz! ${feedbackFor} için yaptığınız değerlendirme güvenli bir şekilde kaydedildi ve senkronize edildi. Şimdi bu sekmeyi kapatabilir veya çıkış yapabilirsiniz.` 
      : `Thank you! Your perspective for ${feedbackFor} has been securely saved and synchronized. You can now close this tab or exit.`;
    const btnText = currentLanguage === 'tr' ? "Tamamla ve Çık" : "Complete & Exit";

    return (
      <div className="glass-panel animate-float" style={{ 
        maxWidth: '430px', 
        margin: '60px auto', 
        padding: '32px', 
        textAlign: 'center',
        border: '1px solid rgba(46, 204, 113, 0.25)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)'
      }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          margin: '0 auto 20px auto', 
          borderRadius: '50%', 
          background: 'rgba(46, 204, 113, 0.1)',
          border: '1.5px solid #2ecc71',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem'
        }}>
          ✓
        </div>
        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '12px', fontWeight: 800 }}>{title}</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '24px' }}>
          {body}
        </p>
        <button
          className="btn btn-primary"
          style={{ width: '100%', padding: '12px', background: '#2ecc71', borderColor: '#2ecc71', color: '#fff', fontWeight: 'bold' }}
          onClick={() => {
            window.history.pushState({}, '', window.location.pathname);
            useJourneyStore.setState({ currentSession: null });
            window.location.reload();
          }}
        >
          {btnText}
        </button>
      </div>
    );
  }

  // --- RENDERING RESULT SCREEN ---
  if (currentSession?.status === 'completed' && localResult) {
    const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    return (
      <div className="glass-panel" style={{ maxWidth: '600px', margin: '40px auto', padding: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <button
            onClick={() => setShowShareModal(true)}
            style={{ 
              fontSize: '0.8rem', 
              background: 'rgba(207, 159, 61, 0.1)', 
              color: 'var(--accent-primary)', 
              border: '1px solid rgba(207, 159, 61, 0.25)', 
              borderRadius: '12px', 
              padding: '4px 10px', 
              fontWeight: 600, 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              outline: 'none'
            }}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" style={{ display: 'inline-block', marginRight: '2px' }}>
              <circle cx="18" cy="5" r="3" fill="currentColor" />
              <circle cx="6" cy="12" r="3" fill="currentColor" />
              <circle cx="18" cy="19" r="3" fill="currentColor" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg> {currentLanguage === 'tr' ? "Paylaş" : "Share"}
          </button>
          {registeredUser ? (
            <span 
              onClick={handleLogout}
              title={currentLanguage === 'tr' ? "Çıkış Yap" : "Log Out"}
              style={{ fontSize: '0.82rem', color: 'var(--success)', fontWeight: 600, background: 'rgba(46, 204, 113, 0.1)', padding: '4px 8px', borderRadius: '12px', border: '1px solid rgba(46, 204, 113, 0.2)', cursor: 'pointer' }}
            >
              👤 {registeredUser}
            </span>
          ) : (
            <div />
          )}
        </div>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src="icon-512.png" alt="MindPrint Logo" style={{ width: '80px', height: '80px', borderRadius: '16px', marginBottom: '15px' }} />
          <h1 style={{ fontSize: '2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>
            {t.resultsTitle}
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>{t.resultsDesc}</p>
        </div>

          {/* 5-Star Accuracy Rating */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '16px', marginBottom: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box' }}>
            <p style={{ color: 'var(--text-secondary)', margin: '0 0 10px 0', fontSize: '0.9rem' }}>
              {currentLanguage === 'fr' ? "Quelle est la précision de votre profil MindPrint ?" : currentLanguage === 'de' ? "Wie genau ist Ihr MindPrint-Profil?" : currentLanguage === 'ru' ? "Насколько точен ваш профиль MindPrint?" : currentLanguage === 'tr' ? "MindPrint profiliniz ne kadar doğru?" : "How accurate is your MindPrint profile?"}
            </p>
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
            {overallRating > 0 && (
              <p style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', margin: '8px 0 0 0' }}>
                {currentLanguage === 'fr' ? "Merci pour votre évaluation !" : currentLanguage === 'de' ? "Vielen Dank für Ihre Bewertung!" : currentLanguage === 'ru' ? "Спасибо за вашу оценку!" : currentLanguage === 'tr' ? "Değerlendirmeniz için teşekkür ederiz!" : "Thank you for your rating!"}
              </p>
            )}
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
            {currentLanguage === 'fr' ? 'Aperçu' : currentLanguage === 'de' ? 'Übersicht' : currentLanguage === 'ru' ? 'Обзор' : currentLanguage === 'tr' ? 'Genel Bakış' : 'Overview'}
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
            {currentLanguage === 'fr' ? 'Carte personnelle' : currentLanguage === 'de' ? 'Persönliche Karte' : currentLanguage === 'ru' ? 'Личная карта' : currentLanguage === 'tr' ? 'Kişisel Harita' : 'Personal Map'}
          </button>
        </div>

        {resultsTab === 'overview' && (
          <>
            {localResult.primaryArchetype && (() => {
              const primaryTrans = t.archetypes?.[localResult.primaryArchetype.id] || localResult.primaryArchetype;
              const feedback = getArchetypeLikesDislikes(localResult.primaryArchetype.id, currentLanguage);
              return (
                <div style={{ background: 'rgba(207, 159, 61, 0.08)', border: '1px solid rgba(207, 159, 61, 0.3)', borderRadius: '14px', padding: '20px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-primary)', fontWeight: 700 }}>{t.primaryTitle}</span>
                  <h2 style={{ fontSize: '1.6rem', marginTop: '4px', marginBottom: '8px', color: '#fff' }}>{primaryTrans.name}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: 0 }}>{primaryTrans.description}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(207, 159, 61, 0.15)' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>{t.loveTitle}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{feedback.like}</span>
                    </div>
                    <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.05)', paddingLeft: '12px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--danger)', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>{t.dislikeTitle}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{feedback.dislike}</span>
                    </div>
                  </div>
                </div>
              );
            })()}

            {localResult.primaryArchetype && (
              <div style={{ 
                background: 'rgba(235, 94, 40, 0.08)', 
                border: '1px solid rgba(235, 94, 40, 0.3)', 
                borderRadius: '14px', 
                padding: '20px', 
                marginBottom: '24px' 
              }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#ffb703', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {currentLanguage === 'fr' ? "⚠️ Vos angles morts comportementaux" : currentLanguage === 'de' ? "⚠️ Deine Verhaltensblindflecken" : currentLanguage === 'ru' ? "⚠️ Ваши поведенческие слепые зоны" : currentLanguage === 'tr' ? "⚠️ Davranışsal Kör Noktalarınız" : "⚠️ Your Behavioral Blindspots"}
                </span>
                <h3 style={{ fontSize: '1.15rem', marginTop: '8px', marginBottom: '15px', color: '#fff' }}>
                  {currentLanguage === 'fr' ? "Perception de soi vs. Présence sociale" : currentLanguage === 'de' ? "Selbstwahrnehmung vs. Soziale Präsenz" : currentLanguage === 'ru' ? "Самовосприятие vs. Социальное присутствие" : currentLanguage === 'tr' ? "Kendini Algılama vs. Sosyal Varlık" : "Self-Perception vs. Social Presence"}
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: 'rgba(0, 0, 0, 0.2)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {currentLanguage === 'fr' ? "Ce que vous vous dites" : currentLanguage === 'de' ? "Was du dir selbst sagst" : currentLanguage === 'ru' ? "Что вы говорите себе" : currentLanguage === 'tr' ? "Kendinize söylediğiniz" : "What you tell yourself"}
                    </span>
                    <p style={{ color: '#fff', fontSize: '0.85rem', margin: '4px 0 0 0', lineHeight: '1.4' }}>
                      {localResult.primaryArchetype.id === 'socratic-connector' && (currentLanguage === 'fr' ? "Je soutiens, je recherche le consensus et j'essaie de guider les autres en douceur." : currentLanguage === 'de' ? "Ich unterstütze, bin konsensorientiert und versuche andere behutsam zu leiten." : currentLanguage === 'ru' ? "Я поддерживаю, стремлюсь к согласию и стараюсь мягко направлять других к выводам." : currentLanguage === 'tr' ? "Destekleyiciyim, uzlaşmacıyım ve başkalarını doğrulara nazikçe yönlendirmeye çalışırım." : "I am supportive, consensus-building, and try to guide others gently to realizations.")}
                      {localResult.primaryArchetype.id === 'independent-explorer' && (currentLanguage === 'fr' ? "Je suis autonome, rationnel et j'accorde de l'importance à la vérité et à l'efficacité." : currentLanguage === 'de' ? "Ich bin selbstständig, rational und schätze Wahrheit und Effizienz über alles." : currentLanguage === 'ru' ? "Я самостоятелен, рационален и ценю правду и эффективность превыше всего." : currentLanguage === 'tr' ? "Kendime yeterim, son derece rasyonelim; doğruluk ve verimliliğe her şeyden çok değer veririm." : "I am self-reliant, highly rational, and value truth and efficiency above all.")}
                      {localResult.primaryArchetype.id === 'quiet-strategist' && (currentLanguage === 'fr' ? "J'observe, je suis réfléchi et j'analyse profondément les situations avant d'intervenir." : currentLanguage === 'de' ? "Ich beobachte, bin bedacht und analysiere Situationen tiefgehend vor Impulsen." : currentLanguage === 'ru' ? "Я наблюдателен, осмотрителен и глубоко анализирую ситуации перед тем, как высказаться." : currentLanguage === 'tr' ? "Gözlemciyim, temkinliyim ve fikir sunmadan önce durumları derinlemesine analiz ederim." : "I am observant, deliberate, and analyze situations deeply before offering input.")}
                      {localResult.primaryArchetype.id === 'empathic-challenger' && (currentLanguage === 'fr' ? "Je suis honnête, direct et je conteste les idées du groupe car je veux bien faire." : currentLanguage === 'de' ? "Ich bin ehrlich, direkt und hinterfrage Gruppenideen, weil ich es richtig machen will." : currentLanguage === 'ru' ? "Я честен, прям и оспариваю идеи группы, потому что мне важно сделать все правильно." : currentLanguage === 'tr' ? "Dürüstüm, doğrudanım ve grup kararlarını işlerin doğru yapılması amacıyla sorgularım." : "I am honest, direct, and challenge group ideas because I care about doing things right.")}
                    </p>
                  </div>
                  <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '16px' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#ffb703', fontWeight: 600 }}>{t.sayTitle}</span>
                    <p style={{ color: '#fff', fontSize: '0.85rem', margin: '4px 0 0 0', lineHeight: '1.4' }}>
                      {localResult.primaryArchetype.id === 'socratic-connector' && (currentLanguage === 'fr' ? "Vous pouvez sembler passif-agressif, indécis ou hésitant à prendre une position claire." : currentLanguage === 'de' ? "Kann passiv-agressiv, unentschlossen oder zögerlich bei klaren Aussagen wirken." : currentLanguage === 'ru' ? "Может казаться пассивно-агрессивным, нерешительным или уклоняющимся от позиции." : currentLanguage === 'tr' ? "Pasif-agresif, kararsız veya net bir duruş sergilemekte tereddütlü görünebilir." : "You can be passive-aggressive, indecisive, or avoid taking a clear stand to protect your image.")}
                      {localResult.primaryArchetype.id === 'independent-explorer' && (currentLanguage === 'fr' ? "Vous pouvez paraître distant, froid, peu collaboratif ou méprisant envers les sentiments." : currentLanguage === 'de' ? "Kann kühl, distanziert, unkooperativ oder gefühlsabweisend wirken." : currentLanguage === 'ru' ? "Может казаться холодным, отстраненным, несклонным к сотрудничеству или чувствам других." : currentLanguage === 'tr' ? "Soğuk, mesafeli, iş birliğine kapalı veya başkalarının duygularını önemsemez görünebilir." : "You can be distant, cold, uncollaborative, or dismissive of other people's feelings.")}
                      {localResult.primaryArchetype.id === 'quiet-strategist' && (currentLanguage === 'fr' ? "Vous pouvez paraître distant, désapprobateur ou complètement détaché du groupe." : currentLanguage === 'de' ? "Schwer zu lesen; langes Schweigen kann wie kritische Bewertung wirken." : currentLanguage === 'ru' ? "Трудно понять; долгое молчание может восприниматься как критическая оценка." : currentLanguage === 'tr' ? "Okunması zor ve uzun sessizliği eleştirel bir yargılama gibi hissettirebilir." : "You can be aloof, disapproving, or completely disengaged from the social group.")}
                      {localResult.primaryArchetype.id === 'empathic-challenger' && (currentLanguage === 'fr' ? "Vous pouvez être abrasif, conflictuel, écrasant ou prompt à contester d'autres points de vue." : currentLanguage === 'de' ? "Kann schroff, konfrontativ, erdrückend oder schnell herausfordernd sein." : currentLanguage === 'ru' ? "Может казаться резким, агрессивным, подавляющим или склонным спорить." : currentLanguage === 'tr' ? "Kırıcı, çatışmacı, ezici veya meydan okumaya çok hevesli görünebilir." : "You can be abrasive, confrontational, overwhelming, or quick to attack other views.")}
                    </p>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                  {localResult.primaryArchetype.id === 'socratic-connector' && t.socraticExplanation}
                  {localResult.primaryArchetype.id === 'independent-explorer' && t.explorerExplanation}
                  {localResult.primaryArchetype.id === 'quiet-strategist' && t.strategistExplanation}
                  {localResult.primaryArchetype.id === 'empathic-challenger' && t.challengerExplanation}
                </p>
              </div>
            )}

            {localResult.secondaryArchetype && (() => {
              const secondaryTrans = t.archetypes?.[localResult.secondaryArchetype.id] || localResult.secondaryArchetype;
              const feedback = getArchetypeLikesDislikes(localResult.secondaryArchetype.id, currentLanguage);
              return (
                <div style={{ background: 'rgba(166, 124, 30, 0.05)', border: '1px solid rgba(166, 124, 30, 0.2)', borderRadius: '14px', padding: '20px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>{t.secondaryTitle}</span>
                  <h2 style={{ fontSize: '1.4rem', marginTop: '4px', marginBottom: '8px', color: '#fff' }}>{secondaryTrans.name}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: 0 }}>{secondaryTrans.description}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(166, 124, 30, 0.15)' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>{t.loveTitle}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{feedback.like}</span>
                    </div>
                    <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.05)', paddingLeft: '12px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--danger)', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>{t.dislikeTitle}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{feedback.dislike}</span>
                    </div>
                  </div>
                </div>
              );
            })()}

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#fff' }}>{t.dimensionsTitle}</h3>
              {localResult.dimensions.map((dim: any) => {
                const dimTrans = t.dimensions?.[dim.id] || dim;
                const score = dim.score;
                
                const left = score < 50 ? score : 50;
                const width = Math.abs(50 - score);

                const isLeftDominant = score < 50;
                const isRightDominant = score > 50;

                return (
                  <div 
                    key={dim.id} 
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(207, 159, 61, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(207, 159, 61, 0.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.01)', 
                      border: '1px solid rgba(255, 255, 255, 0.04)', 
                      borderRadius: '12px', 
                      padding: '16px', 
                      marginBottom: '14px',
                      transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', letterSpacing: '0.3px' }}>{dimTrans.name}</span>
                    </div>
                    
                    <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '2px', position: 'relative', margin: '22px 0 10px 0' }}>
                      <div style={{ position: 'absolute', left: '50%', top: '50%', width: '2px', height: '10px', background: 'rgba(255, 255, 255, 0.4)', transform: 'translate(-50%, -50%)', zIndex: 1 }} />
                      
                      <div style={{
                        position: 'absolute',
                        left: `${left}%`,
                        width: `${width}%`,
                        height: '100%',
                        background: 'var(--accent-primary)',
                        borderRadius: '2px',
                        transition: 'left 0.5s ease-out, width 0.5s ease-out'
                      }} />

                      <div style={{
                        position: 'absolute',
                        left: `${score}%`,
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'var(--accent-primary)',
                        color: '#000',
                        boxShadow: '0 0 15px var(--accent-primary)',
                        border: '1.5px solid #fff',
                        borderRadius: '20px',
                        padding: '2px 10px',
                        fontSize: '0.72rem',
                        fontWeight: 'bold',
                        zIndex: 2,
                        transition: 'left 0.5s ease-out'
                      }}>
                        {score}%
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginTop: '6px' }}>
                      <span style={{ 
                        fontWeight: isLeftDominant ? 'bold' : 'normal',
                        color: isLeftDominant ? 'var(--accent-primary)' : 'var(--text-muted)',
                        textShadow: isLeftDominant ? '0 0 10px rgba(207, 159, 61, 0.15)' : 'none',
                        transition: 'color 0.3s ease'
                      }}>
                        {dimTrans.lowPole}
                      </span>
                      <span style={{ 
                        fontWeight: isRightDominant ? 'bold' : 'normal',
                        color: isRightDominant ? 'var(--accent-primary)' : 'var(--text-muted)',
                        textShadow: isRightDominant ? '0 0 10px rgba(207, 159, 61, 0.15)' : 'none',
                        transition: 'color 0.3s ease'
                      }}>
                        {dimTrans.highPole}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {localResult.insights.length > 0 && (
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#fff' }}>{t.insightsTitle}</h3>
                {localResult.insights.map((ins: any) => {
                  const insTrans = t.insights?.[ins.id];
                  const insTitle = insTrans?.title || ins.title;
                  const insBody = insTrans?.bodyTemplate || ins.body;
                  const insAltBody = insTrans?.alternativeTemplate || ins.alternativeBody;
                  return (
                    <div key={ins.id} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-card)', borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ color: 'var(--accent-primary)', margin: 0, fontSize: '1rem' }}>{insTitle}</h4>
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
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginTop: '8px', marginBottom: 0 }}>{insBody}</p>
                      {insAltBody && (
                        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.85rem', color: '#ffb703' }}>
                          <strong>{currentLanguage === 'fr' ? "⚠️ Avertissement de point mort :" : currentLanguage === 'de' ? "⚠️ Blindwinkel-Warnung:" : currentLanguage === 'ru' ? "⚠️ Предупреждение о слепой зоне:" : currentLanguage === 'tr' ? "⚠️ Kör Nokta Uyarısı:" : "⚠️ Blindspot Warning:"}</strong> {insAltBody}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {resultsTab === 'map' && (
          <PersonalMap result={localResult} allSessions={allMapSessions} />
        )}

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
              const simUsers = localStorage.getItem('mindprint_simulated_users');
              localStorage.clear();
              if (simUsers) {
                localStorage.setItem('mindprint_simulated_users', simUsers);
              }
              setOnboardingStep(-2);
              setLegalConsentChecked(false);
              setRegisteredUser(null);
            }
          }}>
            Wipe Data (GDPR)
          </button>
        </div>
        {renderShareModal()}
      </div>
    );
  }

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

    const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

    return (
      <div className="glass-panel" style={{ maxWidth: '600px', margin: '40px auto', width: '90%' }}>
        {(() => {
          const queryParams = new URLSearchParams(window.location.search);
          const feedbackFor = queryParams.get('feedbackFor');
          if (!feedbackFor) return null;
          return (
            <div style={{
              background: 'rgba(207, 159, 61, 0.1)',
              border: '1px solid rgba(207, 159, 61, 0.3)',
              borderRadius: '8px',
              padding: '10px 14px',
              marginBottom: '16px',
              textAlign: 'center',
              fontSize: '0.8rem',
              color: 'var(--accent-primary)',
              lineHeight: 1.35
            }}>
              <strong>📝 {currentLanguage === 'tr' ? "Geri Bildirim Modu" : "Feedback Mode"}:</strong>{' '}
              {currentLanguage === 'tr' 
                ? `${feedbackFor} adlı kullanıcının davranışlarını değerlendiriyorsunuz.` 
                : `Answering as you perceive ${feedbackFor} would behave.`}
            </div>
          );
        })()}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '0.85rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>
            {t.questionProgress.replace('{current}', String(answeredCount + 1)).replace('{total}', String(totalQuestions))}
            <span 
              onClick={async () => {
                await db.journeySessions.clear();
                await db.responses.clear();
                await db.localResults.clear();
                const simUsers = localStorage.getItem('mindprint_simulated_users');
                localStorage.clear();
                if (simUsers) {
                  localStorage.setItem('mindprint_simulated_users', simUsers);
                }
                setOnboardingStep(-2);
                window.location.reload();
              }}
              style={{ color: 'var(--accent-primary)', marginLeft: '12px', cursor: 'pointer', textDecoration: 'underline', fontWeight: 600 }}
            >
              Reset
            </span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {registeredUser && (
              <span 
                onClick={handleLogout}
                title={currentLanguage === 'tr' ? "Çıkış Yap" : "Log Out"}
                style={{ color: 'var(--success)', fontWeight: 600, borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '8px', fontSize: '0.8rem', cursor: 'pointer' }}
              >
                👤 {registeredUser}
              </span>
            )}
            <span style={{ background: isOffline ? 'var(--danger)' : 'var(--success)', padding: '3px 8px', borderRadius: '20px', color: '#fff', fontSize: '0.75rem', fontWeight: 600 }}>
              {isOffline ? t.syncStatusOffline : t.syncStatusOnline}
            </span>
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
              {currentLanguage === 'fr' ? 'Retour' : currentLanguage === 'de' ? 'Zurück' : currentLanguage === 'ru' ? 'Назад' : currentLanguage === 'tr' ? 'Geri' : 'Back'}
            </button>
          )}
          {(currentQuestion.type === 'ranked_choice' || currentQuestion.type === 'single_choice') && (
            <button 
              className="btn btn-primary" 
              style={{ flex: 2 }} 
              disabled={isSubmitDisabled}
              onClick={() => submitAnswer(selectedRanks)}
            >
              {t.continueBtn}
            </button>
          )}
        </div>
      </div>
    );
  }

  // --- RENDERING LAUNCH/COMPLETE SCREEN ---
  const tLanding = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  return (
    <div className="glass-panel" style={{ maxWidth: '600px', margin: '80px auto', textAlign: 'center', padding: '40px' }}>
      <img src="icon-512.png" alt="MindPrint Logo" style={{ width: '100px', height: '100px', borderRadius: '16px', marginBottom: '20px' }} />
      <h1 style={{ fontSize: '2.2rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '12px' }}>
        MindPrint
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '30px', lineHeight: '1.6' }}>
        {tLanding.welcomeSubtitle}
      </p>

      <button className="btn btn-primary" style={{ width: '100%', padding: '14px 28px', marginBottom: isInstallable ? '12px' : '0px' }} onClick={completeJourney}>
        {tLanding.viewResultsBtn}
      </button>

      {isInstallable && (
        <button className="btn btn-secondary" style={{ width: '100%', padding: '14px 28px', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }} onClick={handleInstallClick}>
          {currentLanguage === 'fr' ? "Installer l'application MindPrint" : currentLanguage === 'de' ? "MindPrint App installieren" : currentLanguage === 'ru' ? "Установить MindPrint" : currentLanguage === 'tr' ? "MindPrint Uygulamasını Yükle" : "Install MindPrint App"}
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
      {renderShareModal()}
    </div>
  );
}
