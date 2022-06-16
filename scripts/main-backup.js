/* -------------------------- 9
--------- VARIABELEN --------
-----------------------------*/

// Variabele voor de kaart elementen
var kaartenTekst = document.querySelectorAll(".kaarten-container ul li p");
var puntenKaart = document.querySelectorAll(".kaarten-container ul li span");
var kaartVorm = document.querySelectorAll(".kaarten-container ul li img");

// Variabele voor de punten telling
var weergaveAantalPunten = document.querySelector(".knoppen-container button:nth-child(2)");
var beginPunten = 100;
var totaalAantalPunten = beginPunten;
weergaveAantalPunten.innerHTML = totaalAantalPunten;

// Alle kaart vormen
var hart = "./images/suit-heart-fill.svg";
var ruit = "./images/suit-diamond-fill.svg";
var klaver = "./images/suit-club-fill.svg";
var schoppe = "./images/suit-spade-fill.svg";
var joker = "./images/joker-hat.svg";


// UL
var kaartenVak = document.querySelector(".kaart-vak");

// Variabele voor de knoppen
var oneensKnop = document.querySelector(".knoppen-container button:nth-child(1)");
var eensKnop = document.querySelector(".knoppen-container button:nth-child(3)");



/* -------------------------- 
--- ARRAY MET WILLEKEURIGE --
--- STELLINGEN --------------
-----------------------------*/

var willekeurigeStellingen = [{
    stelling: "Ik vind het goed dat online gokken is gelegaliseerd om witwaswrij en illegaal gokken tegen te gaan. T",
    punten: 100,
    mening: true,
    vorm: hart,
    type: "rodekaart"
  },
  {
    stelling: "Ik vind dat bij gokken in het algemeen de verantwoordelijkheid ligt bij de persoon en niet bij de dienstverlener. T",
    punten: 200,
    mening: true,
    vorm: hart,
    type: "rodekaart"
  },
  {
    stelling: "Ik vind het goed dat er nu meer en beter gemonitord, ondanks je nu minder privacy hebt. T",
    punten: 200,
    mening: true,
    vorm: hart,
    type: "rodekaart"
  },
  {
    stelling: "De preventiebeleid wordt niet altijd nageleefd door gokbedrijven, zij moeten dan een boete betalen. T",
    punten: 300,
    mening: true,
    vorm: ruit,
    type: "rodekaart"
  },
  {
    stelling: "Ik vind het niet kunnen dat wanneer een account van een klant bevroren wordt wegens overmatig gokken, je simpel weg een nieuwe account kan aanmaken. T",
    punten: 200,
    mening: true,
    vorm: ruit,
    type: "rodekaart"
  },
  {
    stelling: "Er moet onder gok bedrijven een overzicht komen van alle gokverslaafde in Nederland. T",
    punten: 300,
    mening: true,
    vorm: ruit,
    type: "rodekaart"
  },
  {
    stelling: "Wanneer een account bevroren wordt bij de ene gokbedrijf, moet dit doorgevoerd worden voor alle accounts ook bij andere gokbedrijven. F",
    punten: 200,
    mening: false,
    vorm: klaver,
    type: "zwartekaart"
  },
  {
    stelling: "Het probleem ligt bij het gokbedrijf als ze hulp aanbieden, maar de klant geen gehoor geeft. F",
    punten: 400,
    mening: false,
    vorm: klaver,
    type: "zwartekaart"
  },
  {
    stelling: "Bijhorende gokbedrijf moet aansprakelijk gesteld worden, wanneer een klant gokverslaafd wordt. F",
    punten: 100,
    mening: false,
    vorm: schoppe,
    type: "zwartekaart"
  },
  {
    stelling: "Ik vind dat er teveel reclame wordt gemaakt van (online) gokken. F",
    punten: 300,
    mening: false,
    vorm: schoppe,
    type: "zwartekaart"
  },
  {
    stelling: "Gokken is gelegaliseerd zodat spelers beter beschermd zijn dan toen gokken illegaal was, maar in praktijk is dit weinig te merken.",
    punten: 100,
    mening: true,
    vorm: joker,
    type: "jokerkaart"
  },
  {
    stelling: "Uit onderzoek blijkt dat er jaarlijks naar schatting 750.000.000 euro wordt uitgegeven aan online en fysiek gokken.",
    punten: 100,
    mening: true,
    vorm: joker,
    type: "jokerkaart"
  }
];



/* -------------------------- 
------- KAART TREKKEN -------
-----------------------------*/

