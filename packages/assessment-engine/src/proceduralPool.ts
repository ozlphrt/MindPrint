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


export function generateQuestionPool(lang: string = 'en'): Question[] {
  const pool: Question[] = [];
  let idCounter = 1;



  // 50 unique conflict actions across 4 categories
  // 49 unique conflict actions across 4 categories, each with tailored options
  // 49 unique conflict actions across 4 categories, each with a pre-composed prompt and custom options
  const conflictActions = [
    // Category 1: Property/Physical (cat: 1)
    {
      cat: 1,
      text: "spills a hot beverage on your research notes",
      prompt: "A teammate accidentally spills a hot beverage on your research notes during an important group meeting.",
      dir: "Point out the spill directly and ask them to help clean it up.",
      soc: "Laugh off the spill and say it is fine, notes can be recopied.",
      ref: "Quietly salvage the dry pages first to assess the damage."
    },
    {
      cat: 1,
      text: "accidentally knocks your folder into the mud",
      prompt: "A companion accidentally knocks your project folder into the mud at a weekend neighborhood picnic.",
      dir: "Point out the muddy folder immediately and ask them to help wipe it clean.",
      soc: "Tell them not to worry about it, it was just an accident.",
      ref: "Quietly pick up the folder to check if the papers inside are ruined."
    },
    {
      cat: 1,
      text: "scratches your table surface with a heavy box",
      prompt: "A guest scratches your table surface with a heavy box at a small dinner party.",
      dir: "Tell them directly that the box scratched the wood and ask them to be careful.",
      soc: "Say it is no big deal and cover the scratch with a coaster.",
      ref: "Inspect the depth of the scratch quietly before deciding whether to say anything."
    },
    {
      cat: 1,
      text: "tears a page from your favorite book",
      prompt: "A friend tears a page from your favorite book while borrowing it at a local cafe.",
      dir: "Tell them that it is your favorite book and ask them to help tape the page back.",
      soc: "Say it is okay, books are meant to be used, and page tears happen.",
      ref: "Quietly take the book back and look at the torn page to see if it can be repaired."
    },
    {
      cat: 1,
      text: "breaks a ceramic mug you left out",
      prompt: "Your roommate breaks a ceramic mug you left out in a shared kitchen area.",
      dir: "Ask them directly to help sweep up the broken pieces safely.",
      soc: "Assure them it was just a cheap mug and tell them not to worry.",
      ref: "Quietly grab a dustpan and start cleaning up the pieces without making a fuss."
    },
    {
      cat: 1,
      text: "loses a tool you lent them yesterday",
      prompt: "A neighbor loses a tool you lent them yesterday in your apartment building.",
      dir: "Ask them directly if they can check their house or replace the tool.",
      soc: "Tell them not to worry, you have spares and they can look for it later.",
      ref: "Search your own workshop first to be absolutely sure you didn't misplace it."
    },
    {
      cat: 1,
      text: "dents your bicycle frame while parking theirs",
      prompt: "A visitor dents your bicycle frame while parking theirs at a local community center.",
      dir: "Point out the new dent on your frame directly and ask them to be more careful.",
      soc: "Smile and say a few scratches and dents build character anyway.",
      ref: "Examine the frame quietly to ensure the dent hasn't compromised the structure."
    },
    {
      cat: 1,
      text: "gets oil stains on your project documents",
      prompt: "A teammate gets oil stains on your project documents in a design studio workspace.",
      dir: "Point out the oil stain directly and ask them to help print a fresh copy.",
      soc: "Say it is fine, it just shows the project is getting some real use.",
      ref: "Quietly check if you have a digital backup of the documents."
    },
    {
      cat: 1,
      text: "drops your expensive camera on the floor",
      prompt: "A guest drops your expensive camera on the floor at a small dinner party.",
      dir: "Pick it up immediately, check if it still works, and tell them it is very delicate.",
      soc: "Say you are sure it is fine and try to laugh off the tension.",
      ref: "Test the lens and shutter system quietly to see if any real damage was done."
    },
    {
      cat: 1,
      text: "leaves your window open during a heavy rainstorm",
      prompt: "Your roommate leaves your window open during a heavy rainstorm in your apartment building.",
      dir: "Tell them directly that the rain is coming in and ask them to close the window immediately.",
      soc: "Mop up the water quickly with a towel and say it's just a bit of fresh air.",
      ref: "Check the floor and windowsill quietly to see if any wood got warped."
    },
    {
      cat: 1,
      text: "uses your personal glass without washing it",
      prompt: "Your companion uses your personal glass without washing it at a small dinner party.",
      dir: "Tell them politely that it is your personal glass and ask them to use a clean one.",
      soc: "Hand them a fresh glass with a smile and offer to wash the used one.",
      ref: "Quietly set the glass aside to wash later and grab a new one for yourself."
    },
    {
      cat: 1,
      text: "knocks over a vase of flowers on your table",
      prompt: "A guest knocks over a vase of flowers on your table at a small dinner party.",
      dir: "Ask them directly to help pick up the vase and dry the wet table.",
      soc: "Help them clean up the water and say it was an easy mistake to make.",
      ref: "Grab a towel quietly to wipe up the spill before it stains the wood."
    },
    {
      cat: 1,
      text: "misplaces your apartment keys",
      prompt: "Your companion misplaces your apartment keys in a shared kitchen area.",
      dir: "Tell them directly that you need the keys back now to secure the apartment.",
      soc: "Tell them not to panic, we can search the room together to find them.",
      ref: "Trace your own steps quietly first to see if you left them somewhere else."
    },

    // Category 2: Workplace/Collab Friction (cat: 2)
    {
      cat: 2,
      text: "takes credit for your design pitch deck",
      prompt: "A colleague takes credit for your design pitch deck during an important group meeting.",
      dir: "Speak up directly in the meeting to clarify your contribution to the deck.",
      soc: "Let them have the spotlight and mention your role casually later.",
      ref: "Review the project logs to document your work before addressing the team."
    },
    {
      cat: 2,
      text: "assigns their own low-priority tasks to you",
      prompt: "A teammate assigns their own low-priority tasks to you in a design studio workspace.",
      dir: "Tell them directly that you do not have capacity for their tasks.",
      soc: "Help them out this time but suggest a better division of labor for next week.",
      ref: "Quietly compare your current task list with the project roadmap first."
    },
    {
      cat: 2,
      text: "ignores your messages about project deadlines",
      prompt: "A partner ignores your messages about project deadlines in the campus study room.",
      dir: "Call them directly or walk to their desk to get an immediate update.",
      soc: "Send a friendly reminder with a light joke about how busy things are.",
      ref: "Wait quietly until the daily standup meeting to raise the status of the project."
    },
    {
      cat: 2,
      text: "criticizes your performance in public",
      prompt: "A colleague criticizes your performance in public in the shared office lobby.",
      dir: "State clearly and firmly that you prefer to discuss performance feedback privately.",
      soc: "Acknowledge their point with a smile and steer the conversation back to the task.",
      ref: "Listen in silence, evaluate their critique, and plan a follow-up conversation."
    },
    {
      cat: 2,
      text: "talks over your slides during a group review",
      prompt: "A classmate talks over your slides during a group review in the campus study room.",
      dir: "Politely but firmly say: 'I'd like to finish presenting these slides first, then open for questions.'",
      soc: "Let them share their thoughts and then smoothly pivot back to your presentation.",
      ref: "Pause in silence and wait for them to finish speaking before resuming."
    },
    {
      cat: 2,
      text: "arrives late to your joint presentation slot",
      prompt: "A teammate arrives late to your joint presentation slot in a design studio workspace.",
      dir: "Tell them directly that their lateness was stressful and affected the presentation.",
      soc: "Start the presentation alone and welcome them in with a joke when they arrive.",
      ref: "Review the feedback notes quietly first to evaluate if the lateness affected the score."
    },
    {
      cat: 2,
      text: "changes the shared database configuration without warning",
      prompt: "A colleague changes the shared database configuration without warning during an important group meeting.",
      dir: "Ask them directly why they made the change without consulting the team.",
      soc: "Help them fix any broken connections and suggest a shared changelog.",
      ref: "Review the database logs quietly to assess what was modified before saying anything."
    },
    {
      cat: 2,
      text: "reads your personal notes on the office desk",
      prompt: "A peer reads your personal notes on the office desk in the shared office lobby.",
      dir: "Ask them directly to respect your privacy and not read notes on your desk.",
      soc: "Laugh it off and ask if they found anything interesting in your notes.",
      ref: "Slide the notes out of their view quietly without making a scene."
    },
    {
      cat: 2,
      text: "discards your printouts from the copy machine",
      prompt: "A colleague discards your printouts from the copy machine in the shared office lobby.",
      dir: "Tell them directly that you were using those prints and ask them to ask next time.",
      soc: "Smile and say no worries, you can easily reprint them.",
      ref: "Check the bin quietly to see if your printouts are still salvageable."
    },
    {
      cat: 2,
      text: "occupies your reserved meeting room",
      prompt: "A classmate occupies your reserved meeting room when you need it for a group study session.",
      dir: "Knock and state directly that you have the room reserved for this time slot.",
      soc: "Offer to give them five minutes to wrap up their discussion.",
      ref: "Double-check your calendar booking details quietly before knocking."
    },
    {
      cat: 2,
      text: "rejects your feedback without reading it",
      prompt: "A teammate rejects your feedback without reading it in a design studio workspace.",
      dir: "Ask them directly why they rejected the feedback without reviewing it.",
      soc: "Offer to sit down together and talk through the suggestions in person.",
      ref: "Evaluate if the feedback was critical to the project success before follow-up."
    },
    {
      cat: 2,
      text: "demands changes to the project at the last minute",
      prompt: "A partner demands changes to the project at the last minute in the campus study room.",
      dir: "Tell them directly that late changes will delay the release and require approval.",
      soc: "See if you can find a quick compromise to address their main concern.",
      ref: "Analyze the impact of the requested changes on the timeline privately."
    },

    // Category 3: Public space / community disturbance (cat: 3)
    {
      cat: 3,
      text: "plays loud videos on their phone speakers",
      prompt: "A passenger plays loud videos on their phone speakers on a busy commuter train.",
      dir: "Ask them directly to use headphones or turn down the volume.",
      soc: "Offer them spare disposable headphones if you have a set.",
      ref: "Put in your own earplugs or move to a quieter spot."
    },
    {
      cat: 3,
      text: "cuts directly in front of you in the queue",
      prompt: "A stranger cuts directly in front of you in the queue at a crowded local cafe.",
      dir: "State clearly and firmly that you are waiting in line.",
      soc: "Point out the end of the queue with a friendly smile.",
      ref: "Let it go quietly to avoid creating a scene over a short wait."
    },
    {
      cat: 3,
      text: "parks their bicycle in your driveway space",
      prompt: "A customer parks their bicycle in your driveway space near the building entrance.",
      dir: "Tell them directly that it is your driveway and ask them to move the bike.",
      soc: "Move it slightly to the side yourself and leave a friendly note.",
      ref: "Observe if they are just popping into a shop before deciding to act."
    },
    {
      cat: 3,
      text: "leaves trash on your shared bench",
      prompt: "A bystander leaves trash on your shared bench in a quiet public library.",
      dir: "Ask them directly to pick up their trash before they leave.",
      soc: "Pick it up yourself and throw it in a bin with a friendly remark.",
      ref: "Wait until they walk away, then clean up the bench yourself."
    },
    {
      cat: 3,
      text: "talks loudly on a call during quiet hours",
      prompt: "A fellow commuter talks loudly on a call during quiet hours on a busy commuter train.",
      dir: "Remind them directly that it is quiet hours and ask them to lower their voice.",
      soc: "Gently mention the quiet rules with a joke about thin walls.",
      ref: "Close your window or door quietly to block out the noise."
    },
    {
      cat: 3,
      text: "blocks the sliding elevator doors",
      prompt: "A passenger blocks the sliding elevator doors in a busy department store.",
      dir: "Ask them directly to step aside so the elevator can move.",
      soc: "Make a light joke about elevator traffic to get them to step back.",
      ref: "Wait patiently for them to finish their conversation and step clear."
    },
    {
      cat: 3,
      text: "takes photos of you without asking",
      prompt: "A tourist takes photos of you without asking near the building entrance.",
      dir: "Tell them directly that you do not want to be photographed.",
      soc: "Smile and ask if they would like you to move out of their shot.",
      ref: "Step out of their camera frame quietly without saying anything."
    },
    {
      cat: 3,
      text: "smokes in a non-smoking waiting area",
      prompt: "A stranger smokes in a non-smoking waiting area at the train platform.",
      dir: "Point out the non-smoking sign directly and ask them to extinguish it.",
      soc: "Mention politely that the smoke is bothering people in the area.",
      ref: "Move to a different waiting area quietly to avoid the smoke."
    },
    {
      cat: 3,
      text: "stands too close to you in a line",
      prompt: "A stranger stands too close to you in a line at a busy department store.",
      dir: "Turn around and ask them politely to give you a bit of personal space.",
      soc: "Take a step forward or adjust your stance casually to create distance.",
      ref: "Keep your place quietly and ignore the closeness to avoid tension."
    },
    {
      cat: 3,
      text: "takes the seat you reserved online",
      prompt: "A passenger takes the seat you reserved online on a busy commuter train.",
      dir: "Show your reservation confirmation directly and ask for the seat.",
      soc: "Ask if they want to swap seats if they are trying to sit with a friend.",
      ref: "Double-check your ticket seat number privately to be absolutely sure."
    },
    {
      cat: 3,
      text: "plays music late into the night",
      prompt: "A neighbor plays music late into the night in your apartment building.",
      dir: "Knock on their door and ask them directly to turn down the music.",
      soc: "Send a friendly text asking if they can lower the volume for the night.",
      ref: "Use earplugs or white noise quietly to sleep through the music."
    },
    {
      cat: 3,
      text: "leaves their dog unleashed in the lobby",
      prompt: "A resident leaves their dog unleashed in the building lobby near the entrance.",
      dir: "Ask them directly to leash their dog for the safety of other residents.",
      soc: "Pet the dog and casually mention that the building rules require leashes.",
      ref: "Walk around them quietly and keep a safe distance from the dog."
    },

    // Category 4: Personal boundary crossing (cat: 4)
    {
      cat: 4,
      text: "shares a secret you told them in confidence",
      prompt: "A friend shares a secret you told them in confidence at a local cafe.",
      dir: "Tell them directly that sharing your secret was a breach of your trust.",
      soc: "Laugh off the revelation and quickly steer the topic somewhere else.",
      ref: "Ponder their underlying motives in silence before deciding to trust them again."
    },
    {
      cat: 4,
      text: "brings uninvited guests to your dinner",
      prompt: "Your roommate brings uninvited guests to your dinner at a small dinner party.",
      dir: "Ask them directly why they didn't check with you before bringing guests.",
      soc: "Pull up extra chairs warmly and welcome the new arrivals.",
      ref: "Accept it quietly and adjust your dinner portions behind the scenes."
    },
    {
      cat: 4,
      text: "asks intrusive questions about your budget",
      prompt: "A relative asks intrusive questions about your budget at a small family dinner.",
      dir: "Tell them frankly that you do not discuss personal finances.",
      soc: "Deflect with a joke and ask about their own career instead.",
      ref: "Politely decline to answer and observe their reaction in silence."
    },
    {
      cat: 4,
      text: "makes a sarcastic joke at your expense",
      prompt: "Your partner makes a sarcastic joke at your expense at a local cafe.",
      dir: "Tell them directly that you did not find the joke funny or respectful.",
      soc: "Laugh along with the joke to keep the atmosphere light.",
      ref: "Observe their expression quietly to gauge if it was malicious or playful."
    },
    {
      cat: 4,
      text: "invades your personal space while speaking",
      prompt: "A classmate invades your personal space while speaking in a shared kitchen area.",
      dir: "Ask them politely to step back a bit so you can converse comfortably.",
      soc: "Take a step back casually while continuing the conversation.",
      ref: "Keep your position quietly and focus on their words rather than proximity."
    },
    {
      cat: 4,
      text: "gives unsolicited advice about your future",
      prompt: "A relative gives unsolicited advice about your future in your apartment building.",
      dir: "Tell them directly that you prefer to make your own decisions about your future.",
      soc: "Thank them for the advice with a smile and change the topic.",
      ref: "Listen quietly without committing to any of their suggestions."
    },
    {
      cat: 4,
      text: "borrows your keys without asking",
      prompt: "Your roommate borrows your keys without asking in a shared kitchen area.",
      dir: "Tell them directly that taking your keys without permission is unacceptable.",
      soc: "Ask them to just let you know next time so you don't worry.",
      ref: "Inspect your keychain quietly to make sure nothing is missing."
    },
    {
      cat: 4,
      text: "makes plan modifications without telling you",
      prompt: "A friend makes plan modifications without telling you at a local cafe.",
      dir: "Tell them directly that you prefer to be consulted before plans are changed.",
      soc: "Adapt to the new plans with a smile and go along with the group.",
      ref: "Evaluate if the new plans still suit your schedule before agreeing."
    },
    {
      cat: 4,
      text: "invites themselves to your weekend trip",
      prompt: "A classmate invites themselves to your weekend trip in a shared kitchen area.",
      dir: "Tell them frankly that this trip is already fully booked or private.",
      soc: "Say it's great they want to join and help them find lodging.",
      ref: "Ponder quietly if their presence would change the group dynamic."
    },
    {
      cat: 4,
      text: "criticizes your taste in front of others",
      prompt: "Your companion criticizes your taste in front of others at a small dinner party.",
      dir: "State directly that everyone has different preferences and you like your choice.",
      soc: "Make a self-deprecating joke to diffuse the criticism.",
      ref: "Listen quietly and ignore the criticism to keep the peace."
    },
    {
      cat: 4,
      text: "takes your phone to read messages",
      prompt: "Your partner takes your phone to read messages at a local cafe.",
      dir: "Take the phone back immediately and tell them to respect your privacy.",
      soc: "Ask them playfully what they are looking for on your phone.",
      ref: "Lock the phone quietly and set it aside without saying anything."
    },
    {
      cat: 4,
      text: "cancels your plans at the last second",
      prompt: "A friend cancels your plans at the last second in a shared kitchen area.",
      dir: "Tell them directly that last-minute cancellations are frustrating.",
      soc: "Say you understand and suggest rescheduling for another time.",
      ref: "Use the newly freed time quietly for your own hobbies or relaxation."
    }
  ];

  for (let i = 0; i < 500; i++) {
    const actionIndex = i % conflictActions.length;
    const action = conflictActions[actionIndex];
    const category = action.cat;

    const type = (idCounter % 3 === 0) ? 'single_choice' : 'ranked_choice';

    let prompt = action.prompt;

    let dirLabel = action.dir;
    let socLabel = action.soc;
    let refLabel = action.ref;



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
