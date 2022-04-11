/*
Consegna:
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.
*/
const items = [
  {
    immagine:"img/01.jpg",
    titolo:'Svezia',
    descrizione: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  },
  {
    immagine:"img/02.jpg",
    titolo: 'Svizzera',
    descrizione: "Lorem ipsum",
  },
  {
    immagine:"img/03.jpg",
    titolo:'Gran Bretagna',
    descrizione:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    immagine:"img/04.jpg",
    titolo:'Germania',
    descrizione: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  },
  {
    immagine:"img/05.jpg",
    titolo:'Paradise',
    descrizione: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
  }
];

//variabile per raccogliere tutto l'html che va in items-container
let itemTemplate = "";

//variabile per raccogliere tutto l'html che va in thumbs-container
let thumbTemplate = "";

// preparo una varibile con l'indice dell'elemento attivo e la pongo inizialmente a 0 ovvero il primo elemento dell'array
//let currentIndexActive = 0;

//eseguo il ciclo for sull'array delle immagini (items) e popolo l'html delle due varibaili da stampare nei due contenitori (immagini e thumbnails)
for (let i = 0; i < items.length; i++) {
  let classActive = "";
  if (i === currentIndexActive) {
    classActive = "active";
  }
  itemTemplate += `
  <div class="item ${classActive}">
    <img src="${items[i].immagine}" />
      <div class="title">
        <h2>${items[i].titolo}</h2>
        <p>${items[i].descrizione}</p>
      </div>
  </div>`;
  thumbTemplate += `
  <div class="thumb ${classActive}">
    <img src="${items[i].immagine}" alt="" />
  </div>`;
}
//console.log(thumbTemplate);

// metto in due variabili rispettivamente i contenitori che si trovano nell'html
const itemsContainer = document.querySelector(".items-container");
//Sconst thumbsContainer = document.querySelector(".thumbs-container");
console.log(itemContainer);

//stampo l'html corrispondente nei due contenitori
itemsContainer.innerHTML = itemTemplate;
thumbsContainer.innerHTML += thumbTemplate;
//document.querySelector(".item").classList.add("active");

//Pulsanti
//.next .fa-circle-chevron-down
//.prev .fa-circle-chevron-up
//metto nelle variabili next e prev i due pulsanti
const next = document.querySelector(" .fa-circle-chevron-down");
const prev = document.querySelector(" .fa-circle-chevron-up");
//console.log(next, prev);
function slideUpDown() {
  //prendere immagine con currentIndexActive e togliere classe active
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");
  //console.log(imgs);

  console.log(currentIndexActive);
  imgs[currentIndexActive].classList.add("active");
  console.log(currentIndexActive);
  thumbs[currentIndexActive].classList.add("active");
}
function slideUpDown() {
  // direction = this.id;
  const direction = ( this && this.id === 'iNext') ? 'iNext' :'iPrev';

  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");
  if (direction==='iNext'){
    currentIndexActive = (currentIndexActive === 0) ? items.length - 1 : currentIndexActive--;
  } else {
    currentIndexActive = (currentIndexActive === 4) ? currentIndexActive++;
  } 
  //console.log(currentIndexActive);
  imgs[currentIndexActive].classList.add("active");
  //console.log(currentIndexActive);
  thumbs[currentIndexActive].classList.add("active");
}

next.addEventListener("click", slideUpDown);
prev.addEventListener("click", slideUpDown);
const timer = setInterval (slideUpDown, 2000);
