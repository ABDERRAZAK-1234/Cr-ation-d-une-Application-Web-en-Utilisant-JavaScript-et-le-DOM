const Question = [
  [
    "Quelle est la capitale du Maroc ?",
    "Rabat",
    "Algeria",
    "Paris",
    "Berlin",
    "Rabat",
  ],
  ["Combien font 9² ?", "11", "18", "81", "99", "81"],
  [
    "Quelle est la langue officielle de Allemagne ?",
    "Arabic",
    "Français",
    "Anglais",
    "Allmand",
    "Allmand",
  ],
  [
    "Quel est locéan à lest de lAfrique ?",
    "Océan Indien",
    "Océan Atlantique",
    "Océan Pacefique",
    "Océan Arctique",
    "Océan Indien",
  ],
  [
    "Combien de jours y a til au mois de février année non bissextile ?",
    "30",
    "29",
    "28",
    "31",
    "28",
  ],
];

let bonnes_rep = 0;
let questionAct = 0;

let bouton_prece = document.getElementById("btn_prec");
let bouton_suivant = document.getElementById("btn_suiv");

document.getElementById("question").innerText = Question[0][0];
document.querySelectorAll("span").forEach((element, index) => {
  element.innerText += Question[0][index + 1];
});

function myfunction() {
  if (questionAct == 0) {
    bouton_prece.style.visibility = "hidden";
  } else if (questionAct >= 1) {
    bouton_prece.style.visibility = "visible";
  }
  bouton_suivant.addEventListener("click", () => {
    questionAct++;

    document.getElementById("question").innerText = Question[questionAct][0];
    document.querySelectorAll("span").forEach((element, index) => {
      element.innerText = Question[questionAct][index + 1];
    });
  });
}
function bonneRep() {}

myfunction();
