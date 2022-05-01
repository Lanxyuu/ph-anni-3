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
  cardId.src = cardImg[random];
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



const cardImg = [
  "./cards/arcana/death.jpg", "./cards/arcana/judgement.jpg", "./cards/arcana/justice.jpg", "./cards/arcana/strength.jpg",
  "./cards/arcana/temperance.jpg", "./cards/arcana/thechariot.jpg", "./cards/arcana/thedevil.jpg", "./cards/arcana/theemperor.jpg",
  "./cards/arcana/theempress.jpg", "./cards/arcana/thefool.jpg", "./cards/arcana/thehangedman.jpg", "./cards/arcana/thehermit.jpg",
  "./cards/arcana/theheirophant.jpg", "./cards/arcana/thehighpriestess.jpg", "./cards/arcana/thelovers.jpg", "./cards/arcana/themagician.jpg",
  "./cards/arcana/themoon.jpg", "./cards/arcana/thestar.jpg", "./cards/arcana/thesun.jpg", "./cards/arcana/thetower.jpg",
  "./cards/arcana/thewheeloffortune.jpg", "./cards/arcana/theworld.jpg"
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
  "<b>The World (Upright)</b>: completion, achievement, fulfilment, sense of belonging, wholeness, harmony"];

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
  "<b>The World (Reversed)</b>: lack of closure, lack of achievement, feeling incomplete, emptiness"];