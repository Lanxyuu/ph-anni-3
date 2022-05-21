const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const meaning1 = document.getElementById("meaning1");
const meaning2 = document.getElementById("meaning2");
const meaning3 = document.getElementById("meaning3");

let cards;

function chooseCard(cardId, meaningId) {
  let random = Math.floor(Math.random() * cardImg.length);
  while (cards.includes(random)) {
    random = Math.floor(Math.random() * cardImg.length);
  }
  const isUpright = (0 == Math.round(Math.random())) ? true : false;
  var cardFilePath = cardImg[random];
  if(cardFilePath == "./cards/cups/3ofcups.jpg") {
    cardFilePath = (0 == Math.round(Math.random())) ? "./cards/cups/3ofcups1.jpg" : "./cards/cups/3ofcups2.jpg";
  }
  cardId.src = cardFilePath;
  if (isUpright) {
    cardId.classList.remove("reversed");
    meaningId.innerHTML = upright[random];
  } else {
    cardId.classList.add("reversed");
    meaningId.innerHTML = reversed[random];
  }
  cards.push(random);
}

let generateCards = () => {
  cards = [];
  chooseCard(card1, meaning1);
  chooseCard(card2, meaning2);
  chooseCard(card3, meaning3);
}



const cardImg = [ //justice card, thehangedman, thewheeloffortune
  "./cards/arcana/death.jpg", "./cards/arcana/judgement.jpg", "./cards/arcana/justice.jpg", "./cards/arcana/strength.jpg",
  "./cards/arcana/temperance.jpg", "./cards/arcana/thechariot.jpg", "./cards/arcana/thedevil.jpg", "./cards/arcana/theemperor.jpg",
  "./cards/arcana/theempress.jpg", "./cards/arcana/thefool.jpg", "./cards/arcana/thehangedman.jpg", "./cards/arcana/thehermit.jpg",
  "./cards/arcana/theheirophant.jpg", "./cards/arcana/thehighpriestess.jpg", "./cards/arcana/thelovers.jpg", "./cards/arcana/themagician.jpg",
  "./cards/arcana/themoon.jpg", "./cards/arcana/thestar.jpg", "./cards/arcana/thesun.jpg", "./cards/arcana/thetower.jpg",
  "./cards/arcana/thewheeloffortune.jpg", "./cards/arcana/theworld.jpg",

  //2ofcups, 3ofcups, 6ofcups
  "./cards/cups/1ofcups.jpg", "./cards/cups/2ofcups.jpg", "./cards/cups/3ofcups.jpg", "./cards/cups/4ofcups.jpg", 
  "./cards/cups/5ofcups.jpg", "./cards/cups/6ofcups.jpg", "./cards/cups/7ofcups.jpg", "./cards/cups/8ofcups.jpg", 
  "./cards/cups/9ofcups.jpg", "./cards/cups/10ofcups.jpg", "./cards/cups/kingofcups.jpg", "./cards/cups/knightofcups.jpg", 
  "./cards/cups/pageofcups.jpg", "./cards/cups/queenofcups.jpg",

  //4ofpentacles, knightofpentacles, queenofpentacles
  "./cards/pentacles/1ofpentacles.jpg", "./cards/pentacles/2ofpentacles.jpg", "./cards/pentacles/3ofpentacles.jpg", "./cards/pentacles/4ofpentacles.jpg", 
  "./cards/pentacles/5ofpentacles.jpg", "./cards/pentacles/6ofpentacles.jpg", "./cards/pentacles/7ofpentacles.jpg", "./cards/pentacles/8ofpentacles.jpg", 
  "./cards/pentacles/9ofpentacles.jpg", "./cards/pentacles/10ofpentacles.jpg", "./cards/pentacles/kingofpentacles.jpg", "./cards/pentacles/knightofpentacles.jpg", 
  "./cards/pentacles/pageofpentacles.jpg", "./cards/pentacles/queenofpentacles.jpg",

  //4ofswords, 6ofswords, kingofswords
  "./cards/swords/1ofswords.jpg", "./cards/swords/2ofswords.jpg", "./cards/swords/3ofswords.jpg", "./cards/swords/4ofswords.jpg", 
  "./cards/swords/5ofswords.jpg", "./cards/swords/6ofswords.jpg", "./cards/swords/7ofswords.jpg", "./cards/swords/8ofswords.jpg", 
  "./cards/swords/9ofswords.jpg", "./cards/swords/10ofswords.jpg", "./cards/swords/kingofswords.jpg", "./cards/swords/knightofswords.jpg", 
  "./cards/swords/pageofswords.jpg", "./cards/swords/queenofswords.jpg",

  //3ofwands, 6ofwands
  "./cards/wands/1ofwands.jpg", "./cards/wands/2ofwands.jpg", "./cards/wands/3ofwands.jpg", "./cards/wands/4ofwands.jpg", 
  "./cards/wands/5ofwands.jpg", "./cards/wands/6ofwands.jpg", "./cards/wands/7ofwands.jpg", "./cards/wands/8ofwands.jpg", 
  "./cards/wands/9ofwands.jpg", "./cards/wands/10ofwands.jpg", "./cards/wands/kingofwands.jpg", "./cards/wands/knightofwands.jpg", 
  "./cards/wands/pageofwands.jpg", "./cards/wands/queenofwands.jpg"
];

