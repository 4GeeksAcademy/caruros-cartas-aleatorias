window.onload = function () {

  const palos = ["♦", "♥", "♠", "♣"];
  const palosNombre = ["diamond", "heart", "club", "spade"];
  const valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


  let paloRandom = Math.floor(Math.random() * 4);
  let valorRandom = Math.floor(Math.random() * 13);

  let card = document.getElementById("card");
  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  let number = document.querySelector(".number");

  top.innerHTML = palos[paloRandom];
  bottom.innerHTML = palos[paloRandom];
  number.innerHTML = valor[valorRandom];
  card.className = "card";
  card.classList.add(palosNombre[paloRandom]);
}