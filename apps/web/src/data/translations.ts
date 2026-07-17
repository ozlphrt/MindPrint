export type Language = 'en' | 'tr';

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    welcomeTitle: "MindPrint",
    welcomeSubtitle: "How do others experience you?",
    welcomeDesc: "Discover the behavioral blindspots you cannot easily see from the inside. Through 12 adaptive, situation-based questions, MindPrint maps your social presence, directness, and reflection.",
    anonymous: "Completely Anonymous (no PII or emails collected)",
    localFirst: "Local-First Storage (private until you choose to sync)",
    crossDevice: "Cross-Device Sync (restore sessions anytime)",
    beginBtn: "Begin Discovery",
    returningUser: "Returning user? ",
    loginRestore: "Log in to restore data or collect feedback",
    loginTitle: "Log In",
    loginDesc: "Enter your username and password to restore and sync assessments.",
    usernamePlaceholder: "Username",
    passwordPlaceholder: "Password",
    cancelBtn: "Cancel",
    resultsTitle: "Your MindPrint",
    resultsDesc: "This is how you are perceived by others in social and professional dynamics.",
    primaryTitle: "Primary Archetype",
    secondaryTitle: "Secondary Archetype",
    loveTitle: "💚 What others love",
    dislikeTitle: "💔 What others dislike",
    sayTitle: "What others say about you",
    dimensionsTitle: "Your Profile Dimensions",
    insightsTitle: "Core Insights",
    upgradeTitle: "Save Result Permanently",
    upgradeDesc: "Choose a username and password to secure your results. We value your privacy and do NOT collect email addresses.",
    upgradeBtn: "Upgrade to Permanent Account",
    alreadyRegistered: "Already registered?",
    loginSyncBtn: "Log In to Sync Data",
    viewResultsBtn: "View Results",
    syncStatusOnline: "Online",
    syncStatusOffline: "Offline",
    loadingJourney: "Loading journey...",
    questionProgress: "Question {current} of {total}",
    continueBtn: "Continue",
    selectOptionMsg: "Select answer option(s) to continue",
    congratulations: "Congratulations!",
    assessmentComplete: "You have completed your assessment journey.",
    socraticExplanation: "Because you guide conversations through indirect questions, others might misinterpret you as passive-aggressive, indecisive, or slow to make a stand. They may feel you are hiding your true opinion.",
    explorerExplanation: "Your frank, self-reliant approach can make others experience you as distant, uncollaborative, or overly critical. They might feel you are isolating yourself or rejecting the group.",
    strategistExplanation: "Because you process interactions deeply and stay silent, others might misinterpret your quietness as critical judgment, disapproval, or complete disinterest in the social group.",
    challengerExplanation: "Your combination of high honesty and high energy can make others experience you as abrasive, confrontational, or overwhelming. They may feel attacked even when you act out of care.",
    dimensions: {
      directness: { name: "Directness", lowPole: "Diplomatic & Indirect", highPole: "Frank & Direct" },
      social_energy: { name: "Social Energy", lowPole: "Reserved & Introspective", highPole: "Outgoing & Expressive" },
      reflectiveness: { name: "Reflectiveness", lowPole: "Action-Oriented & Spontaneous", highPole: "Deliberate & Analytical" },
      expressiveness: { name: "Expressiveness", lowPole: "Objective & Reserved", highPole: "Warm & Expressive" },
      assertiveness: { name: "Assertiveness", lowPole: "Receptive & Accommodating", highPole: "Assertive & Dominant" },
      adaptability: { name: "Adaptability", lowPole: "Consistent & Grounded", highPole: "Flexible & Agile" },
      pace: { name: "Pace", lowPole: "Deliberate & Patient", highPole: "Fast-paced & Urgent" },
      focus_orientation: { name: "Focus Orientation", lowPole: "Task & Logic Focused", highPole: "Relationship & Harmony Focused" },
      vulnerability: { name: "Vulnerability", lowPole: "Stoic & Guarded", highPole: "Vulnerable & Open" },
      conflict_style: { name: "Conflict Engagement", lowPole: "Harmonizing & Avoiding", highPole: "Confrontational & Debating" },
      feedback_style: { name: "Feedback Style", lowPole: "Critique & Correcting", highPole: "Supportive & Encouraging" },
      playfulness: { name: "Playfulness", lowPole: "Serious & Gravitas", highPole: "Playful & Lighthearted" }
    },
    archetypes: {
      "socratic-connector": {
        name: "The Socratic Connector",
        description: "You connect deeply through thoughtful questioning and warm diplomatic presence, preferring collaboration and dialogue over direct commands."
      },
      "independent-explorer": {
        name: "The Independent Explorer",
        description: "You value autonomy and direct action, exploring ideas independently and voicing your candid perspective without hesitation."
      },
      "quiet-strategist": {
        name: "The Quiet Strategist",
        description: "You observe deeply and act with deliberate planning, offering carefully considered insights and maintaining a calm, introspective presence."
      },
      "empathic-challenger": {
        name: "The Empathic Challenger",
        description: "You combine raw honesty with intense social engagement, challenging group consensus directly out of care and interest in improvement."
      }
    },
    insights: {
      "insight-socratic": {
        title: "You guide conversations rather than pushing views.",
        bodyTemplate: "You tend to use questions to invite reflection, allowing others to arrive at realizations on their own. People experience you as collaborative and non-confrontational.",
        alternativeTemplate: "At times, people might find this indirect approach slow, wishing for a direct statement of your opinion."
      },
      "insight-candid": {
        title: "Your transparency is refreshing.",
        bodyTemplate: "You speak clearly and without filters. People know exactly where they stand with you, making you a reliable truth-teller in team settings.",
        alternativeTemplate: "In emotionally charged situations, your high directness could be perceived as blunt or insensitive."
      },
      "insight-diplomatic": {
        title: "You are a master of social diplomacy.",
        bodyTemplate: "You deliver thoughts with gentleness and tact, prioritizing safety and ensuring nobody feels threatened or put on the spot.",
        alternativeTemplate: "Others might feel you sweep hard truths under the rug or hide your genuine opinions to maintain peace."
      },
      "insight-observant": {
        title: "You are a thoughtful observer.",
        bodyTemplate: "You listen closely and process interactions deeply before intervening. This gives your contributions high impact, as they are backed by reasoning.",
        alternativeTemplate: "People who thrive on quick interactions might misinterpret your quietness as critical evaluation."
      },
      "insight-assertive": {
        title: "You command authority and lead decisions.",
        bodyTemplate: "You confidently take charge, state your choices, and steer groups forward out of a desire for clarity and execution.",
        alternativeTemplate: "Others can experience you as overbearing, stubborn, or dominating, feeling their input has been ignored."
      },
      "insight-receptive": {
        title: "You are highly collaborative and receptive.",
        bodyTemplate: "You value other people's perspectives, yield to the group consensus, and create space for collective choices.",
        alternativeTemplate: "Others might view you as passive, indecisive, or hesitant to advocate for your own needs."
      },
      "insight-flexible": {
        title: "You flow easily with changes.",
        bodyTemplate: "You adapt smoothly to shifting plans, welcoming new information and spontaneity without friction.",
        alternativeTemplate: "Others may perceive you as disorganized or lacking commitment, feeling you change directions too frequently."
      },
      "insight-consistent": {
        title: "You bring stable consistency.",
        bodyTemplate: "You honor plans, follow structured conventions, and provide a reliable anchor of routine for those around you.",
        alternativeTemplate: "Others might experience you as rigid, stubborn, or resistant to necessary adjustments when circumstances change."
      },
      "insight-fast": {
        title: "You operate with urgent momentum.",
        bodyTemplate: "You act quickly, decide fast, and keep conversations and projects moving at a high pace.",
        alternativeTemplate: "Others may feel rushed or run over, experiencing your speed as impulsive or careless."
      },
      "insight-deliberate": {
        title: "You are deeply patient and deliberate.",
        bodyTemplate: "You prefer to slow down, analyze all details, and make sure things are done correctly and safely.",
        alternativeTemplate: "Others can find your pace slow or frustrating, misinterpreting caution as hesitation or stalling."
      },
      "insight-task": {
        title: "You focus objectively on tasks and results.",
        bodyTemplate: "You prioritize logical progress, timelines, and raw results over social dynamics to get things done.",
        alternativeTemplate: "Others may feel you are cold, transactional, or insensitive to the emotional climate of the group."
      },
      "insight-relationship": {
        title: "You prioritize relationship harmony.",
        bodyTemplate: "You focus heavily on the morale, cohesion, and emotional alignment of the group above objective tasks.",
        alternativeTemplate: "Others might feel you prioritize feelings over productivity, delaying progress to manage minor emotional friction."
      },
      "insight-vulnerable": {
        title: "You build trust through authenticity.",
        bodyTemplate: "You openly share your mistakes, emotions, and doubts, creating a human connection that invites others to open up.",
        alternativeTemplate: "Others might occasionally find this level of sharing uncomfortable, experiencing it as oversharing or emotional fragility."
      },
      "insight-stoic": {
        title: "You maintain a composed, steady presence.",
        bodyTemplate: "You keep your feelings and doubts private, presenting a calm, objective, and dependable exterior under pressure.",
        alternativeTemplate: "Others can find you guarded, robotic, or hard to read, making it difficult for them to establish deep trust."
      },
      "insight-confrontational": {
        title: "You address conflict head-on.",
        bodyTemplate: "You step directly into tension, believing that honest debate and clearing the air is the healthiest path.",
        alternativeTemplate: "Others can find your approach intimidating, feeling that you are argumentative or picking unnecessary fights."
      },
      "insight-harmonizing": {
        title: "You seek harmony and de-escalate tension.",
        bodyTemplate: "You use diplomacy, defusion, and patience to resolve friction, ensuring that discussions stay safe and calm.",
        alternativeTemplate: "Others might feel you avoid necessary conflict, sweeping critical arguments under the rug to maintain artificial peace."
      },
      "insight-critique": {
        title: "You drive growth through direct correction.",
        bodyTemplate: "You provide honest, constructive critiques pointing out flaws immediately to help others meet high standards.",
        alternativeTemplate: "Others can experience your feedback as harsh, discouraging, or feeling that their efforts are never good enough."
      },
      "insight-encouraging": {
        title: "You build confidence through encouragement.",
        bodyTemplate: "You focus on praising effort, protecting psychological safety, and giving gentle, supportive suggestions.",
        alternativeTemplate: "Others might feel you withhold direct truths, offering soft encouragement when direct correction is needed."
      },
      "insight-playful": {
        title: "You bring lighthearted, playful energy.",
        bodyTemplate: "You use humor, playful teasing, and wit to defuse stress, keep conversations fun, and build friendly bonds.",
        alternativeTemplate: "Others can misinterpret your teasing as passive-aggressive, or feel that you do not take serious situations seriously."
      },
      "insight-gravitas": {
        title: "You carry deep gravitas and respect.",
        bodyTemplate: "You treat interactions with seriousness and dignity, ensuring respect and professional weight in all matters.",
        alternativeTemplate: "Others may experience you as stiff, stuffy, or lacking warmth, feeling they cannot laugh or relax around you."
      },
      "insight-expressive": {
        title: "You radiate personal warmth and expression.",
        bodyTemplate: "You show your emotions openly, sharing personal enthusiasm and empathy to make others feel validated.",
        alternativeTemplate: "Objective-minded individuals might misinterpret your high expressiveness as emotionally loaded or less logical."
      }
    },
    questions: {
      "q-001": {
        prompt: "At a dinner party, someone confidently asserts a fact about a movie or historical event that you know is completely incorrect.",
        instructions: "Select one primary action and up to two optional secondary actions.",
        options: {
          "q-001-a": "Correct them immediately and share the actual facts.",
          "q-001-b": "Ask curious questions to let them realize the contradiction themselves.",
          "q-001-c": "Keep silent and search it up on your phone privately.",
          "q-001-d": "Laugh it off, crack a joke, or steering the topic somewhere else."
        }
      },
      "q-002": {
        prompt: "A close friend is sharing a complex personal dilemma, and you notice their shoulders tense up as they confuse their own story details.",
        instructions: "Select one primary response and up to two secondary responses.",
        options: {
          "q-002-a": "Point out the inconsistency directly to help them untangle the timeline.",
          "q-002-b": "Just listen and offer emotional validation, ignoring the minor detail errors.",
          "q-002-c": "Wait until they finish, then ask calmly: 'Would you like some space to reflect first?'"
        }
      },
      "q-003": {
        prompt: "You arrive at a large house warming party where you only know the host, who is busy greeting guests.",
        instructions: "Select the one option that fits you best.",
        options: {
          "q-003-a": "Walk straight into a circle, introduce yourself, and join the conversation.",
          "q-003-b": "Stand near the food or drinks, observe the rooms, and wait for someone to approach."
        }
      },
      "q-004": {
        prompt: "You are organizing a weekend trip with friends, and one person is delaying their confirmation, holding up the group lodging booking.",
        instructions: "Select one primary and up to two secondary actions.",
        options: {
          "q-004-a": "Send a direct text: 'Booking in 2 hours. If you haven't confirmed by then, we're booking without you.'",
          "q-004-b": "Call them privately to see if they're having hesitation, budget constraints, or other issues.",
          "q-004-c": "Book a room that has free cancellation anyway and tell them we've got them covered just in case."
        }
      },
      "q-005": {
        prompt: "A friend is emotionally venting to you about a mutual friend's behavior that hurt them.",
        instructions: "Select the one option that fits you best.",
        options: {
          "q-005-a": "Support them fully: validate their feelings and echo their frustration.",
          "q-005-b": "Offer neutral perspective: explain the other friend's possible point of view to ease anger."
        }
      },
      "q-006": {
        prompt: "A friend shares a wild, highly impractical plan (e.g., buying a school bus to travel the world next month).",
        instructions: "Select one primary and up to two secondary actions.",
        options: {
          "q-006-a": "Gently point out the massive logistical and financial challenges immediately.",
          "q-006-b": "Enthusiastically build on the dream: 'That's amazing! Imagine painting it yellow and...' ",
          "q-006-c": "Listen quietly, evaluate if they are actually serious, and offer a balanced review later."
        }
      },
      "q-007": {
        prompt: "You need to choose a restaurant in an unfamiliar neighborhood with zero signal/internet reviews available.",
        instructions: "Select one option.",
        options: {
          "q-007-a": "Walk into the first busy restaurant; any decision is better than walking around hungry.",
          "q-007-b": "Peek through windows, read the physical menus, and choose the most promising option."
        }
      },
      "q-008": {
        prompt: "A friend asks you to review a creative draft or hobby project (like a short story or painting) they spent weeks on.",
        instructions: "Select one primary and up to two secondary actions.",
        options: {
          "q-008-a": "Provide honest, constructive criticism, listing exactly what needs work.",
          "q-008-b": "Focus mostly on praising their effort and keep suggestions very gentle.",
          "q-008-c": "Ask them: 'Are you looking for encouragement or detailed feedback?' before sharing."
        }
      }
    }
  },
  tr: {
    welcomeTitle: "MindPrint",
    welcomeSubtitle: "Çevrenizdekiler sizi nasıl algılıyor?",
    welcomeDesc: "Kendi kendinize fark etmesi zor olan davranışsal kör noktalarınızı keşfedin. 12 adet uyarlanabilir senaryo sorusuyla MindPrint; sosyal duruşunuzu, doğrudanlığınızı ve analitik düşünme eğilimlerinizi haritalandırır.",
    anonymous: "Tamamen Anonim (hiçbir kişisel bilgi veya e-posta toplanmaz)",
    localFirst: "Yerel Öncelikli Depolama (eşitlemeyi seçene kadar cihazınızda gizli kalır)",
    crossDevice: "Senkronizasyon (oturumları dilediğiniz zaman geri yükleyin)",
    beginBtn: "Keşfe Başla",
    returningUser: "Zaten kayıtlı mısınız? ",
    loginRestore: "Giriş yapın veya geri bildirim isteyin",
    loginTitle: "Giriş Yap",
    loginDesc: "Profilinizi geri yüklemek ve senkronize etmek için kullanıcı adı ve şifrenizi girin.",
    usernamePlaceholder: "Kullanıcı Adı",
    passwordPlaceholder: "Şifre",
    cancelBtn: "İptal",
    resultsTitle: "Sizin MindPrint'iniz",
    resultsDesc: "Sosyal ve profesyonel ilişkilerinizde çevrenize yansıttığınız izlenim.",
    primaryTitle: "Birincil Arketipler",
    secondaryTitle: "İkincil Arketipler",
    loveTitle: "💚 Çevrenizin en çok değer verdiği yönleriniz",
    dislikeTitle: "💔 İletişimde zorlayıcı olabilen yönleriniz",
    sayTitle: "Dışarıdan nasıl görünüyorsunuz?",
    dimensionsTitle: "Profil Boyutlarınız",
    insightsTitle: "Gözlemler ve İpuçları",
    upgradeTitle: "Sonuçları Kalıcı Olarak Kaydet",
    upgradeDesc: "Sonuçlarınızı güvence altına almak için bir kullanıcı adı ve şifre seçin. Gizliliğinize önem veriyoruz ve e-posta adresinizi talep etmiyoruz.",
    upgradeBtn: "Kalıcı Hesap Oluştur",
    alreadyRegistered: "Zaten kayıtlı mısınız?",
    loginSyncBtn: "Giriş Yap ve Senkronize Et",
    viewResultsBtn: "Sonuçları Görüntüle",
    syncStatusOnline: "Çevrimiçi",
    syncStatusOffline: "Çevrimdışı",
    loadingJourney: "Yolculuk yükleniyor...",
    questionProgress: "Soru {current} / {total}",
    continueBtn: "Devam Et",
    selectOptionMsg: "Devam etmek için cevap seçeneği/seçenekleri belirleyin",
    congratulations: "Tebrikler!",
    assessmentComplete: "Keşif yolculuğunuzu başarıyla tamamladınız.",
    socraticExplanation: "Görüşlerinizi dolaylı yollardan veya sorularla ifade etmeniz, çevreniz tarafından kararsızlık ya da net bir duruş sergilemekten kaçınma olarak yorumlanabilir.",
    explorerExplanation: "Net ve bağımsız yaklaşımınız, çevrenizde soğuk, mesafeli veya fazla eleştirel bir imaj yaratabilir.",
    strategistExplanation: "Sessiz ve analitik yapınız, çevrenizdekiler tarafından ilgisizlik, onaylamama veya gizli bir eleştiri olarak yanlış algılanabilir.",
    challengerExplanation: "Açık sözlülüğünüz ve yüksek enerjiniz, iyi niyetli olsanız dahi çevrenizdekiler üzerinde baskıcı veya çatışmacı bir etki bırakabilir.",
    dimensions: {
      directness: { name: "Doğrudanlık", lowPole: "Diplomatik", highPole: "Açık Sözlü" },
      social_energy: { name: "Sosyal Enerji", lowPole: "İçe Dönük", highPole: "Dışa Dönük" },
      reflectiveness: { name: "Analitik Düşünce", lowPole: "Eylem Odaklı", highPole: "Düşünsel & Planlı" },
      expressiveness: { name: "Duygusal İfade", lowPole: "Mesafeli", highPole: "Sıcak & Samimi" },
      assertiveness: { name: "Girişkenlik", lowPole: "Uyumlu", highPole: "Dominant" },
      adaptability: { name: "Esneklik", lowPole: "Kararlı", highPole: "Uyum Sağlayan" },
      pace: { name: "Tempo", lowPole: "Sakin", highPole: "Hızlı" },
      focus_orientation: { name: "Odak Noktası", lowPole: "İş & Mantık", highPole: "İlişki & Duygu" },
      vulnerability: { name: "Açık Yüreklilik", lowPole: "Temkinli & Kapalı", highPole: "İçten & Açık" },
      conflict_style: { name: "Çatışma Yönetimi", lowPole: "Kaçınmacı", highPole: "Yüzleşmeci" },
      feedback_style: { name: "Geri Bildirim", lowPole: "Geliştirici & Eleştirel", highPole: "Destekleyici" },
      playfulness: { name: "Mizaç", lowPole: "Ciddi & Resmi", highPole: "Eğlenceli & Rahat" }
    },
    archetypes: {
      "socratic-connector": {
        name: "Sokratik Bağlayıcı",
        description: "Sorular sorarak ve diplomatik bir yaklaşımla derin bağlar kurarsınız. Doğrudan yönlendirmeler yerine iş birliği ve diyaloğu tercih edersiniz."
      },
      "independent-explorer": {
        name: "Bağımsız Kaşif",
        description: "Özerkliğe ve eyleme değer verirsiniz. Fikirleri bağımsızca keşfeder ve açık sözlü duruşunuzu paylaşmaktan çekinmezsiniz."
      },
      "quiet-strategist": {
        name: "Sessiz Stratejist",
        description: "Derinlemesine gözlemler ve planlı hareket edersiniz. İyi düşünülmüş fikirler sunar, sakin ve içe dönük bir duruş sergilersiniz."
      },
      "empathic-challenger": {
        name: "Empatik Meydan Okuyan",
        description: "Dürüstlüğü yüksek sosyal etkileşimle birleştirirsiniz. Grup kararlarını gelişim amacı doğrultusunda doğrudan sorgularsınız."
      }
    },
    insights: {
      "insight-socratic": {
        title: "Görüşlerinizi dikte etmek yerine konuşmaları yönlendirirsiniz.",
        bodyTemplate: "Başkalarının kendi doğrularını bulmasını sağlamak için sorularla düşünmeye davet edersiniz. İnsanlar sizi uyumlu bulur.",
        alternativeTemplate: "Bazen bu dolaylı tutum, doğrudan görüş duymak isteyenler tarafından yavaş bulunabilir."
      },
      "insight-candid": {
        title: "Dürüstlüğünüz ve açıklığınız çok tazeleyici.",
        bodyTemplate: "Filtresiz ve net konuşursunuz. İnsanlar sizinleyken konumlarını tam bilirler, bu da sizi güvenilir bir ortak yapar.",
        alternativeTemplate: "Duygusal anlarda, bu yüksek doğrudanlığınız kaba veya patavatsız olarak algılanabilir."
      },
      "insight-diplomatic": {
        title: "Sosyal diplomaside uzmansınız.",
        bodyTemplate: "Düşüncelerinizi nezaket ve taktikle sunar, kimsenin köşeye sıkışmış veya tehdit altında hissetmemesini sağlarsınız.",
        alternativeTemplate: "Başkaları bazen huzuru korumak adına gerçekleri halının altına süpürdüğünüzü düşünebilir."
      },
      "insight-observant": {
        title: "Dikkatli bir gözlemcisiniz.",
        bodyTemplate: "İyice dinler ve konuşmadan önce ortamı analiz edersiniz. Katkılarınız bu yüzden hep değerlidir.",
        alternativeTemplate: "Hızlı etkileşimleri sevenler, sessizliğinizi eleştirel bir yargı gibi görebilir."
      },
      "insight-assertive": {
        title: "Liderliği ve kararları üstlenirsiniz.",
        bodyTemplate: "Kendinize güvenerek yön belirler ve grupları net hedeflere doğru yönlendirirsiniz.",
        alternativeTemplate: "Başkaları sizi baskın bulabilir ve kendi katkılarının dinlenmediğini hissedebilir."
      },
      "insight-receptive": {
        title: "İş birliğine son derece açıksınız.",
        bodyTemplate: "Başkalarının görüşlerine değer verir, ortak kararlara uyar ve kolektif çözümleri desteklersiniz.",
        alternativeTemplate: "Bu durum sizi bazen pasif gösterebilir ve kendi sınırlarınızı korumanızı zorlaştırabilir."
      },
      "insight-flexible": {
        title: "Değişimlere kolayca ayak uydurursunuz.",
        bodyTemplate: "Yeni durumlar karşısında hızlıca esner, plan değişikliklerini sorunsuzca kabul edersiniz.",
        alternativeTemplate: "Bazen bu durum tutarsızlık veya net bir yönünüzün olmaması şeklinde algılanabilir."
      },
      "insight-consistent": {
        title: "Güven veren bir istikrar sağlarsınız.",
        bodyTemplate: "Verilen sözleri tutar, etrafınıza düzenli ve öngörülebilir bir çerçeve sunarsınız.",
        alternativeTemplate: "Beklenmedik durumlarda esneklik göstermekte zorlanabilir veya katı görünebilirsiniz."
      },
      "insight-fast": {
        title: "Yüksek bir hızla hareket edersiniz.",
        bodyTemplate: "Hızlı kararlar alır, projeleri ve sohbetleri canlı tutarsınız.",
        alternativeTemplate: "Hızınız acelecilik gibi görünebilir ve başkalarını baskı altında hissettirebilir."
      },
      "insight-deliberate": {
        title: "Sabırlı ve temkinlisiniz.",
        bodyTemplate: "Detayları sakince analiz etmeyi ve adımları güvenli atmayı tercih edersiniz.",
        alternativeTemplate: "Bu tedbirliliğiniz, sabırsız kişilerce yavaşlık veya kararsızlık olarak yorumlanabilir."
      },
      "insight-task": {
        title: "Logik sonuçlara odaklanırsınız.",
        bodyTemplate: "Durumları nesnel değerlendirir, iş başarısını kişisel ilişkilere tercih edersiniz.",
        alternativeTemplate: "Grup içindeki duyguları göz ardı ettiğinizde soğuk veya ilgisiz görünebilirsiniz."
      },
      "insight-relationship": {
        title: "Grup içi uyuma çok önem verirsiniz.",
        bodyTemplate: "Kırgınlıkları önlemek adına ortamın havasını ve ilişkileri hassas şekilde gözetirsiniz.",
        alternativeTemplate: "Pragmatik bakanlar, duygularla çok uğraştığınızı ve iş verimini düşürdüğünüzü düşünebilir."
      },
      "insight-vulnerable": {
        title: "Samimiyetinizle güven inşa edersiniz.",
        bodyTemplate: "Hatalarınızı ve kaygılarınızı açıkça paylaşır, insanları size açılmaya davet edersiniz.",
        alternativeTemplate: "Bu açıklık bazen zayıflık veya profesyonel sınırların aşılması olarak görülebilir."
      },
      "insight-stoic": {
        title: "Baskı altında sarsılmaz kalırsınız.",
        bodyTemplate: "Kişisel kaygılarınızı kendinize saklar, etrafınıza güven ve kararlılık yayarsınız.",
        alternativeTemplate: "Mesafeli görünmeniz, derin samimiyet kurulmasını zorlaştırabilir."
      },
      "insight-confrontational": {
        title: "Sorunlarla doğrudan yüzleşirsiniz.",
        bodyTemplate: "Açık bir tartışmanın en sağlıklı çözüm yolu olduğuna inanarak gerilimin üzerine gidersiniz.",
        alternativeTemplate: "Doğrudanlığınız ürkütücü olabilir veya kavgacı olarak algılanabilir."
      },
      "insight-harmonizing": {
        title: "Gerilimleri yatıştırırsınız.",
        bodyTemplate: "Çatışmaları büyütmeden diplomatik ve sabırlı yollarla çözersiniz.",
        alternativeTemplate: "Başkaları, geçici bir huzur adına gerçek sorunları örtbas ettiğinizi düşünebilir."
      },
      "insight-critique": {
        title: "Yüksek standartlar talep edersiniz.",
        bodyTemplate: "Gelişimi sağlamak adına hataları net şekilde gösteren yapıcı eleştiriler yaparsınız.",
        alternativeTemplate: "Geri bildirimleriniz, teşvik bekleyen insanlar için sert ve moral bozucu olabilir."
      },
      "insight-encouraging": {
        title: "Başkalarına güven aşılarsınız.",
        bodyTemplate: "Çabayı takdir eder, konuşma güvenliğine dikkat eder ve önerileri yumuşak sunarsınız.",
        alternativeTemplate: "Eleştirileri çok sarmaladığınız için net olmamakla eleştirilebilirsiniz."
      },
      "insight-playful": {
        title: "Ortama neşe ve espri katarsınız.",
        bodyTemplate: "Stresi azaltmak ve bağ kurmak için mizah ve takılmaları kullanırsınız.",
        alternativeTemplate: "Ciddiyet gerektiren anlarda bu şakalarınız yersiz bulunabilir."
      },
      "insight-gravitas": {
        title: "Ağırbaşlılığınızla saygı uyandırırsınız.",
        bodyTemplate: "Konulara ve insanlara saygı ve ciddiyetle yaklaşarak kaliteyi garantilersiniz.",
        alternativeTemplate: "Biraz resmi veya mesafeli görünebilir, insanların yanınızda rahatlamasını zorlaştırabilirsiniz."
      },
      "insight-expressive": {
        title: "Sıcaklığınızı dışa vurursunuz.",
        bodyTemplate: "İlgi ve empatinizi coşkuyla paylaşır, insanları değerli hissettirirsiniz.",
        alternativeTemplate: "Çok rasyonel bakanlar, bu yüksek duygusallığınızı subjektif bulabilir."
      }
    },
    questions: {
      "q-001": {
        prompt: "Bir akşam yemeğinde, birisi tarihi bir olay veya film hakkında tamamen yanlış olduğunu bildiğiniz bir bilgiyi kendinden emin bir şekilde savunuyor.",
        instructions: "Bir ana eylem ve en fazla iki ikincil eylem seçin.",
        options: {
          "q-001-a": "Hemen müdahale edip doğrusunu paylaşmak.",
          "q-001-b": "Meraklı sorular sorarak çelişkiyi kendisinin fark etmesini sağlamak.",
          "q-001-c": "Sessiz kalıp telefonunuzdan gizlice doğrusunu aramak.",
          "q-001-d": "Şakaya vurmak, ortamı yumuşatmak veya konuyu değiştirmek."
        }
      },
      "q-002": {
        prompt: "Yakın bir arkadaşınız karmaşık bir kişisel sorununu anlatıyor ve detayları karıştırırken omuzlarının gerildiğini fark ediyorsunuz.",
        instructions: "Bir ana yanıt ve en fazla iki ikincil yanıt seçin.",
        options: {
          "q-002-a": "Zaman çizelgesini netleştirmesine yardım etmek için çelişkiyi doğrudan belirtmek.",
          "q-002-b": "Detay hatalarını önemsemeden sadece dinlemek ve duygusal destek sunmak.",
          "q-002-c": "Bitirmesini bekleyip sakince 'Önce biraz düşünmek ister misin?' diye sormak."
        }
      },
      "q-003": {
        prompt: "Yalnızca ev sahibini tanıdığınız büyük bir ev partisine geliyorsunuz ancak ev sahibi misafirleri karşılamakla çok meşgul.",
        instructions: "Size en uygun olan seçeneği seçin.",
        options: {
          "q-003-a": "Doğrudan bir gruba yaklaşıp kendinizi tanıtarak sohbete dahil olmak.",
          "q-003-b": "Yiyecek/içecek bölümünün yanında beklemek, etrafı gözlemlemek ve birinin yaklaşmasını beklemek."
        }
      },
      "q-004": {
        prompt: "Arkadaşlarınızla bir hafta sonu gezisi planlıyorsunuz ve bir kişi onayını geciktirerek konaklama rezervasyonunu engelliyor.",
        instructions: "Bir ana ve en fazla iki ikincil eylem seçin.",
        options: {
          "q-004-a": "Doğrudan mesaj atmak: 'Rezervasyonu 2 saat içinde yapıyorum. O zamana kadar onay vermezsen sensiz yer ayırtıyoruz.'",
          "q-004-b": "Özel olarak arayıp bir çekincesi, bütçe kısıtı veya başka bir sorunu olup olmadığını anlamak.",
          "q-004-c": "Ücretsiz iptal seçeneği olan bir oda ayırtmak ve ona her ihtimale karşı hallettiğimizi söylemek."
        }
      },
      "q-005": {
        prompt: "Bir arkadaşınız, ortak bir arkadaşınızın kendisini inciten davranışı hakkında size dert yanıyor.",
        instructions: "Size en uygun olan seçeneği seçin.",
        options: {
          "q-005-a": "Onu tamamen desteklemek: duygularını onaylamak ve öfkesine ortak olmak.",
          "q-005-b": "Tarafsız bir bakış açısı sunmak: öfkesini yatıştırmak için diğer arkadaşın olası bakış açısını açıklamak."
        }
      },
      "q-006": {
        prompt: "Bir arkadaşınız çılgın ve pek pratik olmayan bir planını paylaşıyor (örn. önümüzdeki ay dünya turuna çıkmak için bir okul otobüsü satın almak).",
        instructions: "Bir ana ve en fazla iki ikincil eylem seçin.",
        options: {
          "q-006-a": "Karşılaşacağı büyük lojistik ve finansal zorlukları hemen nazikçe belirtmek.",
          "q-006-b": "Coşkuyla plana dahil olmak: 'Harika! Sarıya boyayıp üzerine de...' demek.",
          "q-006-c": "Sessizce dinlemek, ne kadar ciddi olduğunu tartmak ve daha sonra dengeli bir değerlendirme sunmak."
        }
      },
      "q-007": {
        prompt: "Yabancı bir mahallede, internet veya harita olmadan bir restoran seçmeniz gerekiyor.",
        instructions: "Bir seçenek belirleyin.",
        options: {
          "q-007-a": "Kalabalık ilk restorana girmek – herhangi bir karar, aç karnına sokaklarda dolaşmaktan iyidir.",
          "q-007-b": "Camlardan içeri göz atmak, fiziksel menüleri okumak ve en çekici görüneni seçmek."
        }
      },
      "q-008": {
        prompt: "Bir arkadaşınız, haftalarca uğraştığı yaratıcı bir taslağı (öykü veya tablo gibi) incelemenizi istiyor.",
        instructions: "Bir ana ve en fazla iki ikincil eylem seçin.",
        options: {
          "q-008-a": "Neyin düzeltilmesi gerektiğini listeleyerek dürüst ve yapıcı bir eleştiri sunmak.",
          "q-008-b": "Daha çok çabasını övmeye odaklanmak ve önerileri oldukça yumuşak tutmak.",
          "q-008-c": "Paylaşmadan önce ona sormak: 'Teşvik edilmek mi istiyorsun yoksa detaylı bir kritik mi arıyorsun?'"
        }
      }
    }
  }
};