// Willekeurige kaart trekken
var willekeurigeKaart = Math.floor(Math.random() * willekeurigeStellingen.length);
setTimeout(() => {
  willekeurigeStellingen.splice(willekeurigeKaart, 1);
  console.log(willekeurigeStellingen);
}, 100);

//  Array items in variabele stoppen
var getrokkenKaart = willekeurigeStellingen[willekeurigeKaart].stelling;
var bijhorendePunten = willekeurigeStellingen[willekeurigeKaart].punten;
var mening = willekeurigeStellingen[willekeurigeKaart].mening;
var vorm = willekeurigeStellingen[willekeurigeKaart].vorm;

// Punten optellen of aftrekken
var wijziging = document.querySelector(".wijziging-container span");

for (i = 0; i < puntenKaart.length; ++i) {
  puntenKaart[i].innerHTML = bijhorendePunten;

  // Checken welke vorm erbij hoort
  if (vorm === hart || vorm === ruit) {
    puntenKaart[i].style.color = "red";
    document.body.classList.remove('joker');
    oneensKnop.innerHTML = "Oneens";
    eensKnop.innerHTML = "Eens";
    oneensKnop.disabled = false;
  } else if (vorm === joker) {
    console.log("Jokeerr");
    puntenKaart[i].style.color = "orange";
    document.body.classList.add("joker");
    oneensKnop.innerHTML = "<img src='/images/joker-hat-white.svg'>";
    eensKnop.innerHTML = "Doorgaan";
  } else {
    puntenKaart[i].style.color = "black";
    document.body.classList.remove('joker');
    oneensKnop.innerHTML = "Oneens";
    eensKnop.innerHTML = "Eens";
    oneensKnop.disabled = false;
  }

}

// Opgetelde of afgetrokken punten weergeven
function wijzigingFunc() {
  wijziging.style.display = "block";

  setTimeout(() => {
    wijziging.style.display = "none";
  }, 1500);
}

// Alle stellingen ophalen
for (i = 0; i < kaartenTekst.length; ++i) {
  kaartenTekst[i].innerHTML = getrokkenKaart;
}

// Alle vormen ophalen
for (i = 0; i < kaartVorm.length; ++i) {
  kaartVorm[i].src = vorm;
}



// Random rotatie voor de kaart
var negatieveRotatie = -2;
var positieveRotatie = 2;

function randomRotatieFunc() {

  var randomRotatie = Math.random() * (positieveRotatie - negatieveRotatie) + negatieveRotatie;
  console.log("Random rotatie " + randomRotatie);

  document.body.style.cssText = "--random-deg: " + randomRotatie + "deg";
}


// Kaarten ontvangen
function kaartOntvangen() {
  document.body.classList.remove("ontvangen");

  setTimeout(() => {
    document.body.classList.add("ontvangen");
  }, 100);

}


console.log(willekeurigeKaart, willekeurigeStellingen[willekeurigeKaart].stelling, willekeurigeStellingen[willekeurigeKaart].punten, willekeurigeStellingen[willekeurigeKaart].mening);



/* -------------------------- 
-------- EENS KNOP ----------
-----------------------------*/

function eensKnopFunc() {

  // Punten optellen of aftrekken o.b.v. de mening
  if (mening == true) {
    totaalAantalPunten = beginPunten += bijhorendePunten;
    wijziging.innerHTML = "+ " + bijhorendePunten;
    console.log("juist");

    wijzigingFunc();

  } else {
    totaalAantalPunten = beginPunten -= bijhorendePunten;
    wijziging.innerHTML = "- " + bijhorendePunten;
    console.log("onjuist");

    wijzigingFunc();
  }

  weergaveAantalPunten.innerHTML = totaalAantalPunten;

  // Opnieuw random item uit array halen
  willekeurigeKaart = Math.floor(Math.random() * willekeurigeStellingen.length);

  // Alle variabele weer ophalen om te hergebruiken
  getrokkenKaart = willekeurigeStellingen[willekeurigeKaart].stelling;
  bijhorendePunten = willekeurigeStellingen[willekeurigeKaart].punten;
  mening = willekeurigeStellingen[willekeurigeKaart].mening;
  vorm = willekeurigeStellingen[willekeurigeKaart].vorm;

  // Alle stellingen ophalen, nog in test...
  for (i = 0; i < kaartenTekst.length; ++i) {
    kaartenTekst[i].innerHTML = getrokkenKaart;
  }

  // Punten en vormen plaatsen op de kaart
  for (i = 0; i < puntenKaart.length; ++i) {
    puntenKaart[i].innerHTML = bijhorendePunten;

    if (vorm === hart || vorm === ruit) {
      puntenKaart[i].style.color = "red";
      document.body.classList.remove('joker');
      oneensKnop.innerHTML = "Oneens";
      eensKnop.innerHTML = "Eens";
      oneensKnop.disabled = false;
    } else if (vorm === joker) {
      console.log("Jokeerr");
      puntenKaart[i].style.color = "orange";
      document.body.classList.add("joker");
      oneensKnop.innerHTML = "<img src='/images/joker-hat-white.svg'>";
      eensKnop.innerHTML = "Doorgaan";
      oneensKnop.disabled = true;
    } else {
      puntenKaart[i].style.color = "black";
      document.body.classList.remove('joker');
      oneensKnop.innerHTML = "Oneens";
      eensKnop.innerHTML = "Eens";
      oneensKnop.disabled = false;
    }
  }



  kaartOntvangen();
  randomRotatie = Math.random() * (positieveRotatie - negatieveRotatie) + negatieveRotatie;

  randomRotatieFunc();
  console.log(randomRotatie);



  // Alle vormen ophalen
  for (i = 0; i < kaartVorm.length; ++i) {
    kaartVorm[i].src = vorm;
  }

  // Verwijder gekozen kaart
  willekeurigeStellingen.splice(willekeurigeKaart, 1);
  console.log(willekeurigeStellingen);
  console.log(willekeurigeKaart);

  checkArray();
  checkPunten()

}
eensKnop.addEventListener("click", eensKnopFunc);



