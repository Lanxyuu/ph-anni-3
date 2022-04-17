const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const meaning1 = document.getElementById("meaning1");
const meaning2 = document.getElementById("meaning2");
const meaning3 = document.getElementById("meaning3");
const btn = document.getElementById("btn");

const cardImg = ["./cards/arcana/death.png", "./cards/arcana/judgement.png", "./cards/arcana/justice.png"];
const upright = ["<b>upright death</b>: blah", "<b>upright judgement</b>: blah", "<b>upright justice</b>: blah"];
const reversed = ["<b>reversed death</b>: blah", "<b>reversed judgement</b>: blah", "<b>reversed justice</b>: blah"];

function chooseCard(cardId, meaningId) {
  const random = Math.floor(Math.random() * cardImg.length);
  const isUpright = (0 == Math.round(Math.random())) ? true : false ;
  console.log(random);
  console.log(upright);
  cardId.src=cardImg[random];
  if (isUpright) {
    cardId.classList.remove("reversed");
    meaningId.innerHTML=upright[random];
  } else {
    cardId.classList.add("reversed");
    meaningId.innerHTML=reversed[random];
  }
}

let generateCards = () => {
  chooseCard(card1, meaning1);
  chooseCard(card2, meaning2);
  chooseCard(card3, meaning3);
}
