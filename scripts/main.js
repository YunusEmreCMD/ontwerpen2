/* -------------------------- 9
--------- VARIABELEN --------
-----------------------------*/

// Variabele voor de kaart elementen
var kaartenTekst = document.querySelectorAll(".kaarten-container ul li p");
var puntenKaart = document.querySelectorAll(".kaarten-container ul li span");
var kaartVorm = document.querySelectorAll(".kaarten-container ul li img");

// Variabele voor de punten telling
var weergaveAantalPunten = document.querySelector(".knoppen-container button:nth-child(2)");
var weergaveAantalPunten2 = document.querySelector(".aantal-punten span");
var beginPunten = 100;
var totaalAantalPunten = beginPunten;
weergaveAantalPunten.innerHTML = totaalAantalPunten;
weergaveAantalPunten2.innerHTML = totaalAantalPunten;

// Alle kaart vormen
var hart = "./images/suit-heart-fill.svg";
var ruit = "./images/suit-diamond-fill.svg";
var klaver = "./images/suit-club-fill.svg";
var schoppe = "./images/suit-spade-fill.svg";
var joker = "./images/joker-orange.svg";

// Ul met alle kaarten
var kaartenVak = document.querySelector(".kaart-vak");

// Weergave punten verandering
var wijziging = document.querySelector(".wijziging-container span");




// setTimeout(() => {
//   document.body.classList.add("tijdelijk");
// }, 5000);






/* -------------------------- 
-- ARRAY MET ALLE KAARTEN ---
-----------------------------*/

var willekeurigeStellingen = [{
    stelling: "Ik vind het goed dat online gokken is gelegaliseerd om witwaswrij en illegaal gokken tegen te gaan. T",
    punten: 100,
    mening: true,
    vorm: hart,
    type: "rodekaart",
    rotatie: "-1.5deg"
  },
  {
    stelling: "Ik vind dat bij gokken in het algemeen de verantwoordelijkheid ligt bij de persoon en niet bij de dienstverlener. T",
    punten: 200,
    mening: true,
    vorm: hart,
    type: "rodekaart",
    rotatie: "1.75deg"
  },
  {
    stelling: "Ik vind het goed dat er nu meer en beter gemonitord, ondanks je nu minder privacy hebt. T",
    punten: 200,
    mening: true,
    vorm: hart,
    type: "rodekaart",
    rotatie: "-1.5deg"
  },
  {
    stelling: "De preventiebeleid wordt niet altijd nageleefd door gokbedrijven, zij moeten dan een boete betalen. T",
    punten: 300,
    mening: true,
    vorm: ruit,
    type: "rodekaart",
    rotatie: "2.5deg"
  },
  {
    stelling: "Ik vind het niet kunnen dat wanneer een account van een klant bevroren wordt wegens overmatig gokken, je simpel weg een nieuwe account kan aanmaken. T",
    punten: 200,
    mening: true,
    vorm: ruit,
    type: "rodekaart",
    rotatie: "-1.75deg"
  },
  {
    stelling: "Er moet onder gok bedrijven een overzicht komen van alle gokverslaafde in Nederland. T",
    punten: 300,
    mening: true,
    vorm: ruit,
    type: "rodekaart",
    rotatie: "-0.75deg"
  },
  {
    stelling: "Wanneer een account bevroren wordt bij de ene gokbedrijf, moet dit doorgevoerd worden voor alle accounts ook bij andere gokbedrijven. F",
    punten: 200,
    mening: false,
    vorm: klaver,
    type: "zwartekaart",
    rotatie: "2.7deg"
  },
  {
    stelling: "Het probleem ligt bij het gokbedrijf als ze hulp aanbieden, maar de klant geen gehoor geeft. F",
    punten: 400,
    mening: false,
    vorm: klaver,
    type: "zwartekaart",
    rotatie: "-3.2deg"
  },
  {
    stelling: "Bijhorende gokbedrijf moet aansprakelijk gesteld worden, wanneer een klant gokverslaafd wordt. F",
    punten: 100,
    mening: false,
    vorm: schoppe,
    type: "zwartekaart",
    rotatie: "2.6deg"
  },
  {
    stelling: "Ik vind dat er teveel reclame wordt gemaakt van (online) gokken. F",
    punten: 300,
    mening: false,
    vorm: schoppe,
    type: "zwartekaart",
    rotatie: "2.7deg"
  },
  {
    stelling: "Gokken is gelegaliseerd zodat spelers beter beschermd zijn dan toen gokken illegaal was, maar in praktijk is dit weinig te merken.",
    punten: 100,
    mening: true,
    vorm: joker,
    type: "jokerkaart",
    rotatie: "-2.5deg"
  },
  {
    stelling: "Uit onderzoek blijkt dat er jaarlijks naar schatting 750.000.000 euro wordt uitgegeven aan online en fysiek gokken.",
    punten: 100,
    mening: true,
    vorm: joker,
    type: "jokerkaart",
    rotatie: "-2.25deg"
  }
];