// Oneens knoppen
function oneensKnopFunc() {

  if (mening == false) {
    totaalAantalPunten = beginPunten += bijhorendePunten;
    wijziging.innerHTML = "+ " + bijhorendePunten;
    console.log("juist");

    wijzigingFunc();
  } else {
    totaalAantalPunten = beginPunten -= bijhorendePunten;
    wijziging.innerHTML = "- " + bijhorendePunten;
    console.log("onjuist");

    wijzigingFunc();
  }

  weergaveAantalPunten.innerHTML = totaalAantalPunten;

  // Opnieuw random item uit array halen
  willekeurigeKaart = Math.floor(Math.random() * willekeurigeStellingen.length);

  // Alle variabele weer ophalen om te hergebruiken
  getrokkenKaart = willekeurigeStellingen[willekeurigeKaart].stelling;
  bijhorendePunten = willekeurigeStellingen[willekeurigeKaart].punten;
  mening = willekeurigeStellingen[willekeurigeKaart].mening;
  vorm = willekeurigeStellingen[willekeurigeKaart].vorm;

  // Alle stellingen ophalen, nog in test...
  for (i = 0; i < kaartenTekst.length; ++i) {
    kaartenTekst[i].innerHTML = getrokkenKaart;
  }

  // Punten en vormen plaatsen op de kaart
  for (i = 0; i < puntenKaart.length; ++i) {
    puntenKaart[i].innerHTML = bijhorendePunten;

    if (vorm === hart || vorm === ruit) {
      puntenKaart[i].style.color = "red";
      document.body.classList.remove('joker');
      oneensKnop.innerHTML = "Oneens";
      eensKnop.innerHTML = "Eens";
      oneensKnop.disabled = false;
    } else if (vorm === joker) {
      console.log("Jokeerr");
      puntenKaart[i].style.color = "orange";
      document.body.classList.add("joker");
      oneensKnop.innerHTML = "<img src='/images/joker-hat-white.svg'>";
      eensKnop.innerHTML = "Doorgaan";
      oneensKnop.disabled = true;
    } else {
      puntenKaart[i].style.color = "black";
      document.body.classList.remove('joker');
      oneensKnop.innerHTML = "Oneens";
      eensKnop.innerHTML = "Eens";
      oneensKnop.disabled = false;
    }
  }



  kaartOntvangen();
  randomRotatie = Math.random() * (positieveRotatie - negatieveRotatie) + negatieveRotatie;

  randomRotatieFunc();
  console.log(randomRotatie);



  // Haal alle vormen op
  for (i = 0; i < kaartVorm.length; ++i) {
    kaartVorm[i].src = vorm;
  }

  // Verwijder gekozen kaart
  willekeurigeStellingen.splice(willekeurigeKaart, 1);
  console.log(willekeurigeStellingen);

  checkArray();
  checkPunten()

}
oneensKnop.addEventListener("click", oneensKnopFunc);



/* -------------------------- 
-------- AFGELOPEN ----------
-----------------------------*/

var afgelopenOverlay = document.querySelector(".afgelopen-overlay");
var gewonnenPunten = document.querySelector(".gewonnen span:nth-child(2)");

