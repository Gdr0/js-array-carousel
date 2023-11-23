const items = document.getElementsByClassName("item");
// console.log(items[0]);
let activeItem = 0;
const next = document.querySelector(".next");
next.addEventListener("click", function () {
  if (activeItem < items.length - 1) {
    items[activeItem].classList.remove("active");
    activeItem++;
    items[activeItem].classList.add("active");
  }
  if (activeItem === items.length - 1) {
    next.classList.add("hidden");
  }
  if (activeItem < items.length - 1) {
    next.classList.remove("hidden");
  }
  if (activeItem > 0) {
    previous.classList.remove("hidden");
  }
});
// CREO IL COMANDO PER SCORRERE AL CONTRARIO
const previous = document.querySelector(".previous");
previous.addEventListener("click", function () {
  // RIMUOVO ACTIVE
  if (activeItem < items.length) {
    items[activeItem].classList.remove("active");
    //ABBASSO L'INDICE DELL'ELEMENTO VISUALIZZATO
    activeItem--;
    // AGGIUNGO ACTIVE ALL'ELEMENTO
    items[activeItem].classList.add("active");
  }
  //   AGGIUNGO ACTIVE AGLI ELEMNTI QUANDO MI MUOVO VERSO IL BASSO
  if (activeItem < items.length - 1) {
    next.classList.remove("hidden");
  }
  //   NASCONDO IL PULSANTE AL PRIMO ELEMENTO
  if (activeItem === 0) {
    previous.classList.add("hidden");
  }
});
