const easyBtn = document.getElementById("easyBtn");
const mediumBtn = document.getElementById("mediumBtn");
const hardBtn = document.getElementById("hardBtn"); 
const diffbtns = document.getElementById("diffbtns");
const message = document.getElementById("message");
const heading = document.getElementById("h1");
const displayflashcard = document.getElementById("displayflashcard");
const didntknowBtn = document.getElementById("DidntknowBtn");
const skipBtn = document.getElementById("SkipBtn");
const knewBtn = document.getElementById("KnewBtn");

//  Show difficulty selection buttons, and put outs what difficluty you chose.
function difficultySelected(selected){
  displayflashcard.style.display = "grid";
  heading.style.display = "none";
  diffbtns.style.display = "none";
  message.textContent = `You selected: ${selected}`;
}

easyBtn.addEventListener("click", () => difficultySelected("Easy"));
mediumBtn.addEventListener("click", () => difficultySelected("Medium"));
hardBtn.addEventListener("click", ()  => difficultySelected("Hard"));

// Gets the selected language from the url  
function getQueryParam(param) {
  const UrlLanParams = new URLSearchParams(window.location.search);
  return UrlLanParams.get(param);
};

const selectedLanguage = getQueryParam('language') || 'japanese';

fetch("flashcardDb.json")

let score = 0;
