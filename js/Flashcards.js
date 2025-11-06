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

let correctscore = 0;
let skipscore = 0;
let didntknowscore = 0;
let allFlashcards = [];
let flashcards = [];
let currentIndex = 0;
let knewCount = 0;
let didntknowCount = 0;
let skipCount = 0;

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

  if (flashcards.length === 0) {
    displayflashcard.textContent = "No flashcards found";
    btngrid.style.display = "none";
    return;
  };

  currentIndex = 0;
  showFlashcard(flashcards[currentIndex]);
}

// Gets the selected language from the url  
function getQueryParam(param) {
  const UrlLanParams = new URLSearchParams(window.location.search);
  return UrlLanParams.get(param);
};
const selectedLanguage = getQueryParam('language') || 'japanese';

//Loads flashcards from flashcardDb.json
fetch("./flashcardDb.json")
.then(res => {
  if (!res.ok) throw new Error(`HTTP error! status ${res.status}`);
  return res.json();
})
.then(data => {
  console.log("Flashcards loaded:", data);
  allFlashcards = data;
})
.catch(err =>{
  console.error("Failed to load flashcards", err);
  displayflashcard.textContent = "Error loading flashcards";
});

//Select difficulty for flashcards
easyBtn.addEventListener("click", () => difficultySelected("Easy"));
mediumBtn.addEventListener("click", () => difficultySelected("Medium"));
hardBtn.addEventListener("click", ()  => difficultySelected("Hard"));

function showFlashcard(card) {
  displayflashcard.innerHTML = `
  <div class="flashcard-inner">
    <div class="flashcard-front">
      <h1>${card.question}</h1>
    </div>
    <div class="flashcard-back">
      <h1>${card.answer}</h1>
    </div>
  </div>
 `;

  const inner = displayflashcard.querySelector(".flashcard-inner");
  inner.onclick = () => {
  inner.classList.toggle("flipped");
 };
}

function nextFlashcard() {
  if (currentIndex < flashcards.length -1) {
    currentIndex++;
    showFlashcard(flashcards[currentIndex]);
  }
  else{
    displayflashcard.innerHTML = `
      <h2>No more flashcards left! </h2>
      <p>Knew: ${knewCount} | Didn't know: ${didntknowCount} | Skipped: ${skipCount}</p>
    `;
    btngrid.style.display = "none";
  }
}

knewBtn.addEventListener("click", () => {
  knewCount++;
  console.log("Knew count:", knewCount);
  nextFlashcard();
});

skipBtn.addEventListener("click", () => {
  skipCount++;
  console.log("Skipped count: ", skipCount);
  nextFlashcard();
});

didntknowBtn.addEventListener("click", () => {
  didntknowCount++;
  console.log("Didn't know count: ", didntknowCount);
  nextFlashcard();
});
