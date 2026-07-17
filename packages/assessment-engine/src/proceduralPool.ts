import { Question, AnswerOption } from '@mindprint/shared-types';

interface ScenarioBase {
  subj: string[];
  con: string;
  dir: string;
  soc: string;
  ref: string;
}

const socialConflicts: ScenarioBase[] = [
  {
    subj: ['Someone', 'A friend', 'A colleague', 'Your partner'],
    con: 'arrives extremely late to meet you',
    dir: 'Tell them directly that the delay is disrespectful.',
    soc: 'Welcome them warmly and laugh off the wait.',
    ref: 'Quietly check the time and wait for their explanation.'
  },
  {
    subj: ['Someone', 'A colleague', 'A friend', 'A companion'],
    con: 'shares a private story about you to a group',
    dir: 'Tell them immediately that this was a breach of trust.',
    soc: 'Laugh along with the story to keep the mood light.',
    ref: 'Reflect quietly on why they felt the need to share it.'
  },
  {
    subj: ['Someone', 'A peer', 'A colleague', 'A person'],
    con: 'disagrees loudly with your opinion',
    dir: 'State your counterargument firmly and defend your view.',
    soc: 'Steer the conversation to another topic to defuse it.',
    ref: 'Listen in silence and analyze their perspective.'
  },
  {
    subj: ['Someone', 'A friend', 'A colleague', 'Your guest'],
    con: 'brings uninvited guests to your small dinner',
    dir: 'Candidly ask them why they did not check with you first.',
    soc: 'Pull up extra chairs immediately and welcome them.',
    ref: 'Accept it quietly and adjust your hosting plans.'
  },
  {
    subj: ['Someone', 'A guest', 'A companion', 'A peer'],
    con: 'dominates the group conversation completely',
    dir: 'Interrupt politely to share your own thoughts.',
    soc: 'Ask a quieter guest a question to change the focus.',
    ref: 'Listen in silence and observe the group dynamics.'
  },
  {
    subj: ['Someone', 'A guest', 'A visitor', 'A companion'],
    con: 'complains loudly about the food and music',
    dir: 'Tell them directly that they are dampening the mood.',
    soc: 'Suggest changing the music or ordering different dishes.',
    ref: 'Quietly observe their taste preferences without commenting.'
  },
  {
    subj: ['Someone', 'A stranger', 'A peer', 'A colleague'],
    con: 'asks intrusive questions about your finances',
    dir: 'Tell them frankly that you do not discuss personal budgets.',
    soc: 'Deflect with a joke and ask about their own career.',
    ref: 'Politely decline to answer and observe their reaction.'
  },
  {
    subj: ['Someone', 'A companion', 'A fellow guest', 'A friend'],
    con: 'complains persistently about the service quality',
    dir: 'Tell them candidly that they are overreacting to minor delays.',
    soc: 'Suggest leaving a compromise tip to resolve the issue.',
    ref: 'Stay quiet and ignore their venting to keep your own peace.'
  },
  {
    subj: ['Someone', 'A friend', 'A stranger', 'A companion'],
    con: 'spoils the ending of a movie you wanted to watch',
    dir: 'Express your frustration directly about the spoiler.',
    soc: 'Ask if they enjoyed it to pivot into a friendly review.',
    ref: 'Reflect quietly on their lack of social awareness.'
  },
  {
    subj: ['Someone', 'A friend', 'A colleague', 'Your partner'],
    con: 'ignores your messages about changing plans',
    dir: 'Call them directly to get an immediate confirmation.',
    soc: 'Assume everything is fine and meet at the original time.',
    ref: 'Wait quietly to see if they reply before deciding.'
  }
];

const personalConflicts: ScenarioBase[] = [
  {
    subj: ['A server', 'A waiter', 'The server', 'The waiter'],
    con: 'serves you the wrong meal order',
    dir: 'Signal them immediately and ask for a correction.',
    soc: 'Accept it with a joke to avoid making them feel bad.',
    ref: 'Check your receipt quietly to confirm before speaking.'
  },
  {
    subj: ['A driver', 'The driver', 'A cab driver', 'The cab driver'],
    con: 'demands a higher transit fare than estimated',
    dir: 'State the estimated fare and refuse to pay more.',
    soc: 'Pay the extra amount casually to avoid any dispute.',
    ref: 'Compare the fare with online guidelines before replying.'
  },
  {
    subj: ['A cashier', 'The cashier', 'A vendor', 'The vendor'],
    con: 'accuses you of short-paying a bill',
    dir: 'Show your payment receipt and assert you paid in full.',
    soc: 'Offer to recount the cash together to resolve the mix-up.',
    ref: 'Double-check your wallet and bank app details privately.'
  },
  {
    subj: ['A receptionist', 'The host', 'A clerk', 'The clerk'],
    con: 'loses your reservation booking',
    dir: 'Insist that they find a matching alternative immediately.',
    soc: 'Ask if they have any recommendations nearby instead.',
    ref: 'Check your confirmation email quietly for errors.'
  },
  {
    subj: ['A courier', 'The courier', 'A delivery driver', 'The delivery driver'],
    con: 'leaves your package out in the rain',
    dir: 'Contact their support line immediately to lodge a complaint.',
    soc: 'Mention it casually if you see them next time.',
    ref: 'Inspect the items privately to assess if any damage occurred.'
  },
  {
    subj: ['A trainer', 'The instructor', 'A coach', 'The coach'],
    con: 'cancels a scheduled training session last minute',
    dir: 'Express your disappointment directly and ask for refund.',
    soc: 'Reschedule friendly, saying you understand things happen.',
    ref: 'Reflect on whether to book with someone else in the future.'
  },
  {
    subj: ['Someone', 'A passenger', 'A stranger', 'An individual'],
    con: 'plays loud music on their phone on a train',
    dir: 'Ask them directly to turn down the volume.',
    soc: 'Start a casual chat to distract them from the music.',
    ref: 'Move to another carriage quietly to avoid any conflict.'
  },
  {
    subj: ['A business', 'A company', 'A contractor', 'A supplier'],
    con: 'makes a billing error on your invoice',
    dir: 'Point out the mismatch directly and request a fix.',
    soc: 'Ask them to adjust it on the next billing cycle.',
    ref: 'Compare the invoice line items with your original quote.'
  },
  {
    subj: ['A technician', 'The technician', 'A mechanic', 'The contractor'],
    con: 'fails to complete a repair on schedule',
    dir: 'Call to demand an immediate status update and completion date.',
    soc: 'Offer them more time while requesting a friendly discount.',
    ref: 'Review the repair agreement details before taking action.'
  },
  {
    subj: ['Someone', 'A clerk', 'A stranger', 'An assistant'],
    con: 'ignores your polite request for assistance',
    dir: 'Speak up louder to repeat your request directly.',
    soc: 'Approach someone else for help to avoid an awkward interaction.',
    ref: 'Wait patiently to see if they are just busy with another task.'
  }
];

const leisureConflicts: ScenarioBase[] = [
  {
    subj: ['Someone', 'A passenger', 'A stranger', 'A visitor'],
    con: 'takes the last reserved seat you booked',
    dir: 'Show your ticket directly and ask them to vacate.',
    soc: 'Ask if they want to swap seats if they are with a group.',
    ref: 'Double-check your seat number privately to be certain.'
  },
  {
    subj: ['Someone', 'A stranger', 'A tourist', 'A visitor'],
    con: 'takes photos of you without asking',
    dir: 'Tell them directly that you do not want to be photographed.',
    soc: 'Smile casually and suggest taking a group photo instead.',
    ref: 'Walk out of their camera frame quietly without saying anything.'
  },
  {
    subj: ['Someone', 'A participant', 'A member', 'A peer'],
    con: 'arrives late to the activity group start',
    dir: 'Remind them directly that promptness affects the whole group.',
    soc: 'Help them catch up quickly and welcome them to the group.',
    ref: 'Check the schedule quietly and keep walking.'
  },
  {
    subj: ['Someone', 'A stranger', 'A passenger', 'A visitor'],
    con: 'plays audio out loud without headphones',
    dir: 'Ask them directly to plug in their headphones.',
    soc: 'Offer them a spare set of headphones if you have one.',
    ref: 'Put in your own earplugs to block out the noise.'
  },
  {
    subj: ['Someone', 'A stranger', 'A person', 'An individual'],
    con: 'cuts in front of you in the queue',
    dir: 'State clearly that you are waiting in line.',
    soc: 'Point out the end of the queue with a friendly smile.',
    ref: 'Let it go quietly to avoid creating a scene.'
  },
  {
    subj: ['Someone', 'A hiker', 'A stranger', 'A visitor'],
    con: 'leaves trash on the shared trail',
    dir: 'Tell them directly to pick up their litter.',
    soc: 'Pick it up yourself with a friendly remark about nature.',
    ref: 'Wait until they walk away, then throw it in a bin.'
  },
  {
    subj: ['Someone', 'A student', 'A visitor', 'A patron'],
    con: 'ignores the quiet zone rules in a library',
    dir: 'Ask them directly to speak in a whisper.',
    soc: 'Suggest moving to the lobby area to continue their chat.',
    ref: 'Gather your items quietly and find a different room.'
  },
  {
    subj: ['Someone', 'A participant', 'A student', 'An attendee'],
    con: 'disrupts the class demonstration',
    dir: 'Ask them directly to stop interrupting the teacher.',
    soc: 'Whisper to them casually to help them stay on track.',
    ref: 'Focus on the instructor and ignore their behavior.'
  },
  {
    subj: ['Someone', 'A visitor', 'A stranger', 'An attendee'],
    con: 'blocks your view during the gallery exhibition',
    dir: 'Politely ask them to step slightly to the side.',
    soc: 'Move to view another piece and return to this one later.',
    ref: 'Wait patiently for them to finish and move on.'
  },
  {
    subj: ['Someone', 'A stranger', 'A participant', 'A peer'],
    con: 'takes your gear by mistake',
    dir: 'Point out directly that the equipment is yours.',
    soc: 'Laugh off the mix-up and check if they need help finding theirs.',
    ref: 'Inspect the labels quietly before pointing it out.'
  }
];

