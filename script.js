let currentLevel = "A1";

let currentWords = [];

let currentIndex = 0;

let quizIndex = 0;

let quizCorrect = 0;

let score =
    Number(
        localStorage.getItem("score")
    ) || 0;

let streak =
    Number(
        localStorage.getItem("streak")
    ) || 0;

let learned =
    Number(
        localStorage.getItem("learned")
    ) || 0;


/* =====================================
   TELEGRAM
===================================== */

const tg =
    window.Telegram?.WebApp;

if (tg) {

    tg.ready();

    tg.expand();

}


/* =====================================
   SAVE
===================================== */

function save() {

    localStorage.setItem(
        "score",
        score
    );

    localStorage.setItem(
        "streak",
        streak
    );

    localStorage.setItem(
        "learned",
        learned
    );

    updateHeader();

}


/* =====================================
   HEADER
===================================== */

function updateHeader() {

    document.getElementById(
        "score"
    ).textContent = score;

    document.getElementById(
        "streak"
    ).textContent = streak;

}


/* =====================================
   NAVIGATION
===================================== */

function showPage(id) {

    document
        .querySelectorAll(".page")
        .forEach(
            page =>
                page.classList.remove(
                    "active"
                )
        );

    document
        .getElementById(id)
        .classList.add("active");

    window.scrollTo(0, 0);

}


function home() {

    showPage("home");

}


function library() {

    showPage("library");

}


/* =====================================
   LEVEL
===================================== */

function openLevel(level) {

    currentLevel = level;

    currentWords =
        WORDS[level];

    document.getElementById(
        "levelBadge"
    ).textContent =
        level;

    const names = {

        A1: "Beginner",

        A2: "Elementary",

        B1: "Intermediate",

        B2: "Upper-Intermediate",

        C1: "Advanced",

        C2: "Proficiency"

    };

    document.getElementById(
        "levelTitle"
    ).textContent =
        names[level];

    document.getElementById(
        "wordCount"
    ).textContent =
        currentWords.length +
        " слов";

    document.getElementById(
        "search"
    ).value = "";

    renderWords();

    showPage("library");

}


/* =====================================
   LIBRARY
===================================== */

function renderWords(
    list = currentWords
) {

    const container =
        document.getElementById(
            "wordList"
        );

    container.innerHTML = "";


    list.forEach(
        (item, index) => {

            const div =
                document.createElement(
                    "div"
                );

            div.className =
                "word";

            div.innerHTML = `

                <div>

                    <strong>
                        ${item.word}
                    </strong>

                    <small>
                        ${item.translation}
                    </small>

                </div>

                <button
                    onclick="
                        startCards(${index})
                    "
                >
                    ▶
                </button>

            `;

            container.appendChild(
                div
            );

        }
    );

}


/* =====================================
   SEARCH
===================================== */

function searchWords() {

    const value =
        document
            .getElementById(
                "search"
            )
            .value
            .toLowerCase();


    const filtered =
        currentWords.filter(
            item =>

                item.word
                    .toLowerCase()
                    .includes(value)

                ||

                item.translation
                    .toLowerCase()
                    .includes(value)
        );


    renderWords(filtered);

}


/* =====================================
   FLASHCARDS
===================================== */

function startCards(
    index = 0
) {

    currentIndex = index;

    showPage("cards");

    renderCard();

}


function startFlashcards() {

    startCards(0);

}


function renderCard() {

    const item =
        currentWords[
            currentIndex
        ];


    document.getElementById(
        "cardLevel"
    ).textContent =
        currentLevel;


    document.getElementById(
        "cardWord"
    ).textContent =
        item.word;


    document.getElementById(
        "translation"
    ).textContent =
        item.translation;


    document.getElementById(
        "example"
    ).textContent =
        item.example;


    document.getElementById(
        "translation"
    ).classList.add(
        "hidden"
    );


    document.getElementById(
        "example"
    ).classList.add(
        "hidden"
    );


    document.getElementById(
        "cardProgress"
    ).textContent =
        `${currentIndex + 1}
        / ${currentWords.length}`;

}