/* -------------------------- 
----------- TIJD ------------
-----------------------------*/

function updateClock() {
  var tijdTekst = document.querySelector(".tijd span");

  var dag = new Date();
  var time = dag.getHours() + ":" + (dag.getMinutes() < 10 ? '0' : '') + dag.getMinutes();

  tijdTekst.innerHTML = time;
  console.log(time);
}
setInterval(updateClock, 1000);



/* -------------------------- 
----- KAARTEN GENEREREN -----
-----------------------------*/

// Randomize array
willekeurigeStellingen = willekeurigeStellingen.sort((a, b) => 0.5 - Math.random());

willekeurigeStellingen.forEach(function (willekeurigeStelling) {

  // ----- ELEMENTEN AANMAKEN -----

  // Kaart container aanmaken
  var kaartMakenLi = document.createElement("li");

  // Header elementen aanmaken
  var kaartMakenHeader = document.createElement("header");
  var kaartMakenImgH = document.createElement("img");
  var kaartMakenSpanH = document.createElement("span");

  // Middenstuk elementen aanmaken
  var kaartMakenImgM = document.createElement("img");
  var kaartMakenP = document.createElement("p");

  // Footer elementen aanmaken
  var kaartMakenFooter = document.createElement("footer");
  var kaartMakenSpanF = document.createElement("span");
  var kaartMakenImgF = document.createElement("img");



  // ----- ELEMENTEN VULLEN MET CONTENT -----

  // Header elementen vullen met content
  kaartMakenImgH.src = willekeurigeStelling.vorm;
  kaartMakenSpanH.textContent = willekeurigeStelling.punten;

  // Middenstuk vullen met content
  kaartMakenImgM.src = willekeurigeStelling.vorm;
  kaartMakenP.textContent = willekeurigeStelling.stelling;

  // Footer elementen vullen met content
  kaartMakenSpanF.textContent = willekeurigeStelling.punten;
  kaartMakenImgF.src = willekeurigeStelling.vorm;



  // ----- ELEMENTEN KOPPELEN AAN ELEMENT -----

  // Footer koppelen aan elementen
  kaartMakenFooter.append(kaartMakenImgF);
  kaartMakenFooter.append(kaartMakenSpanF);

  // Header koppelen aan elementen
  kaartMakenHeader.appendChild(kaartMakenImgH);
  kaartMakenHeader.appendChild(kaartMakenSpanH);

  // Header aanmaken
  kaartMakenLi.appendChild(kaartMakenHeader);

  // Middenstuk koppelen aan elementen
  kaartMakenLi.appendChild(kaartMakenImgM);
  kaartMakenLi.appendChild(kaartMakenP);

  // Footer aanmaken
  kaartMakenLi.appendChild(kaartMakenFooter);



  // ----- KAARTEN PERSOONLIJK MAKEN -----

  // Class en dataset toevoegen
  kaartMakenLi.classList.add(willekeurigeStelling.type);
  kaartMakenLi.dataset.mening = willekeurigeStelling.mening;
  kaartMakenLi.dataset.punten = willekeurigeStelling.punten;
  kaartMakenLi.dataset.type = willekeurigeStelling.type;
  kaartMakenLi.dataset.rotatie = willekeurigeStelling.rotatie;

  function checkOverlay() {
    if (document.body.classList.contains("kaarten-animatie-start")) {
      kaartMakenLi.style.animation = "kaart-ontvangen 2s 0s 1 normal forwards";

      kaartMakenLi.style.transform = "rotate" + willekeurigeStelling.rotatie;
      kaartMakenLi.style.transform = "translateY(-60em)";
      console.log("werkt");
    } else {
      console.log("werkt niet");
    }
  }
  setInterval(checkOverlay, 200);

  // var willekeurigeRotatie = "--willekeurige-rotatie";
  // kaartMakenLi.style.setProperty(willekeurigeRotatie, willekeurigeStelling.rotatie);

  var willekeurigeRotatie = willekeurigeStelling.rotatie;
  kaartMakenLi.style.setProperty("--willekeurige-rotatie", willekeurigeRotatie);

  // console.log(willekeurigeRotatie);

  // Gehele kaart/container aanmaken
  kaartenVak.appendChild(kaartMakenLi);
});



