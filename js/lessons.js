// defineti mainigie un konstantes
    let lessons = [];
    let index = 0;
    const content = document.getElementById("lessonContent");
    const nextBtn = document.getElementById("nextBtn");
    const backBtn = document.getElementById("backBtn");
    const selectedLanguage = getQueryParam('lang'); 
// no url, dabu valodu
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
// ar fetch, no lessondb.json
    fetch("lessondb.json")
    .then(response => response.json())
    // filtre datus, ar no url ieguto valodas parametru, un loado tas valodas lekcijas
    .then(data => { 
        lessons = data.filter(lesson => {
            if (selectedLanguage === "jap") return lesson.language === "Japanese";
            if (selectedLanguage === "eng") return lesson.language === "English";
            if (selectedLanguage === "lat") return lesson.language === "Latvian";
            if (selectedLanguage === "esp") return lesson.language === "Spanish";
            if (selectedLanguage === "ger") return lesson.language === "German";
            if (selectedLanguage === "rus") return lesson.language === "Russian";
            if (selectedLanguage === "ger") return lesson.language === "German";
            if (selectedLanguage === "ger") return lesson.language === "German";
            if (selectedLanguage === "ger") return lesson.language === "German";
            if (selectedLanguage === "ger") return lesson.language === "German";
            return false;
        });
        // ja ir pieejama lekcijas nodarbiba, rada pirmo
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
// poga next, iet uz nakamo lekcijas nodarbibu
    nextBtn.addEventListener("click", () => {
        if (index < lessons.length - 1 ){
            index++;
            backBtn.disabled = true;
            updateContent(lessons[index]);
        }
        else { // vairs nav nodarbibas, piedava izveli iet uz home vai flashcards, un disablo next pogu
            content.innerHTML = `
                <p>No lessons left 🎉</p>
                <p>
                    You can go and practice your skills with 
                    <a href="../ChooseFlashCards.html">flashcards</a>.
                </p>
                <p>
                    Or you can go back to the 
                    <a href="../home.html">menu</a>.
                </p>
            `;
            nextBtn.disabled = false;
            }
        backBtn.disabled = lessons.length <= 1;
    });
//back poga, ja ir lielaks par nulli tad strada, bet ja ir vienads ar nulli, poga ir izslegta
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
//transition animacija
content.style.transition = "opacity 0.3s ease";

//atjauno lekciju saturs, nem informaciju no lessondb.json
    function updateContent(lesson) {
    content.style.opacity = 0;
    setTimeout(() => {
        document.querySelector('h1').textContent = `${lesson.language} - ${lesson.title}`;
        content.textContent = lesson.title + "\n\n" + lesson.content;
        content.style.opacity = 1;
    }, 200);
    }
