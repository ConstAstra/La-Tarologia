import { CardMeaning } from "@/types/tarot";

// English translations of the 22 major arcana. Same ids as src/data/cards.ts — merged
// in by id at runtime, so this file only needs to carry the translated fields.
export const majorsEn: CardMeaning[] = [
  {
    id: "maj-00",
    number: 0,
    name: "The Fool",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["momentum", "total freedom", "deliberate recklessness", "threshold of the possible"],
    keywordsReversed: ["carelessness", "headlong flight", "no bearings", "naivety that costs you"],
    uprightMeaning:
      "The Fool doesn't calculate, he moves. This card doesn't ask you to be reasonable: it demands you take the first step before you have all the answers. A new project, a break from the old pattern, a decision made on instinct rather than logic — whatever the trigger, the energy is the same: jump, then learn on the way down. Don't ask this card for guarantees, it doesn't give any.",
    reversedMeaning:
      "Reversed, momentum becomes pure carelessness: you leave without looking where you're stepping, you say yes to avoid thinking, you flee a reality you'd rather not name. The reversed Fool doesn't punish you — it warns you once: that cliff is real.",
    love: "A lightning bolt or an urge to drop everything on a whim: exhilarating, but only if real conversation follows the enthusiasm — otherwise it's just an escape dressed up as adventure.",
    travailArgent:
      "The moment to launch, change direction, or leave a job that was suffocating you — as long as you don't confuse boldness with total improvisation.",
    conseil: "Jump. But keep your eyes open on the way down: momentum doesn't excuse you from watching where you land.",
    symbolisme: "The figure walks along the edge of a cliff, a light bundle over one shoulder, a dog at his feet: the road has already begun, and yet everything remains possible.",
  },
  {
    id: "maj-01",
    number: 1,
    name: "The Magician",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["initiative", "skill", "acting now", "resources within reach"],
    keywordsReversed: ["empty motion", "bluff", "manipulation", "resources wasted"],
    uprightMeaning:
      "The Magician isn't waiting on anyone: the tools are already on the table, and he uses them, now. This card marks the exact moment an idea stops being an idea and becomes a concrete act. This isn't a card of preparation — it's a card of execution. You already have what you need.",
    reversedMeaning:
      "Reversed, it's motion without substance: energy spent on illusion instead of results, glib talk masking a lack of depth, or worse, a temptation to manipulate rather than genuinely persuade.",
    love: "A direct declaration, an initiative taken without waiting for the other person to move first; the charm works, but only if it's sincere.",
    travailArgent:
      "Launch the project you've been putting off for too long; your ease at persuading will tip a negotiation in your favor.",
    conseil: "Stop polishing, start. Perfection doesn't exist before action, only after several attempts.",
    symbolisme: "Standing before a table covered with objects, one arm raised to the sky and the other to the ground, he connects idea and action.",
  },
  {
    id: "maj-02",
    number: 2,
    name: "The High Priestess",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["intuition", "chosen withdrawal", "inner knowing", "deliberate mystery"],
    keywordsReversed: ["undigested secrets", "cut off from yourself", "rigidity"],
    uprightMeaning:
      "The High Priestess doesn't explain herself, and she doesn't have to. She knows things logic hasn't reached yet, and she asks one thing of you: stop needing to understand everything before you act. Some answers only come in silence. This card guards a knowledge still ripening in the shadows — don't force it out too soon.",
    reversedMeaning:
      "Reversed, you're cutting yourself off from what you already know: rationalizing to avoid feeling, holding a secret that ends up weighing more than it protects. What you're running from doesn't disappear — it simply waits for you to stop running.",
    love: "An undeclared relationship, an attraction neither of you dares name; the silence here says more than any words would.",
    travailArgent:
      "Observe before acting. This is neither the time to take a public stand nor to force a decision: the situation hasn't yet revealed all its pieces.",
    conseil: "Trust what you feel, even without proof. Intuition has never needed your approval to be right.",
    symbolisme: "Seated between two pillars, a half-open book on her knees, she guards the threshold between what is visible and what isn't yet.",
  },
  {
    id: "maj-03",
    number: 3,
    name: "The Empress",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["abundance", "sensuality", "fertile creativity", "natural generosity"],
    keywordsReversed: ["overextension", "emotional dependency", "creation stalled"],
    uprightMeaning:
      "The Empress doesn't ask permission to flourish. What you've planted is growing, without excessive effort, with the raw generosity of nature that gives without counting. This card is about unapologetic pleasure, creation taking shape, sensuality that excuses nothing. Take what's being offered.",
    reversedMeaning:
      "Reversed, this generosity turns against you: you give more than you receive, a creative project withers from lack of time for yourself, your body demands attention you've been refusing it for too long.",
    love: "A nurturing, sensual relationship, sometimes a clear desire to start a family or a home — the urge to build something tangible, not just talk about it.",
    travailArgent:
      "A fertile period for a creative project or an investment that needs time to mature; don't harvest before it's ready.",
    conseil: "Take care of what you're building without forgetting to take care of yourself. An exhausted creator makes nothing.",
    symbolisme: "Seated in a field of ripe wheat, surrounded by abundant vegetation, she embodies nature giving without counting the cost.",
  },
  {
    id: "maj-04",
    number: 4,
    name: "The Emperor",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["structure", "assumed authority", "stability", "protective framework"],
    keywordsReversed: ["rigidity", "authoritarianism", "need to control everything"],
    uprightMeaning:
      "The Emperor sets a solid frame and holds it. No gray areas, no half-applied rules: a structure that stands because someone decided it would. This card isn't about power for its own sake, but about an authority that protects precisely because it's firm. Take a clear stand.",
    reversedMeaning:
      "Reversed, the frame becomes a cage: excessive control, stubbornness that refuses any reconsideration, or on the contrary a total lack of structure where nothing holds up anymore. Question who really holds authority here, and whether it still serves any purpose.",
    love: "A stable, protective partner, or on the contrary one who's too controlling: the relationship needs rules set together, not imposed by one side alone.",
    travailArgent:
      "The moment to set a framework, negotiate solid terms, or take on a responsibility you've been avoiding.",
    conseil: "Firmly structure what needs it. Firmness isn't rigidity as long as it stays in service of something.",
    symbolisme: "Seated on a stone throne adorned with rams, he holds a scepter: matter tamed by will.",
  },
  {
    id: "maj-05",
    number: 5,
    name: "The Hierophant",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["transmission", "tradition", "sound counsel", "formal commitment"],
    keywordsReversed: ["dogmatism", "forced conformity", "bad advice followed blindly"],
    uprightMeaning:
      "The Hierophant transmits what has proven itself: a body of knowledge, a framework, a tradition that gives meaning to what you've been carrying alone for too long. This card speaks of commitments becoming formal — marriage, contract, training — and of a mentor whose experience is worth hearing, without swallowing it uncritically.",
    reversedMeaning:
      "Reversed, it points to teaching followed without ever questioning it, group pressure to conform, or advice that doesn't suit you but that you follow out of habit. Think for yourself, even when authority pushes back.",
    love: "A union becoming official, or the sometimes heavy influence of a third party on your relationship: family, a friend, tradition.",
    travailArgent:
      "A training program, mentorship, or administrative process to handle seriously, without skipping the details that matter.",
    conseil: "Lean on the experience of those who already know, without ever giving up your own judgment.",
    symbolisme: "He blesses two kneeling disciples before him, keeper of a knowledge passed down from generation to generation.",
  },
  {
    id: "maj-06",
    number: 6,
    name: "The Lovers",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["decisive choice", "alignment", "genuine attraction", "heart and reason reconciled"],
    keywordsReversed: ["lingering indecision", "temptation", "inner disagreement"],
    uprightMeaning:
      "The Lovers doesn't ask you to be reasonable, it asks you to be honest. A choice presents itself, and it truly matters: follow what genuinely draws you, or what looks safe on paper. This card speaks of harmony regained between desire and reason — but only once you stop lying about what you actually want.",
    reversedMeaning:
      "Reversed, hesitation drags on, a love triangle sets in, or a choice is made out of fear rather than desire. As long as you refuse to decide, the situation will decide for you, and rarely in your favor.",
    love: "A defining story, a decisive choice, sometimes a dilemma between two people or two possible lives; the ambiguity is no longer sustainable.",
    travailArgent:
      "A decision between two offers: choose the one that's truly aligned with your values, not the one that's simply more reassuring.",
    conseil: "Decide with a heart informed by reason — not one against the other, but one illuminating the other.",
    symbolisme: "A man stands between two female figures, watched over by an angel: human choice remains free, but never entirely alone.",
  },
  {
    id: "maj-07",
    number: 7,
    name: "The Chariot",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["victory through will", "determination", "controlled advance", "two forces tamed"],
    keywordsReversed: ["loss of control", "stubbornness for nothing", "exhaustion"],
    uprightMeaning:
      "The Chariot moves forward because its driver has tamed two forces pulling in opposite directions, without a whip, by will alone. This card is about victory earned through pure determination, not luck: an obstacle overcome, a move, a goal reached because you refused to let go.",
    reversedMeaning:
      "Reversed, the chariot flies apart: too many fronts open at once, a forced advance that exhausts you, a victory slipping through your fingers for lack of clear direction. Pick one battle.",
    love: "A relationship moving fast, carried by strong shared will; be careful not to each pull your own way while claiming to move forward together.",
    travailArgent:
      "The moment to see a project through without wavering, to negotiate firmly, or to take on a decisive move.",
    conseil: "Hold your course. But first check that the two forces driving you are actually pulling in the same direction.",
    symbolisme: "The driver holds the reins of two sphinxes, one light, one dark, without a whip: it's by will alone that he moves them forward together.",
  },
  {
    id: "maj-08",
    number: 8,
    name: "Justice",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["fairness", "truth asserting itself", "owned consequence", "clear-eyed decision"],
    keywordsReversed: ["injustice", "denial", "biased decision"],
    uprightMeaning:
      "Justice doesn't negotiate with facts: every act carries its consequence, and the time has come to face it. A decision, a judgment, a settlement made with clarity, where what actually happened matters more than what you wish had happened.",
    reversedMeaning:
      "Reversed, imbalance sets in: a biased decision, a truth you're carefully avoiding, a sense of injustice demanding repair rather than resignation. A process drags on because someone refuses to decide.",
    love: "A rebalancing is needed: who gives, who receives, and how long the scale has been tipping the same way.",
    travailArgent:
      "A contract, procedure, or negotiation where only rigor and honesty will make the difference — shortcuts always cost you later.",
    conseil: "Look at the situation without going easy on yourself. Truth disturbs first, and repairs after.",
    symbolisme: "Seated between two pillars, a scale in one hand, a straight sword in the other: she weighs before she cuts.",
  },
  {
    id: "maj-09",
    number: 9,
    name: "The Hermit",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["introspection", "quiet wisdom", "chosen solitude", "inner guidance"],
    keywordsReversed: ["forced isolation", "withdrawal", "refusing help"],
    uprightMeaning:
      "The Hermit turns his back on the noise, not out of misanthropy but because his own voice can only be heard in silence. This card demands a retreat, a chosen solitude, a moment of stepping back before moving blindly toward the next stage. It can also point to a mentor whose quiet wisdom outweighs any loud advice.",
    reversedMeaning:
      "Reversed, isolation weighs you down instead of illuminating anything: you refuse help, or you keep a wisdom to yourself that would be worth sharing. Solitude has stopped being a choice and become a wall.",
    love: "A real need for personal space, or singleness lived not as a lack but as a useful time to refocus on yourself.",
    travailArgent:
      "Deep, often solitary work that prepares a decision rather than rushing it; don't skip this stage.",
    conseil: "Give yourself time to think alone before answering or committing. A decision made under social pressure is rarely the right one.",
    symbolisme: "Lantern in hand, he walks slowly through darkness, lighting just enough ground for the next step.",
  },
  {
    id: "maj-10",
    number: 10,
    name: "The Wheel of Fortune",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["decisive turn", "cycle shifting", "objective chance", "unavoidable movement"],
    keywordsReversed: ["resistance to change", "run of setbacks", "passing bad luck"],
    uprightMeaning:
      "The Wheel turns, period. Nothing stays fixed for long, and the turn coming largely escapes your direct control — whether it's unexpected luck or the clean end of a cycle. This card doesn't ask your opinion, it informs you: something is moving, get ready to follow rather than fight it.",
    reversedMeaning:
      "Reversed, you're resisting a change that's only prolonging a difficult phase, or going through a run of setbacks. This isn't a final fate: the wheel keeps turning, for you too.",
    love: "A change of status, a well-timed encounter, or a relationship reaching a turning point impossible to ignore.",
    travailArgent:
      "An opportunity appears without warning, or a professional situation shifts: stay ready to seize what passes, not to wait for it passively.",
    conseil: "Stop fighting what's beyond your control. Focus all your energy on what you can still steer.",
    symbolisme: "A wheel covered in symbols turns, carried by half-animal, half-human figures: fate blends chance and evolution.",
  },
  {
    id: "maj-11",
    number: 11,
    name: "Strength",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["gentle mastery", "quiet courage", "patience", "real self-control"],
    keywordsReversed: ["poorly contained anger", "self-doubt", "nervous exhaustion"],
    uprightMeaning:
      "Strength never imposes itself through force. It tames what seemed untamable — a fear, an anger, a situation beyond you — with a persistent gentleness that wears down resistance better than any confrontation. It's a quiet courage, and that's exactly what makes it unshakeable.",
    reversedMeaning:
      "Reversed, energy overflows: poorly contained anger, an emotion you can no longer channel, or conversely a total sense of powerlessness in the face of a situation that feels too big for you.",
    love: "A relationship that needs patience and gentleness rather than power struggles; your ability to soothe rather than to win makes all the difference.",
    travailArgent:
      "A difficult situation resolved through calm perseverance, never through direct confrontation.",
    conseil: "Face what scares you with gentleness and steadiness. Shows of force only build stronger resistance.",
    symbolisme: "A woman closes a lion's jaws with no apparent effort: true mastery never shouts.",
  },
  {
    id: "maj-12",
    number: 12,
    name: "The Hanged Man",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["chosen pause", "shift in perspective", "active surrender", "waiting that builds something"],
    keywordsReversed: ["self-imposed stalling", "pointless sacrifice", "refusing to see differently"],
    uprightMeaning:
      "The Hanged Man didn't stumble: he chose this position. Suspending action to see the world differently isn't a failure, even if everything in your performance-driven culture pushes you to think so. This card imposes a time-out, a wait, a temporary renunciation that opens an understanding no rushed action could have revealed.",
    reversedMeaning:
      "Reversed, the block drags on for no good reason, a sacrifice is made for the wrong motives, or you stubbornly refuse to change your angle even as the situation clearly demands it.",
    love: "A pause in the relationship, sometimes frustrating in the moment, but one that lets you finally see clearly what's really going on.",
    travailArgent:
      "A project on standby, a delay to accept without fighting it: this decision benefits from ripening rather than being rushed.",
    conseil: "Force nothing right now. This suspended time isn't wasted — it's preparing the decision you couldn't yet make correctly.",
    symbolisme: "Hanging by one foot, his face serene, he looks at the world upside down and finds an unexpected peace in it.",
  },
  {
    id: "maj-13",
    number: 13,
    name: "The Nameless Arcana",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["clean end of a cycle", "transformation", "necessary letting go", "rebirth"],
    keywordsReversed: ["resistance to change", "refused ending", "painful stagnation"],
    uprightMeaning:
      "This card almost never speaks of literal death, and that's exactly why it deserves to be taken seriously: it announces the clean end of a cycle. A relationship, a habit, an identity you were carrying reaches its term. This closing, however rough, clears the space needed for what comes next — nothing grows while the old still occupies all the room.",
    reversedMeaning:
      "Reversed, it shows an ending you refuse to accept: a situation kept artificially alive, more out of fear of the void than real attachment, which only prolongs an already-clear suffering.",
    love: "The end of a relationship or a way of loving that's become obsolete, painful, but opening the way to something more genuine than what just ended.",
    travailArgent:
      "A project, a role, or a method is reaching its end. Don't cling to it: preparing what's next beats delaying the inevitable.",
    conseil: "Let go of what has to end. Clinging to it only delays one thing: what needs that space to be born.",
    symbolisme: "A skeleton reaps a field where hands and heads are already sprouting back up: an ending always feeds a renewal.",
  },
  {
    id: "maj-14",
    number: 14,
    name: "Temperance",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["hard-won balance", "patience", "right measure", "reconciliation"],
    keywordsReversed: ["excess", "imbalance", "destructive impatience"],
    uprightMeaning:
      "Temperance pours from one vessel into another without losing a drop: it's the art of exact measure, the patience that reconciles two elements that seemed incompatible. After a tense period, this card imposes a calm that owes nothing to chance — a balancing act, carried out with method.",
    reversedMeaning:
      "Reversed, excess sets in, in one direction or the other: impatience that overflows a still-fragile balance. Slow down before everything tips over.",
    love: "A relationship finally finding its rhythm, a healthy compromise, a well-earned reconciliation after a period of friction.",
    travailArgent:
      "A project that moves better measured than rushed headlong: a good time to negotiate a lasting compromise.",
    conseil: "Seek the middle ground, even if moderation demands more patience from you than the extreme would.",
    symbolisme: "One foot on land, one in the water, she pours liquid from one cup to the other in one continuous, measured gesture.",
  },
  {
    id: "maj-15",
    number: 15,
    name: "The Devil",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["attachment", "temptation", "dependency", "grip that needs naming"],
    keywordsReversed: ["awareness dawning", "liberation", "breaking a toxic bond"],
    uprightMeaning:
      "The Devil doesn't judge desire, it points to the chain. An attachment that binds more than it fulfills: emotional dependency, an entrenched habit, a compulsion, a controlling relationship. This card condemns nothing, it simply puts you face to face with that bond, often much looser than you're willing to admit.",
    reversedMeaning:
      "Reversed, it's almost always good news: you're becoming aware of a toxic bond, and the detachment begins, even if the road to freedom still takes courage.",
    love: "An intense but possessive attraction, a controlling relationship, a jealousy that urgently needs honest examination rather than justification.",
    travailArgent:
      "A financial dependency, a job that drains without nourishing, a situation whose limits you already know without daring to leave.",
    conseil: "Look clearly at what's holding you back. The chain is almost always easier to break than you think; the real obstacle is daring to look.",
    symbolisme: "Two figures chained to a pedestal where a horned figure sits enthroned: their bonds are loose, they could free themselves if they decided to.",
  },
  {
    id: "maj-16",
    number: 16,
    name: "The Tower",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["sudden collapse", "truth breaking through", "liberating breakdown"],
    keywordsReversed: ["disaster narrowly avoided", "delayed change", "brewing inner crisis"],
    uprightMeaning:
      "The Tower brings down, all at once, what was resting on bad foundations. A shock, a break, a truth that erupts without warning, brutal in the moment, but this fall prevents an even worse collapse by releasing what was no longer sustainable anyway.",
    reversedMeaning:
      "Reversed, a crisis is brewing without breaking out yet, or a collapse was narrowly avoided thanks to a change made just in time. The relief is real, but fragile.",
    love: "A brutal breakup or a revelation that shakes the relationship, but that puts it back on finally honest ground.",
    travailArgent:
      "A sudden change, a loss, or an unexpected reassessment of a situation that seemed stable — it wasn't as stable as it looked.",
    conseil: "Don't cling to a structure that's already cracking. What falls always makes room for something sturdier — but only if you stop holding it up.",
    symbolisme: "Lightning strikes a tower and knocks its crown off: what was built on pride doesn't withstand the truth.",
  },
  {
    id: "maj-17",
    number: 17,
    name: "The Star",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["sincere hope", "real calm", "inspiration", "confidence regained"],
    keywordsReversed: ["passing discouragement", "loss of bearings", "fragile hope"],
    uprightMeaning:
      "After the Tower's storm, the Star brings a sincere calm, not a temporary patch. Hope returns without naivety, ideas become clear, and it becomes possible again to believe in the future without lying to yourself. This card doesn't promise anything spectacular — it promises something rarer: real healing.",
    reversedMeaning:
      "Reversed, hope wavers, a passing discouragement sets in, or you've lost sight of yourself a little. The light hasn't disappeared, it's just veiled for now.",
    love: "A climate of trust and sincerity settles in, making it easier to open up without fearing judgment.",
    travailArgent:
      "A meaningful project, well-earned recognition, or a genuine surge of motivation after a difficult period.",
    conseil: "Let yourself be inspired and believe again in what you're building; without forcing it, confidence regenerates on its own.",
    symbolisme: "Kneeling by a body of water, she pours water from two jugs under a sky full of stars: confidence regenerates.",
  },
  {
    id: "maj-18",
    number: 18,
    name: "The Moon",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["clouded intuition", "illusion", "buried fears", "gray zone"],
    keywordsReversed: ["gradual clarity", "fading confusion", "unfounded fear revealed"],
    uprightMeaning:
      "The Moon never lights things plainly: it reveals powerful intuitions but also illusions, poorly defined fears, a situation that isn't fully clear yet. Nothing you feel is false, but nothing is fully reliable either — which is exactly what makes this card uncomfortable.",
    reversedMeaning:
      "Reversed, the fog finally starts to lift: a confusion clears up, an old fear turns out less founded than it seemed, a hidden truth resurfaces on its own.",
    love: "A relationship marked by doubt or the unspoken, where your intuition picks up on things words haven't said yet; listen to it, without over-dramatizing.",
    travailArgent:
      "An unclear situation, incomplete information: be wary of any decision made on a first impression.",
    conseil: "Don't make anything final while the situation stays foggy. Here, time clarifies what haste would only confuse further.",
    symbolisme: "Between two towers, a dog and a wolf howl at the moon while a crayfish emerges from the water: instincts rise from the depths.",
  },
  {
    id: "maj-19",
    number: 19,
    name: "The Sun",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["genuine success", "unfiltered joy", "total clarity", "vitality"],
    keywordsReversed: ["delayed success", "excessive optimism", "need to recharge"],
    uprightMeaning:
      "The Sun leaves no room for doubt — it's one of the most favorable cards in the whole tarot, with no fine print to look for. Success, plain joy, total clarity: what's happening now is genuine, warm, without calculation. Enjoy it fully, this card asks for no particular caution.",
    reversedMeaning:
      "Reversed, it never announces misfortune, only a temporarily veiled brightness: success running a bit late, fatigue not to be ignored, an optimism a touch too confident to be tempered slightly.",
    love: "A bright period, a joyful and sincere relationship, or excellent family news.",
    travailArgent:
      "A well-earned success, public recognition, or a project reaching completion carried by great collective energy.",
    conseil: "Fully enjoy this favorable period, and share this positive energy rather than keeping it to yourself.",
    symbolisme: "A naked child rides a white horse under a great radiant sun: pure vitality, with no detour or calculation.",
  },
  {
    id: "maj-20",
    number: 20,
    name: "Judgement",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["honest reckoning", "inner call", "rebirth", "decision that shapes the future"],
    keywordsReversed: ["excessive self-criticism", "refusing to hear the call", "missed opportunity"],
    uprightMeaning:
      "Judgement sounds like a call that becomes impossible to ignore. A reckoning is due, an inner truth wakes up abruptly, an important decision takes shape — and this time, you can no longer pretend not to hear it. It's a rebirth that always follows an awareness, never the other way around.",
    reversedMeaning:
      "Reversed, self-criticism turns too harsh, or you refuse to hear what the situation clearly demands: a chance to change passes by unseized, for not having listened in time.",
    love: "An honest reckoning of the relationship is due, sometimes with a clear decision to make about its future; no more gray area possible.",
    travailArgent:
      "An evaluation, feedback long overdue, or the chance to draw a clean line under a professional chapter that's over.",
    conseil: "Listen to the inner call pushing you to change, even if it comes at a moment you didn't choose.",
    symbolisme: "An angel sounds a trumpet and figures rise from their graves, arms open: the call wakes what seemed asleep.",
  },
  {
    id: "maj-21",
    number: 21,
    name: "The World",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["real accomplishment", "completion", "unity", "full success"],
    keywordsReversed: ["incomplete accomplishment", "last step dragging on", "sense of unfinished business"],
    uprightMeaning:
      "The World closes the cycle of the major arcana with no ambiguity: it's the culmination, the circle closed, a goal genuinely reached at the end of a real journey — not a consolation prize. This card announces full success, a rare sense of unity, and often already the quiet call of a next cycle, wider still.",
    reversedMeaning:
      "Reversed, completion is close without being fully reached: one last effort, one detail to settle, before you can truly turn the page.",
    love: "A fully thriving relationship, or the happy culmination of a personal journey that finally makes you truly available for love.",
    travailArgent:
      "The success of a project carried through to the end, well-earned recognition, the realization of a long-pursued goal.",
    conseil: "Savor what you've accomplished before moving on, with a free mind, to the next cycle.",
    symbolisme: "A figure dances within a wreath of leaves, surrounded by the four creatures of the evangelists: every force of existence united in a single movement.",
  },
];
