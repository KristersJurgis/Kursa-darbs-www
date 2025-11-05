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
const btngrid = document.getElementById("btngrid")

//  Show difficulty selection buttons, and put outs what difficluty you chose.
function difficultySelected(selected){
  btngrid.style.display = "grid";
  displayflashcard.style.display = "grid";
  heading.style.display = "none";
  diffbtns.style.display = "none";
  message.textContent = `You selected: ${selected}`;

  // Filters cards by language and difficultyt
  flashcards = allFlashcards.filter(card =>
    card.difficulty.toLowerCase() === selected.toLowerCase() &&
    card.language.toLowerCase() === selectedLanguage.toLowerCase()
  );

  if(flashcards.lenght === 0) {
    displayflashcard.textContent = "No flashcards found";
    btngrid.display.style = "none";
    return;
  };

  currentIndex = 0;
  showFlashcard(flashcards[currentIndex]);
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

//Loads flashcards from flashcardDb.json
let allFlashcards = [];
fetch("flashcardDb.json")
.then(res => res.json())
.then(data => {
  allFlashcards = data;
})
.catch(err =>{
  console.error("Failed to load flashcards", err);
});

let correctscore = 0;
let skipscore = 0;
let didntknowscore = 0;

knewBtn.addEventListener("click", () => {
  knewCount++;
  console.log("Knew count:", knewCount);
});

skipBtn.addEventListener("click", () => {
  skipCount++;
  console.log("Skipped count: ", skipCount);
});

didntknowBtn.addEventListener("click", () => {
  didntknowCount++;
  console.log("Didn't know count: ", didntknowCount);
});
