const card = document.getElementById("card");
const btn = document.getElementById("btn");

let generateCard = (data) => {
  document.getElementById("card").src="images/butler.png";
  const values = [
    "The World",
    "Judgement",
    "The Sun",
    "The Moon"
  ];
  const suits = ["Major Arcana", "Suit of Wands", "Suit of Cups", "Suit of Swords", "Suit of Pentacles"];
  // card.attr("src", "images/butler.png")
  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}

function randomCard(cards) {
  const random = Math.floor(Math.random() * 78) + 1;
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  let entity;
  if(cardSuit == "The World") {
    card.attr("src", "images/butler.png")
  }
  // const card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML = '<span class="card-value-suit top">' + 
  cardValue + entity + "</span>" + '<span class="card-suit">' + entity + 
  "</span>" + '<span class="card-value-suit bot">' + cardValue + entity + "</span>";
  // document.body.appendChild(card);
}
randomCard(cards);
btn.addEventListener("click", generateCard);
// window.addEventListener("load", generateCard);