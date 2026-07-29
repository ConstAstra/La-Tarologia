import { Article } from "@/types/tarot";

// English translations of the free articles. Premium-only articles aren't translated
// yet and fall back to French — see src/data/i18n/index.ts.
export const articlesEn: Article[] = [
  {
    id: "art-histoire-origines",
    category: "histoire",
    title: "Where does tarot come from?",
    isFree: true,
    summary: "A quick trip through time, from simple Italian playing cards to the reflection tool we know today.",
    body: [
      "Tarot wasn't born as a divination tool. Its earliest traces go back to northern Italy, in the fifteenth century, where wealthy families commissioned lavish card decks to play a trick-taking game close to modern bridge. These decks were called \"tarocchi,\" and they already featured a series of illustrated trumps, the direct ancestors of our major arcana.",
      "For a long time, these cards remained a simple courtly amusement. It wasn't until the eighteenth century, in a European climate fascinated by occult sciences and Egyptian or Hebrew traditions, that certain authors began to see in these images far more than a game: a symbolic system capable of telling a universal story, that of a life's path marked by trials and revelations.",
      "It's from this meeting between a popular game and a thirst for esotericism that divinatory tarot, as practiced today, was born. The figures took on meaning: the Magician became the start of the path, the World its culmination, and each card in between a stage of this symbolic journey.",
      "Since then, tarot has never stopped evolving. Every era, every spiritual or artistic movement has added its own layer of meaning, which explains the great diversity of decks found today, while keeping a common architecture: twenty-two major arcana and fifty-six minor arcana split into four suits.",
    ],
  },
  {
    id: "art-histoire-evolution",
    category: "histoire",
    title: "From court game to personal development tool",
    isFree: true,
    summary: "How tarot moved from the aristocratic salon to the nightstand, changing function several times along the way.",
    body: [
      "Over the centuries, tarot has changed status several times. A parlor game in Renaissance Italy, it became, in the nineteenth century, an object of study for esoteric circles seeking to uncover its hidden correspondences with astrology, Kabbalah, or alchemy. It was during this period that much of the symbolic associations still used today became fixed.",
      "In the twentieth century, with the spread of more accessible decks and countless popular books, tarot gradually moved out of initiated circles and into ordinary homes. It became a tool for personal reflection as much as a consultation tool, used both to question the future and to better understand a present situation.",
      "Today, a large share of the people who draw cards do so less to predict a fixed future than to explore a question, gain some distance, or clarify an intuition. It's this dimension of mirror and dialogue with oneself that this application seeks to highlight, without ever claiming to replace an informed personal choice.",
    ],
  },
  {
    id: "art-chemin-du-fou",
    category: "histoire",
    title: "The Fool's Journey: the story the major arcana tell",
    isFree: true,
    summary: "From the Fool leaping into the void to the World closing the loop, the 22 major arcana aren't just a list: they're a journey. Here's the story they tell, step by step.",
    body: [
      "Taken one by one, the twenty-two major arcana look like a gallery of portraits with no apparent connection. Put back in order, they tell something else entirely: a single story, that of a character crossing an entire existence in twenty-two stages. Tradition calls this journey the Fool's Journey, because it's the Fool, card zero, without even a full number to anchor him, who opens the march.",
      "It all begins with a leap. The Fool has no solid baggage or established plan, only momentum. It's no accident that he opens the path: he poses the question the rest of the deck will spend twenty-one cards exploring — what happens when you move forward without knowing what awaits at the end? Each following card is a partial answer, a lesson the Fool meets along the way that transforms him.",
      "The first seven stages, from the Magician to the Chariot, build someone in the world. The Magician learns to act, the High Priestess to listen to what can't be seen, the Empress to create and give without counting, the Emperor to structure, the Hierophant to receive transmitted knowledge, the Lovers to truly choose, the Chariot to hold two opposing forces together in order to advance. By the end of this first third, the Fool has a name, a place, a will. And that's only half the work.",
      "The next seven stages, from Justice to Temperance, build nothing more: they sort things out. Justice imposes facing consequences head-on. The Hermit pulls the character away from the noise of the world he's just conquered, forcing him to hear himself think. The Wheel of Fortune reminds him that nothing he's built is entirely under his control. Strength teaches him to tame without violence. The Hanged Man suspends him, literally, so he can see differently. The Nameless Arcana finishes what must end. Temperance puts the pieces back together with patience. It's the most demanding crossing of the journey: nothing is gained here, everything is clarified.",
      "The last seven stages, from the Devil to the World, are those of liberation. The Devil forces him to face what still chains him. The Tower brings down what was resting on false foundations, without warning. The Star sincerely heals what the fall has just laid bare. The Moon crosses one last zone of shadow, made of mingled intuitions and fears. The Sun finally clears every fog. Judgement forces a decision the character can no longer put off. The World closes the loop: a goal reached, a cycle fully lived.",
      "And after the World? Nothing truly stops. The twenty-second arcana doesn't lead to a final point, it leads back to the Fool, ready to leap again, elsewhere, differently, with what the previous journey has taught him. It's this circularity that gives full meaning to the position of a major arcana in a spread: it doesn't just say what's at play, it locates where you are on this path, without ever fixing it in your place. The path draws a map, not an imposed route: what you do with it remains, at every stage, entirely in your own hands.",
    ],
  },
  {
    id: "art-marseille-vs-riderwaite",
    category: "styles",
    title: "Marseille tarot and Rider-Waite: two faces of the same path",
    isFree: true,
    summary: "The two great tarot families don't share the same style, nor quite the same way of being read. Here's how to tell them apart.",
    body: [
      "When starting out, the diversity of tarot decks can be surprising. Two major families largely dominate the landscape: the Marseille tarot, older in style, and the Rider-Waite-Smith tarot, created in early twentieth-century England, which has strongly influenced most modern decks, including this application's visuals.",
      "The Marseille tarot stays true to an older, more stylized aesthetic. Its minor arcana, in particular, are depicted in an almost abstract way: four crossed wands for the Four of Wands, aligned cups for the Three of Cups, with no scene or character. Reading this deck therefore requires a good grasp of number and suit symbolism, since the image alone doesn't tell a story.",
      "The Rider-Waite-Smith tarot, by contrast, made a choice that permanently changed tarot practice: illustrating each minor card with a concrete scene, with characters in action. The Three of Cups shows three women celebrating together, the Five of Swords a bitter victor surrounded by adversaries walking away. This narrative approach makes the deck far more intuitive for beginners, since the image already carries much of the meaning.",
      "The two traditions also don't quite agree on the order of two major arcana: the Marseille tarot places Justice eighth and Strength eleventh, while the Rider-Waite-Smith swaps these two cards, for reasons of astrological correspondences established by nineteenth-century English esoteric circles. This application has chosen the historical Marseille order, while drawing on visuals and a reading style inspired by the Rider-Waite-Smith tradition for their clarity.",
      "Beyond aesthetics, the difference is above all a matter of approach: the Marseille tarot invites a more symbolic, personal reading, where the interpreter builds meaning from simple forms, while the Rider-Waite-Smith offers a more immediately accessible meaning through its illustrated scenes. Neither is \"superior\" to the other — they're two different languages for exploring the same questions.",
    ],
  },
  {
    id: "art-majeurs-mineurs",
    category: "pratique",
    title: "Major and minor arcana: what's the difference?",
    isFree: true,
    summary: "Understanding the structure of the tarot deck to better read what a spread is telling you.",
    body: [
      "A complete tarot deck has seventy-eight cards, split into two large sets that don't play the same role in a reading. The twenty-two major arcana, from the Fool to the World, represent major existential stages: universal themes like love, loss, transformation, or accomplishment. When several major arcana appear in a spread, it's often a sign that an important, almost initiatory period is playing out.",
      "The fifty-six minor arcana, meanwhile, are closer to everyday life. Split into four suits — Wands for action and energy, Cups for emotions, Swords for thought, and Pentacles for the concrete — they describe more ordinary situations: a conversation, a passing annoyance, good professional news. A spread made up mostly of minor arcana generally speaks of a lighter, more down-to-earth moment.",
      "Understanding this distinction already changes a lot about how you read a spread: the presence or absence of major arcana gives an indication of the intensity of what's at play, even before looking at the precise meaning of each card.",
    ],
  },
  {
    id: "art-familles-mineures",
    category: "pratique",
    title: "The four suits of the minor arcana",
    isFree: true,
    summary: "Wands, Cups, Swords, Pentacles: each suit covers a different slice of life. Here's how to recognize and read them.",
    body: [
      "The fifty-six minor arcana are split into four suits of fourteen cards each, a bit like the suits of a classic deck of playing cards. Each suit is tied to an element and a specific area of life, which lets you sense, from the very first glance at a spread, what it's really going to be about even before reading the detail of each card.",
      "Wands belong to the element of Fire. They carry everything related to momentum, action, and desire: the urge to start something, ambition, passion, the creativity that pushes you to get going. A hand of draws rich in Wands generally speaks of movement, projects, energy to channel, sometimes also competition or rushing when that energy lacks direction. It's the suit of \"doing\" and \"wanting.\"",
      "Cups belong to the element of Water. They cover everything related to feeling: love, emotional bonds, intuition, inner life, imagination. A spread marked by Cups steers the reading toward the heart and relationships, whether it's a budding feeling, an emotion to process, or a bond to repair. It's the suit of \"feeling\" and \"loving.\"",
      "Swords belong to the element of Air. They represent thought: clarity of mind, communication, but also conflict, fears, and truths that are sometimes hard to hear. A strong presence of Swords in a spread often signals a situation playing out as much in the mind as in the facts: a decision to make, a conversation to have, a mind to calm. It's the suit of \"thinking\" and \"speaking.\"",
      "Pentacles, finally, belong to the element of Earth. They concern everything concrete: money, work, the body, material security, daily life. A spread rich in Pentacles usually brings the question back to tangible, palpable stakes, far from abstraction: a professional project, budget management, a health question, or practical organization. It's the suit of \"building\" and \"owning.\"",
      "In a reading, it's useful to look at which suit dominates a spread, beyond the meaning of each card taken in isolation: several Cups together emphasize the emotional dimension of a situation, several Swords its mental or conflictual dimension, and so on. This overview, often overlooked by beginners, is nonetheless one of the most useful habits for not getting lost in detail before grasping the overall tone of the spread.",
    ],
  },
  {
    id: "art-etat-esprit-libre-arbitre",
    category: "pratique",
    title: "Learning to read the cards yourself: mindset, ritual, and free will",
    isFree: true,
    summary: "This app isn't meant to read tarot for you: it's built to teach you how to do it yourself. Here's how to prepare for a reading, and why no card ever decides for you.",
    body: [
      "Tarot doesn't work like a search engine: asking the same question ten times hoping for a nicer answer changes nothing, except to muddy the reading. Before drawing, give yourself a few minutes of real calm — not an automatic gesture squeezed between two notifications. Settle, breathe, let go of what's stirring you, then clearly state what you're trying to understand. A reading done in a rush or in anxiety will produce an interpretation done in a rush and in anxiety: the draw reflects your current state as much as the situation it's meant to illuminate.",
      "The second ingredient, harder than the first, is sincerity: accepting to hear an answer that doesn't suit you. It's tempting to flip a card back, misread it, or force its meaning toward what you already hoped to hear. A good reading demands the opposite: honest curiosity, ready to welcome discomfort if that's what the card brings. This isn't an exercise in confirmation, it's an exercise in listening.",
      "Many tarot readers get into the habit of \"cleansing\" their deck before using it. There's no need to borrow a cultural practice that isn't your own to do this: a simple, neutral gesture works perfectly well. Gently knocking on the deck three times before shuffling, letting it rest overnight in the open air, or simply putting the cards back in order from time to time to start from a neutral base does the job just fine. None of this needs to be taken literally to be useful: the gesture marks a clear boundary between ordinary time and reading time, a bit like washing your hands before cooking. It refocuses attention, and signals to body and mind alike that a different moment is beginning. Adopt whichever ritual speaks to you, or none at all: what matters is the intention you put into it, not the exact formula, and certainly not an object or gesture borrowed from a tradition you don't otherwise practice.",
      "This application isn't meant to draw the cards in your place indefinitely: it's built to teach you to do it yourself, until you no longer need it. Three habits genuinely speed up this learning. First, before reading the suggested interpretation, look at the card for a few seconds and ask yourself what it spontaneously evokes for you: your first impression, however imprecise, is a real starting point, not a mistake to correct. Next, start with short spreads, one or two cards, before venturing into more complex spreads like the Celtic cross: reading a single card is a skill you learn, and that learning later carries over to richer spreads. Finally, keep a record of your draws and what actually happened afterward: it's by confronting your readings with reality, week after week, that a personal sense of the cards gets built, well beyond anything any app can provide on its own.",
      "There remains the most important point, the one no serious tarot app should ever leave in the shadows: the cards write nothing in your place. They illuminate a dynamic, name an energy, reveal a blind spot; they never decide what you'll do next. A difficult card isn't a sentence, and a favorable card isn't a guarantee: in both cases, what's really at stake plays out in your choices, not in the draw. Tarot works like a mirror more than a fixed oracle: it shows you something you may already have known, without yet having the words for it. What you do with that clarity belongs entirely to you, and to no one else.",
      "Keep that freedom in mind with every draw. The best use of tarot isn't to tell you what to do, but to give you what you need to decide for yourself, more clearly than before you laid the cards on the table.",
    ],
  },
];