/* -------------------------- 
-------- AFGELOPEN ----------
-----------------------------*/

// Checken of er nog kaarten zijn (gewonnen is)
function checkUl() {

  var eersteLi = kaartenVak.querySelector("li");
  var gewonnenPunten = document.querySelector(".gewonnen span:nth-child(2)");

  if (eersteLi) {

  } else {
    document.body.classList.add("gewonnen");
    gewonnenPunten.innerHTML = totaalAantalPunten;
  }
}

// Checken of er joker is getrokken
function checkJoker() {

  // var bovensteLi = document.querySelector(".kaart-vak li:last-child");

  // if (bovensteLi.className == "jokerkaart") {
  //   document.body.classList.add("joker-getrokken");
  // } else {
  //   document.body.classList.remove("joker-getrokken");
  // }
  document.body.classList.remove("joker-getrokken");
}
checkJoker();

// Checken of het geld op is
function checkPunten() {
  if (totaalAantalPunten <= 0) {
    console.log("Alle geld is op...");
    document.body.classList.add("vergokt");
  }
}

// Optellen/Aftrekken punten
function wijzigingFunc() {
  wijziging.style.display = "block";

  setTimeout(() => {
    wijziging.style.display = "none";
  }, 1500);
}



/* -------------------------- 
--------- SLEPEN ------------
-----------------------------*/

// Er wordt niet gesleept
var slepen = false;

// De container van de sleep-items
const kaartenContainer = document.querySelector(".kaarten-container");

// Sleepomgevingen maken
const stack1 = document.querySelector(".kaarten-container ul li:nth-child(1) ul");
const stack2 = document.querySelector(".kaarten-container ul li:nth-child(2) ul");
const stack3 = document.querySelector(".kaarten-container ul li:nth-child(3) ul");

// Oneens sectie
new Sortable(stack1, {
  group: 'shared',
  animation: 150,
  onAdd: function (event) {

    if (event.item.dataset.mening == "false") {
      totaalAantalPunten += parseInt(event.item.dataset.punten);
      wijziging.innerHTML = "+ " + event.item.dataset.punten;
    } else {
      totaalAantalPunten -= parseInt(event.item.dataset.punten);
      wijziging.innerHTML = "- " + event.item.dataset.punten;
    }
    weergaveAantalPunten.innerHTML = totaalAantalPunten;
    weergaveAantalPunten2.innerHTML = totaalAantalPunten;
    checkUl();
    checkPunten();
    wijzigingFunc();
    checkJoker();
  }
});