// Helper dictionaries for on-the-fly PWA translations in generated questions
const TRANSLATIONS: Record<string, {
  subj: Record<string, string>;
  con: Record<string, string>;
  opt: Record<string, string>;
  instructions_single: string;
  instructions_ranked: string;
  opt_single_desc: string;
  opt_ranked_desc: string;
}> = {
  fr: {
    instructions_single: "Sélectionnez la seule meilleure réponse.",
    instructions_ranked: "Sélectionnez une action principale et jusqu'à deux actions secondaires.",
    opt_single_desc: "Sélectionnez la seule meilleure réponse.",
    opt_ranked_desc: "Sélectionnez une action principale et jusqu'à deux actions secondaires.",
    subj: {
      'Someone': "Quelqu'un", 'A friend': "Un ami", 'A colleague': "Un collègue", 'Your partner': "Votre partenaire",
      'A companion': "Un compagnon", 'A peer': "Un pair", 'A person': "Une personne", 'Your guest': "Votre invité",
      'A guest': "Un invité", 'A visitor': "Un visiteur", 'A stranger': "Un inconnu", 'A fellow guest': "Un autre invité",
      'A server': "Un serveur", 'A waiter': "Un serveur", 'The server': "Le serveur", 'The waiter': "Le serveur",
      'A driver': "Un chauffeur", 'The driver': "Le chauffeur", 'A cab driver': "Un taximan", 'The cab driver': "Le chauffeur de taxi",
      'A cashier': "Un caissier", 'The cashier': "Le caissier", 'A vendor': "Un vendeur", 'The vendor': "Le vendeur",
      'A receptionist': "Un réceptionniste", 'The host': "L'hôte", 'A clerk': "Un employé", 'The clerk': "L'employé",
      'A courier': "Un coursier", 'The courier': "Le coursier", 'A delivery driver': "Un livreur", 'The delivery driver': "Le livreur",
      'A trainer': "Un entraîneur", 'The instructor': "L'instructeur", 'A coach': "Un coach", 'The coach': "Le coach",
      'A passenger': "Un passager", 'An individual': "Un individu", 'A business': "Une entreprise", 'A company': "Une société",
      'A contractor': "Un entrepreneur", 'A supplier': "Un fournisseur", 'A technician': "Un technicien", 'The technician': "Le technicien",
      'A mechanic': "Un mécanicien", 'An assistant': "Un assistant", 'A member': "Un membre", 'A student': "Un étudiant",
      'A patron': "Un client", 'An attendee': "Un participant", 'A hiker': "Un randonneur", 'A tourist': "Un touriste"
    },
    con: {
      'arrives extremely late to meet you': "arrive extrêmement en retard à votre rendez-vous",
      'shares a private story about you to a group': "partage une histoire privée sur vous à un groupe",
      'disagrees loudly with your opinion': "conteste bruyamment votre opinion",
      'brings uninvited guests to your small dinner': "amène des invités non conviés à votre dîner intime",
      'dominates the group conversation completely': "monopolise complètement la conversation du groupe",
      'complains loudly about the food and music': "se plaint bruyamment de la nourriture et de la musique",
      'asks intrusive questions about your finances': "pose des questions indiscrètes sur vos finances",
      'complains persistently about the service quality': "se plaint constamment de la qualité du service",
      'spoils the ending of a movie you wanted to watch': "révèle la fin d'un film que vous vouliez voir",
      'ignores your messages about changing plans': "ignore vos messages concernant un changement de plan",
      'serves you the wrong meal order': "vous sert un plat différent de votre commande",
      'demands a higher transit fare than estimated': "exige un prix de transport plus élevé que prévu",
      'accuses you of short-paying a bill': "vous accuse de ne pas avoir payé le montant total",
      'loses your reservation booking': "perd votre réservation",
      'leaves your package out in the rain': "laisse votre colis dehors sous la pluie",
      'cancels a scheduled training session last minute': "annule une séance d'entraînement au dernier moment",
      'plays loud music on their phone on a train': "écoute de la musique forte sur son téléphone dans le train",
      'makes a billing error on your invoice': "fait une erreur de facturation sur votre facture",
      'fails to complete a repair on schedule': "ne termine pas une réparation dans les temps",
      'ignores your polite request for assistance': "ignore votre demande d'aide polie",
      'takes the last reserved seat you booked': "prend la dernière place réservée que vous aviez réservée",
      'takes photos of you without asking': "prend des photos de vous sans demander",
      'arrives late to the activity group start': "arrive en retard au début de l'activité du groupe",
      'plays audio out loud without headphones': "écoute de l'audio à haute voix sans écouteurs",
      'cuts in front of you in the queue': "vous coupe la priorité dans la file d'attente",
      'leaves trash on the shared trail': "laisse des déchets sur le sentier partagé",
      'ignores the quiet zone rules in a library': "ignore les règles de la zone de silence dans la bibliothèque",
      'disrupts the class demonstration': "perturbe la démonstration en classe",
      'blocks your view during the gallery exhibition': "bloque votre vue pendant l'exposition",
      'takes your gear by mistake': "prend votre équipement par erreur"
    },
    opt: {
      'Tell them directly that the delay is disrespectful.': "Lui dire directement que ce retard est irrespectueux.",
      'Welcome them warmly and laugh off the wait.': "L'accueillir chaleureusement et rire de l'attente.",
      'Quietly check the time and wait for their explanation.': "Vérifier l'heure discrètement et attendre ses explications.",
      'Tell them immediately that this was a breach of trust.': "Lui dire immédiatement que c'était un manquement à la confiance.",
      'Laugh along with the story to keep the mood light.': "Rire de l'histoire pour garder l'ambiance légère.",
      'Reflect quietly on why they felt the need to share it.': "Réfléchir tranquillement à la raison pour laquelle il a partagé cela.",
      'State your counterargument firmly and defend your view.': "Exprimer fermement votre contre-argument et défendre votre point de vue.",
      'Steer the conversation to another topic to defuse it.': "Orienter la discussion vers un autre sujet pour apaiser les tensions.",
      'Listen in silence and analyze their perspective.': "Écouter en silence et analyser leur point de vue.",
      'Candidly ask them why they did not check with you first.': "Lui demander franchement pourquoi il ne vous a pas consulté d'abord.",
      'Pull up extra chairs immediately and welcome them.': "Ajouter des chaises immédiatement et les accueillir chaleureusement.",
      'Accept it quietly and adjust your hosting plans.': "L'accepter tranquillement et adapter vos plans d'accueil.",
      'Interrupt politely to share your own thoughts.': "L'interrompre poliment pour partager vos propres réflexions.",
      'Ask a quieter guest a question to change the focus.': "Poser une question à un invité plus discret pour changer de sujet.",
      'Listen in silence and observe the group dynamics.': "Écouter en silence et observer la dynamique du groupe.",
      'Tell them directly that they are dampening the mood.': "Lui dire directement qu'il plombe l'ambiance.",
      'Suggest changing the music or ordering different dishes.': "Suggérer de changer la musique ou de commander d'autres plats.",
      'Quietly observe their taste preferences without commenting.': "Observer tranquillement leurs préférences sans faire de commentaire.",
      'Tell them frankly that you do not discuss personal budgets.': "Lui dire franchement que vous ne discutez pas de vos finances.",
      'Deflect with a joke and ask about their own career.': "Détourner le sujet par une blague et l'interroger sur sa carrière.",
      'Politely decline to answer and observe their reaction.': "Refuser poliment de répondre et observer sa réaction.",
      'Tell them candidly that they are overreacting to minor delays.': "Lui dire franchement qu'il réagit de manière excessive.",
      'Suggest leaving a compromise tip to resolve the issue.': "Suggérer de laisser un pourboire de compromis pour régler le problème.",
      'Stay quiet and ignore their venting to keep your own peace.': "Rester silencieux et ignorer ses plaintes pour garder votre calme.",
      'Express your frustration directly about the spoiler.': "Exprimer directement votre frustration à propos de la révélation.",
      'Ask if they enjoyed it to pivot into a friendly review.': "Lui demander s'il a aimé pour lancer une critique amicale.",
      'Reflect quietly on their lack of social awareness.': "Réfléchir tranquillement à son manque de tact social.",
      'Call them directly to get an immediate confirmation.': "L'appeler directement pour obtenir une confirmation immédiate.",
      'Assume everything is fine and meet at the original time.': "Supposer que tout va bien et se rendre au rendez-vous à l'heure prévue.",
      'Wait quietly to see if they reply before deciding.': "Attendre tranquillement de voir s'il répond avant de décider.",
      'Signal them immediately and ask for a correction.': "Lui faire signe immédiatement et demander une correction.",
      'Accept it with a joke to avoid making them feel bad.': "L'accepter avec humour pour ne pas le mettre mal à l'aise.",
      'Check your receipt quietly to confirm before speaking.': "Vérifier tranquillement votre reçu avant de parler.",
      'State the estimated fare and refuse to pay more.': "Indiquer le prix estimé et refuser de payer davantage.",
      'Pay the extra amount casually to avoid any dispute.': "Payer le supplément discrètement pour éviter tout litige.",
      'Compare the fare with online guidelines before replying.': "Comparer le tarif avec les estimations en ligne avant de répondre.",
      'Show your payment receipt and assert you paid in full.': "Montrer votre reçu de paiement et affirmer que vous avez tout réglé.",
      'Offer to recount the cash together to resolve the mix-up.': "Proposer de recompter l'argent ensemble pour lever le malentendu.",
      'Double-check your wallet and bank app details privately.': "Vérifier discrètement votre portefeuille et votre compte bancaire.",
      'Insist that they find a matching alternative immediately.': "Exiger qu'il trouve immédiatement une solution équivalente.",
      'Ask if they have any recommendations nearby instead.': "Demander s'il a des recommandations d'endroits proches à la place.",
      'Check your confirmation email quietly for errors.': "Vérifier discrètement votre e-mail de confirmation.",
      'Contact their support line immediately to lodge a complaint.': "Contacter immédiatement le service client pour déposer une réclamation.",
      'Mention it casually if you see them next time.': "Lui en parler l'air de rien la prochaine fois que vous le verrez.",
      'Inspect the items privately to assess if any damage occurred.': "Inspecter tranquillement les articles pour vérifier leur état.",
      'Express your disappointment directly and ask for refund.': "Exprimer directement votre déception et demander un remboursement.",
      'Reschedule friendly, saying you understand things happen.': "Reprogrammer gentiment en disant que ce sont des choses qui arrivent.",
      'Reflect on whether to book with someone else in the future.': "Réfléchir à l'opportunité de faire appel à quelqu'un d'autre à l'avenir.",
      'Ask them directly to turn down the volume.': "Lui demander directement de baisser le volume.",
      'Start a casual chat to distract them from the music.': "Lancer une discussion informelle pour le distraire de la musique.",
      'Move to another carriage quietly to avoid any conflict.': "Changer de wagon tranquillement pour éviter tout conflit.",
      'Point out the mismatch directly and request a fix.': "Signaler directement l'erreur et demander sa correction.",
      'Ask them to adjust it on the next billing cycle.': "Demander qu'il ajuste la différence lors de la prochaine facture.",
      'Compare the invoice line items with your original quote.': "Comparer les lignes de la facture avec le devis d'origine.",
      'Call to demand an immediate status update and completion date.': "Appeler pour exiger un point d'avancement et une date de fin.",
      'Offer them more time while requesting a friendly discount.': "Lui laisser plus de temps tout en demandant un geste commercial.",
      'Review the repair agreement details before taking action.': "Relire les termes du contrat de réparation avant d'agir.",
      'Speak up louder to repeat your request directly.': "Parler plus fort pour répéter directement votre demande.",
      'Approach someone else for help to avoid an awkward interaction.': "S'adresser à quelqu'un d'autre pour éviter un échange gênant.",
      'Wait patiently to see if they are just busy with another task.': "Attendre patiemment de voir s'il est simplement occupé.",
      'Show your ticket directly and ask them to vacate.': "Montrer votre billet directement et lui demander de libérer la place.",
      'Ask if they want to swap seats if they are with a group.': "Demander s'il souhaite échanger si sa place est isolée du groupe.",
      'Double-check your seat number privately to be certain.': "Vérifier tranquillement votre numéro de place pour être sûr.",
      'Tell them directly that you do not want to be photographed.': "Lui dire directement que vous refusez d'être photographié.",
      'Smile casually and suggest taking a group photo instead.': "Sourire et proposer de prendre une photo de groupe à la place.",
      'Walk out of their camera frame quietly without saying anything.': "Quitter tranquillement le champ de l'appareil sans rien dire.",
      'Remind them directly that promptness affects the whole group.': "Lui rappeler directement que son retard pénalise tout le groupe.",
      'Help them catch up quickly and welcome them to the group.': "L'aider à rattraper le retard et l'accueillir chaleureusement.",
      'Check the schedule quietly and keep walking.': "Consulter le programme tranquillement et continuer votre chemin.",
      'Ask them directly to plug in their headphones.': "Lui demander directement de brancher ses écouteurs.",
      'Offer them a spare set of headphones if you have one.': "Lui proposer des écouteurs de rechange si vous en avez sur vous.",
      'Put in your own earplugs to block out the noise.': "Mettre vos propres bouchons d'oreilles pour couper le bruit.",
      'State clearly that you are waiting in line.': "Lui dire clairement que vous faites la queue.",
      'Point out the end of the queue with a friendly smile.': "Lui indiquer la fin de la file d'attente avec un sourire.",
      'Let it go quietly to avoid creating a scene.': "Laisser couler tranquillement pour éviter de faire une scène.",
      'Tell them directly to pick up their litter.': "Lui dire directement de ramasser ses déchets.",
      'Pick it up yourself with a friendly remark about nature.': "Les ramasser vous-même en faisant une remarque polie sur la nature.",
      'Wait until they walk away, then throw it in a bin.': "Attendre qu'il s'éloigne pour les jeter vous-même à la poubelle.",
      'Ask them directly to speak in a whisper.': "Lui demander directement de parler à voix basse.",
      'Suggest moving to the lobby area to continue their chat.': "Suggérer de se déplacer dans le hall pour poursuivre sa discussion.",
      'Gather your items quietly and find a different room.': "Rassembler tranquillement vos affaires et changer de salle.",
      'Ask them directly to stop interrupting the teacher.': "Lui demander directement d'arrêter d'interrompre l'enseignant.",
      'Whisper to them casually to help them stay on track.': "Lui chuchoter gentiment un mot pour l'aider à suivre.",
      'Focus on the instructor and ignore their behavior.': "Se concentrer sur l'enseignant et ignorer son comportement.",
      'Politely ask them to step slightly to the side.': "Lui demander poliment de se décaler légèrement sur le côté.",
      'Move to view another piece and return to this one later.': "Aller voir une autre œuvre et revenir à celle-ci plus tard.",
      'Wait patiently for them to finish and move on.': "Attendre patiemment qu'il finisse et passe à autre chose.",
      'Point out directly that the equipment is yours.': "Lui signaler directement que ce matériel vous appartient.",
      'Laugh off the mix-up and check if they need help finding theirs.': "Rire de la confusion et lui proposer de l'aider à chercher le sien.",
      'Inspect the labels quietly before pointing it out.': "Vérifier tranquillement les étiquettes avant d'intervenir."
    }
  },
  de: {
    instructions_single: "Wählen Sie die beste einzelne Antwort.",
    instructions_ranked: "Wählen Sie eine primäre und bis zu zwei sekundäre Aktionen.",
    opt_single_desc: "Wählen Sie die beste einzelne Antwort.",
    opt_ranked_desc: "Wählen Sie eine primäre und bis zu zwei sekundäre Aktionen.",
    subj: {
      'Someone': "Jemand", 'A friend': "Ein Freund", 'A colleague': "Ein Kollege", 'Your partner': "Dein Partner",
      'A companion': "Ein Begleiter", 'A peer': "Ein Gleichaltriger", 'A person': "Eine Person", 'Your guest': "Dein Gast",
      'A guest': "Ein Gast", 'A visitor': "Ein Besucher", 'A stranger': "Ein Fremder", 'A fellow guest': "Ein Mitgast",
      'A server': "Ein Kellner", 'A waiter': "Ein Kellner", 'The server': "Der Kellner", 'The waiter': "Der Kellner",
      'A driver': "Ein Fahrer", 'The driver': "Der Fahrer", 'A cab driver': "Ein Taxifahrer", 'The cab driver': "Der Taxifahrer",
      'A cashier': "Ein Kassierer", 'The cashier': "Der Kassierer", 'A vendor': "Ein Verkäufer", 'The vendor': "Der Verkäufer",
      'A receptionist': "Ein Empfangsmitarbeiter", 'The host': "Der Gastgeber", 'A clerk': "Ein Angestellter", 'The clerk': "Der Angestellte",
      'A courier': "Ein Kurier", 'The courier': "Der Kurier", 'A delivery driver': "Ein Lieferfahrer", 'The delivery driver': "Der Lieferfahrer",
      'A trainer': "Ein Trainer", 'The instructor': "Der Ausbilder", 'A coach': "Ein Coach", 'The coach': "Der Coach",
      'A passenger': "Ein Fahrgast", 'An individual': "Eine Einzelperson", 'A business': "Ein Unternehmen", 'A company': "Eine Firma",
      'A contractor': "Ein Dienstleister", 'A supplier': "Ein Lieferant", 'A technician': "Ein Techniker", 'The technician': "Der Techniker",
      'A mechanic': "Ein Mechaniker", 'An assistant': "Ein Assistent", 'A member': "Ein Mitglied", 'A student': "Ein Student",
      'A patron': "Ein Kunde", 'An attendee': "Ein Teilnehmer", 'A hiker': "Ein Wanderer", 'A tourist': "Ein Tourist"
    },
    con: {
      'arrives extremely late to meet you': "kommt viel zu spät zu eurer Verabredung",
      'shares a private story about you to a group': "erzählt eine private Geschichte über dich in einer Gruppe",
      'disagrees loudly with your opinion': "widerspricht deiner Meinung lautstark",
      'brings uninvited guests to your small dinner': "bringt unangemeldete Gäste zu deinem kleinen Abendessen mit",
      'dominates the group conversation completely': "beherrscht das Gruppengespräch komplett",
      'complains loudly about the food and music': "beschwert sich lautstark über das Essen und die Musik",
      'asks intrusive questions about your finances': "stellt aufdringliche Fragen zu deinen Finanzen",
      'complains persistently about the service quality': "beschwert sich ständig über die Servicequalität",
      'spoils the ending of a movie you wanted to watch': "verrät das Ende eines Films, den du sehen wolltest",
      'ignores your messages about changing plans': "ignoriert deine Nachrichten bezüglich Planänderungen",
      'serves you the wrong meal order': "serviert dir das falsche Essen",
      'demands a higher transit fare than estimated': "fordert einen höheren Fahrpreis als vereinbart",
      'accuses you of short-paying a bill': "beschuldigt dich, zu wenig gezahlt zu haben",
      'loses your reservation booking': "verliert deine Reservierung",
      'leaves your package out in the rain': "lässt dein Paket im Regen stehen",
      'cancels a scheduled training session last minute': "sagt ein Training in letzter Minute ab",
      'plays loud music on their phone on a train': "spielt im Zug laute Musik über das Handy ab",
      'makes a billing error on your invoice': "macht einen Abrechnungsfehler auf deiner Rechnung",
      'fails to complete a repair on schedule': "schließt eine Reparatur nicht pünktlich ab",
      'ignores your polite request for assistance': "ignoriert deine höfliche Bitte um Hilfe",
      'takes the last reserved seat you booked': "nimmt den letzten von dir reservierten Sitzplatz ein",
      'takes photos of you without asking': "macht ungefragt Fotos von dir",
      'arrives late to the activity group start': "kommt zu spät zum Start der Gruppenaktivität",
      'plays audio out loud without headphones': "spielt Audio laut und ohne Kopfhörer ab",
      'cuts in front of you in the queue': "drängelt sich in der Warteschlange vor dir vor",
      'leaves trash on the shared trail': "hinterlässt Müll auf dem gemeinsamen Wanderweg",
      'ignores the quiet zone rules in a library': "ignoriert die Ruhezonenregeln in der Bibliothek",
      'disrupts the class demonstration': "stört die Vorführung im Unterricht",
      'blocks your view during the gallery exhibition': "versperrt dir die Sicht in der Ausstellung",
      'takes your gear by mistake': "nimmt versehentlich deine Ausrüstung mit"
    },
    opt: {
      'Tell them directly that the delay is disrespectful.': "Ihm direkt sagen, dass die Verspätung respektlos ist.",
      'Welcome them warmly and laugh off the wait.': "Ihn herzlich begrüßen und die Wartezeit weglächeln.",
      'Quietly check the time and wait for their explanation.': "Heimlich auf die Uhr schauen und auf seine Erklärung warten.",
      'Tell them immediately that this was a breach of trust.': "Sofort sagen, dass dies ein Vertrauensbruch war.",
      'Laugh along with the story to keep the mood light.': "Über die Geschichte mitlachen, um die Stimmung locker zu halten.",
      'Reflect quietly on why they felt the need to share it.': "Still darüber nachdenken, warum er das teilen wollte.",
      'State your counterargument firmly and defend your view.': "Dein Gegenargument bestimmt vortragen und deine Ansicht verteidigen.",
      'Steer the conversation to another topic to defuse it.': "Das Gespräch auf ein anderes Thema lenken, um die Situation zu entschärfen.",
      'Listen in silence and analyze their perspective.': "Schweigend zuhören und ihre Perspektive analysieren.",
      'Candidly ask them why they did not check with you first.': "Offen fragen, warum er nicht zuerst bei dir nachgefragt hat.",
      'Pull up extra chairs immediately and welcome them.': "Sofort zusätzliche Stühle holen und sie willkommen heißen.",
      'Accept it quietly and adjust your hosting plans.': "Es still akzeptieren und deine Gastgeberpläne anpassen.",
      'Interrupt politely to share your own thoughts.': "Höflich unterbrechen, um deine eigenen Gedanken zu teilen.",
      'Ask a quieter guest a question to change the focus.': "Einem ruhigeren Gast eine Frage stellen, um den Fokus zu verschieben.",
      'Listen in silence and observe the group dynamics.': "Schweigend zuhören und die Gruppendynamik beobachten.",
      'Tell them directly that they are dampening the mood.': "Direkt sagen, dass er die Stimmung verdirbt.",
      'Suggest changing the music or ordering different dishes.': "Vorschlagen, die Musik zu ändern oder andere Gerichte zu bestellen.",
      'Quietly observe their taste preferences without commenting.': "Kommentarlos ihre Geschmacksvorlieben beobachten.",
      'Tell them frankly that you do not discuss personal budgets.': "Offen sagen, dass du nicht über deine Finanzen sprichst.",
      'Deflect with a joke and ask about their own career.': "Mit einem Scherz ablenken und nach seiner Karriere fragen.",
      'Politely decline to answer and observe their reaction.': "Höflich die Antwort verweigern und die Reaktion beobachten.",
      'Tell them candidly that they are overreacting to minor delays.': "Offen sagen, dass er wegen kleiner Verzögerungen überreagiert.",
      'Suggest leaving a compromise tip to resolve the issue.': "Vorschlagen, ein Trinkgeld als Kompromiss zu hinterlassen.",
      'Stay quiet and ignore their venting to keep your own peace.': "Ruhig bleiben und ihr Schimpfen ignorieren, um den eigenen Frieden zu wahren.",
      'Express your frustration directly about the spoiler.': "Deinen Ärger über den Spoiler direkt zum Ausdruck bringen.",
      'Ask if they enjoyed it to pivot into a friendly review.': "Fragen, ob es ihm gefallen hat, um in eine freundliche Diskussion einzusteigen.",
      'Reflect quietly on their lack of social awareness.': "Still über seine mangelnde soziale Kompetenz nachdenken.",
      'Call them directly to get an immediate confirmation.': "Direkt anrufen, um eine sofortige Bestätigung zu erhalten.",
      'Assume everything is fine and meet at the original time.': "Davon ausgehen, dass alles in Ordnung ist, und sich zur vereinbarten Zeit treffen.",
      'Wait quietly to see if they reply before deciding.': "Still abwarten, ob er antwortet, bevor du entscheidest.",
      'Signal them immediately and ask for a correction.': "Sofort winken und um Korrektur bitten.",
      'Accept it with a joke to avoid making them feel bad.': "Es mit einem Scherz hinnehmen, um ihm kein schlechtes Gefühl zu geben.",
      'Check your receipt quietly to confirm before speaking.': "Still die Quittung prüfen, um sicherzugehen, bevor du sprichst.",
      'State the estimated fare and refuse to pay more.': "Den geschätzten Fahrpreis nennen und sich weigern, mehr zu zahlen.",
      'Pay the extra amount casually to avoid any dispute.': "Den Aufpreis zahlen, um Streitigkeiten zu vermeiden.",
      'Compare the fare with online guidelines before replying.': "Den Fahrpreis vor einer Antwort mit Online-Richtlinien vergleichen.",
      'Show your payment receipt and assert you paid in full.': "Den Beleg vorlegen und betonen, dass du voll bezahlt hast.",
      'Offer to recount the cash together to resolve the mix-up.': "Anbieten, das Geld gemeinsam zu zählen, um den Irrtum aufzuklären.",
      'Double-check your wallet and bank app details privately.': "Privat das Portemonnaie und die Bank-App prüfen.",
      'Insist that they find a matching alternative immediately.': "Darauf bestehen, dass er sofort eine passende Alternative findet.",
      'Ask if they have any recommendations nearby instead.': "Fragen, ob er stattdessen Empfehlungen in der Nähe hat.",
      'Check your confirmation email quietly for errors.': "Still deine Bestätigungs-E-Mail auf Fehler prüfen.",
      'Contact their support line immediately to lodge a complaint.': "Sofort den Support kontaktieren, um Beschwerde einzureichen.",
      'Mention it casually if you see them next time.': "Es beiläufig erwähnen, wenn du ihn das nächste Mal siehst.",
      'Inspect the items privately to assess if any damage occurred.': "Die Artikel still prüfen, um eventuelle Schäden festzustellen.",
      'Express your disappointment directly and ask for refund.': "Deinen Ärger direkt äußern und um Rückerstattung bitten.",
      'Reschedule friendly, saying you understand things happen.': "Freundlich verschieben und sagen, dass so etwas eben vorkommt.",
      'Reflect on whether to book with someone else in the future.': "Darüber nachdenken, künftig bei jemand anderem zu buchen.",
      'Ask them directly to turn down the volume.': "Direkt bitten, die Lautstärke zu verringern.",
      'Start a casual chat to distract them from the music.': "Ein lockeres Gespräch beginnen, um ihn von der Musik abzulenken.",
      'Move to another carriage quietly to avoid any conflict.': "Still in einen anderen Wagen wechseln, um Streit zu vermeiden.",
      'Point out the mismatch directly and request a fix.': "Den Fehler direkt aufzeigen und um Korrektur bitten.",
      'Ask them to adjust it on the next billing cycle.': "Bitten, es beim nächsten Abrechnungszeitraum auszugleichen.",
      'Compare the invoice line items with your original quote.': "Die Rechnungsposten mit dem ursprünglichen Angebot vergleichen.",
      'Call to demand an immediate status update and completion date.': "Anrufen, um einen Statusbericht und Fertigstellungstermin zu verlangen.",
      'Offer them more time while requesting a friendly discount.': "Ihm mehr Zeit einräumen und nach einem Rabatt fragen.",
      'Review the repair agreement details before taking action.': "Die Details der Reparaturvereinbarung vor einer Reaktion prüfen.",
      'Speak up louder to repeat your request directly.': "Lauter sprechen, um deine Bitte direkt zu wiederholen.",
      'Approach someone else for help to avoid an awkward interaction.': "Jemand anderen um Hilfe bitten, um ein unangenehmes Gespräch zu vermeiden.",
      'Wait patiently to see if they are just busy with another task.': "Geduldig abwarten, ob er nur mit einer anderen Aufgabe beschäftigt ist.",
      'Show your ticket directly and ask them to vacate.': "Dein Ticket vorzeigen und darum bitten, den Platz freizugeben.",
      'Ask if they want to swap seats if they are with a group.': "Fragen, ob er Plätze tauschen möchte, falls er mit einer Gruppe reist.",
      'Double-check your seat number privately to be certain.': "Still deine Sitzplatznummer prüfen, um sicherzugehen.",
      'Tell them directly that you do not want to be photographed.': "Direkt sagen, dass du nicht fotografiert werden möchtest.",
      'Smile casually and suggest taking a group photo instead.': "Freundlich lächeln und vorschlagen, stattdessen ein Gruppenbild zu machen.",
      'Walk out of their camera frame quietly without saying anything.': "Still aus dem Bild gehen, ohne etwas zu sagen.",
      'Remind them directly that promptness affects the whole group.': "Direkt daran erinnern, dass Pünktlichkeit die ganze Gruppe betrifft.",
      'Help them catch up quickly and welcome them to the group.': "Ihm helfen, schnell Anschluss zu finden, und ihn in der Gruppe begrüßen.",
      'Check the schedule quietly and keep walking.': "Still den Zeitplan prüfen und weitergehen.",
      'Ask them directly to plug in their headphones.': "Direkt bitten, Kopfhörer zu benutzen.",
      'Offer them a spare set of headphones if you have one.': "Ersatzkopfhörer anbieten, falls du welche dabei hast.",
      'Put in your own earplugs to block out the noise.': "Eigene Ohrstöpsel verwenden, um den Lärm auszublenden.",
      'State clearly that you are waiting in line.': "Klar sagen, dass du in der Schlange anstehst.",
      'Point out the end of the queue with a friendly smile.': "Mit einem Lächeln auf das Ende der Schlange hinweisen.",
      'Let it go quietly to avoid creating a scene.': "Es still hinnehmen, um keine Szene zu machen.",
      'Tell them directly to pick up their litter.': "Direkt sagen, dass er seinen Müll aufheben soll.",
      'Pick it up yourself with a friendly remark about nature.': "Ihn selbst aufheben und eine nette Bemerkung über die Natur machen.",
      'Wait until they walk away, then throw it in a bin.': "Warten, bis er weggeht, und ihn dann selbst in den Mülleimer werfen.",
      'Ask them directly to speak in a whisper.': "Direkt bitten, nur zu flüstern.",
      'Suggest moving to the lobby area to continue their chat.': "Vorschlagen, das Gespräch in der Lobby fortzusetzen.",
      'Gather your items quietly and find a different room.': "Still deine Sachen packen und einen anderen Raum suchen.",
      'Ask them directly to stop interrupting the teacher.': "Direkt bitten, den Lehrer nicht mehr zu unterbrechen.",
      'Whisper to them casually to help them stay on track.': "Ihm leise etwas zuflüstern, um ihm zu helfen, aufmerksam zu bleiben.",
      'Focus on the instructor and ignore their behavior.': "Dich auf den Lehrer konzentrieren und sein Verhalten ignorieren.",
      'Politely ask them to step slightly to the side.': "Höflich bitten, sich ein Stück zur Seite zu bewegen.",
      'Move to view another piece and return to this one later.': "Ein anderes Werk betrachten und später hierher zurückkehren.",
      'Wait patiently for them to finish and move on.': "Geduldig warten, bis er fertig ist und weitergeht.",
      'Point out directly that the equipment is yours.': "Direkt darauf hinweisen, dass es deine Ausrüstung ist.",
      'Laugh off the mix-up and check if they need help finding theirs.': "Das Missverständnis weglachen und fragen, ob er Hilfe beim Suchen braucht.",
      'Inspect the labels quietly before pointing it out.': "Still die Etiketten prüfen, bevor du etwas sagst."
    }
  },
  ru: {
    instructions_single: "Выберите один наилучший ответ.",
    instructions_ranked: "Выберите одно основное действие и до двух второстепенных.",
    opt_single_desc: "Выберите один наилучший ответ.",
    opt_ranked_desc: "Выберите одно основное действие и до двух второстепенных.",
    subj: {
      'Someone': "Кто-то", 'A friend': "Друг", 'A colleague': "Коллега", 'Your partner': "Ваш партнер",
      'A companion': "Спутник", 'A peer': "Знакомый", 'A person': "Человек", 'Your guest': "Ваш гость",
      'A guest': "Гость", 'A visitor': "Посетитель", 'A stranger': "Незнакомец", 'A fellow guest': "Другой гость",
      'A server': "Официант", 'A waiter': "Официант", 'The server': "Официант", 'The waiter': "Официант",
      'A driver': "Водитель", 'The driver': "Водитель", 'A cab driver': "Таксист", 'The cab driver': "Водитель такси",
      'A cashier': "Кассир", 'The cashier': "Кассир", 'A vendor': "Продавец", 'The vendor': "Продавец",
      'A receptionist': "Администратор", 'The host': "Хозяин", 'A clerk': "Служащий", 'The clerk': "Служащий",
      'A courier': "Курьер", 'The courier': "Курьер", 'A delivery driver': "Курьер", 'The delivery driver': "Курьер",
      'A trainer': "Тренер", 'The instructor': "Инструктор", 'A coach': "Тренер", 'The coach': "Тренер",
      'A passenger': "Пассажир", 'An individual': "Человек", 'A business': "Компания", 'A company': "Фирма",
      'A contractor': "Подрядчик", 'A supplier': "Поставщик", 'A technician': "Техник", 'The technician': "Техник",
      'A mechanic': "Механик", 'An assistant': "Помощник", 'A member': "Участник", 'A student': "Студент",
      'A patron': "Клиент", 'An attendee': "Участник", 'A hiker': "Турист", 'A tourist': "Турист"
    },
    con: {
      'arrives extremely late to meet you': "очень сильно опаздывает на встречу с вами",
      'shares a private story about you to a group': "рассказывает личную историю о вас в компании",
      'disagrees loudly with your opinion': "громко выражает несогласие с вашим мнением",
      'brings uninvited guests to your small dinner': "приводит незваных гостей на ваш скромный ужин",
      'dominates the group conversation completely': "полностью завладевает общим разговором",
      'complains loudly about the food and music': "громко жалуется на еду и музыку",
      'asks intrusive questions about your finances': "задает нетактичные вопросы о ваших доходах",
      'complains persistently about the service quality': "настойчиво и бесконечно жалуется на качество сервиса",
      'spoils the ending of a movie you wanted to watch': "рассказывает спойлер к фильму, который вы хотели посмотреть",
      'ignores your messages about changing plans': "игнорирует ваши сообщения об изменении планов",
      'serves you the wrong meal order': "приносит вам не то блюдо, которое вы заказывали",
      'demands a higher transit fare than estimated': "требует за проезд больше денег, чем планировалось",
      'accuses you of short-paying a bill': "обвиняет вас в том, что вы не доплатили по счету",
      'loses your reservation booking': "теряет бронь на ваше имя",
      'leaves your package out in the rain': "оставляет вашу посылку под проливным дождем",
      'cancels a scheduled training session last minute': "в последний момент отменяет запланированное занятие",
      'plays loud music on their phone on a train': "громко слушает музыку с телефона в поезде",
      'makes a billing error on your invoice': "делает ошибку в расчете вашей квитанции",
      'fails to complete a repair on schedule': "не заканчивает ремонт в обещанный срок",
      'ignores your polite request for assistance': "игнорирует вашу вежливую просьбу о помощи",
      'takes the last reserved seat you booked': "занимает последнее забронированное вами место",
      'takes photos of you without asking': "фотографирует вас без вашего разрешения",
      'arrives late to the activity group start': "опаздывает к началу группового занятия",
      'plays audio out loud without headphones': "слушает аудио без наушников на всю громкость",
      'cuts in front of you in the queue': "влезает прямо перед вами в очередь",
      'leaves trash on the shared trail': "мусорит на общей туристической тропе",
      'ignores the quiet zone rules in a library': "игнорирует правила тишины в библиотеке",
      'disrupts the class demonstration': "мешает демонстрации на занятии",
      'blocks your view during the gallery exhibition': "загораживает вам обзор на выставке",
      'takes your gear by mistake': "случайно забирает ваши вещи"
    },
    opt: {
      'Tell them directly that the delay is disrespectful.': "Напрямую заявить, что такое опоздание — проявление неуважения.",
      'Welcome them warmly and laugh off the wait.': "Тепло встретить его и отшутиться по поводу ожидания.",
      'Quietly check the time and wait for their explanation.': "Молча посмотреть на часы и ждать его объяснений.",
      'Tell them immediately that this was a breach of trust.': "Сразу же сказать, что это нарушение вашего доверия.",
      'Laugh along with the story to keep the mood light.': "Посмеяться вместе со всеми, чтобы сохранить легкую атмосферу.",
      'Reflect quietly on why they felt the need to share it.': "Подумать про себя, почему он решил поделиться этим.",
      'State your counterargument firmly and defend your view.': "Твердо заявить свой контраргумент и отстоять позицию.",
      'Steer the conversation to another topic to defuse it.': "Перевести разговор на другую тему, чтобы сгладить обстановку.",
      'Listen in silence and analyze their perspective.': "Молча слушать и анализировать его точку зрения.",
      'Candidly ask them why they did not check with you first.': "Искренне спросить, почему он не посоветовался с вами сначала.",
      'Pull up extra chairs immediately and welcome them.': "Тут же поставить дополнительные стулья и радушно принять всех.",
      'Accept it quietly and adjust your hosting plans.': "Молча принять ситуацию и скорректировать свои планы.",
      'Interrupt politely to share your own thoughts.': "Вежливо прервать его, чтобы высказать свои мысли.",
      'Ask a quieter guest a question to change the focus.': "Задать вопрос более тихому гостю, чтобы сместить фокус.",
      'Listen in silence and observe the group dynamics.': "Слушать молча, наблюдая за динамикой в группе.",
      'Tell them directly that they are dampening the mood.': "Прямо сказать, что он портит всем настроение.",
      'Suggest changing the music or ordering different dishes.': "Предложить сменить музыку или заказать другие блюда.",
      'Quietly observe their taste preferences without commenting.': "Молча наблюдать за его предпочтениями, никак их не комментируя.",
      'Tell them frankly that you do not discuss personal budgets.': "Откровенно заявить, что не обсуждаете личные финансы.",
      'Deflect with a joke and ask about their own career.': "Перевести в шутку и спросить о его собственной карьере.",
      'Politely decline to answer and observe their reaction.': "Вежливо отказаться отвечать и проследить за реакцией.",
      'Tell them candidly that they are overreacting to minor delays.': "Искренне сказать, что он делает из мухи слона.",
      'Suggest leaving a compromise tip to resolve the issue.': "Предложить сойтись на компромиссной сумме чаевых.",
      'Stay quiet and ignore their venting to keep your own peace.': "Молчать и игнорировать его возмущение ради собственного спокойствия.",
      'Express your frustration directly about the spoiler.': "Прямо выразить досаду по поводу раскрытого финала.",
      'Ask if they enjoyed it to pivot into a friendly review.': "Спросить, понравился ли ему фильм, чтобы начать обсуждение.",
      'Reflect quietly on their lack of social awareness.': "Подумать про себя о его нетактичности.",
      'Call them directly to get an immediate confirmation.': "Позвонить напрямую, чтобы получить точный ответ немедленно.",
      'Assume everything is fine and meet at the original time.': "Предположить, что все в силе, и прийти к назначенному времени.",
      'Wait quietly to see if they reply before deciding.': "Спокойно подождать ответа перед тем, как что-то решать.",
      'Signal them immediately and ask for a correction.': "Сразу же подозвать его и попросить заменить блюдо.",
      'Accept it with a joke to avoid making them feel bad.': "Принять блюдо с улыбкой, чтобы не ставить его в неловкое положение.",
      'Check your receipt quietly to confirm before speaking.': "Сначала тихо проверить чек, чтобы убедиться в своей правоте.",
      'State the estimated fare and refuse to pay more.': "Назвать оговоренную цену и отказаться переплачивать.",
      'Pay the extra amount casually to avoid any dispute.': "Спокойно переплатить разницу, чтобы избежать выяснения отношений.",
      'Compare the fare with online guidelines before replying.': "Сверить цену с тарифами в интернете перед тем, как спорить.",
      'Show your payment receipt and assert you paid in full.': "Показать чек и твердо заявить, что все оплачено полностью.",
      'Offer to recount the cash together to resolve the mix-up.': "Предложить пересчитать деньги вместе, чтобы снять вопросы.",
      'Double-check your wallet and bank app details privately.': "Незаметно проверить кошелек и баланс в банковском приложении.",
      'Insist that they find a matching alternative immediately.': "Настоять на том, чтобы вам немедленно нашли замену.",
      'Ask if they have any recommendations nearby instead.': "Спросить, есть ли поблизости другие хорошие места.",
      'Check your confirmation email quietly for errors.': "Молча перепроверить письмо с подтверждением брони.",
      'Contact their support line immediately to lodge a complaint.': "Тут же позвонить на горячую линию и составить жалобу.",
      'Mention it casually if you see them next time.': "Вскользь упомянуть об этом при следующей встрече.",
      'Inspect the items privately to assess if any damage occurred.': "Спокойно осмотреть содержимое на предмет повреждений.",
      'Express your disappointment directly and ask for refund.': "Высказать недовольство напрямую и потребовать вернуть деньги.",
      'Reschedule friendly, saying you understand things happen.': "Доброжелательно перенести, сказав, что все понимаете.",
      'Reflect on whether to book with someone else in the future.': "Подумать о том, чтобы сменить специалиста в будущем.",
      'Ask them directly to turn down the volume.': "Прямо попросить сделать потише.",
      'Start a casual chat to distract them from the music.': "Начать непринужденный разговор, чтобы отвлечь его от телефона.",
      'Move to another carriage quietly to avoid any conflict.': "Молча перейти в другой вагон во избежание ссоры.",
      'Point out the mismatch directly and request a fix.': "Сразу указать на расхождение и попросить пересчитать.",
      'Ask them to adjust it on the next billing cycle.': "Попросить учесть разницу при следующем расчете.",
      'Compare the invoice line items with your original quote.': "Сверить строки счета с первоначальными условиями.",
      'Call to demand an immediate status update and completion date.': "Позвонить, чтобы узнать статус ремонта и точную дату окончания.",
      'Offer them more time while requesting a friendly discount.': "Дать еще времени, попросив при этом небольшую скидку.",
      'Review the repair agreement details before taking action.': "Перечитать условия договора на ремонт перед звонком.",
      'Speak up louder to repeat your request directly.': "Повторить свою просьбу громче и отчетливее.",
      'Approach someone else for help to avoid an awkward interaction.': "Обратиться к другому сотруднику, чтобы не спорить.",
      'Wait patiently to see if they are just busy with another task.': "Терпеливо подождать, возможно, сотрудник просто занят.",
      'Show your ticket directly and ask them to vacate.': "Показать свой билет и вежливо попросить освободить место.",
      'Ask if they want to swap seats if they are with a group.': "Спросить, не хотят ли они поменяться местами, если они едут компанией.",
      'Double-check your seat number privately to be certain.': "Спокойно проверить номер места в своем билете.",
      'Tell them directly that you do not want to be photographed.': "Прямо сказать, что вы против того, чтобы вас снимали.",
      'Smile casually and suggest taking a group photo instead.': "Доброжелательно улыбнуться и предложить сделать общее фото.",
      'Walk out of their camera frame quietly without saying anything.': "Просто молча выйти из кадра.",
      'Remind them directly that promptness affects the whole group.': "Напомнить, что опоздание задерживает всю группу.",
      'Help them catch up quickly and welcome them to the group.': "Помочь быстро войти в курс дела и тепло принять в коллектив.",
      'Check the schedule quietly and keep walking.': "Молча свериться со временем и продолжить свой путь.",
      'Ask them directly to plug in their headphones.': "Прямо попросить его надеть наушники.",
      'Offer them a spare set of headphones if you have one.': "Предложить запасные наушники, если они есть с собой.",
      'Put in your own earplugs to block out the noise.': "Вставить беруши, чтобы не слышать посторонние звуки.",
      'State clearly that you are waiting in line.': "Четко заявить, что вы здесь стоите.",
      'Point out the end of the queue with a friendly smile.': "С улыбкой показать, где заканчивается очередь.",
      'Let it go quietly to avoid creating a scene.': "Промолчать и не раздувать конфликт из-за мелочи.",
      'Tell them directly to pick up their litter.': "Прямо сказать, чтобы он убрал за собой мусор.",
      'Pick it up yourself with a friendly remark about nature.': "Поднять мусор самому, сделав вежливое замечание об экологии.",
      'Wait until they walk away, then throw it in a bin.': "Подождать, пока он уйдет, и выбросить мусор в урну самостоятельно.",
      'Ask them directly to speak in a whisper.': "Напрямую попросить говорить тише.",
      'Suggest moving to the lobby area to continue their chat.': "Предложить выйти в холл, чтобы продолжить беседу.",
      'Gather your items quietly and find a different room.': "Молча собрать вещи и перейти в другой зал.",
      'Ask them directly to stop interrupting the teacher.': "Прямо попросить прекратить перебивать преподавателя.",
      'Whisper to them casually to help them stay on track.': "Шепотом подсказать ему, на чем сейчас сосредоточен урок.",
      'Focus on the instructor and ignore their behavior.': "Сосредоточиться на преподавателе и не обращать внимания.",
      'Politely ask them to step slightly to the side.': "Вежливо попросить немного отойти в сторону.",
      'Move to view another piece and return to this one later.': "Перейти к другому экспонату и вернуться к этому позже.",
      'Wait patiently for them to finish and move on.': "Терпеливо подождать, пока человек закончит осмотр.",
      'Point out directly that the equipment is yours.': "Прямо указать, что это ваши вещи.",
      'Laugh off the mix-up and check if they need help finding theirs.': "С улыбкой объяснить путаницу и предложить помочь найти его вещи.",
      'Inspect the labels quietly before pointing it out.': "Молча сверить бирки перед тем, как что-то говорить."
    }
  },
  tr: {
    instructions_single: "En uygun tek bir cevabı seçin.",
    instructions_ranked: "Bir ana eylem ve en fazla iki ikincil eylem seçin.",
    opt_single_desc: "En uygun tek bir cevabı seçin.",
    opt_ranked_desc: "Bir ana eylem ve en fazla iki ikincil eylem seçin.",
    subj: {
      'Someone': "Biri", 'A friend': "Bir arkadaş", 'A colleague': "Bir meslektaş", 'Your partner': "Partneriniz",
      'A companion': "Bir yol arkadaşı", 'A peer': "Bir akran", 'A person': "Bir kişi", 'Your guest': "Misafiriniz",
      'A guest': "Bir misafir", 'A visitor': "Bir ziyaretçi", 'A stranger': "Bir yabancı", 'A fellow guest': "Başka bir misafir",
      'A server': "Bir garson", 'A waiter': "Bir garson", 'The server': "Garson", 'The waiter': "Garson",
      'A driver': "Bir şoför", 'The driver': "Şoför", 'A cab driver': "Bir taksi şoförü", 'The cab driver': "Taksi şoförü",
      'A cashier': "Bir kasiyer", 'The cashier': "Kasiyer", 'A vendor': "Bir satıcı", 'The vendor': "Satıcı",
      'A receptionist': "Bir resepsiyonist", 'The host': "Ev sahibi", 'A clerk': "Bir görevli", 'The clerk': "Görevli",
      'A courier': "Bir kurye", 'The courier': "Kurye", 'A delivery driver': "Bir kurye", 'The delivery driver': "Kurye",
      'A trainer': "Bir eğitmen", 'The instructor': "Eğitmen", 'A coach': "Bir koç", 'The coach': "Koç",
      'A passenger': "Bir yolcu", 'An individual': "Bir birey", 'A business': "Bir işletme", 'A company': "Bir şirket",
      'A contractor': "Bir yüklenici", 'A supplier': "Bir tedarikçi", 'A technician': "Bir teknisyen", 'The technician': "Teknisyen",
      'A mechanic': "Bir tamirci", 'An assistant': "Bir asistan", 'A member': "Bir üye", 'A student': "Bir öğrenci",
      'A patron': "Bir müşteri", 'An attendee': "Bir katılımcı", 'A hiker': "Bir yürüyüşçü", 'A tourist': "Bir turist"
    },
    con: {
      'arrives extremely late to meet you': "buluşmanıza çok geç geliyor",
      'shares a private story about you to a group': "bir grupta sizinle ilgili özel bir hikaye paylaşıyor",
      'disagrees loudly with your opinion': "görüşünüze yüksek sesle karşı çıkıyor",
      'brings uninvited guests to your small dinner': "ufak akşam yemeğinize davetsiz misafirler getiriyor",
      'dominates the group conversation completely': "grup sohbetini tamamen tekeline alıyor",
      'complains loudly about the food and music': "yemekten ve müzikten yüksek sesle şikayet ediyor",
      'asks intrusive questions about your finances': "maddi durumunuz hakkında haddini aşan sorular soruyor",
      'complains persistently about the service quality': "sürekli ve ısrarla servis kalitesinden şikayet ediyor",
      'spoils the ending of a movie you wanted to watch': "izlemek istediğiniz filmin sonunu önceden söylüyor",
      'ignores your messages about changing plans': "plan değişiklikleriyle ilgili mesajlarınızı görmezden geliyor",
      'serves you the wrong meal order': "sipariş ettiğinizden farklı bir yemek getiriyor",
      'demands a higher transit fare than estimated': "ulaşım için tahmin edilenden daha yüksek ücret istiyor",
      'accuses you of short-paying a bill': "faturayı eksik ödediğinizi iddia ediyor",
      'loses your reservation booking': "rezervasyonunuzu kaybediyor",
      'leaves your package out in the rain': "paketinizi dışarıda yağmur altında bırakıyor",
      'cancels a scheduled training session last minute': "planlanan antrenmanı son dakikada iptal ediyor",
      'plays loud music on their phone on a train': "trende telefonundan yüksek sesle müzik çalıyor",
      'makes a billing error on your invoice': "faturanızda hesaplama hatası yapıyor",
      'fails to complete a repair on schedule': "onarımı söz verdiği tarihte bitiremiyor",
      'ignores your polite request for assistance': "yardım talebinizi görmezden geliyor",
      'takes the last reserved seat you booked': "ayırttığınız son koltuğu kapıyor",
      'takes photos of you without asking': "izniniz olmadan fotoğrafınızı çekiyor",
      'arrives late to the activity group start': "grup aktivitesinin başlangıcına geç kalıyor",
      'plays audio out loud without headphones': "kulaklıksız şekilde sesi dışarıya vererek dinliyor",
      'cuts in front of you in the queue': "sırada önünüze kaynak yapıyor",
      'leaves trash on the shared trail': "ortak yürüyüş yoluna çöp bırakıyor",
      'ignores the quiet zone rules in a library': "kütüphanedeki sessiz alan kuralına uymuyor",
      'disrupts the class demonstration': "dersteki sunumu sabote ediyor",
      'blocks your view during the gallery exhibition': "sergide görüş açınızı kapatıyor",
      'takes your gear by mistake': "ekipmanınızı yanlışlıkla alıyor"
    },
    opt: {
      'Tell them directly that the delay is disrespectful.': "Gecikmenin saygısızlık olduğunu doğrudan söylemek.",
      'Welcome them warmly and laugh off the wait.': "Sıcak bir şekilde karşılayıp beklemeyi gülerek geçiştirmek.",
      'Quietly check the time and wait for their explanation.': "Sessizce saate bakıp açıklama yapmasını beklemek.",
      'Tell them immediately that this was a breach of trust.': "Bunun bir güven ihlali olduğunu hemen belirtmek.",
      'Laugh along with the story to keep the mood light.': "Ortamı yumuşatmak için hikayeye gülerek eşlik etmek.",
      'Reflect quietly on why they felt the need to share it.': "Neden bunu paylaşma gereği duyduğunu sessizce düşünmek.",
      'State your counterargument firmly and defend your view.': "Karşı argümanınızı net bir şekilde sunup görüşünüzü savunmak.",
      'Steer the conversation to another topic to defuse it.': "Gerilimi azaltmak için konuyu başka bir yere çekmek.",
      'Listen in silence and analyze their perspective.': "Sessizce dinleyip onların bakış açısını analiz etmek.",
      'Candidly ask them why they did not check with you first.': "Neden önce size danışmadığını açıkça sormak.",
      'Pull up extra chairs immediately and welcome them.': "Hemen ekstra sandalye çekip onları sıcak bir şekilde buyur etmek.",
      'Accept it quietly and adjust your hosting plans.': "Sessizce kabul edip ev sahipliği planlarını buna göre ayarlamak.",
      'Interrupt politely to share your own thoughts.': "Kendi fikirlerinizi paylaşmak için kibarca araya girmek.",
      'Ask a quieter guest a question to change the focus.': "Odağı değiştirmek için daha sessiz duran bir misafire soru sormak.",
      'Listen in silence and observe the group dynamics.': "Sessizce dinleyip grup içi iletişimi gözlemlemek.",
      'Tell them directly that they are dampening the mood.': "Modu düşürdüğünü doğrudan söylemek.",
      'Suggest changing the music or ordering different dishes.': "Müziği değiştirmeyi veya farklı yemekler söylemeyi önermek.",
      'Quietly observe their taste preferences without commenting.': "Yorum yapmadan sessizce tercihlerini gözlemlemek.",
      'Tell them frankly that you do not discuss personal budgets.': "Maddi konuları konuşmayı tercih etmediğinizi açıkça belirtmek.",
      'Deflect with a joke and ask about their own career.': "Şakayla konuyu dağıtıp onun kariyeri hakkında soru sormak.",
      'Politely decline to answer and observe their reaction.': "Cevap vermeyi kibarca reddedip tepkisini izlemek.",
      'Tell them candidly that they are overreacting to minor delays.': "Ufak gecikmelere aşırı tepki verdiğini açıkça söylemek.",
      'Suggest leaving a compromise tip to resolve the issue.': "Sorunu çözmek için ortak bir bahşiş miktarında uzlaşmayı önermek.",
      'Stay quiet and ignore their venting to keep your own peace.': "Huzurunuzu kaçırmamak için söylenmesini duymazdan gelmek.",
      'Express your frustration directly about the spoiler.': "Gelecek bilgiyi önceden verdiği için hayal kırıklığını doğrudan belirtmek.",
      'Ask if they enjoyed it to pivot into a friendly review.': "Filmi beğenip beğenmediğini sorarak sohbeti analize kaydırmak.",
      'Reflect quietly on their lack of social awareness.': "Sosyal nezaket eksikliği üzerine sessizce düşünmek.",
      'Call them directly to get an immediate confirmation.': "Net bir yanıt almak için hemen doğrudan aramak.",
      'Assume everything is fine and meet at the original time.': "Sorun olmadığını varsayıp kararlaştırılan saatte buluşmaya gitmek.",
      'Wait quietly to see if they reply before deciding.': "Karar vermeden önce sessizce yanıt vermesini beklemek.",
      'Signal them immediately and ask for a correction.': "Hemen garsonu çağırıp yemeğin değiştirilmesini istemek.",
      'Accept it with a joke to avoid making them feel bad.': "Onu mahcup etmemek için durumu gülerek kabul etmek.",
      'Check your receipt quietly to confirm before speaking.': "Konuşmadan önce emin olmak için sessizce hesabı kontrol etmek.",
      'State the estimated fare and refuse to pay more.': "Anlaşılan fiyatı belirtip fazlasını ödemeyi reddetmek.",
      'Pay the extra amount casually to avoid any dispute.': "Tartışmaya girmemek için farkı sessizce ödemek.",
      'Compare the fare with online guidelines before replying.': "İtiraz etmeden önce internetten güncel tarifeleri kontrol etmek.",
      'Show your payment receipt and assert you paid in full.': "Fişi gösterip ödemeyi tam yaptığınızı net şekilde belirtmek.",
      'Offer to recount the cash together to resolve the mix-up.': "Yanlışlığı düzeltmek için parayı birlikte saymayı teklif etmek.",
      'Double-check your wallet and bank app details privately.': "Çaktırmadan cüzdanı ve banka hesabını kontrol etmek.",
      'Insist that they find a matching alternative immediately.': "Hemen eşdeğer bir alternatif bulması konusunda ısrar etmek.",
      'Ask if they have any recommendations nearby instead.': "Bunun yerine yakınlarda önerebileceği başka yerleri sormak.",
      'Check your confirmation email quietly for errors.': "Sessizce onay e-postasını kontrol etmek.",
      'Contact their support line immediately to lodge a complaint.': "Şikayet oluşturmak için hemen müşteri hizmetlerini aramak.",
      'Mention it casually if you see them next time.': "Bir sonraki karşılaşmada laf arasında konuyu açmak.",
      'Inspect the items privately to assess if any damage occurred.': "Hasar olup olmadığını anlamak için ürünleri sakince incelemek.",
      'Express your disappointment directly and ask for refund.': "Memnuniyetsizliğinizi belirtip iade talep etmek.",
      'Reschedule friendly, saying you understand things happen.': "Anlayışla karşılayarak uygun bir zamana ertelemek.",
      'Reflect on whether to book with someone else in the future.': "Gelecekte başka bir yerle çalışıp çalışmayacağını düşünmek.",
      'Ask them directly to turn down the volume.': "Sesi kısmasını doğrudan rica etmek.",
      'Start a casual chat to distract them from the music.': "Dikkatini dağıtmak için onunla havadan sudan konuşmak.",
      'Move to another carriage quietly to avoid any conflict.': "Tartışmamak için sessizce başka bir vagona geçmek.",
      'Point out the mismatch directly and request a fix.': "Hatayı hemen gösterip düzeltilmesini istemek.",
      'Ask them to adjust it on the next billing cycle.': "Bir sonraki fatura döneminde mahsup edilmesini rica etmek.",
      'Compare the invoice line items with your original quote.': "Fatura kalemlerini orijinal teklif ile karşılaştırmak.",
      'Call to demand an immediate status update and completion date.': "Arayıp teslim tarihi ve güncel durum hakkında bilgi istemek.",
      'Offer them more time while requesting a friendly discount.': "İndirim talep ederek ek süre vermeyi teklif etmek.",
      'Review the repair agreement details before taking action.': "Girişimde bulunmadan önce sözleşme detaylarını incelemek.",
      'Speak up louder to repeat your request directly.': "Talebinizi daha yüksek sesle doğrudan tekrarlamak.",
      'Approach someone else for help to avoid an awkward interaction.': "Gerginlik yaşamamak için başka bir görevliye yönelmek.",
      'Wait patiently to see if they are just busy with another task.': "Meşgul olabileceğini düşünerek sabırla beklemek.",
      'Show your ticket directly and ask them to vacate.': "Bileti gösterip koltuğu boşaltmasını rica etmek.",
      'Ask if they want to swap seats if they are with a group.': "Grup halindeyseler yer değiştirmeyi teklif etmek.",
      'Double-check your seat number privately to be certain.': "Emin olmak için bilet numarasını sessizce kontrol etmek.",
      'Tell them directly that you do not want to be photographed.': "Fotoğrafınızın çekilmesini istemediğinizi doğrudan belirtmek.",
      'Smile casually and suggest taking a group photo instead.': "Gülümseyerek birlikte grup fotoğrafı çekilmeyi önermek.",
      'Walk out of their camera frame quietly without saying anything.': "Hiçbir şey demeden sessizce kadrajdan çıkmak.",
      'Remind them directly that promptness affects the whole group.': "Gecikmenin tüm grubu etkilediğini doğrudan hatırlatmak.",
      'Help them catch up quickly and welcome them to the group.': "Gelişmeleri hızlıca aktarıp gruba katılımını kolaylaştırmak.",
      'Check the schedule quietly and keep walking.': "Sessizce saati kontrol edip yoluna devam etmek.",
      'Ask them directly to plug in their headphones.': "Kulaklık kullanmasını doğrudan rica etmek.",
      'Offer them a spare set of headphones if you have one.': "Varsa yedek bir kulaklık vermeyi teklif etmek.",
      'Put in your own earplugs to block out the noise.': "Gürültüyü duymamak için kendi kulak tıkacını takmak.",
      'State clearly that you are waiting in line.': "Sırada beklediğinizi net şekilde belirtmek.",
      'Point out the end of the queue with a friendly smile.': "Gülümseyerek sıranın sonunu işaret etmek.",
      'Let it go quietly to avoid creating a scene.': "Gerginlik çıkmaması için durumu sessizce kabullenmek.",
      'Tell them directly to pick up their litter.': "Çöpünü toplamasını doğrudan söylemek.",
      'Pick it up yourself with a friendly remark about nature.': "Doğa hakkında kibar bir laf ederek çöpü kendiniz almak.",
      'Wait until they walk away, then throw it in a bin.': "Uzaklaşmasını bekleyip çöpü kendiniz çöpe atmak.",
      'Ask them directly to speak in a whisper.': "Fısıldayarak konuşmasını doğrudan rica etmek.",
      'Suggest moving to the lobby area to continue their chat.': "Sohbete lobide devam etmesini kibarca önermek.",
      'Gather your items quietly and find a different room.': "Eşyalarınızı sakince toplayıp başka bir odaya geçmek.",
      'Ask them directly to stop interrupting the teacher.': "Eğitmenin sözünü kesmemesini doğrudan rica etmek.",
      'Whisper to them casually to help them stay on track.': "Konuyu takip edebilmesi için ona fısıldayarak yardımcı olmak.",
      'Focus on the instructor and ignore their behavior.': "Eğitmene odaklanıp onun davranışını görmezden gelmek.",
      'Politely ask them to step slightly to the side.': "Kibarca biraz yana kaymasını rica etmek.",
      'Move to view another piece and return to this one later.': "Başka bir esere geçip buna daha sonra geri dönmek.",
      'Wait patiently for them to finish and move on.': "İşini bitirip oradan ayrılmasını sabırla beklemek.",
      'Point out directly that the equipment is yours.': "Ekipmanın size ait olduğunu doğrudan belirtmek.",
      'Laugh off the mix-up and check if they need help finding theirs.': "Karışıklığı gülerek karşılayıp kendininkini bulmasına yardım etmek.",
      'Inspect the labels quietly before pointing it out.': "İtiraz etmeden önce sessizce etiketleri kontrol etmek."
    }
  }
};