const upright = [
  "<b>Death (Upright)</b>: transformation, endings, change, transition, letting go, release",
  "<b>Judgement (Upright)</b>: self-evaluation, awakening, renewal, purpose, reflection, reckoning",
  "<b>Justice (Upright)</b>: justice, karma, consequence, accountability, law, truth, honesty, integrity, cause and effect",
  "<b>Strength (Upright)</b>: courage, bravery, confidence, compassion, self-confidence, inner power",
  "<b>Temperance (Upright)</b>: balance, peace, patience, moderation, calm, tranquillity, harmony, serenity",
  "<b>The Chariot (Upright)</b>: success, ambition, determination, willpower, control, self-discipline, focus",
  "<b>The Devil (Upright)</b>: oppression, addiction, obsession, dependency, excess, powerlessness, limitations",
  "<b>The Emperor (Upright)</b>: stability, structure, protection, authority, control, practicality, focus, discipline",
  "<b>The Empress (Upright)</b>: divine feminine, sensuality, fertility, nurturing, creativity, beauty, abundance, nature",
  "<b>The Fool (Upright)</b>: beginnings, freedom, innocence, originality, adventure, idealism, spontaneity",
  "<b>The Hanged Man (Upright)</b>: sacrifice, waiting, uncertainty, lack of direction, perspective, contemplation",
  "<b>The Hermit (Upright)</b>: self-reflection, introspection, contemplation, withdrawal, solitude, search for self",
  "<b>The Hierophant (Upright)</b>: tradition, social groups, conventionality, conformity, education, knowledge, beliefs",
  "<b>The High Priestess (Upright)</b>: unconscious, intuition, mystery, spirituality, higher power, inner voice",
  "<b>The Lovers (Upright)</b>: love, unions, partnerships, relationships, choices, romance, balance, unity",
  "<b>The Magician (Upright)</b>: willpower, desire, being resourceful,, skill, ability, concentration, manifestation",
  "<b>The Moon (Upright)</b>: illusion, intuition, uncertainty, confusion, complexity, secrets, unconscious",
  "<b>The Star (Upright)</b>: hope, inspiration, positivity, faith, renewal, healing, rejuvenation",
  "<b>The Sun (Upright)</b>: happiness, success, optimism, vitality, joy, confidence, happiness, truth",
  "<b>The Tower (Upright)</b>: disaster, destruction, upheaval, trauma, sudden change, chaos",
  "<b>The Wheel of Fortune (Upright)</b>: change, cycles, fate, decisive moments, luck, fortune, unexpected events",
  "<b>The World (Upright)</b>: completion, achievement, fulfilment, sense of belonging, wholeness, harmony",

  "<b>Ace of Cups (Upright)</b>: love, new feelings, emotional awakening, creativity, spirituality, intuition",
  "<b>Two of Cups (Upright)</b>: unity, partnership, attraction, connection, close bonds, joining forces, mutual respect",
  "<b>Three of Cups (Upright)</b>: friendship, community, gatherings, celebrations, group events, social events",
  "<b>Four of Cups (Upright)</b>: apathy, contemplation, feeling disconnected, melancholy, boredom, indifference, discontent",
  "<b>Five of Cups (Upright)</b>: loss, grief, disappointment, sadness, mourning, discontent, feeling let down",
  "<b>Six of Cups (Upright)</b>: nostalgia, memories, familiarity, healing, comfort, sentimentality, pleasure",
  "<b>Seven of Cups (Upright)</b>: choices, searching for purpose, illusion, fantasy, daydreaming, wishful thinking, indecision",
  "<b>Eight of Cups (Upright)</b>: abandonment, walking away, letting go, searching for truth, leaving behind",
  "<b>Nine of Cups (Upright)</b>: wishes coming true, contentment, satisfaction, success, achievements, recognition, pleasure",
  "<b>Ten of Cups (Upright)</b>: happiness, homecomings, fulfillment, emotional stability, security, domestic harmony​",
  "<b>King of Cups (Upright)</b>: wise, diplomatic, balance between head and heart, devoted, advisor, counsellor",
  "<b>Knight of Cups (Upright)</b>: idealist, charming, artistic, graceful, tactful, diplomatic, mediator, negotiator",
  "<b>Page of Cups (Upright)</b>: idealism, sensitivity, dreamer, naivete, innocence, inner child, head in the clouds",
  "<b>Queen of Cups (Upright)</b>: compassion, warmth, kindness, intuition, healer, counsellor, supportive",

  "<b>Ace of Pentacles (Upright)</b>: new opportunities, resources, abundance, prosperity, security, stability, manifestation",
  "<b>Two of Pentacles (Upright)</b>: balancing resources, adaptation, resourcefulness, flexibility, stretching resources",
  "<b>Three of Pentacles (Upright)</b>: teamwork, shared goals, collaboration, apprenticeship, effort, pooling energy",
  "<b>Four of Pentacles (Upright)</b>: possessiveness, insecurity, hoarding, stinginess, stability, security, savings, materialism, wealth, frugality, boundaries, guardedness",
  "<b>Five of Pentacles (Upright)</b>: hardship, loss, isolation, feeling abandoned, adversity, struggle, unemployment, alienation, disgrace",
  "<b>Six of Pentacles (Upright)</b>: generosity, charity, community, material help, support, sharing, giving and receiving, gratitude",
  "<b>Seven of Pentacles (Upright)</b>: harvest, rewards, results, growth, progress, perseverance, patience, planning",
  "<b>Eight of Pentacles (Upright)</b>: skill, talent, craftsmanship, quality, high standards, expertise, mastery, commitment, dedication, accomplishment",
  "<b>Nine of Pentacles (Upright)</b>: rewarded efforts, success, achievement, independence, leisure, material security, self-sufficiency",
  "<b>Ten of Pentacles (Upright)</b>: legacy, roots, family, ancestry, inheritance, windfall, foundations, privilege, affluence, stability, tradition​",
  "<b>King of Pentacles (Upright)</b>: abundance, prosperity, security, ambitious, safe, kind, patriarchal, protective, businessman, provider, sensual, reliable",
  "<b>Knight of Pentacles (Upright)</b>: practical, reliable, efficient, stoic, slow and steady, hard-working, committed, patient, conservative",
  "<b>Page of Pentacles (Upright)</b>: ambitious, diligent, goal oriented, planner, consistent, star student, studious, grounded, loyal, faithful, dependable",
  "<b>Queen of Pentacles (Upright)</b>: generous, caring, nurturing, homebody, good business sense, practical, comforting, welcoming, sensible, luxurious",

  "<b>Ace of Swords (Upright)</b>: clarity, breakthrough, new idea, concentration, vision, force, focus, truth",
  "<b>Two of Swords (Upright)</b>: stalemate, difficult choices, stuck in the middle, denial, hidden information",
  "<b>Three of Swords (Upright)</b>: heartbreak, separation, sadness, grief, sorrow, upset, loss, trauma, tears",
  "<b>Four of Swords (Upright)</b>: rest, relaxation, peace, sanctuary, recuperation, self-protection, rejuvenation",
  "<b>Five of Swords (Upright)</b>: arguments, disputes, aggression, bullying, intimidation, conflict, hostility, stress",
  "<b>Six of Swords (Upright)</b>: moving on, departure, leaving behind, distance, accepting lessons",
  "<b>Seven of Swords (Upright)</b>: lies, trickery, scheming, strategy, resourcefulness,sneakiness, cunning",
  "<b>Eight of Swords (Upright)</b>: trapped, restricted, victimised, paralysed, helpless, powerless, imprisonment",
  "<b>Nine of Swords (Upright)</b>: fear, anxiety, negativity, breaking point, despair, nightmares, isolation",
  "<b>Ten of Swords (Upright)</b>: ruin, failure, bitterness, collapse, exhaustion, dead end, victimization, betrayal",
  "<b>King of Swords (Upright)</b>: reason, authority, discipline, integrity, morality, serious, high standards, strict",
  "<b>Knight of Swords (Upright)</b>: assertive, direct, impatient, intellectual, daring, focused, perfectionist, ambitious",
  "<b>Page of Swords (Upright)</b>: curious, witty, chatty, communicative, inspired, vigilant, alert, mental agility",
  "<b>Queen of Swords (Upright)</b>: honest, independent, principled, fair, constructive criticism, objective, perceptive",

  "<b>Ace of Wands (Upright)</b>: inspiration, creative spark, new initiative, new passion, enthusiasm, energy",
  "<b>Two of Wands (Upright)</b>: planning, first steps, making decisions, leaving comfort, taking risks",
  "<b>Three of Wands (Upright)</b>: momentum, confidence, expansion, growth, foresight, looking ahead",
  "<b>Four of Wands (Upright)</b>: community, home, celebrations, reunions, parties, gatherings, stability, belonging",
  "<b>Five of Wands (Upright)</b>: conflict, competition, arguments, aggression, tension, rivals, clashes of ego",
  "<b>Six of Wands (Upright)</b>: success, victory, triumph, rewards, recognition, praise, acclaim, pride",
  "<b>Seven of Wands (Upright)</b>: protectiveness, standing up for yourself, defending yourself, protecting territory",
  "<b>Eight of Wands (Upright)</b>: movement, speed, progress, quick decisions, sudden changes, excitement",
  "<b>Nine of Wands (Upright)</b>: last stand, persistence, grit, resilience, perseverance, close to success, fatigue",
  "<b>Ten of Wands (Upright)</b>: burden, responsibility, duty, stress, obligation, burning out, struggles",
  "<b>King of Wands (Upright)</b>: leadership, vision, big picture, taking control, daring decisions, boldness, optimism",
  "<b>Knight of Wands (Upright)</b>: courageous, energetic, charming, hero, rebellious, hot tempered, free spirit",
  "<b>Page of Wands (Upright)</b>: adventure, excitement, fresh ideas, cheerfulness, energetic, fearless, extroverted",
  "<b>Queen of Wands (Upright)</b>: confident, self-assured, passionate, determined, social, charismatic, vivacious, optimistic"];