// var jokerKaartGetrokken = document.querySelector(".joker-getrokken .kaarten-container>ul>li:nth-child(3)"); 

// Midden sectie
new Sortable(stack2, {
  group: 'shared',
  animation: 150,
  onStart: function (event) {
    if (event.item.dataset.type == "jokerkaart") {
      document.body.classList.add("joker-getrokken");
    } else {}
  }
});



// Eens sectie
new Sortable(stack3, {
  group: 'shared',
  animation: 150,
  onAdd: function (event) {
    if (event.item.dataset.mening == "true") {
      totaalAantalPunten += parseInt(event.item.dataset.punten);
      wijziging.innerHTML = "+ " + event.item.dataset.punten;
    } else {
      totaalAantalPunten -= parseInt(event.item.dataset.punten);
      wijziging.innerHTML = "- " + event.item.dataset.punten;
    }
    weergaveAantalPunten.innerHTML = totaalAantalPunten;
    weergaveAantalPunten2.innerHTML = totaalAantalPunten;
    checkUl();
    checkPunten();
    wijzigingFunc();
    checkJoker();
  }
});



/* -------------------------- 
------ ACCOUNT AANMAKEN -----
-----------------------------*/

var checkBox = document.querySelector(".account-overlay form input[type=checkbox]");
var checkBox2 = document.getElementById("checkbox-voorwaarde");
var geboorteDatum = document.getElementById("geboorte-datum").value;
// var formButton = document.querySelector(".aangevinkt button");

function date() {
  console.log(geboorteDatum);
}
setInterval(date, 500);





// Account form checken
function checkAangevinkt() {

  inputNaam = document.querySelector(".account-overlay input[type=text]").value;
  inpuAchterNaam = document.querySelector(".account-overlay input[type=email]").value;
  inputTelefoon = document.querySelector(".account-overlay input[type=tel]").value;

  if (checkBox2.checked && inputNaam && inpuAchterNaam && inputTelefoon) {
    console.log("gecheckt");
    document.body.classList.add("aangevinkt");
  } else {
    console.log("nog-niet");
    document.body.classList.remove("aangevinkt");
  }
}
setInterval(checkAangevinkt, 500);



// KNOP
var accountAanmakenKnop = document.querySelector(".account-overlay form button");
var accountContainer = document.querySelector(".account-container");

function weghalenAccountOverlay() {

  setTimeout(() => {
    document.body.classList.add("weg-account-overlay");
  }, 250);

}
accountAanmakenKnop.addEventListener("click", weghalenAccountOverlay);


// promo weg
var promoKnop = document.querySelector(".promo button");
var promoContainer = document.querySelector(".promo");

function weghalenPromoContainer() {
  document.body.classList.add("kaarten-animatie-start");

  setTimeout(() => {
    document.body.classList.add("weg-promo-overlay");
  }, 250);

}
promoContainer.addEventListener("click", weghalenPromoContainer);







// checkBox2.style.margin = "5em";
// console.log(checkBox2.checked);

// var leeftijd = document.querySelector(".account-overlay input[type=date]").value;

// setTimeout(() => {
//   console.log(leeftijd);
// }, 2000);



/* -------------------------- 
------ NAAM DOORGEVEN -----
-----------------------------*/

function naamDoorgeven() {

  var inputNaam = document.querySelector(".account-overlay input[type=text]").value;
  var inputAchternaam = document.querySelector(".account-overlay input[type=text]").value;
  var naamWeergeven = document.querySelector(".naam span");

  var gewonnenOverlayNaam = document.querySelector(".gewonnen section span");
  var vergoktOverlayNaam = document.querySelector(".vergokt section span");


  console.log(inputNaam);
  naamWeergeven.innerHTML = inputNaam;
  gewonnenOverlayNaam.innerHTML = inputNaam;
  vergoktOverlayNaam.innerHTML = inputNaam;
}
accountAanmakenKnop.addEventListener("click", naamDoorgeven);