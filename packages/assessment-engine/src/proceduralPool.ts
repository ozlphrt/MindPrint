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
      'A patron': "Bir müşteri", 'An attendee': "Bir katılımcı", 'A hiker': "Bir yürüyüşçü", 'A tourist': "Bir turist",
      'A teammate': "Bir ekip arkadaşı", 'Your roommate': "Oda arkadaşınız", 'A classmate': "Bir sınıf arkadaşı",
      'A client': "Bir müşteri", 'A delivery person': "Bir kurye", 'A service technician': "Bir servis teknisyeni"
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
      'takes your gear by mistake': "ekipmanınızı yanlışlıkla alıyor",
      // Combinatorial Actions
      "spills a hot beverage on your research notes": "araştırma notlarınızın üzerine sıcak bir içecek döküyor",
      "accidentally knocks your folder into the mud": "klasörünüzü yanlışlıkla çamura düşürüyor",
      "scratches your table surface with a heavy box": "ağır bir kutuyla masanızın yüzeyini çiziyor",
      "tears a page from your favorite book": "en sevdiğiniz kitaptan bir sayfa yırtıyor",
      "breaks a ceramic mug you left out": "ortada bıraktığınız seramik bardağı kırıyor",
      "loses a tool you lent them yesterday": "dün ödünç verdiğiniz bir aleti kaybediyor",
      "dents your bicycle frame while parking theirs": "bisikletini park ederken sizinkinin gövdesini yamultuyor",
      "gets oil stains on your project documents": "proje belgelerinizin üzerine yağ lekesi bulaştırıyor",
      "drops your expensive camera on the floor": "pahalı kameranızı yere düşürüyor",
      "leaves your window open during a heavy rainstorm": "sağanak yağmur sırasında pencerenizi açık bırakıyor",
      "uses your personal glass without washing it": "kişisel bardağınızı yıkamadan kullanıyor",
      "knocks over a vase of flowers on your table": "masanızdaki çiçek vazosunu deviriyor",
      "misplaces your apartment keys": "dairenizin anahtarlarını kaybediyor",
      "takes credit for your design pitch deck": "tasarım sunumunuzu kendi başarısı gibi gösteriyor",
      "assigns their own low-priority tasks to you": "kendi düşük öncelikli işlerini size yıkıyor",
      "ignores your messages about project deadlines": "proje teslim tarihleriyle ilgili mesajlarınızı görmezden geliyor",
      "criticizes your performance in public": "herkesin içinde performansınızı eleştiriyor",
      "talks over your slides during a group review": "grup değerlendirmesi sırasında slaytlarınızın üzerine konuşuyor",
      "arrives late to your joint presentation slot": "ortak sunum saatinize geç kalıyor",
      "changes the shared database configuration without warning": "haber vermeden ortak veri tabanı yapılandırmasını değiştiriyor",
      "reads your personal notes on the office desk": "ofis masanızdaki kişisel notlarınızı okuyor",
      "discards your printouts from the copy machine": "fotokopi makinesindeki çıktılarınızı çöpe atıyor",
      "occupies your reserved meeting room": "rezerve ettiğiniz toplantı odasını işgal ediyor",
      "rejects your feedback without reading it": "geri bildiriminizi okumadan reddediyor",
      "demands changes to the project at the last minute": "son dakikada projede değişiklikler talep ediyor",
      "plays loud videos on their phone speakers": "telefon hoparlöründen yüksek sesle videolar oynatıyor",
      "cuts directly in front of you in the queue": "sırada doğrudan önünüze geçiyor",
      "parks their bicycle in your driveway space": "bisikletini garaj yolunuza park ediyor",
      "leaves trash on your shared bench": "ortak kullandığınız bankın üzerine çöp bırakıyor",
      "talks loudly on a call during quiet hours": "sessiz saatlerde telefonda yüksek sesle konuşuyor",
      "blocks the sliding elevator doors": "asansörün sürgülü kapılarını engelliyor",
      "smokes in a non-smoking waiting area": "sigara içilmeyen bekleme alanında sigara içiyor",
      "stands too close to you in a line": "sırada size çok yakın duruyor",
      "takes the seat you reserved online": "internetten rezerve ettiğiniz koltuğa oturuyor",
      "plays music late into the night": "gece geç saatlere kadar yüksek sesle müzik çalıyor",
      "leaves their dog unleashed in the lobby": "köpeğini lobide tasmasız bırakıyor",
      "shares a secret you told them in confidence": "sır olarak verdiğiniz bir bilgiyi başkalarıyla paylaşıyor",
      "brings uninvited guests to your dinner": "akşam yemeğinize davetsiz misafirler getiriyor",
      "asks intrusive questions about your budget": "maddi bütçeniz hakkında haddini aşan sorular soruyor",
      "makes a sarcastic joke at your expense": "sizinle alay eden iğneleyici bir şaka yapıyor",
      "invades your personal space while speaking": "konuşurken kişisel alanınızı ihlal ediyor",
      "gives unsolicited advice about your future": "geleceğiniz hakkında istenmeyen tavsiyeler veriyor",
      "borrows your keys without asking": "anahtarlarınızı sormadan ödünç alıyor",
      "makes plan modifications without telling you": "size haber vermeden planlarda değişiklik yapıyor",
      "invites themselves to your weekend trip": "kendini hafta sonu gezinize davet ettiriyor",
      "criticizes your taste in front of others": "başkalarının önünde zevkinizi eleştiriyor",
      "takes your phone to read messages": "mesajları okumak için telefonunuzu alıyor",
      "cancels your plans at the last second": "planlarınızı son saniyede iptal ediyor",
      // Combinatorial Locations
      "in the shared office lobby": "ortak ofis lobisinde",
      "at a crowded local cafe": "kalabalık bir kafede",
      "during an important group meeting": "önemli bir grup toplantısında",
      "in a quiet public library": "sessiz bir kütüphanede",
      "at a small dinner party": "ufak bir akşam yemeğinde",
      "on a busy commuter train": "yoğun bir banliyö treninde",
      "in your apartment building": "apartman binanızda",
      "at a local community center": "yerel bir topluluk merkezinde",
      "in the campus study room": "kampüs çalışma odasında",
      "in a busy department store": "yoğun bir mağazada",
      "at a weekend neighborhood picnic": "hafta sonu mahalle pikniğinde",
      "in a design studio workspace": "tasarım stüdyosu çalışma alanında",
      "at the train platform": "tren peronunda",
      "in a shared kitchen area": "ortak mutfak alanında",
      "near the building entrance": "bina girişinin yakınında"
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
      // New combinatorial options translations
      "State the value of the damaged item directly and request a replacement.": "Zararın karşılanmasını veya eşyanın yenisiyle değiştirilmesini doğrudan talep etmek.",
      "Brush off the accident with a warm smile to show you care more about the relationship.": "Aramızdaki ilişkiyi daha çok önemsediğimi göstermek için kazayı sıcak bir gülümsemeyle geçiştirmek.",
      "Quietly inspect the items to see if they can be repaired before saying anything.": "Bir şey söylemeden önce eşyayı sessizce inceleyip tamir edilip edilemeyeceğine bakmak.",
      "Schedule a direct meeting immediately to resolve the collaboration boundary.": "İş birliği sınırlarını netleştirmek için hemen doğrudan bir toplantı ayarlamak.",
      "Suggest a collaborative compromise to complete the work in a friendly manner.": "İşi dostane bir şekilde tamamlamak için ortak bir uzlaşı önermek.",
      "Review the project notes privately first to ensure you have the facts straight.": "Gerçekleri netleştirmek için önce proje notlarını özel olarak incelemek.",
      "Ask them directly and firmly to respect the public space rules.": "Ortak alan kurallarına uymalarını doğrudan ve kararlı bir şekilde rica etmek.",
      "Make a light-hearted joke about the situation to ease any tension in the area.": "Ortamdaki gerginliği azaltmak için durumla ilgili şaka yollu bir yorum yapmak.",
      "Observe the crowd's reaction and decide if it is safer to just walk away.": "Çevredeki insanların tepkisini gözlemleyip oradan sakince uzaklaşmanın daha güvenli olup olmayacağına karar vermek.",
      "Tell them frankly that their behavior was a breach of your personal trust.": "Bu davranışın kişisel güveninizi zedelediğini açıkça belirtmek.",
      "Laugh off the awkward remark and shift the group discussion to a lighter topic.": "Bu tuhaf yorumu gülerek geçiştirmek ve grup sohbetini daha hafif bir konuya yönlendirmek.",
      "Ponder their underlying motives in silence before responding." : "Cevap vermeden önce arkasında yatan asıl nedeni sessizce tartmak."
    }  }
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
      const lowercaseFirst = (str: string) => str ? str.charAt(0).toLowerCase() + str.slice(1) : str;
      const capitalizeFirst = (str: string) => str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
      prompt = capitalizeFirst(`${transLocation}, ${lowercaseFirst(transSubj)} ${transAction}.`);

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