// Check of er nog stellingen zijn
function checkArray() {
  if (willekeurigeStellingen.length === 0) {
    console.log("Alle stellingen zijn beantwoordt!");
    oneensKnop.disabled = true;
    eensKnop.disabled = true;
    document.body.classList.add("gewonnen");
    gewonnenPunten.innerHTML = totaalAantalPunten;
  }
}

function checkPunten() {
  if (totaalAantalPunten <= 0) {
    console.log("Alle geld is op...");
    document.body.classList.add("vergokt");
  }
}

/* -------------------------- 
-------- TIJD ----------
-----------------------------*/


// setInterval(time, 1000);

function updateClock() {
  var tijdTekst = document.querySelector(".tijd span");

  var dag = new Date();
  var time = dag.getHours() + ":" + (dag.getMinutes() < 10 ? '0' : '') + dag.getMinutes();

  tijdTekst.innerHTML = time;
  console.log(time);
}
setInterval(updateClock, 1000);





/* -------------------------- 
----- KAARTEN AANMAKEN ------
-----------------------------*/

// // Container
// var kaartenVak = document.querySelector(".kaart-vak");
// var kaartMakenLi = document.createElement("li");

// // Header
// var kaartMakenHeader = document.createElement("header");
// var kaartMakenImgH = document.createElement("img");
// var kaartMakenSpanH = document.createElement("span");

// // Middenstuk
// var kaartMakenImgM = document.createElement("img");
// var kaartMakenP = document.createElement("p");

// // Footer
// var kaartMakenFooter = document.createElement("footer");
// var kaartMakenImgF = document.createElement("img");
// var kaartMakenSpanF = document.createElement("span");




willekeurigeStellingen = willekeurigeStellingen.sort((a, b) => 0.5 - Math.random());


// for (i = 0; i < willekeurigeStellingen.length; ++i)(function (willekeurigeStelling) {
willekeurigeStellingen.forEach(function (willekeurigeStelling) {

  // Container
  var kaartMakenLi = document.createElement("li");

  // Header
  var kaartMakenHeader = document.createElement("header");
  var kaartMakenImgH = document.createElement("img");
  var kaartMakenSpanH = document.createElement("span");

  // Middenstuk
  var kaartMakenImgM = document.createElement("img");
  var kaartMakenP = document.createElement("p");

  // Footer
  var kaartMakenFooter = document.createElement("footer");
  var kaartMakenImgF = document.createElement("img");
  var kaartMakenSpanF = document.createElement("span");


  // ELEMENTEN VULLEN

  // F
  kaartMakenImgH.src = willekeurigeStelling.vorm;
  kaartMakenSpanH.textContent = willekeurigeStelling.punten;

  // M
  kaartMakenImgM.src = willekeurigeStelling.vorm;
  kaartMakenP.textContent = willekeurigeStelling.stelling;

  // F
  kaartMakenImgF.src = willekeurigeStelling.vorm;
  kaartMakenSpanF.textContent = willekeurigeStelling.punten;


  // Footer
  kaartMakenFooter.append(kaartMakenSpanF);
  kaartMakenFooter.append(kaartMakenImgF);
  // kaartMakenP.after(kaartMakenFooter);

  // Header
  kaartMakenHeader.appendChild(kaartMakenImgH);
  kaartMakenHeader.appendChild(kaartMakenSpanH);

  kaartMakenLi.appendChild(kaartMakenHeader);

  // Middenstuk
  kaartMakenLi.appendChild(kaartMakenImgM);
  kaartMakenLi.appendChild(kaartMakenP);

  kaartMakenLi.appendChild(kaartMakenFooter);

  kaartMakenLi.classList.add(willekeurigeStelling.type);
  kaartMakenLi.dataset.mening = willekeurigeStelling.mening;
  kaartMakenLi.dataset.punten = willekeurigeStelling.punten;

  // Containers
  kaartenVak.appendChild(kaartMakenLi);

  // Footer
  // kaartMakenFooter.append(kaartMakenImgF);
  // kaartMakenFooter.append(kaartMakenSpanF);


});

// kaartenVak.appendChild(kaartMakenLi);
// kaartenVak.appendChild(kaartMakenP);



function checkUl() {

  var eersteLi = kaartenVak.querySelector("li");

  if (eersteLi) {

  }
  else {
    document.body.classList.add("gewonnen");
    gewonnenPunten.innerHTML = totaalAantalPunten;
  }
}







/* -------------------------- 
--------- SLEPEN ------------
-----------------------------*/

// Er wordt niet gesleept
var slepen = false;

// De container van de sleep-items
const kaartenContainer = document.querySelector(".kaarten-container");
// var kaart = document.querySelector(".kaarten-container ul li ul li");