const reversed = [
  "<b>Death (Reversed)</b>: fear of change, repeating negative patterns, resisting change, stagnancy, decay",
  "<b>Judgement (Reversed)</b>: self-doubt, lack of self-awareness, failure to learn lessons, self-loathing",
  "<b>Justice (Reversed)</b>: injustice, retribution, dishonesty, corruption, dishonesty, unfairness, avoiding accountability",
  "<b>Strength (Reversed)</b>: self-doubt, weakness, low confidence, inadequacy, cowardice, forcefulness",
  "<b>Temperance (Reversed)</b>: imbalance, excess, extremes, discord, recklessness, hastiness",
  "<b>The Chariot (Reversed)</b>: forceful, no direction, no control, powerless, aggression, obstacles",
  "<b>The Devil (Reversed)</b>: independence, freedom, revelation, release, reclaiming power, reclaiming control",
  "<b>The Emperor (Reversed)</b>: tyrant, domineering, rigid, stubborn, lack of discipline, recklessness",
  "<b>The Empress (Reversed)</b>: insecurity, overbearing, negligence, smothering, lack of growth, lack of progress",
  "<b>The Fool (Reversed)</b>: reckless, careless, distracted, naive, foolish, gullible, stale, dull",
  "<b>The Hanged Man (Reversed)</b>: stalling, disinterest, stagnation, avoiding sacrifice, standstill, apathy",
  "<b>The Hermit (Reversed)</b>: loneliness, isolation, recluse, being anti-social, rejection, returning to society",
  "<b>The Hierophant (Reversed)</b>: rebellion, unconventionality, non-conformity, new methods, ignorance",
  "<b>The High Priestess (Reversed)</b>: repressed intuition, hidden motives, superficiality, confusion, cognitive dissonance",
  "<b>The Lovers (Reversed)</b>: disharmony, imbalance, conflict, detachment, bad choices, indecision",
  "<b>The Magician (Reversed)</b>: manipulation, cunning, trickery, wasted talent, illusion, deception",
  "<b>The Moon (Reversed)</b>: fear, deception, anxiety, misunderstanding, misinterpretation, clarity, understanding",
  "<b>The Star (Reversed)</b>: hopelessness, despair, negativity, lack of faith, despondent",
  "<b>The Sun (Reversed)</b>: blocked happiness, excessive enthusiasm, pessimism, unrealistic expectations, conceitedness",
  "<b>The Tower (Reversed)</b>: averting disaster, delaying the inevitable, resisting change",
  "<b>The Wheel of Fortune (Reversed)</b>: bad luck, lack of control, clinging to control, unwelcome changes, delays",
  "<b>The World (Reversed)</b>: lack of closure, lack of achievement, feeling incomplete, emptiness",

  "<b>Ace of Cups (Reversed)</b>: coldness, emptiness, emotional loss, blocked creativity, feeling unloved, gloominess",
  "<b>Two of Cups (Reversed)</b>: separation, rejection, division, imbalance, tension, bad communication, withdrawal",
  "<b>Three of Cups (Reversed)</b>: gossip, scandal, excess, isolation, loneliness, solitude, imbalanced social life",
  "<b>Four of Cups (Reversed)</b>: clarity, awareness, acceptance, choosing happiness, depression, negativity",
  "<b>Five of Cups (Reversed)</b>: acceptance, moving on, finding peace, contentment, seeing positives",
  "<b>Six of Cups (Reversed)</b>: stuck in past, moving forward, leaving home, independence",
  "<b>Seven of Cups (Reversed)</b>: lack of purpose, disarray, confusion, diversion, distractions, clarity, making choices",
  "<b>Eight of Cups (Reversed)</b>: stagnation, monotony, accepting less, avoidance, fear of change, staying in bad situation",
  "<b>Nine of Cups (Reversed)</b>: unhappiness, lack of fulfilment, disappointment, underachievement, arrogance, snobbery",
  "<b>Ten of Cups (Reversed)</b>: unhappy home, separation, domestic conflict, disharmony, isolation​",
  "<b>King of Cups (Reversed)</b>: overwhelmed, anxious, cold, repressed, withdrawn, manipulative, selfish",
  "<b>Knight of Cups (Reversed)</b>: disappointment, tantrums, moodiness, turmoil, avoiding conflict, vanity",
  "<b>Page of Cups (Reversed)</b>: emotional vulnerability, immaturity, neglecting inner child, escapism, insecurity",
  "<b>Queen of Cups (Reversed)</b>: insecurity, giving too much, overly-sensitive, needy, fragile, dependence, martyrdom",

  "<b>Ace of Pentacles (Reversed)</b>: missed chances, scarcity, deficiency, instability, stinginess, bad investments",
  "<b>Two of Pentacles (Reversed)</b>: imbalance, unorganized, overwhelmed, messiness, chaos, overextending",
  "<b>Three of Pentacles (Reversed)</b>: lack of cohesion, lack of teamwork, apathy, poor motivation, conflict, ego, competition",
  "<b>Four of Pentacles (Reversed)</b>: generosity, giving, spending, openness, financial insecurity, reckless spending",
  "<b>Five of Pentacles (Reversed)</b>: positive changes, recovery from loss, overcoming adversity, forgiveness, feeling welcomed",
  "<b>Six of Pentacles (Reversed)</b>: power dynamics, abuse of generosity, strings attached gifts, inequality, extortion",
  "<b>Seven of Pentacles (Reversed)</b>: unfinished work, procrastination, low effort, waste, lack of growth, setbacks, impatience, lack of reward",
  "<b>Eight of Pentacles (Reversed)</b>: lack of quality, rushed job, bad reputation, lack of motivation, mediocrity, laziness, low skill, dead-end job",
  "<b>Nine of Pentacles (Reversed)</b>: being guarded, living beyond means, material instability, reckless spending, superficiality",
  "<b>Ten of Pentacles (Reversed)</b>: family disputes, bankruptcy, debt, fleeting success, conflict over money, instability, breaking traditions​",
  "<b>King of Pentacles (Reversed)</b>: greed, materialistic, wasteful, chauvanist, poor financial decisions, gambler, exploitative, possessive",
  "<b>Knight of Pentacles (Reversed)</b>: workaholic, laziness, dull, boring, no initiative, cheap, irresponsible, gambler, risky investments",
  "<b>Page of Pentacles (Reversed)</b>: foolish, immature, irresponsible, lazy, underachiever, procrastinator, missed chances, poor prospects",
  "<b>Queen of Pentacles (Reversed)</b>: selfish, unkempt, jealous, insecure, greedy, materialistic, gold digger, intolerant, self-absorbed, envious",

  "<b>Ace of Swords (Reversed)</b>: confusion, miscommunication, hostility, arguments, destruction, brutality",
  "<b>Two of Swords (Reversed)</b>: indecision, hesitancy, anxiety, too much information, no right choice, truth revealed",
  "<b>Three of Swords (Reversed)</b>: healing, forgiveness, recovery, reconciliation, repressing emotions",
  "<b>Four of Swords (Reversed)</b>: recovery, awakening, re-entering world, release from isolation, restlessness, burnout",
  "<b>Five of Swords (Reversed)</b>: reconciliation, resolution, compromise, revenge, regret, remorse, cutting losses",
  "<b>Six of Swords (Reversed)</b>: stuck in past, returning to trouble, running away from problems, trapped",
  "<b>Seven of Swords (Reversed)</b>: confession, conscience, regret, maliciousness, truth revealed",
  "<b>Eight of Swords (Reversed)</b>: freedom, release, taking control, survivor, facing fears, empowered, surrender",
  "<b>Nine of Swords (Reversed)</b>: recovery, learning to cope, facing life, finding help, shame, guilt, mental health issues",
  "<b>Ten of Swords (Reversed)</b>: survival, improvement, healing, lessons learned, despair, relapse",
  "<b>King of Swords (Reversed)</b>: irrational, dictator, oppressive, inhumane, controlling, cold, ruthless, dishonest",
  "<b>Knight of Swords (Reversed)</b>: rude, tactless, forceful, bully, aggressive, vicious, ruthless, arrogant",
  "<b>Page of Swords (Reversed)</b>: scatterbrained, cynical, sarcastic, gossipy, insulting, rude, lack of planning",
  "<b>Queen of Swords (Reversed)</b>: pessimistic, malicious, manipulative, harsh, bitter, spiteful, cruel, deceitful, unforgiving",

  "<b>Ace of Wands (Reversed)</b>: delays, blocks, lack of passion, lack of energy, hesitancy, creative blocks",
  "<b>Two of Wands (Reversed)</b>: bad planning, overanalyzing, not taking action, playing it safe, avoiding risk",
  "<b>Three of Wands (Reversed)</b>: restriction, limitations, lack of progress, obstacles, delays, frustration",
  "<b>Four of Wands (Reversed)</b>: lack of support, instability, feeling unwelcome, transience, lack of roots, home conflict",
  "<b>Five of Wands (Reversed)</b>: end of conflict, cooperation, agreements, truces, harmony, peace, avoiding conflict",
  "<b>Six of Wands (Reversed)</b>: failure, lack of recognition, no rewards, lack of achievement",
  "<b>Seven of Wands (Reversed)</b>: giving up, admitting defeat, yielding, lack of self belief, surrender",
  "<b>Eight of Wands (Reversed)</b>: waiting, slowness, chaos, delays, losing momentum, hastiness, being unprepared",
  "<b>Nine of Wands (Reversed)</b>: stubbornness, rigidity, defensiveness, refusing compromise, giving up",
  "<b>Ten of Wands (Reversed)</b>: failure to delegate, shouldering too much responsibility, collapse, breakdown",
  "<b>King of Wands (Reversed)</b>: forceful, domineering, tyrant, vicious, powerless, ineffective, weak leader",
  "<b>Knight of Wands (Reversed)</b>: arrogant, reckless, impatient, lack of self control, passive, volatile, domineering",
  "<b>Page of Wands (Reversed)</b>: hasty, impatient, lacking ideas, tantrums, laziness, boring, unreliable, distracted",
  "<b>Queen of Wands (Reversed)</b>: demanding, vengeful, low confidence, jealous, selfish, temperamental, bully"
];