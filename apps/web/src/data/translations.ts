export type Language = 'en' | 'fr' | 'de' | 'ru' | 'tr';

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    welcomeTitle: "MindPrint",
    welcomeSubtitle: "How do others experience you?",
    welcomeDesc: "Discover the behavioral blindspots you cannot easily see from the inside. Through 12 adaptive, situation-based questions, MindPrint maps your social presence, directness, and reflection.",
    anonymous: "Completely Anonymous (no PII or emails collected)",
    localFirst: "Local-First Storage (data is private to your device)",
    crossDevice: "Cross-Device Sync (restore sessions anytime)",
    beginBtn: "Begin Discovery",
    returningUser: "Returning user? ",
    loginRestore: "Log in to restore data",
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
  fr: {
    welcomeTitle: "MindPrint",
    welcomeSubtitle: "Comment les autres vous perçoivent-ils ?",
    welcomeDesc: "Découvrez les angles morts comportementaux que vous ne pouvez pas facilement voir de l'intérieur. À travers 12 questions adaptatives basées sur des situations, MindPrint cartographie votre présence sociale, votre directivité et votre réflexion.",
    anonymous: "Complètement anonyme (aucune donnée personnelle ou email collecté)",
    localFirst: "Stockage local (les données sont privées sur votre appareil)",
    crossDevice: "Synchronisation multi-appareils (restaurez vos sessions à tout moment)",
    beginBtn: "Commencer la découverte",
    returningUser: "Déjà utilisateur ? ",
    loginRestore: "Se connecter pour restaurer les données",
    loginTitle: "Se Connecter",
    loginDesc: "Entrez votre nom d'utilisateur et votre mot de passe pour restaurer et synchroniser vos évaluations.",
    usernamePlaceholder: "Nom d'utilisateur",
    passwordPlaceholder: "Mot de passe",
    cancelBtn: "Annuler",
    resultsTitle: "Votre MindPrint",
    resultsDesc: "C'est ainsi que vous êtes perçu par les autres dans les dynamiques sociales et professionnelles.",
    primaryTitle: "Archétype Primaire",
    secondaryTitle: "Archétype Secondaire",
    loveTitle: "💚 Ce que les autres aiment",
    dislikeTitle: "💔 Ce que les autres n'aiment pas",
    sayTitle: "Ce que les autres disent de vous",
    dimensionsTitle: "Vos dimensions de profil",
    insightsTitle: "Analyses fondamentales",
    upgradeTitle: "Sauvegarder le résultat de manière permanente",
    upgradeDesc: "Choisissez un nom d'utilisateur et un mot de passe pour sécuriser vos résultats. Nous respectons votre vie privée et ne collectons pas d'adresses e-mail.",
    upgradeBtn: "Créer un compte permanent",
    alreadyRegistered: "Déjà inscrit ?",
    loginSyncBtn: "Se connecter pour synchroniser",
    viewResultsBtn: "Voir les résultats",
    syncStatusOnline: "En ligne",
    syncStatusOffline: "Hors ligne",
    loadingJourney: "Chargement du parcours...",
    questionProgress: "Question {current} sur {total}",
    continueBtn: "Continuer",
    selectOptionMsg: "Sélectionnez une ou plusieurs options pour continuer",
    congratulations: "Félicitations !",
    assessmentComplete: "Vous avez terminé votre parcours d'évaluation.",
    socraticExplanation: "Parce que vous guidez les conversations par des questions indirectes, les autres peuvent vous percevoir comme passif-agressif, indécis ou lent à prendre position. Ils peuvent penser que vous masquez votre véritable opinion.",
    explorerExplanation: "Votre approche franche et autonome peut donner aux autres l'impression que vous êtes distant, peu collaboratif ou excessivement critique. Ils peuvent avoir l'impression que vous vous isolez ou rejetez le groupe.",
    strategistExplanation: "Parce que vous analysez profondément les interactions et restez silencieux, les autres peuvent interpréter votre silence comme un jugement critique, de la désapprobation ou un désintérêt total pour le groupe.",
    challengerExplanation: "L'association de votre grande franchise et de votre forte énergie peut donner aux autres l'impression que vous êtes abrasif, conflictuel ou écrasant. Ils peuvent se sentir attaqués même si vous agissez avec bienveillance.",
    dimensions: {
      directness: { name: "Directivité", lowPole: "Diplomatique & Indirect", highPole: "Franc & Direct" },
      social_energy: { name: "Énergie Sociale", lowPole: "Réservé & Introspectif", highPole: "Sociable & Expressif" },
      reflectiveness: { name: "Réflexion", lowPole: "Orienté Action & Spontané", highPole: "Délibéré & Analytique" },
      expressiveness: { name: "Expressivité", lowPole: "Objectif & Réservé", highPole: "Chaleureux & Expressif" },
      assertiveness: { name: "Assertivité", lowPole: "Réceptif & Accommodant", highPole: "Assertif & Dominant" },
      adaptability: { name: "Adaptabilité", lowPole: "Constant & Ancré", highPole: "Flexible & Agile" },
      pace: { name: "Rythme", lowPole: "Délibéré & Patient", highPole: "Rapide & Urgent" },
      focus_orientation: { name: "Orientation du Focus", lowPole: "Orienté Tâche & Logique", highPole: "Orienté Relation & Harmonie" },
      vulnerability: { name: "Vulnérabilité", lowPole: "Stoïque & Gardé", highPole: "Vulnérable & Ouvert" },
      conflict_style: { name: "Engagement Conflits", lowPole: "Harmonisation & Évitement", highPole: "Conflictuel & Débat" },
      feedback_style: { name: "Style de Feedback", lowPole: "Critique & Correction", highPole: "Encouragement & Soutien" },
      playfulness: { name: "Esprit Ludique", lowPole: "Sérieux & Gravité", highPole: "Enjoué & Léger" }
    },
    archetypes: {
      "socratic-connector": {
        name: "Le Connecteur Socratique",
        description: "Vous vous connectez profondément grâce à des questions réfléchies et une présence diplomatique chaleureuse, préférant la collaboration et le dialogue aux ordres directs."
      },
      "independent-explorer": {
        name: "L'Explorateur Indépendant",
        description: "Vous appréciez l'autonomie et l'action directe, explorant les idées de manière indépendante et exprimant votre point de vue avec franchise et sans hésitation."
      },
      "quiet-strategist": {
        name: "Le Stratège Silencieux",
        description: "Vous observez profondément et agissez avec une planification délibérée, offrant des perspectives mûrement réfléchies et maintenant une présence calme et introspective."
      },
      "empathic-challenger": {
        name: "Le Défiant Empathique",
        description: "Vous combinez une honnêteté brute avec un engagement social intense, remettant directement en question le consensus du groupe par souci d'amélioration."
      }
    },
    insights: {
      "insight-socratic": {
        title: "Vous guidez les conversations plutôt que d'imposer vos idées.",
        bodyTemplate: "Vous avez tendance à utiliser des questions pour inviter à la réflexion, permettant aux autres d'arriver à des prises de conscience par eux-mêmes.",
        alternativeTemplate: "Parfois, certains peuvent trouver cette approche indirecte un peu lente et préférer que vous exprimiez directement votre avis."
      },
      "insight-candid": {
        title: "Votre transparence est rafraîchissante.",
        bodyTemplate: "Vous parlez clairement et sans filtre. Les gens savent exactement à quoi s'en tenir avec vous, ce qui fait de vous une personne de confiance.",
        alternativeTemplate: "Dans les situations tendues, votre franchise absolue peut être perçue comme de la brusquerie ou un manque de tact."
      },
      "insight-diplomatic": {
        title: "Vous êtes un maître de la diplomatie sociale.",
        bodyTemplate: "Vous exprimez vos pensées avec douceur et tact, veillant à ce que personne ne se sente menacé ou mis en difficulté.",
        alternativeTemplate: "Les autres peuvent parfois avoir l'impression que vous évitez les vérités qui fâchent pour préserver la paix à tout prix."
      },
      "insight-observant": {
        title: "Vous êtes un observateur attentif.",
        bodyTemplate: "Vous écoutez attentivement et analysez les interactions en profondeur avant d'intervenir, ce qui donne beaucoup de poids à vos remarques.",
        alternativeTemplate: "Les personnes habituées à des échanges rapides peuvent interpréter votre silence comme un jugement critique."
      },
      "insight-assertive": {
        title: "Vous incarnez l'autorité et menez les décisions.",
        bodyTemplate: "Vous prenez sereinement les commandes, affirmez vos choix et orientez le groupe par souci d'efficacité.",
        alternativeTemplate: "Certains peuvent vous trouver directif ou dominant, avec le sentiment que leurs idées sont ignorées."
      },
      "insight-receptive": {
        title: "Vous êtes très collaboratif et à l'écoute.",
        bodyTemplate: "Vous accordez une grande valeur aux opinions des autres, vous ralliez volontiers au consensus et favorisez les choix collectifs.",
        alternativeTemplate: "Certains peuvent vous percevoir comme passif ou hésitant lorsqu'il s'agit de défendre vos propres besoins."
      },
      "insight-flexible": {
        title: "Vous vous adaptez facilement aux changements.",
        bodyTemplate: "Vous réagissez avec souplesse aux imprévus, accueillant la nouveauté et la spontanéité sans aucune rigidité.",
        alternativeTemplate: "Les autres peuvent parfois vous trouver instable ou changeant trop souvent de cap."
      },
      "insight-consistent": {
        title: "Vous apportez une stabilité rassurante.",
        bodyTemplate: "Vous respectez scrupuleusement les engagements pris et apportez un cadre structuré et fiable à votre entourage.",
        alternativeTemplate: "Vous pouvez être perçu comme rigide ou réticent au changement face à des imprévus."
      },
      "insight-fast": {
        title: "Vous agissez avec beaucoup de réactivité.",
        bodyTemplate: "Vous prenez des décisions rapides et maintenez un rythme dynamique dans les projets comme les discussions.",
        alternativeTemplate: "Votre rapidité peut parfois sembler précipitée ou impulsive pour ceux qui ont besoin de temps."
      },
      "insight-deliberate": {
        title: "Vous êtes calme et réfléchi.",
        bodyTemplate: "Vous préférez prendre votre temps, analyser chaque détail et sécuriser les étapes pour avancer correctement.",
        alternativeTemplate: "Votre prudence peut être perçue comme de la lenteur ou de l'hésitation."
      },
      "insight-task": {
        title: "Vous vous concentrez sur l'atteinte des objectifs.",
        bodyTemplate: "Vous donnez la priorité à la logique, au respect des délais et aux résultats, en mettant de côté le relationnel.",
        alternativeTemplate: "Les autres peuvent vous trouver froid ou distant face aux sentiments du groupe."
      },
      "insight-relationship": {
        title: "Vous veillez à la cohésion de l'équipe.",
        bodyTemplate: "Vous accordez une importance capitale au bien-être, à l'entente et au climat affectif du groupe.",
        alternativeTemplate: "Les esprits pragmatiques peuvent penser que vous privilégiez les sentiments au détriment de l'efficacité."
      },
      "insight-vulnerable": {
        title: "Vous créez du lien par votre sincérité.",
        bodyTemplate: "Vous partagez sans tabou vos erreurs et vos doutes, ce qui humanise les relations et invite les autres à se confier.",
        alternativeTemplate: "Cette transparence peut parfois être ressentie comme une fragilité ou un partage excessif."
      },
      "insight-stoic": {
        title: "Vous affichez un calme imperturbable.",
        bodyTemplate: "Vous gardez vos émotions pour vous, offrant un repère stable et objectif même dans la tempête.",
        alternativeTemplate: "Cette réserve peut vous faire paraître distant ou difficile à cerner, freinant la création d'une complicité forte."
      },
      "insight-confrontational": {
        title: "Vous abordez les tensions de front.",
        bodyTemplate: "Vous n'hésitez pas à poser les sujets difficiles sur la table, convaincu qu'un débat franc est le meilleur moyen d'avancer.",
        alternativeTemplate: "Votre approche directe peut intimider ou être perçue comme inutilement agressive."
      },
      "insight-harmonizing": {
        title: "Vous apaisez les tensions naturelles.",
        bodyTemplate: "Vous utilisez la diplomatie et le calme pour désamorcer les conflits et maintenir une ambiance sereine.",
        alternativeTemplate: "Les autres peuvent penser que vous fuyez les débats nécessaires pour préserver une fausse tranquillité."
      },
      "insight-critique": {
        title: "Vous poussez vers le haut par l'exigence.",
        bodyTemplate: "Vous donnez des avis précis et soulignez immédiatement les points faibles pour aider à s'améliorer.",
        alternativeTemplate: "Vos retours peuvent sembler sévères ou décourageants pour ceux qui ont besoin d'encouragements."
      },
      "insight-encouraging": {
        title: "Vous donnez confiance par le soutien.",
        bodyTemplate: "Vous valorisez l'effort, veillez à la sécurité psychologique et proposez des pistes d'amélioration bienveillantes.",
        alternativeTemplate: "Certains peuvent penser que vous manquez de franchise en évitant les critiques directes."
      },
      "insight-playful": {
        title: "Vous apportez une touche de légèreté.",
        bodyTemplate: "Vous utilisez l'humour, la taquinerie et l'autodérision pour détendre l'atmosphère et créer de la complicité.",
        alternativeTemplate: "Vos plaisanteries peuvent être perçues comme un manque de sérieux dans des moments importants."
      },
      "insight-gravitas": {
        title: "Vous inspirez le respect par votre sérieux.",
        bodyTemplate: "Vous abordez chaque sujet avec professionnalisme et dignité, garantissant des échanges de qualité.",
        alternativeTemplate: "Les autres peuvent vous trouver distant ou rigide, avec la sensation qu'ils ne peuvent pas se détendre avec vous."
      },
      "insight-expressive": {
        title: "Vous communiquez votre chaleur naturelle.",
        bodyTemplate: "Vous exprimez vos émotions avec enthousiasme et empathie, faisant en sorte que chacun se sente valorisé.",
        alternativeTemplate: "Les esprits très cartésiens peuvent trouver votre communication un peu trop sensible ou subjective."
      }
    },
    questions: {
      "q-001": {
        prompt: "Lors d'un dîner, une personne affirme avec assurance un fait sur un film ou un événement historique que vous savez faux.",
        instructions: "Sélectionnez une action principale et jusqu'à deux actions secondaires facultatives.",
        options: {
          "q-001-a": "La corriger immédiatement et partager les faits exacts.",
          "q-001-b": "Poser des questions curieuses pour l'amener à réaliser la contradiction d'elle-même.",
          "q-001-c": "Garder le silence et faire une recherche discrète sur votre téléphone.",
          "q-001-d": "Prendre cela à la rigolade, faire une blague ou changer de sujet."
        }
      },
      "q-002": {
        prompt: "Un ami proche partage un dilemme personnel complexe, et vous remarquez que ses épaules se crispent alors qu'il s'embrouille.",
        instructions: "Sélectionnez une réponse principale et jusqu'à deux réponses secondaires.",
        options: {
          "q-002-a": "Lui signaler directement l'incohérence pour l'aider à clarifier sa chronologie.",
          "q-002-b": "L'écouter simplement et lui offrir une validation émotionnelle, sans relever les erreurs de détails.",
          "q-002-c": "Attendre qu'il ait fini, puis lui demander calmement s'il souhaite d'abord un moment de réflexion."
        }
      },
      "q-003": {
        prompt: "Vous arrivez à une grande pendaison de crémaillère où vous ne connaissez que l'hôte, très occupé à accueillir les invités.",
        instructions: "Sélectionnez l'option qui vous correspond le mieux.",
        options: {
          "q-003-a": "Aller directement vers un groupe, vous présenter et vous joindre à la discussion.",
          "q-003-b": "Rester près du buffet, observer la pièce et attendre que quelqu'un vous aborde."
        }
      },
      "q-004": {
        prompt: "Vous organisez un voyage avec des amis, et une personne tarde à confirmer, bloquant la réservation du logement.",
        instructions: "Sélectionnez une action principale et jusqu'à deux actions secondaires.",
        options: {
          "q-004-a": "Envoyer un message direct : 'Réservation dans 2 heures. Sans confirmation, ce sera sans toi.'",
          "q-004-b": "L'appeler en privé pour comprendre s'il y a un doute, un problème de budget ou autre.",
          "q-004-c": "Réserver une chambre avec annulation gratuite et lui dire qu'on a géré le coup pour elle."
        }
      },
      "q-005": {
        prompt: "Un ami se confie à vous au sujet du comportement d'un ami commun qui l'a blessé.",
        instructions: "Sélectionnez l'option qui vous correspond le mieux.",
        options: {
          "q-005-a": "Le soutenir pleinement : valider ses sentiments et abonder dans son sens.",
          "q-005-b": "Lui offrir une vision neutre : expliquer le point de vue possible de l'autre ami pour calmer le jeu."
        }
      },
      "q-006": {
        prompt: "Un ami partage un projet fou et peu réaliste (ex: acheter un bus scolaire pour faire le tour du monde le mois prochain).",
        instructions: "Sélectionnez une action principale et jusqu'à deux actions secondaires.",
        options: {
          "q-006-a": "Lui faire remarquer gentiment les énormes défis logistiques et financiers.",
          "q-006-b": "Entrer dans son jeu avec enthousiasme : 'Génial ! On pourrait le peindre en jaune et...' ",
          "q-006-c": "L'écouter calmement, jauger s'il est sérieux et proposer un avis équilibré plus tard."
        }
      },
      "q-007": {
        prompt: "Vous devez choisir un restaurant dans un quartier inconnu sans aucune connexion internet pour lire les avis.",
        instructions: "Sélectionnez une option.",
        options: {
          "q-007-a": "Entrer dans le premier restaurant animé : n'importe quel choix vaut mieux que tourner en rond le ventre vide.",
          "q-007-b": "Regarder par la fenêtre, lire les menus affichés et choisir l'option la plus inspirante."
        }
      },
      "q-008": {
        prompt: "Un ami vous demande votre avis sur un projet créatif (nouvelle, peinture) sur lequel il a travaillé pendant des semaines.",
        instructions: "Sélectionnez une action principale et jusqu'à deux actions secondaires.",
        options: {
          "q-008-a": "Lui donner un avis honnête et constructif, en listant précisément ce qui doit être amélioré.",
          "q-008-b": "Insister sur les encouragements et formuler vos critiques de manière très douce.",
          "q-008-c": "Lui demander : 'Tu as besoin d'encouragements ou d'un retour critique détaillé ?' avant de parler."
        }
      }
    }
  },
  de: {
    welcomeTitle: "MindPrint",
    welcomeSubtitle: "Wie nehmen andere dich wahr?",
    welcomeDesc: "Entdecke die blinden Flecken in deinem Verhalten, die du von innen heraus schwer erkennen kannst. Durch 12 adaptive, situationsbasierte Fragen visualisiert MindPrint deine soziale Präsenz, Direktheit und Reflexion.",
    anonymous: "Völlig anonym (keine personenbezogenen Daten oder E-Mails)",
    localFirst: "Lokaler Speicher (Daten verbleiben privat auf deinem Gerät)",
    crossDevice: "Geräteübergreifende Synchronisation (Sitzungen jederzeit wiederherstellen)",
    beginBtn: "Entdeckung starten",
    returningUser: "Bereits registriert? ",
    loginRestore: "Anmelden, um Daten wiederherzustellen",
    loginTitle: "Anmelden",
    loginDesc: "Gib deinen Benutzernamen und dein Passwort ein, um deine Profile wiederherzustellen.",
    usernamePlaceholder: "Benutzername",
    passwordPlaceholder: "Passwort",
    cancelBtn: "Abbrechen",
    resultsTitle: "Dein MindPrint",
    resultsDesc: "So wirst du von anderen in sozialen und beruflichen Situationen wahrgenommen.",
    primaryTitle: "Primärer Archetyp",
    secondaryTitle: "Sekundärer Archetyp",
    loveTitle: "💚 Was andere an dir schätzen",
    dislikeTitle: "💔 Was andere an dir stört",
    sayTitle: "Wie andere dich beschreiben würden",
    dimensionsTitle: "Deine Profil-Dimensionen",
    insightsTitle: "Kern-Erkenntnisse",
    upgradeTitle: "Ergebnisse dauerhaft speichern",
    upgradeDesc: "Wähle einen Benutzernamen und ein Passwort, um deine Ergebnisse zu sichern. Wir erfassen keine E-Mail-Adressen.",
    upgradeBtn: "Dauerhaftes Konto erstellen",
    alreadyRegistered: "Bereits registriert?",
    loginSyncBtn: "Anmelden und synchronisieren",
    viewResultsBtn: "Ergebnisse anzeigen",
    syncStatusOnline: "Online",
    syncStatusOffline: "Offline",
    loadingJourney: "Lade Reise...",
    questionProgress: "Frage {current} von {total}",
    continueBtn: "Weiter",
    selectOptionMsg: "Wähle Antwortoption(en) aus, um fortzufahren",
    congratulations: "Herzlichen Glückwunsch!",
    assessmentComplete: "Du hast deine Entdeckungsreise abgeschlossen.",
    socraticExplanation: "Da du Gespräche durch indirekte Fragen lenkst, könnten andere dich als passiv-aggressiv, unentschlossen oder zögerlich wahrnehmen. Man hat eventuell das Gefühl, dass du deine wahre Meinung zurückhältst.",
    explorerExplanation: "Deine direkte, selbstständige Art kann auf andere distanziert, unkooperativ oder übermäßig kritisch wirken. Man könnte das Gefühl haben, dass du dich abkapselst oder die Gruppe ablehnst.",
    strategistExplanation: "Da du Interaktionen tiefgehend analysierst und schweigst, könnten andere dein Schweigen als kritisches Urteil, Missbilligung oder Desinteresse an der Gruppe missverstehen.",
    challengerExplanation: "Die Kombination aus hoher Ehrlichkeit und starker Energie kann auf andere barsch, konfrontativ oder erdrückend wirken. Man fühlt sich eventuell angegriffen, selbst wenn du aus Fürsorge handelst.",
    dimensions: {
      directness: { name: "Direktheit", lowPole: "Diplomatisch & Indirekt", highPole: "Offen & Direkt" },
      social_energy: { name: "Soziale Energie", lowPole: "Zurückhaltend & Introspektiv", highPole: "Kontaktfreudig & Expressiv" },
      reflectiveness: { name: "Reflexion", lowPole: "Handlungsorientiert & Spontan", highPole: "Bedacht & Analytisch" },
      expressiveness: { name: "Ausdrucksstärke", lowPole: "Objektiv & Zurückhaltend", highPole: "Warm & Expressiv" },
      assertiveness: { name: "Durchsetzungsfähigkeit", lowPole: "Empfänglich & Entgegenkommend", highPole: "Bestimmt & Dominant" },
      adaptability: { name: "Anpassungsfähigkeit", lowPole: "Beständig & Bodenständig", highPole: "Flexibel & Agil" },
      pace: { name: "Tempo", lowPole: "Bedacht & Geduldig", highPole: "Schnell & Dringlich" },
      focus_orientation: { name: "Fokus-Ausrichtung", lowPole: "Aufgaben- & Logikfokussiert", highPole: "Beziehungs- & Harmonieorientiert" },
      vulnerability: { name: "Verletzlichkeit", lowPole: "Stoisch & Distanziert", highPole: "Verletzlich & Offen" },
      conflict_style: { name: "Konfliktverhalten", lowPole: "Harmonisierend & Vermeidend", highPole: "Konfrontativ & Diskutierend" },
      feedback_style: { name: "Feedback-Stil", lowPole: "Kritisch & Korrigierend", highPole: "Unterstützend & Ermutigend" },
      playfulness: { name: "Spielerische Art", lowPole: "Ernsthaft & Würdevoll", highPole: "Spielerisch & Unbeschwert" }
    },
    archetypes: {
      "socratic-connector": {
        name: "Der Sokratische Verbinder",
        description: "Du baust tiefe Verbindungen durch kluge Fragen und eine warme, diplomatische Präsenz auf. Zusammenarbeit geht dir über klare Anweisungen."
      },
      "independent-explorer": {
        name: "Der Unabhängige Entdecker",
        description: "Du legst großen Wert auf Autonomie und direktes Handeln, gehst eigene Wege und sprichst deine Meinung ohne Zögern offen aus."
      },
      "quiet-strategist": {
        name: "Der Stille Stratege",
        description: "Du beobachtest intensiv und handelst nach sorgfältiger Planung. Mit durchdachten Impulsen wahrst du eine ruhige, nachdenkliche Präsenz."
      },
      "empathic-challenger": {
        name: "Der Empathische Herausforderer",
        description: "Du verbindest ehrliche Direktheit mit hohem sozialem Engagement. Aus echtem Interesse an Verbesserung hinterfragst du den Gruppenkonsens."
      }
    },
    insights: {
      "insight-socratic": {
        title: "Du lenkst Gespräche, statt deine Ansichten aufzudrängen.",
        bodyTemplate: "Du stellst Fragen, um zum Nachdenken anzuregen, sodass andere selbst auf die Lösung kommen. Man nimmt dich als kooperativ wahr.",
        alternativeTemplate: "Manchmal kann diese indirekte Art als zögerlich empfunden werden, wenn man sich eine klare Aussage wünscht."
      },
      "insight-candid": {
        title: "Deine Offenheit ist erfrischend.",
        bodyTemplate: "Du sprichst klar und ungefiltert aus, was du denkst. Andere wissen bei dir woran sie sind, was dich im Team sehr verlässlich macht.",
        alternativeTemplate: "In emotionalen Situationen kann deine Direktheit leicht als verletzend oder unsensibel wahrgenommen werden."
      },
      "insight-diplomatic": {
        title: "Du besitzt großes diplomatisches Geschick.",
        bodyTemplate: "Du formulierst deine Gedanken sehr rücksichtsvoll und sorgst dafür, dass sich niemand angegriffen fühlt.",
        alternativeTemplate: "Gelegentlich entsteht der Eindruck, dass du schwierigen Wahrheiten aus dem Weg gehst, um den Frieden zu wahren."
      },
      "insight-observant": {
        title: "Du bist ein genauer Beobachter.",
        bodyTemplate: "Du hörst gut zu und analysierst Situationen tiefgehend, bevor du dich äußerst. Dadurch haben deine Beiträge stets Gewicht.",
        alternativeTemplate: "Menschen, die schnelle Interaktionen bevorzugen, deuten deine Stille manchmal als Distanzierung."
      },
      "insight-assertive": {
        title: "Du übernimmst gern die Initiative und Führung.",
        bodyTemplate: "Du triffst Entscheidungen mit Selbstvertrauen und bringst Gruppen strukturiert voran.",
        alternativeTemplate: "Andere können dich als dominant empfinden und das Gefühl haben, dass ihre Beiträge überhört werden."
      },
      "insight-receptive": {
        title: "Du bist sehr teamorientiert und offen.",
        bodyTemplate: "Du legst großen Wert auf die Meinungen anderer, fügst dich dem Konsens und stärkst das Gemeinschaftsgefühl.",
        alternativeTemplate: "Manchmal wirkst du dadurch passiv oder scheust dich, deine eigenen Interessen zu vertreten."
      },
      "insight-flexible": {
        title: "Du gehst flexibel mit Veränderungen um.",
        bodyTemplate: "Du passt dich neuen Gegebenheiten schnell an und nimmst Spontaneität ohne Reibungsverluste an.",
        alternativeTemplate: "Gelegentlich wirkst du dadurch unstrukturiert oder es fehlt dir an klarer Richtung."
      },
      "insight-consistent": {
        title: "Du sorgst für verlässliche Struktur.",
        bodyTemplate: "Du hältst dich an getroffene Absprachen und bietest deinem Umfeld durch Kontinuität einen sicheren Rahmen.",
        alternativeTemplate: "Bei plötzlichen Änderungen kannst du starrsinnig oder unflexibel wirken."
      },
      "insight-fast": {
        title: "Du handelst mit hohem Tempo.",
        bodyTemplate: "Du entscheidest schnell und hältst Projekte und Diskussionen stets in Bewegung.",
        alternativeTemplate: "Deine Schnelligkeit kann hektisch wirken und andere das Gefühl geben, überrannt zu werden."
      },
      "insight-deliberate": {
        title: "Du bist geduldig und gründlich.",
        bodyTemplate: "Du analysierst Details in Ruhe und legst Wert darauf, dass Schritte fehlerfrei und sicher vollzogen werden.",
        alternativeTemplate: "Deine Vorsicht kann von dynamischeren Personen als Zögern oder Bremse ausgelegt werden."
      },
      "insight-task": {
        title: "Du fokussierst dich auf logische Ergebnisse.",
        bodyTemplate: "Du bewertest Situationen sachlich und stellst den Projekterfolg über soziale Befindlichkeiten.",
        alternativeTemplate: "Du kannst distanziert oder unempathisch wirken, wenn du emotionale Aspekte ausblendest."
      },
      "insight-relationship": {
        title: "Dir ist die Harmonie im Team sehr wichtig.",
        bodyTemplate: "Du achtest sensibel auf die Stimmung und das Miteinander in der Gruppe, um Reibungen zu vermeiden.",
        alternativeTemplate: "Pragmatiker könnten finden, dass du zu viel Zeit für Befindlichkeiten aufwendest und Ergebnisse vernachlässigst."
      },
      "insight-vulnerable": {
        title: "Du baust Vertrauen durch Ehrlichkeit auf.",
        bodyTemplate: "Du sprichst offen über eigene Fehler und Zweifel, was Beziehungen menschlicher macht und andere öffnet.",
        alternativeTemplate: "Diese Offenheit kann vereinzelt als mangelnde Professionalität oder emotionale Instabilität fehlgedeutet werden."
      },
      "insight-stoic": {
        title: "Du bewahrst auch unter Druck die Ruhe.",
        bodyTemplate: "Du hältst persönliche Sorgen zurück und strahlst Stabilität und Verlässlichkeit aus.",
        alternativeTemplate: "Du wirkst dadurch manchmal unnahbar oder schwer lesbar, was den Aufbau tiefer Nähe erschweren kann."
      },
      "insight-confrontational": {
        title: "Du sprichst Konflikte direkt an.",
        bodyTemplate: "Du scheust keine Spannungen und bist überzeugt, dass eine offene Klärung der beste Weg für die Gruppe ist.",
        alternativeTemplate: "Deine Direktheit kann einschüchternd wirken oder als Streitlust missverstanden werden."
      },
      "insight-harmonizing": {
        title: "Du schlichtest Streitigkeiten besonnen.",
        bodyTemplate: "Du nutzt Diplomatie und Geduld, um Spannungen abzubauen und für ein ruhiges Klima zu sorgen.",
        alternativeTemplate: "Man könnte dir vorwerfen, notwendige Konflikte auszusitzen, um eine oberflächliche Ruhe zu wahren."
      },
      "insight-critique": {
        title: "Du forderst andere durch hohes Engagement.",
        bodyTemplate: "Du gibst ehrliches, korrigierendes Feedback, um Schwachstellen aufzuzeigen und Qualität zu sichern.",
        alternativeTemplate: "Deine Rückmeldungen können streng oder demotivierend auf Menschen wirken, die Zuspruch brauchen."
      },
      "insight-encouraging": {
        title: "Du stärkst das Selbstvertrauen deines Umfelds.",
        bodyTemplate: "Du lobst Bemühungen, achtest auf emotionale Sicherheit und gibst behutsame Hinweise zur Verbesserung.",
        alternativeTemplate: "Gelegentlich wird dir mangelnde Klarheit vorgeworfen, weil du Kritik zu stark verpackst."
      },
      "insight-playful": {
        title: "Du bringst Humor und Leichtigkeit ein.",
        bodyTemplate: "Du nutzt lockere Sprüche und spielerische Neckereien, um Stress abzubauen und Kontakte zu knüpfen.",
        alternativeTemplate: "Manche Späße können als unangebracht oder gar verletzend empfunden werden, wenn Ernsthaftigkeit gefordert ist."
      },
      "insight-gravitas": {
        title: "Du überzeugst durch Professionalität.",
        bodyTemplate: "Du begegnest Themen und Mitmenschen mit großem Respekt und Ernsthaftigkeit, was dir viel Autorität verleiht.",
        alternativeTemplate: "Du wirkst dadurch mitunter steif oder unnahbar, sodass andere gehemmt sind, sich in deiner Gegenwart zu entspannen."
      },
      "insight-expressive": {
        title: "Du teilst deine Begeisterung spürbar mit.",
        bodyTemplate: "Du zeigst Gefühle und Mitgefühl deutlich, wodurch sich andere schnell willkommen und verstanden fühlen.",
        alternativeTemplate: "Sehr sachliche Personen könnten deine offene Emotionalität als zu subjektiv oder irrational bewerten."
      }
    },
    questions: {
      "q-001": {
        prompt: "Bei einer Feier behauptet jemand selbstbewusst eine falsche Tatsache zu einem Film oder geschichtlichen Ereignis, die du sicher besser weißt.",
        instructions: "Wähle eine primäre Aktion und bis zu zwei optionale sekundäre Aktionen.",
        options: {
          "q-001-a": "Sofort korrigieren und die richtigen Fakten mitteilen.",
          "q-001-b": "Neugierige Fragen stellen, bis die Person selbst den Widerspruch bemerkt.",
          "q-001-c": "Schweigen und die Fakten heimlich auf dem Handy nachschlagen.",
          "q-001-d": "Die Sache mit einem Witz überspielen oder das Thema wechseln."
        }
      },
      "q-002": {
        prompt: "Ein enger Freund erzählt von einem schwierigen Problem. Du merkst, dass er sich anspannt und Details seiner Geschichte verwechselt.",
        instructions: "Wähle eine Hauptantwort und bis zu zwei Nebenantworten.",
        options: {
          "q-002-a": "Direkt auf den Widerspruch hinweisen, um ihm beim Ordnen zu helfen.",
          "q-002-b": "Einfach zuhören und Mitgefühl zeigen, ohne die kleinen Fehler zu korrigieren.",
          "q-002-c": "Warten bis er fertig ist, und ruhig fragen, ob er etwas Bedenkzeit braucht."
        }
      },
      "q-003": {
        prompt: "Du kommst zu einer großen Einweihungsparty, auf der du nur den Gastgeber kennst, der jedoch stark mit Gästen beschäftigt ist.",
        instructions: "Wähle die Option, die am besten zu dir passt.",
        options: {
          "q-003-a": "Direkt auf eine Gruppe zugehen, dich vorstellen und einsteigen.",
          "q-003-b": "Dich in die Nähe der Getränke stellen, beobachten und warten, bis du angesprochen wirst."
        }
      },
      "q-004": {
        prompt: "Du planst ein Reisewochenende mit Freunden. Eine Person meldet sich nicht zurück und blockiert damit die Zimmerbuchung.",
        instructions: "Wähle eine primäre und bis zu zwei sekundäre Aktionen.",
        options: {
          "q-004-a": "Direkt schreiben: 'Buche in 2 Stunden. Wer bis dahin nicht zugesagt hat, ist nicht dabei.'",
          "q-004-b": "Anrufen, um zu klären, ob es Zweifel, Geldsorgen oder andere Probleme gibt.",
          "q-004-c": "Ein Zimmer mit kostenloser Stornierung buchen und sagen, man habe zur Sicherheit für sie mitgesorgt."
        }
      },
      "q-005": {
        prompt: "Ein Freund regt sich bei dir emotional über das Verhalten eines gemeinsamen Freundes auf, das ihn verletzt hat.",
        instructions: "Wähle die Option, die am besten zu dir passt.",
        options: {
          "q-005-a": "Ihn voll unterstützen, seine Gefühle bestätigen und den Ärger teilen.",
          "q-005-b": "Eine neutrale Sicht anbieten und die Perspektive des anderen Freundes erklären, um den Ärger zu lindern."
        }
      },
      "q-006": {
        prompt: "Ein Freund teilt einen extrem unpraktischen Plan (z. B. spontan einen Schulbus kaufen, um die Welt zu bereisen).",
        instructions: "Wähle eine primäre und bis zu zwei sekundäre Aktionen.",
        options: {
          "q-006-a": "Direkt und sachlich auf die großen logistischen und finanziellen Probleme hinweisen.",
          "q-006-b": "Begeistert darauf einsteigen: 'Genial! Wir streichen ihn gelb an und...' ",
          "q-006-c": "Ruhig zuhören, einschätzen ob es ernst gemeint ist, und später ein ausgewogenes Feedback geben."
        }
      },
      "q-007": {
        prompt: "Du musst in einem unbekannten Viertel ohne Internetzugang für Online-Bewertungen ein Restaurant aussuchen.",
        instructions: "Wähle eine Option.",
        options: {
          "q-007-a": "Direkt ins erste gut besuchte Restaurant gehen – jede Entscheidung ist besser als hungrig herumzulaufen.",
          "q-007-b": "Durch die Fenster schauen, die Speisekarten lesen und das vielversprechendste wählen."
        }
      },
      "q-008": {
        prompt: "Ein Freund bittet dich, ein kreatives Projekt (Kurzgeschichte, Bild), an dem er wochenlang gearbeitet hat, ehrlich zu beurteilen.",
        instructions: "Wähle eine primäre und bis zu zwei sekundäre Aktionen.",
        options: {
          "q-008-a": "Ehrliche, konstruktive Kritik üben und auflisten, was genau verbessert werden muss.",
          "q-008-b": "Vor allem die Mühe loben und Verbesserungsvorschläge sehr vorsichtig verpacken.",
          "q-008-c": "Fragen: 'Möchtest du Zuspruch oder ein detailliertes, kritisches Feedback?', bevor du antwortest."
        }
      }
    }
  },
  ru: {
    welcomeTitle: "MindPrint",
    welcomeSubtitle: "Как вас воспринимают окружающие?",
    welcomeDesc: "Откройте для себя поведенческие слепые зоны, которые трудно заметить изнутри. С помощью 12 адаптивных ситуационных вопросов MindPrint покажет ваше социальное присутствие, прямоту и склонность к рефлексии.",
    anonymous: "Полная анонимность (без сбора личных данных или email)",
    localFirst: "Локальное хранение (все данные остаются только на вашем устройстве)",
    crossDevice: "Синхронизация между устройствами (восстановление сессий в любое время)",
    beginBtn: "Начать исследование",
    returningUser: "Уже проходили тест? ",
    loginRestore: "Войти для восстановления данных",
    loginTitle: "Вход",
    loginDesc: "Введите имя пользователя и пароль для восстановления прошлых результатов.",
    usernamePlaceholder: "Имя пользователя",
    passwordPlaceholder: "Пароль",
    cancelBtn: "Отмена",
    resultsTitle: "Ваш MindPrint",
    resultsDesc: "Так вас видят окружающие в повседневном и профессиональном общении.",
    primaryTitle: "Основной архетип",
    secondaryTitle: "Вторичный архетип",
    loveTitle: "💚 Что в вас ценят другие",
    dislikeTitle: "💔 Что может раздражать других",
    sayTitle: "Что о вас говорят другие",
    dimensionsTitle: "Шкалы вашего профиля",
    insightsTitle: "Ключевые выводы",
    upgradeTitle: "Сохранить результаты навсегда",
    upgradeDesc: "Выберите имя пользователя и пароль для защиты ваших результатов. Мы не запрашиваем адрес электронной почты.",
    upgradeBtn: "Создать постоянный аккаунт",
    alreadyRegistered: "Уже зарегистрированы?",
    loginSyncBtn: "Войти и синхронизировать",
    viewResultsBtn: "Посмотреть результаты",
    syncStatusOnline: "В сети",
    syncStatusOffline: "Вне сети",
    loadingJourney: "Загрузка...",
    questionProgress: "Вопрос {current} из {total}",
    continueBtn: "Далее",
    selectOptionMsg: "Выберите варианты ответов, чтобы продолжить",
    congratulations: "Поздравляем!",
    assessmentComplete: "Вы успешно завершили свое исследование.",
    socraticExplanation: "Поскольку вы ведете диалог с помощью наводящих вопросов, окружающие могут воспринять это как пассивную агрессию, нерешительность или нежелание высказывать свое мнение напрямую.",
    explorerExplanation: "Ваш прямой и независимый стиль общения может казаться другим холодным, отстраненным или чрезмерно критичным. Может показаться, что вы отдаляетесь от коллектива.",
    strategistExplanation: "Поскольку вы глубоко анализируете происходящее и часто молчите, люди могут истолковать это молчание как высокомерие, осуждение или полное равнодушие к группе.",
    challengerExplanation: "Сочетание предельной честности и бурной энергии может восприниматься окружающими как резкость, агрессия или давление. Люди могут чувствовать себя атакованными, даже если вы действуете из лучших побуждений.",
    dimensions: {
      directness: { name: "Прямота", lowPole: "Дипломатичный & Косвенный", highPole: "Искренний & Прямой" },
      social_energy: { name: "Социальная энергия", lowPole: "Сдержанный & Интроспективный", highPole: "Общительный & Экспрессивный" },
      reflectiveness: { name: "Рефлексия", lowPole: "Деятельный & Спонтанный", highPole: "Вдумчивый & Аналитический" },
      expressiveness: { name: "Выразительность", lowPole: "Объективный & Закрытый", highPole: "Теплый & Открытый" },
      assertiveness: { name: "Настойчивость", lowPole: "Уступчивый & Внимательный", highPole: "Уверенный & Доминантный" },
      adaptability: { name: "Гибкость", lowPole: "Последовательный & Стабильный", highPole: "Гибкий & Адаптивный" },
      pace: { name: "Темп", lowPole: "Размеренный & Терпеливый", highPole: "Быстрый & Энергичный" },
      focus_orientation: { name: "Направленность фокуса", lowPole: "Ориентирован на задачи", highPole: "Ориентирован на отношения" },
      vulnerability: { name: "Открытость", lowPole: "Сдержанный & Закрытый", highPole: "Искренний & Открытый" },
      conflict_style: { name: "Поведение в конфликте", lowPole: "Сглаживающий & Избегающий", highPole: "Прямой & Дискутирующий" },
      feedback_style: { name: "Стиль обратной связи", lowPole: "Критикующий & Исправляющий", highPole: "Поддерживающий & Мягкий" },
      playfulness: { name: "Игривость", lowPole: "Серьезный & Солидный", highPole: "Игривый & Непринужденный" }
    },
    archetypes: {
      "socratic-connector": {
        name: "Сократовский Связующий",
        description: "Вы глубоко сближаетесь с людьми через вдумчивые вопросы и теплое дипломатичное присутствие, предпочитая сотрудничество прямым приказам."
      },
      "independent-explorer": {
        name: "Независимый Исследователь",
        description: "Вы цените автономию и действия, исследуете идеи самостоятельно и открыто высказываете свое мнение без колебаний."
      },
      "quiet-strategist": {
        name: "Тихий Стратег",
        description: "Вы внимательно наблюдаете и действуете по четкому плану, предлагая взвешенные решения и сохраняя спокойствие и вдумчивость."
      },
      "empathic-challenger": {
        name: "Эмпатичный Бунтарь",
        description: "Вы сочетаете прямоту с высокой вовлеченностью, ставя под сомнение общепринятые шаблоны ради поиска лучших решений."
      }
    },
    insights: {
      "insight-socratic": {
        title: "Вы направляете беседу, а не навязываете свое мнение.",
        bodyTemplate: "Вы задаете вопросы, стимулируя размышления окружающих, чтобы они сами пришли к выводам. Вас ценят за неконфликтность.",
        alternativeTemplate: "Иногда такая уклончивость может утомлять тех, кто ждет от вас четкого и ясного мнения."
      },
      "insight-candid": {
        title: "Ваша искренность подкупает.",
        bodyTemplate: "Вы говорите прямо и без прикрас. С вами всегда понятно, на каком вы свете, что делает вас надежным партнером.",
        alternativeTemplate: "В эмоциональных ситуациях ваша прямота может ранить или показаться бестактной."
      },
      "insight-diplomatic": {
        title: "Вы мастер социальной дипломатии.",
        bodyTemplate: "Вы делитесь мыслями мягко и тактично, следя за тем, чтобы никто не почувствовал себя задетым или неловко.",
        alternativeTemplate: "Окружающие могут подумать, что вы замалчиваете неудобную правду, лишь бы не портить отношения."
      },
      "insight-observant": {
        title: "Вы вдумчивый наблюдатель.",
        bodyTemplate: "Вы внимательно слушаете и анализируете ситуацию перед тем, как высказаться. Ваши слова всегда имеют вес.",
        alternativeTemplate: "Люди, привыкшие к быстрому обмену репликами, могут счесть ваше молчание признаком осуждения."
      },
      "insight-assertive": {
        title: "Вы уверенно берете лидерство на себя.",
        bodyTemplate: "Вы не боитесь ответственности, четко обозначаете решения и ведете команду за собой.",
        alternativeTemplate: "Окружающие могут счесть вас излишне властным, чувствуя, что их мнение не учитывается."
      },
      "insight-receptive": {
        title: "Вы открыты к диалогу и сотрудничеству.",
        bodyTemplate: "Вы цените мнение коллектива, легко соглашаетесь с консенсусом и поддерживаете общие решения.",
        alternativeTemplate: "Порой это делает вас пассивным в глазах других, мешая отстаивать свои личные границы."
      },
      "insight-flexible": {
        title: "Вы легко адаптируетесь к переменам.",
        bodyTemplate: "Вы гибко реагируете на смену планов, принимая спонтанность без внутреннего сопротивления.",
        alternativeTemplate: "Коллеги могут счесть вас неорганизованным или не имеющим четкой позиции."
      },
      "insight-consistent": {
        title: "Вы привносите стабильность и порядок.",
        bodyTemplate: "Вы строго следуете договоренностям, обеспечивая предсказуемость и надежность для окружающих.",
        alternativeTemplate: "При резких переменах вы можете показаться упрямым или негибким."
      },
      "insight-fast": {
        title: "Вы действуете стремительно.",
        bodyTemplate: "Вы быстро принимаете решения и задаете высокий темп обсуждениям и процессам.",
        alternativeTemplate: "Ваша спешка может утомлять окружающих, создавая ощущение хаоса или небрежности."
      },
      "insight-deliberate": {
        title: "Вы терпеливы и методичны.",
        bodyTemplate: "Вы предпочитаете действовать без спешки, взвешивая детали ради минимизации ошибок.",
        alternativeTemplate: "Другие могут счесть вас медлительным или нерешительным."
      },
      "insight-task": {
        title: "Для вас на первом месте логика и результат.",
        bodyTemplate: "Вы оцениваете ситуации прагматично, ставя выполнение задач выше личных симпатий.",
        alternativeTemplate: "Вас могут посчитать сухим и равнодушным к атмосфере в коллективе."
      },
      "insight-relationship": {
        title: "Вы бережно относитесь к атмосфере в группе.",
        bodyTemplate: "Вы внимательно следите за настроением команды, стремясь предотвратить любые обиды и недопонимания.",
        alternativeTemplate: "Прагматики могут решить, что вы тратите слишком много времени на чувства в ущерб продуктивности."
      },
      "insight-vulnerable": {
        title: "Вы вызываете доверие своей открытостью.",
        bodyTemplate: "Вы не боитесь говорить о своих промахах и слабостях, что сближает людей и помогает им открыться в ответ.",
        alternativeTemplate: "Некоторые могут истолковать эту искренность как слабость или отсутствие профессиональной дистанции."
      },
      "insight-stoic": {
        title: "Вы сохраняете хладнокровие под давлением.",
        bodyTemplate: "Вы держите переживания при себе, демонстрируя спокойную уверенность и надежность.",
        alternativeTemplate: "Это может делать вас закрытым и мешать выстраиванию по-настоящему близких отношений."
      },
      "insight-confrontational": {
        title: "Вы открыто заявляете о разногласиях.",
        bodyTemplate: "Вы не боитесь споров, веря, что честное обсуждение проблемы лицом к лицу — лучший выход.",
        alternativeTemplate: "Ваша прямота может казаться пугающей или выглядеть как склонность к конфликтам."
      },
      "insight-harmonizing": {
        title: "Вы гасите любые ссоры.",
        bodyTemplate: "Вы умело используете дипломатию и терпение, чтобы гасить конфликты в зародыше.",
        alternativeTemplate: "Коллеги могут решить, что вы избегаете сложных разговоров, замалчивая назревшие проблемы."
      },
      "insight-critique": {
        title: "Вы требовательны и нацелены на рост.",
        bodyTemplate: "Вы даете честную критику, сразу указывая на слабые места, чтобы помочь стать лучше.",
        alternativeTemplate: "Ваша обратная связь может звучать обидно для тех, кто нуждается в поддержке."
      },
      "insight-encouraging": {
        title: "Вы окрыляете людей своей поддержкой.",
        bodyTemplate: "Вы хвалите за старания, заботитесь о комфорте собеседника и даете советы максимально деликатно.",
        alternativeTemplate: "Иногда вас могут упрекнуть в нехватке прямоты из-за слишком мягких формулировок."
      },
      "insight-playful": {
        title: "Вы привносите легкость и юмор.",
        bodyTemplate: "Вы используете шутки и дружеские подколы, чтобы разрядить обстановку и сблизиться с людьми.",
        alternativeTemplate: "Ваш юмор может ранить или показаться неуместным в серьезные моменты."
      },
      "insight-gravitas": {
        title: "Вы внушаете уважение своей солидностью.",
        bodyTemplate: "Вы подходите к делам и людям с должным авторитетом и серьезностью, гарантируя качество.",
        alternativeTemplate: "Вы можете казаться чопорным, из-за чего окружающие не могут расслабиться в вашем присутствии."
      },
      "insight-expressive": {
        title: "Вы щедро делитесь своими эмоциями.",
        bodyTemplate: "Вы открыто выражаете радость и сопереживание, давая людям почувствовать себя значимыми.",
        alternativeTemplate: "Слишком прагматичные натуры могут счесть вашу эмоциональность излишней или нелогичной."
      }
    },
    questions: {
      "q-001": {
        prompt: "На ужине кто-то уверенно заявляет факт о фильме или истории, который, как вы точно знаете, неверен.",
        instructions: "Выберите одно основное действие и до двух второстепенных по желанию.",
        options: {
          "q-001-a": "Сразу поправить собеседника и привести верные факты.",
          "q-001-b": "Задать наводящие вопросы, чтобы человек сам заметил ошибку.",
          "q-001-c": "Промолчать и тихонько перепроверить информацию в телефоне.",
          "q-001-d": "Перевести все в шутку или аккуратно сменить тему разговора."
        }
      },
      "q-002": {
        prompt: "Близкий друг делится сложной проблемой. Вы замечаете, что он напряжен и путается в деталях своего рассказа.",
        instructions: "Выберите один основной ответ и до двух второстепенных.",
        options: {
          "q-002-a": "Сразу указать на противоречие, чтобы помочь ему разложить все по полочкам.",
          "q-002-b": "Просто выслушать и поддержать эмоционально, не обращая внимания на неточности.",
          "q-002-c": "Дождаться, пока он закончит, и мягко спросить, не нужно ли ему время подумать."
        }
      },
      "q-003": {
        prompt: "Вы приходите на вечеринку, где знаете только хозяина дома, но он очень занят приемом гостей.",
        instructions: "Выберите один наиболее близкий вам вариант.",
        options: {
          "q-003-a": "Подойти к любой группе людей, представиться и включиться в беседу.",
          "q-003-b": "Встать у бара, освоиться и ждать, пока кто-нибудь заговорит с вами."
        }
      },
      "q-004": {
        prompt: "Вы планируете поездку на выходные с друзьями. Один человек тянет с ответом, мешая забронировать жилье.",
        instructions: "Выберите одно основное действие и до двух второстепенных.",
        options: {
          "q-004-a": "Написать прямо: 'Бронирую через 2 часа. Кто не успел подтвердить — едет сам.'",
          "q-004-b": "Позвонить лично и узнать, есть ли сомнения, финансовые трудности или иные причины.",
          "q-004-c": "Забронировать жилье с бесплатной отменой, сказав, что подстраховали его на всякий случай."
        }
      },
      "q-005": {
        prompt: "Друг эмоционально жалуется вам на поступок вашего общего знакомого, который его задел.",
        instructions: "Выберите один наиболее близкий вам вариант.",
        options: {
          "q-005-a": "Полностью поддержать его: разделить гнев и подтвердить его правоту.",
          "q-005-b": "Предложить нейтральный взгляд: объяснить позицию второй стороны, чтобы снизить накал страстей."
        }
      },
      "q-006": {
        prompt: "Друг делится безумной идеей (например, купить автобус и отправиться в кругосветку в следующем месяце).",
        instructions: "Выберите одно основное действие и до двух второстепенных.",
        options: {
          "q-006-a": "Мягко указать на очевидные финансовые и организационные трудности.",
          "q-006-b": "С восторгом подхватить идею: 'Круто! Давай покрасим его в желтый цвет и...' ",
          "q-006-c": "Выслушать, оценить серьезность намерений и позже высказать взвешенное мнение."
        }
      },
      "q-007": {
        prompt: "Вам нужно выбрать ресторан в незнакомом районе без интернета и возможности почитать отзывы.",
        instructions: "Выберите один вариант.",
        options: {
          "q-007-a": "Зайти в первый же оживленный ресторан: любой выбор лучше, чем ходить голодным.",
          "q-007-b": "Заглянуть в окна, изучить вывешенное меню и выбрать наиболее симпатичное место."
        }
      },
      "q-008": {
        prompt: "Друг просит оценить творческую работу (рассказ, картину), над которой он трудился неделями.",
        instructions: "Выберите одно основное действие и до двух второстепенных.",
        options: {
          "q-008-a": "Высказать честное критическое мнение, указав, что именно стоит доработать.",
          "q-008-b": "Сфокусироваться на похвале за старания, а замечания преподнести максимально мягко.",
          "q-008-c": "Спросить перед ответом: 'Ты хочешь, чтобы я поддержал тебя или дал детальный критический разбор?'"
        }
      }
    }
  },
  tr: {
    welcomeTitle: "MindPrint",
    welcomeSubtitle: "Başkaları sizi nasıl deneyimliyor?",
    welcomeDesc: "İçeriden bakıldığında fark edilmesi kolay olmayan davranışsal kör noktalarınızı keşfedin. 12 adet adaptif, senaryo odaklı soru ile MindPrint sosyal varlığınızı, doğrudanlığınızı ve derin düşünme eğiliminizi haritalandırır.",
    anonymous: "Tamamen Anonim (kişisel bilgi veya e-posta toplanmaz)",
    localFirst: "Yerel Öncelikli Depolama (veriler cihazınızda gizli kalır)",
    crossDevice: "Cihazlar Arası Senkronizasyon (oturumları dilediğiniz zaman geri yükleyin)",
    beginBtn: "Keşfe Başla",
    returningUser: "Zaten kayıtlı mısınız? ",
    loginRestore: "Verileri geri yüklemek için giriş yapın",
    loginTitle: "Giriş Yap",
    loginDesc: "Değerlendirmelerinizi geri yüklemek ve eşitlemek için kullanıcı adı ve şifrenizi girin.",
    usernamePlaceholder: "Kullanıcı Adı",
    passwordPlaceholder: "Şifre",
    cancelBtn: "İptal",
    resultsTitle: "Sizin MindPrint'iniz",
    resultsDesc: "Sosyal ve profesyonel dinamiklerde başkaları tarafından bu şekilde algılanıyorsunuz.",
    primaryTitle: "Birincil Arketipler",
    secondaryTitle: "İkincil Arketipler",
    loveTitle: "💚 Başkalarının en çok sevdiği yönleriniz",
    dislikeTitle: "💔 Başkalarının sizi zor bulduğu yönleriniz",
    sayTitle: "Başkaları sizin hakkınızda ne söylüyor?",
    dimensionsTitle: "Profil Boyutlarınız",
    insightsTitle: "Temel Çıkarımlar",
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
    socraticExplanation: "Konuşmaları dolaylı sorularla yönlendirdiğiniz için, başkaları sizi pasif-agresif, kararsız veya fikir belirtmekte yavaş biri olarak algılayabilir. Gerçek fikrinizi sakladığınızı düşünebilirler.",
    explorerExplanation: "Açık sözlü ve bağımsız yaklaşımınız, başkalarının sizi mesafeli, iş birliğine kapalı veya aşırı eleştirel biri olarak deneyimlemesine neden olabilir. Gruptan kendinizi soyutladığınızı hissedebilirler.",
    strategistExplanation: "Etkileşimleri derinlemesine analiz ettiğiniz ve sessiz kaldığınız için, başkaları bu sessizliğinizi eleştirel bir yargı, onaylamama veya gruba karşı tamamen ilgisizlik olarak yanlış yorumlayabilir.",
    challengerExplanation: "Yüksek dürüstlük ve yüksek enerjinizin birleşimi, başkalarının sizi kırıcı, çatışmacı veya ezici biri olarak deneyimlemesine yol açabilir. İyi niyetle hareket etseniz bile saldırıya uğramış hissedebilirler.",
    dimensions: {
      directness: { name: "Doğrudanlık", lowPole: "Diplomatik & Dolaylı", highPole: "Açık & Doğrudan" },
      social_energy: { name: "Sosyal Enerji", lowPole: "Mesafeli & İçe Dönük", highPole: "Girişken & Dışa Dönük" },
      reflectiveness: { name: "Derin Düşünme", lowPole: "Eylem Odaklı & Spontane", highPole: "Temkinli & Analitik" },
      expressiveness: { name: "Kendini İfade", lowPole: "Objektif & Mesafeli", highPole: "Sıcak & Samimi" },
      assertiveness: { name: "Atılganlık", lowPole: "Alıcı & Uyumlu", highPole: "Girişken & Dominant" },
      adaptability: { name: "Uyum Sağlama", lowPole: "İstikrarlı & Dengeli", highPole: "Esnek & Çevik" },
      pace: { name: "Tempo", lowPole: "Temkinli & Sabırlı", highPole: "Hızlı & Aceleci" },
      focus_orientation: { name: "Odak Noktası", lowPole: "Görev & Mantık Odaklı", highPole: "İlişki & Uyum Odaklı" },
      vulnerability: { name: "Açık Yüreklilik", lowPole: "Stoik & Mesafeli", highPole: "Kırılgan & Açık" },
      conflict_style: { name: "Çatışma Yönetimi", lowPole: "Uyumcu & Kaçınmacı", highPole: "Tartışmacı & Yüzleşmeci" },
      feedback_style: { name: "Geri Bildirim Stili", lowPole: "Eleştirel & Düzeltici", highPole: "Destekleyici & Teşvik Edici" },
      playfulness: { name: "Şakacılık", lowPole: "Ciddi & Ağırbaşlı", highPole: "Şakacı & Neşeli" }
    },
    archetypes: {
      "socratic-connector": {
        name: "Sokratik Bağlayıcı",
        description: "Derin sorular ve sıcak diplomatik varlığınızla derin bağlar kurarsınız. Doğrudan emirler yerine iş birliği ve diyaloğu tercih edersiniz."
      },
      "independent-explorer": {
        name: "Bağımsız Kaşif",
        description: "Özerkliğe ve doğrudan eyleme büyük değer verirsiniz. Fikirleri bağımsızca keşfeder ve açık sözlü duruşunuzu çekinmeden paylaşırsınız."
      },
      "quiet-strategist": {
        name: "Sessiz Stratejist",
        description: "Derinlemesine gözlemler ve planlı hareket edersiniz. İyi düşünülmüş fikirler sunar, sakin ve içe dönük bir duruş sergilersiniz."
      },
      "empathic-challenger": {
        name: "Empatik Meydan Okuyan",
        description: "Yüksek dürüstlüğü yüksek sosyal etkileşimle birleştirirsiniz. Grup kararlarını gelişim amacı doğrultusunda doğrudan sorgularsınız."
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