// for (i = 0; i < kaart.length; ++i) {
//   console.log(kaart[i]);
// }



const stack1 = document.querySelector(".kaarten-container ul li:nth-child(1) ul");
const stack2 = document.querySelector(".kaarten-container ul li:nth-child(2) ul");
const stack3 = document.querySelector(".kaarten-container ul li:nth-child(3) ul");

new Sortable(stack1, {
  group: 'shared', // set both lists to same group
  animation: 150,
  onAdd: function (event) {
		// console.log(event.item.dataset.mening);

    if(event.item.dataset.mening == "false"){
      // console.log(true);
      // console.log(event.item.dataset.mening);
      // console.log(totaalAantalPunten);
      // console.log(parseInt(event.item.dataset.punten));
      totaalAantalPunten += parseInt(event.item.dataset.punten);
      // console.log(totaalAantalPunten);
    }
    else{
      // console.log(false);
      // console.log(event.item.dataset.mening);
      // console.log(totaalAantalPunten);
      // console.log(parseInt(event.item.dataset.punten));
      totaalAantalPunten -= parseInt(event.item.dataset.punten);
      // console.log(totaalAantalPunten);
    }
    weergaveAantalPunten.innerHTML = totaalAantalPunten;
    checkUl()
    checkPunten()
	}
});

new Sortable(stack2, {
  group: 'shared',
  animation: 150,
});

new Sortable(stack3, {
  group: 'shared',
  animation: 150,
  onAdd: function (event) {
		// console.log(event.item.dataset.mening);

    if(event.item.dataset.mening == "true"){
      // console.log(true);
      // console.log(event.item.dataset.mening);
      // console.log(totaalAantalPunten);
      // console.log(parseInt(event.item.dataset.punten));
      totaalAantalPunten += parseInt(event.item.dataset.punten);
      // console.log(totaalAantalPunten);
    }
    else{
      // console.log(false);
      // console.log(event.item.dataset.mening);
      // console.log(totaalAantalPunten);
      // console.log(parseInt(event.item.dataset.punten));
      totaalAantalPunten -= parseInt(event.item.dataset.punten);
      // console.log(totaalAantalPunten);
    }
    weergaveAantalPunten.innerHTML = totaalAantalPunten;
    checkUl()
    checkPunten()
	}
});









// // Slepen

// // Er wordt niet gesleept
// var slepen = false;

// // De container van de sleep-items
// const kaartenContainer = document.querySelector(".kaarten-container");
// var kaart = document.querySelector(".kaarten-container ul li");

// // sortable aanmaken
// new Sortable(kaartenContainer, {
//   forceFallback: true,

//   onStart: function (evt) {
//     // als er wordt gesleept (beginnen met slepen)
//     document.body.classList.add("slepen");

//     // testImg.classList.remove("steenStyling");

//     slepen = "true";
//   },
//   onEnd: function (evt) {
//     // als er niet meer wordt gesleept, of wordt losgelaten (einde van slepen)
//     document.body.classList.remove("slepen");
//     kaart.classList.add("wegkaart");

//     slepen = false;
//   }
// });

// kaart.addEventListener("mouseenter", kaartGesleept);

// function kaartGesleept(e) {

//   // als er wordt gesleept & de eevee heeft GEEN "geevolueerd" class, voer het volgende uit
//   if(slepen && !this.classList.contains("geevolueerd")) {

//     // clone de sleepbare steen
//     var clone = document.querySelector(".sortable-fallback");
//     clone.remove();

//     // voeg class toe, als de steen wordt gebruikt, en verwijder de sleep-cursor
//     this.classList.add("geevolueerd");

//     // evolveFireStone();
//     checkImg();

//     document.body.classList.remove("slepen");
//   }
// }





/* -------------------------- 
----- WEGHALEN SCHERMEN -----
-----------------------------*/

// var fruitAutomaat = document.querySelector(".fruitautomaat-container");
// var verbergKnop = document.querySelector(".verberg-container button");

// var fruitAutomaat = document.querySelector(".fruitautomaat-container");

// function verdwijnFruitautomaat() {
//   document.body.classList.add("verdwijn-fruitautomaat");
// }

// setTimeout("verdwijnFruitautomaat()", 3000);



// function toonAccountContainer() {
//   document.body.classList.add("toon-account-container");
// }

// setTimeout("toonAccountContainer()", 3500);




// var popUp = document.querySelector(".account-overlay");
// var doorgaanKnop = document.querySelector(".account-overlay button");

// function sluitOverlay () {
//   document.body.classList.add("sluit-overlay");
// }
// doorgaanKnop.addEventListener("click", sluitOverlay);