export function generateQuestionPool(lang: string = 'en'): Question[] {
  const pool: Question[] = [];
  let idCounter = 1;

  // Category-specific allowed lists to ensure logical semantic scenarios
  const categorySubjects: Record<number, string[]> = {
    1: ["A guest", "A visitor", "A friend", "Your roommate", "A neighbor", "Your companion", "A teammate"],
    2: ["A colleague", "A teammate", "A classmate", "A peer", "A partner"],
    3: ["A stranger", "A passenger", "A fellow commuter", "A customer", "A tourist", "A bystander"],
    4: ["A friend", "Your roommate", "Your companion", "A relative", "A classmate", "Your partner"]
  };

  const categoryLocations: Record<number, string[]> = {
    1: ["at a small dinner party", "in your apartment building", "at a local community center", "in a shared kitchen area", "at a weekend neighborhood picnic"],
    2: ["in the shared office lobby", "during an important group meeting", "in a design studio workspace", "in the campus study room"],
    3: ["on a busy commuter train", "in a quiet public library", "at a crowded local cafe", "in a busy department store", "at the train platform", "near the building entrance"],
    4: ["in your apartment building", "at a small dinner party", "at a local cafe", "in a shared kitchen area"]
  };

  // 50 unique conflict actions across 4 categories
  const conflictActions = [
    // Category 1: Property/Physical (cat: 1)
    { cat: 1, text: "spills a hot beverage on your research notes" },
    { cat: 1, text: "accidentally knocks your folder into the mud" },
    { cat: 1, text: "scratches your table surface with a heavy box" },
    { cat: 1, text: "tears a page from your favorite book" },
    { cat: 1, text: "breaks a ceramic mug you left out" },
    { cat: 1, text: "loses a tool you lent them yesterday" },
    { cat: 1, text: "dents your bicycle frame while parking theirs" },
    { cat: 1, text: "gets oil stains on your project documents" },
    { cat: 1, text: "drops your expensive camera on the floor" },
    { cat: 1, text: "leaves your window open during a heavy rainstorm" },
    { cat: 1, text: "uses your personal glass without washing it" },
    { cat: 1, text: "knocks over a vase of flowers on your table" },
    { cat: 1, text: "misplaces your apartment keys" },

    // Category 2: Workplace/Collab Friction (cat: 2)
    { cat: 2, text: "takes credit for your design pitch deck" },
    { cat: 2, text: "assigns their own low-priority tasks to you" },
    { cat: 2, text: "ignores your messages about project deadlines" },
    { cat: 2, text: "criticizes your performance in public" },
    { cat: 2, text: "talks over your slides during a group review" },
    { cat: 2, text: "arrives late to your joint presentation slot" },
    { cat: 2, text: "changes the shared database configuration without warning" },
    { cat: 2, text: "reads your personal notes on the office desk" },
    { cat: 2, text: "discards your printouts from the copy machine" },
    { cat: 2, text: "occupies your reserved meeting room" },
    { cat: 2, text: "rejects your feedback without reading it" },
    { cat: 2, text: "demands changes to the project at the last minute" },

    // Category 3: Public space / community disturbance (cat: 3)
    { cat: 3, text: "plays loud videos on their phone speakers" },
    { cat: 3, text: "cuts directly in front of you in the queue" },
    { cat: 3, text: "parks their bicycle in your driveway space" },
    { cat: 3, text: "leaves trash on your shared bench" },
    { cat: 3, text: "talks loudly on a call during quiet hours" },
    { cat: 3, text: "blocks the sliding elevator doors" },
    { cat: 3, text: "takes photos of you without asking" },
    { cat: 3, text: "smokes in a non-smoking waiting area" },
    { cat: 3, text: "stands too close to you in a line" },
    { cat: 3, text: "takes the seat you reserved online" },
    { cat: 3, text: "plays music late into the night" },
    { cat: 3, text: "leaves their dog unleashed in the lobby" },

    // Category 4: Personal boundary crossing (cat: 4)
    { cat: 4, text: "shares a secret you told them in confidence" },
    { cat: 4, text: "brings uninvited guests to your dinner" },
    { cat: 4, text: "asks intrusive questions about your budget" },
    { cat: 4, text: "makes a sarcastic joke at your expense" },
    { cat: 4, text: "invades your personal space while speaking" },
    { cat: 4, text: "gives unsolicited advice about your future" },
    { cat: 4, text: "borrows your keys without asking" },
    { cat: 4, text: "makes plan modifications without telling you" },
    { cat: 4, text: "invites themselves to your weekend trip" },
    { cat: 4, text: "criticizes your taste in front of others" },
    { cat: 4, text: "takes your phone to read messages" },
    { cat: 4, text: "cancels your plans at the last second" }
  ];

  // Option Labels by Category
  const optionTemplates: Record<number, { dir: string; soc: string; ref: string }> = {
    1: {
      dir: "State the value of the damaged item directly and request a replacement.",
      soc: "Brush off the accident with a warm smile to show you care more about the relationship.",
      ref: "Quietly inspect the items to see if they can be repaired before saying anything."
    },
    2: {
      dir: "Schedule a direct meeting immediately to resolve the collaboration boundary.",
      soc: "Suggest a collaborative compromise to complete the work in a friendly manner.",
      ref: "Review the project notes privately first to ensure you have the facts straight."
    },
    3: {
      dir: "Ask them directly and firmly to respect the public space rules.",
      soc: "Make a light-hearted joke about the situation to ease any tension in the area.",
      ref: "Observe the crowd's reaction and decide if it is safer to just walk away."
    },
    4: {
      dir: "Tell them frankly that their behavior was a breach of your personal trust.",
      soc: "Laugh off the awkward remark and shift the group discussion to a lighter topic.",
      ref: "Ponder their underlying motives in silence before responding."
    }
  };

  const trans = TRANSLATIONS[lang];

  for (let i = 0; i < 500; i++) {
    const actionIndex = i % conflictActions.length;
    const action = conflictActions[actionIndex];
    const category = action.cat;

    const subjectsList = categorySubjects[category];
    const locationsList = categoryLocations[category];

    const subjectIndex = Math.floor(i / conflictActions.length) % subjectsList.length;
    const subject = subjectsList[subjectIndex];

    const locationIndex = Math.floor(i / (conflictActions.length * subjectsList.length)) % locationsList.length;
    const location = locationsList[locationIndex];

    const type = (idCounter % 3 === 0) ? 'single_choice' : 'ranked_choice';

    let prompt = `${subject} ${action.text} ${location}.`;
    let templates = optionTemplates[category];

    let dirLabel = templates.dir;
    let socLabel = templates.soc;
    let refLabel = templates.ref;

    // Localize templates if translation dictionary exists
    if (lang !== 'en' && trans) {
      const transSubj = trans.subj[subject] || subject;
      const transAction = trans.con[action.text] || action.text;
      const transLocation = trans.con[location] || location; // Fall back to raw if translation not mapped
      prompt = `${transSubj} ${transLocation} ${transAction}.`;

      dirLabel = trans.opt[dirLabel] || dirLabel;
      socLabel = trans.opt[socLabel] || socLabel;
      refLabel = trans.opt[refLabel] || refLabel;
    }

    const answerOptions: AnswerOption[] = [
      {
        id: `qp-${idCounter}-opt-0`,
        label: dirLabel,
        effects: [
          { dimension: 'directness', delta: 1.0 },
          { dimension: 'social_energy', delta: 0.3 },
          { dimension: 'expressiveness', delta: 0.2 },
          { dimension: 'assertiveness', delta: 1.0 },
          { dimension: 'adaptability', delta: 0.3 },
          { dimension: 'pace', delta: 0.8 },
          { dimension: 'focus_orientation', delta: -0.5 },
          { dimension: 'vulnerability', delta: -0.3 },
          { dimension: 'conflict_style', delta: 1.0 },
          { dimension: 'feedback_style', delta: -0.8 },
          { dimension: 'playfulness', delta: -0.4 }
        ],
        evidenceTags: ['procedural_direct']
      },
      {
        id: `qp-${idCounter}-opt-1`,
        label: socLabel,
        effects: [
          { dimension: 'social_energy', delta: 1.0 },
          { dimension: 'directness', delta: -0.4 },
          { dimension: 'expressiveness', delta: 1.0 },
          { dimension: 'assertiveness', delta: -0.3 },
          { dimension: 'adaptability', delta: 1.0 },
          { dimension: 'pace', delta: 0.4 },
          { dimension: 'focus_orientation', delta: 1.0 },
          { dimension: 'vulnerability', delta: 0.8 },
          { dimension: 'conflict_style', delta: -0.6 },
          { dimension: 'feedback_style', delta: 0.8 },
          { dimension: 'playfulness', delta: 1.0 }
        ],
        evidenceTags: ['procedural_social']
      },
      {
        id: `qp-${idCounter}-opt-2`,
        label: refLabel,
        effects: [
          { dimension: 'reflectiveness', delta: 1.0 },
          { dimension: 'social_energy', delta: -0.8 },
          { dimension: 'expressiveness', delta: -0.8 },
          { dimension: 'assertiveness', delta: -0.6 },
          { dimension: 'adaptability', delta: -0.5 },
          { dimension: 'pace', delta: -1.0 },
          { dimension: 'focus_orientation', delta: -0.4 },
          { dimension: 'vulnerability', delta: -0.8 },
          { dimension: 'conflict_style', delta: -0.8 },
          { dimension: 'feedback_style', delta: -0.3 },
          { dimension: 'playfulness', delta: -0.8 }
        ],
        evidenceTags: ['procedural_reflective']
      }
    ];

    const permutations = [
      [0, 1, 2],
      [1, 2, 0],
      [2, 0, 1],
      [0, 2, 1],
      [2, 1, 0],
      [1, 0, 2]
    ];
    const perm = permutations[idCounter % permutations.length];
    const shuffledOptions = perm.map(idx => answerOptions[idx]);

    let instructions = type === 'single_choice' ? 'Select the single best response.' : 'Select one primary and up to two secondary actions.';
    if (lang !== 'en' && trans) {
      instructions = type === 'single_choice' ? trans.instructions_single : trans.instructions_ranked;
    }

    pool.push({
      id: `q-p-${idCounter}`,
      journeyVersionId: 'jv-others-1',
      type,
      prompt,
      instructions,
      minSelections: 1,
      maxSelections: type === 'single_choice' ? 1 : 3,
      required: true,
      answerOptions: shuffledOptions,
      tags: [`scenario-idx-${actionIndex}`]
    });

    idCounter++;
  }

  return pool;
}
