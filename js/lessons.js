
let lessons = [];
let index = 0;
const content = document.getElementById("lessonContent");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const selectedLanguage = getQueryParam('lang') || 'japanese';

fetch("lessondb.json")
.then(response => response.json())
.then(data => { 
    lessons = data;
    if (lessons.length > 0) {
        updateContent(lessons[index])
    }
    else {
        content.textContent = "No lessons available";
    }   
})
.catch(error =>{
    content.textContent = "Error loading lessons :(";
    console.error(error);
});

nextBtn.addEventListener("click", () => {
    if (index < lessons.length -1){
        index++;
        backBtn.disabled = true;
        updateContent(lessons[index]);
    }
    else {
        content.textContent = "No lessons left";
        nextBtn.disabled = true;
    }

    backBtn.disabled = lessons.length <= 1;
});

backBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateContent(lessons[index]);
        nextBtn.disabled = false;
    }

    if (index === 0) {
        backBtn.disabled = true;    
    }       
})

content.style.transition = "opacity 0.3s ease";

function updateContent(lesson) {
  content.style.opacity = 0;
  setTimeout(() => {
    document.querySelector('h1').textContent = `${lesson.language} - ${lesson.title}`;
    content.textContent = lesson.title + "\n\n" + lesson.content;
    content.style.opacity = 1;
  }, 200);
}
