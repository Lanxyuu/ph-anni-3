const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const meaning1 = document.getElementById("meaning1");
const meaning2 = document.getElementById("meaning2");
const meaning3 = document.getElementById("meaning3");
const btn = document.getElementById("btn");

function chooseCard(cardId, meaningId) {
  const random = Math.floor(Math.random() * cardImg.length);
  const isUpright = (0 == Math.round(Math.random())) ? true : false;
  cardId.src = cardImg[random];
  if (isUpright) {
    cardId.classList.remove("reversed");
    meaningId.innerHTML = upright[random];
  } else {
    cardId.classList.add("reversed");
    meaningId.innerHTML = reversed[random];
  }
}

let generateCards = () => {
  chooseCard(card1, meaning1);
  chooseCard(card2, meaning2);
  chooseCard(card3, meaning3);
}



const cardImg = ["./cards/arcana/death.png", "./cards/arcana/judgement.png", "./cards/arcana/justice.png"];

const upright = ["<b>Death (Upright)</b>: transformation, endings, change, transition, letting go, release",
  "<b>Judgement (Upright)</b>: self-evaluation, awakening, renewal, purpose, reflection, reckoning", 
  "<b>Justice (Upright)</b>: justice, karma, consequence, accountability, law, truth, honesty, integrity, cause and effect"];

const reversed = ["<b>Death (Reversed)</b>: fear of change, repeating negative patterns, resisting change, stagnancy, decay", 
"<b>Judgement (Reversed)</b>: self-doubt, lack of self-awareness, failure to learn lessons, self-loathing", 
"<b>Justice (Reversed)</b>: injustice, retribution, dishonesty, corruption, dishonesty, unfairness, avoiding accountability"];