function showTranslation() {

    document.getElementById(
        "translation"
    ).classList.remove(
        "hidden"
    );


    document.getElementById(
        "example"
    ).classList.remove(
        "hidden"
    );

}


/* =====================================
   SPEECH
===================================== */

function speak() {

    const word =
        currentWords[
            currentIndex
        ].word;


    if (
        "speechSynthesis"
        in window
    ) {

        const voice =
            new SpeechSynthesisUtterance(
                word
            );

        voice.lang =
            "en-US";

        speechSynthesis.speak(
            voice
        );

    }

}


/* =====================================
   CARD ANSWERS
===================================== */

function knowWord() {

    score += 10;

    streak++;

    learned++;

    save();

    nextCard();

}


function repeatWord() {

    streak = 0;

    save();

    nextCard();

}


function nextCard() {

    currentIndex++;

    if (
        currentIndex >=
        currentWords.length
    ) {

        currentIndex = 0;

    }

    renderCard();

}


/* =====================================
   QUIZ
===================================== */

function startQuiz() {

    quizIndex = 0;

    quizCorrect = 0;

    showPage("quiz");

    renderQuiz();

}


function randomQuiz() {

    const levels =
        Object.keys(
            WORDS
        );


    currentLevel =
        levels[
            Math.floor(
                Math.random()
                * levels.length
            )
        ];


    currentWords =
        WORDS[
            currentLevel
        ];


    startQuiz();

}


function renderQuiz() {

    const item =
        currentWords[
            quizIndex
        ];


    document.getElementById(
        "quizWord"
    ).textContent =
        item.word;


    document.getElementById(
        "quizProgress"
    ).textContent =
        `${quizIndex + 1} / 10`;


    document.getElementById(
        "quizResult"
    ).textContent = "";


    let answers = [
        item.translation
    ];


    while (
        answers.length < 4
    ) {

        const random =
            currentWords[
                Math.floor(
                    Math.random()
                    * currentWords.length
                )
            ].translation;


        if (
            !answers.includes(
                random
            )
        ) {

            answers.push(
                random
            );

        }

    }


    answers.sort(
        () =>
            Math.random() - .5
    );


    const container =
        document.getElementById(
            "quizAnswers"
        );


    container.innerHTML = "";


    answers.forEach(
        answer => {

            const button =
                document.createElement(
                    "button"
                );

            button.textContent =
                answer;


            button.onclick =
                () =>
                    checkAnswer(
                        button,
                        answer,
                        item.translation
                    );


            container.appendChild(
                button
            );

        }
    );

}


/* =====================================
   CHECK
===================================== */

function checkAnswer(
    button,
    answer,
    correct
) {

    const buttons =
        document.querySelectorAll(
            "#quizAnswers button"
        );


    buttons.forEach(
        b =>
            b.disabled = true
    );


    if (
        answer === correct
    ) {

        button.classList.add(
            "correct"
        );

        score += 20;

        streak++;

        quizCorrect++;

    }

    else {

        button.classList.add(
            "wrong"
        );

        streak = 0;

    }


    save();


    setTimeout(
        () => {

            quizIndex++;


            if (
                quizIndex >= 10
            ) {

                document.getElementById(
                    "quizResult"
                ).textContent =
                    `Результат:
                    ${quizCorrect} / 10`;


                setTimeout(
                    () =>
                        library(),
                    1200
                );

            }

            else {

                renderQuiz();

            }

        },

        700
    );

}


/* =====================================
   PROGRESS
===================================== */

function showProgress() {

    document.getElementById(
        "statScore"
    ).textContent =
        score;


    document.getElementById(
        "statWords"
    ).textContent =
        learned;


    document.getElementById(
        "statStreak"
    ).textContent =
        streak;


    showPage(
        "progress"
    );

}


/* =====================================
   START
===================================== */

updateHeader();