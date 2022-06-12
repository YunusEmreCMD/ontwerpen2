// Proberen elke kaart zijn eigen elementen te geven

var alleKaartenStelling = document.querySelectorAll(".kaarten-container ul li ul li p");
var alleKaartenPunten = document.querySelectorAll(".kaarten-container ul li ul li span");
var alleKaartenVormen = document.querySelectorAll(".kaarten-container ul li ul li img");




var kaartenVak = document.querySelector(".kaart-vak");
var kaartMakenLi = document.createElement("li");
var kaartMakenP = document.createElement("p");


// $(function () { //from w  w  w  .  j av a  2s .co m
//   let pokemonList = ['a', 'b', 'c', 'd'];
//   for (let i = 0; i < pokemonList.length; i++) {
//     $("#pokeList ul").append(`<li>${pokemonList[i]}</li>`);
//   }
// });

// function tester() {
//   let pokemonList = ['a', 'b', 'c', 'd'];
//   for (let i = 0; i < pokemonList.length; i++) {
//     kaartenVak.appendChild(kaartMaken);
//   }
// };
// tester();

// var list = ['a', 'b', 'c', 'd'];

willekeurigeStellingen.forEach(function (wizard) {
	var li = document.createElement('li');
  var p = document.createElement('p');
	li.textContent = wizard;
	kaartMakenLi.appendChild(li);
  kaartMakenP.appendChild(p);
  kaartMakenLi.textContent = wizard.stelling;
});

kaartenVak.appendChild(kaartMakenLi);
kaartenVak.appendChild(kaartMakenP);

// var testArr = ['a', 'b', 'c'];
// testArr.forEach((element) => {

//   kaartenVak.appendChild(kaartMaken);

//   console.log(element);
// });

// const a = ["a", "b", "c"];
// for (let index = 0; index < a.length; ++index) {
//     const element = a[index];
//     console.log(element);
// }





// Stellingen
// for (i = 0; i < alleKaartenStelling.length; ++i) {

//   alleKaartenStelling = document.querySelectorAll(".kaarten-container ul li ul li p");
//   alleKaartenPunten = document.querySelectorAll(".kaarten-container ul li ul li span");
//   alleKaartenVormen = document.querySelectorAll(".kaarten-container ul li ul li img");

//   getrokkenKaart = willekeurigeStellingen[willekeurigeKaart].stelling;
//   bijhorendePunten = willekeurigeStellingen[willekeurigeKaart].punten;
//   mening = willekeurigeStellingen[willekeurigeKaart].mening;
//   vorm = willekeurigeStellingen[willekeurigeKaart].vorm;

//   alleKaartenStelling[0].innerHTML = willekeurigeStellingen[0].stelling;
//   alleKaartenStelling[1].innerHTML = willekeurigeStellingen[1].stelling;
//   alleKaartenStelling[2].innerHTML = willekeurigeStellingen[2].stelling;

//   alleKaartenPunten[0].innerHTML = willekeurigeStellingen[0].punten;
//   alleKaartenPunten[1].innerHTML = willekeurigeStellingen[1].punten;
//   alleKaartenPunten[2].innerHTML = willekeurigeStellingen[2].punten;

//   alleKaartenVormen[0].src = willekeurigeStellingen[0].vormen;
//   alleKaartenVormen[1].src = willekeurigeStellingen[1].vormen;
//   alleKaartenVormen[2].src = willekeurigeStellingen[2].vormen;

//   console.log(alleKaartenStelling[0]);
//   console.log(alleKaartenPunten[0]);
//   console.log(alleKaartenVormen[0]);
// }










// Array items in variabele stoppen
// var getrokkenKaart = willekeurigeStellingen[willekeurigeKaart].stelling;
// var bijhorendePunten = willekeurigeStellingen[willekeurigeKaart].punten;
// var mening = willekeurigeStellingen[willekeurigeKaart].mening;
// var vorm = willekeurigeStellingen[willekeurigeKaart].vorm;