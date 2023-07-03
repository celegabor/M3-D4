document.getElementById("myButton").addEventListener("click", function() {
    alert("Questo è un alert!");
  });

function togli1() {
  var container = document.getElementById("jumbotron");
  
  if (container.classList.contains("d-block")) {
    container.classList.remove("d-block");
    container.classList.add("d-none");
  } else {
    container.classList.remove("d-none");
    container.classList.add("d-block");
  }
}
function togli2() {
  var container = document.getElementById("offerte");
  
  if (container.classList.contains("d-block")) {
    container.classList.remove("d-block");
    container.classList.add("d-none");
  } else {
    container.classList.remove("d-none");
    container.classList.add("d-block");
  }
}
function togli3() {
  var container = document.getElementById("welcome");
  
  if (container.classList.contains("d-block")) {
    container.classList.remove("d-block");
    container.classList.add("d-none");
  } else {
    container.classList.remove("d-none");
    container.classList.add("d-block");
  }
}
function togli4() {
  var container = document.getElementById("divOffertaGiorno");
  console.log(container);
  
  if (container.classList.contains("d-flex")) {
    container.classList.remove("d-flex");
    container.classList.add("d-none");
    console.log('sono qua');
  } else {
    container.classList.remove("d-none");
    container.classList.add("d-flex");
  }
}
function togli5() {
  var container = document.getElementById("last-minute");
  
  if (container.classList.contains("d-block")) {
    container.classList.remove("d-block");
    container.classList.add("d-none");
  } else {
    container.classList.remove("d-none");
    container.classList.add("d-block");
  }
}
function togli6() {
  var container = document.getElementById("testimonial");
  
  if (container.classList.contains("d-block")) {
    container.classList.remove("d-block");
    container.classList.add("d-none");
  } else {
    container.classList.remove("d-none");
    container.classList.add("d-block");
  }
}


let contenitori = document.querySelectorAll('div', 'div > div', 'section', 'section > div');
let cardArray = Array.from(contenitori).filter(elemento => elemento.classList.contains('card'));
let nViaggi = document.getElementById('nViaggi')

let lunghezza = cardArray.length
console.log(lunghezza);

nViaggi.innerText = 'Numero viaggi:' + lunghezza


function togliTutto() {
  const cardArray = document.querySelectorAll('.card');

  for (let i = 0; i < cardArray.length; i++) {
    cardArray[i].remove();
  }
}