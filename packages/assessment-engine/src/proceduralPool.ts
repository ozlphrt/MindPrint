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

export function generateQuestionPool(): Question[] {
  const pool: Question[] = [];
  let idCounter = 1;

  const allScenarios = [
    ...socialConflicts,
    ...personalConflicts,
    ...leisureConflicts
  ];

  for (let i = 0; i < 500; i++) {
    const scenario = allScenarios[i % allScenarios.length];
    // Select a prefix/subject directly matched to this scenario
    const prefix = scenario.subj[Math.floor(i / allScenarios.length) % scenario.subj.length];

    const type = (idCounter % 3 === 0) ? 'single_choice' : 'ranked_choice';
    const prompt = `${prefix} ${scenario.con}.`;

    const answerOptions: AnswerOption[] = [
      {
        id: `qp-${idCounter}-opt-0`,
        label: scenario.dir,
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
        label: scenario.soc,
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
        label: scenario.ref,
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

    const shuffledOptions = [...answerOptions].sort(() => Math.random() - 0.5);

    pool.push({
      id: `q-p-${idCounter}`,
      journeyVersionId: 'jv-others-1',
      type,
      prompt,
      instructions: type === 'single_choice' ? 'Select the single best response.' : 'Select one primary and up to two secondary actions.',
      minSelections: 1,
      maxSelections: type === 'single_choice' ? 1 : 3,
      required: true,
      answerOptions: shuffledOptions,
      tags: [`scenario-idx-${i % allScenarios.length}`]
    });

    idCounter++;
  }

  return pool;
}
