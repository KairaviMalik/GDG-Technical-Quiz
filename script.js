const questionBank = [
    {
        category: "Programming",
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        options: ["Queue", "Stack", "Linked List", "Graph"],
        answer: "Stack"
    },
    {
        category: "Programming",
        question: "What is the time complexity of binary search on a sorted array?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        answer: "O(log n)"
    },
    {
        category: "Programming",
        question: "Which programming concept allows a class to acquire properties and methods from another class?",
        options: ["Encapsulation", "Inheritance", "Abstraction", "Compilation"],
        answer: "Inheritance"
    },
    {
        category: "Programming",
        question: "Which of the following is NOT a primitive data type in Java?",
        options: ["int", "boolean", "String", "char"],
        answer: "String"
    },
    {
        category: "Programming",
        question: "Which loop is guaranteed to execute its body at least once?",
        options: ["for", "while", "do-while", "forEach"],
        answer: "do-while"
    },

    {
        category: "Web",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        category: "Web",
        question: "Which CSS property is primarily used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "foreground"],
        answer: "color"
    },
    {
        category: "Web",
        question: "Which JavaScript method converts a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        answer: "JSON.parse()"
    },
    {
        category: "Web",
        question: "Which HTTP status code normally indicates that a requested resource was not found?",
        options: ["200", "301", "404", "500"],
        answer: "404"
    },
    {
        category: "Web",
        question: "Which browser API is commonly used to store key-value data that persists after the browser is closed?",
        options: ["Session API", "localStorage", "DOM Storage Node", "Cache Variable"],
        answer: "localStorage"
    },

    {
        category: "Git & GitHub",
        question: "Which Git command creates a local copy of an existing remote repository?",
        options: ["git copy", "git pull", "git clone", "git init"],
        answer: "git clone"
    },
    {
        category: "Git & GitHub",
        question: "Which Git command is used to record staged changes in repository history?",
        options: ["git commit", "git push", "git save", "git record"],
        answer: "git commit"
    },
    {
        category: "Git & GitHub",
        question: "What is the main purpose of a .gitignore file?",
        options: [
            "Delete Git history",
            "List files Git should not track",
            "Store GitHub passwords",
            "Rename a repository"
        ],
        answer: "List files Git should not track"
    },
    {
        category: "Git & GitHub",
        question: "Which command sends local commits to a remote Git repository?",
        options: ["git push", "git add", "git status", "git branch"],
        answer: "git push"
    },
    {
        category: "Git & GitHub",
        question: "A Git branch is mainly used to:",
        options: [
            "Compress repository files",
            "Work on changes independently",
            "Delete previous commits",
            "Host a website"
        ],
        answer: "Work on changes independently"
    },

    {
        category: "APIs",
        question: "What does API stand for?",
        options: [
            "Application Programming Interface",
            "Automated Program Integration",
            "Application Process Internet",
            "Advanced Programming Input"
        ],
        answer: "Application Programming Interface"
    },
    {
        category: "APIs",
        question: "Which HTTP method is typically used to retrieve data from a server?",
        options: ["POST", "DELETE", "GET", "PATCH"],
        answer: "GET"
    },
    {
        category: "APIs",
        question: "Which data format is widely used for exchanging data in REST APIs?",
        options: ["PSD", "JSON", "MP3", "EXE"],
        answer: "JSON"
    },

    {
        category: "Google Tools",
        question: "Which Google platform provides tools such as Authentication, Firestore and Cloud Messaging for app development?",
        options: ["Firebase", "Google Maps", "Google Search Console", "Google Photos"],
        answer: "Firebase"
    },
    {
        category: "Google Tools",
        question: "Which Firebase product is a scalable NoSQL cloud database?",
        options: ["Cloud Firestore", "Firebase Studio CSS", "Firebase Sheets", "Cloud HTML"],
        answer: "Cloud Firestore"
    },
    {
        category: "Google Tools",
        question: "Which Google Cloud service is designed for storing objects such as images, videos and files?",
        options: ["Cloud Storage", "Cloud DNS", "Cloud Scheduler", "Cloud Shell"],
        answer: "Cloud Storage"
    },
    {
        category: "Google Tools",
        question: "Android Studio is primarily used for:",
        options: [
            "Android application development",
            "Spreadsheet analysis",
            "Video editing",
            "Managing GitHub accounts"
        ],
        answer: "Android application development"
    },
    {
        category: "Google Tools",
        question: "Which language is officially supported and widely recommended for modern Android development?",
        options: ["Kotlin", "PHP", "Ruby", "R"],
        answer: "Kotlin"
    },
    {
        category: "Google Tools",
        question: "Google Maps Platform allows developers to:",
        options: [
            "Integrate maps and location features into applications",
            "Compile Java programs",
            "Create operating systems",
            "Replace databases"
        ],
        answer: "Integrate maps and location features into applications"
    },
    {
        category: "Google Tools",
        question: "Which Google Cloud product provides a browser-based command-line environment for managing cloud resources?",
        options: ["Cloud Shell", "Cloud Paint", "Cloud Notes", "Cloud Forms"],
        answer: "Cloud Shell"
    },

    {
        category: "Technology",
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Primary Utility",
            "Central Program User",
            "Core Processing Utility"
        ],
        answer: "Central Processing Unit"
    },
    {
        category: "Technology",
        question: "Which protocol is used to securely access websites over an encrypted connection?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        answer: "HTTPS"
    },
    {
        category: "Technology",
        question: "Which database language is commonly used to query relational databases?",
        options: ["SQL", "HTML", "CSS", "XML"],
        answer: "SQL"
    },
    {
        category: "Technology",
        question: "What is the primary role of DNS on the internet?",
        options: [
            "Translate domain names into IP addresses",
            "Design web pages",
            "Store passwords",
            "Compile source code"
        ],
        answer: "Translate domain names into IP addresses"
    },
    {
        category: "Technology",
        question: "Which term refers to delivering computing resources such as servers and storage over the internet?",
        options: [
            "Cloud computing",
            "Local compiling",
            "Static routing",
            "Packet editing"
        ],
        answer: "Cloud computing"
    }
];


const QUESTIONS_PER_QUIZ = 15;
const TIME_PER_QUESTION = 20;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");

const participantInput = document.getElementById("participant-name");
const nameError = document.getElementById("name-error");
const startButton = document.getElementById("start-btn");

const displayName = document.getElementById("display-name");
const scoreElement = document.getElementById("score");
const totalScoreElement = document.getElementById("total-score");
const timerElement = document.getElementById("timer");
const timerBox = document.getElementById("timer-box");

const questionCounter = document.getElementById("question-counter");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");

const categoryBadge = document.getElementById("category-badge");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const selectionMessage = document.getElementById("selection-message");
const submitButton = document.getElementById("submit-btn");

const finalScore = document.getElementById("final-score");
const resultName = document.getElementById("result-name");
const accuracyElement = document.getElementById("accuracy");
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");
const performanceTitle = document.getElementById("performance-title");
const performanceMessage = document.getElementById("performance-message");

const reviewButton = document.getElementById("review-btn");
const restartButton = document.getElementById("restart-btn");
const backResultButton = document.getElementById("back-result-btn");

const reviewList = document.getElementById("review-list");
const leaderboardElement = document.getElementById("leaderboard");


let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let participantName = "";
let userAnswers = [];

let timeLeft = TIME_PER_QUESTION;
let timerInterval;


function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[randomIndex]] =
            [shuffled[randomIndex], shuffled[i]];
    }

    return shuffled;
}


function showScreen(screen) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(item => {
        item.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function startQuiz() {
    participantName = participantInput.value.trim();

    if (participantName.length < 2) {
        nameError.textContent = "Please enter your name before starting.";
        participantInput.focus();
        return;
    }

    nameError.textContent = "";

    quizQuestions = shuffleArray(questionBank)
        .slice(0, QUESTIONS_PER_QUIZ)
        .map(question => ({
            ...question,
            options: shuffleArray(question.options)
        }));

    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = [];

    displayName.textContent = participantName;
    scoreElement.textContent = score;
    totalScoreElement.textContent = QUESTIONS_PER_QUIZ;

    showScreen(quizScreen);
    displayQuestion();
}


function displayQuestion() {
    clearInterval(timerInterval);

    selectedAnswer = null;
    submitButton.disabled = true;

    selectionMessage.textContent = "Select one answer to continue.";

    const currentQuestion = quizQuestions[currentQuestionIndex];

    categoryBadge.textContent = currentQuestion.category;
    questionText.textContent = currentQuestion.question;

    questionCounter.textContent =
        `Question ${currentQuestionIndex + 1} of ${QUESTIONS_PER_QUIZ}`;

    const progress =
        Math.round(((currentQuestionIndex + 1) / QUESTIONS_PER_QUIZ) * 100);

    progressPercent.textContent = `${progress}%`;
    progressBar.style.width = `${progress}%`;

    answerOptions.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    currentQuestion.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer-option";

        button.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span>${option}</span>
        `;

        button.addEventListener("click", () => {
            selectAnswer(option, button);
        });

        answerOptions.appendChild(button);
    });

    startTimer();
}


function selectAnswer(answer, button) {
    selectedAnswer = answer;

    const optionButtons =
        document.querySelectorAll(".answer-option");

    optionButtons.forEach(option => {
        option.classList.remove("selected");
    });

    button.classList.add("selected");

    submitButton.disabled = false;
    selectionMessage.textContent =
        "Answer selected. Submit when you're ready.";
}


function submitAnswer() {
    if (selectedAnswer === null) {
        return;
    }

    clearInterval(timerInterval);

    recordAnswer(selectedAnswer);

    moveToNextQuestion();
}


function recordAnswer(answer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    const isCorrect = answer === currentQuestion.answer;

    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
    }

    userAnswers.push({
        question: currentQuestion.question,
        category: currentQuestion.category,
        selected: answer,
        correct: currentQuestion.answer,
        isCorrect: isCorrect
    });
}


function moveToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < QUESTIONS_PER_QUIZ) {
        displayQuestion();
    } else {
        finishQuiz();
    }
}


function startTimer() {
    timeLeft = TIME_PER_QUESTION;

    timerElement.textContent = timeLeft;
    timerBox.classList.remove("warning");

    timerInterval = setInterval(() => {

        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 5) {
            timerBox.classList.add("warning");
        }

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            userAnswers.push({
                question: quizQuestions[currentQuestionIndex].question,
                category: quizQuestions[currentQuestionIndex].category,
                selected: "No answer - time expired",
                correct: quizQuestions[currentQuestionIndex].answer,
                isCorrect: false
            });

            moveToNextQuestion();
        }

    }, 1000);
}


function finishQuiz() {
    clearInterval(timerInterval);

    const accuracy =
        Math.round((score / QUESTIONS_PER_QUIZ) * 100);

    finalScore.textContent = score;
    resultName.textContent =
        `${participantName}, your result is ready.`;

    accuracyElement.textContent = `${accuracy}%`;
    correctCount.textContent = score;
    incorrectCount.textContent =
        QUESTIONS_PER_QUIZ - score;

    setPerformanceMessage(accuracy);

    saveScore(participantName, score, accuracy);
    displayLeaderboard();

    showScreen(resultScreen);
}


function setPerformanceMessage(accuracy) {

    if (accuracy >= 90) {
        performanceTitle.textContent = "Excellent work!";
        performanceMessage.textContent =
            "You have a strong command of the technical concepts in this quiz.";
    }

    else if (accuracy >= 70) {
        performanceTitle.textContent = "Great job!";
        performanceMessage.textContent =
            "A strong performance. You're comfortable with most of the concepts covered.";
    }

    else if (accuracy >= 50) {
        performanceTitle.textContent = "Good attempt!";
        performanceMessage.textContent =
            "You have the fundamentals. Review a few topics and try again.";
    }

    else {
        performanceTitle.textContent = "Keep learning!";
        performanceMessage.textContent =
            "Every attempt helps. Review your answers and give it another shot.";
    }
}


function displayReview() {
    reviewList.innerHTML = "";

    userAnswers.forEach((answer, index) => {

        const reviewItem = document.createElement("div");

        reviewItem.className =
            `review-item ${answer.isCorrect ? "correct" : ""}`;

        reviewItem.innerHTML = `
            <p class="review-number">
                QUESTION ${index + 1} · ${answer.category.toUpperCase()}
            </p>

            <p class="review-question">
                ${answer.question}
            </p>

            <p class="review-answer">
                <span>Your answer:</span>
                <strong class="${answer.isCorrect ? "correct-text" : "wrong-text"}">
                    ${answer.selected}
                </strong>
            </p>

            <p class="review-answer">
                <span>Correct answer:</span>
                <strong class="correct-text">
                    ${answer.correct}
                </strong>
            </p>
        `;

        reviewList.appendChild(reviewItem);
    });

    showScreen(reviewScreen);
}


function saveScore(name, finalScoreValue, accuracy) {

    const scores =
        JSON.parse(localStorage.getItem("gdgQuizLeaderboard")) || [];

    const newScore = {
        name: name,
        score: finalScoreValue,
        accuracy: accuracy,
        date: new Date().toLocaleDateString()
    };

    scores.push(newScore);

    scores.sort((a, b) => {

        if (b.score !== a.score) {
            return b.score - a.score;
        }

        return b.accuracy - a.accuracy;
    });

    const topScores = scores.slice(0, 5);

    localStorage.setItem(
        "gdgQuizLeaderboard",
        JSON.stringify(topScores)
    );
}


function displayLeaderboard() {

    const scores =
        JSON.parse(localStorage.getItem("gdgQuizLeaderboard")) || [];

    leaderboardElement.innerHTML = "";

    if (scores.length === 0) {

        leaderboardElement.innerHTML =
            `<p class="no-scores">No quiz attempts yet.</p>`;

        return;
    }

    const header = document.createElement("div");

    header.className = "leaderboard-row header";

    header.innerHTML = `
        <span>RANK</span>
        <span>NAME</span>
        <span>SCORE</span>
        <span class="leaderboard-date">DATE</span>
    `;

    leaderboardElement.appendChild(header);


    scores.forEach((entry, index) => {

        const row = document.createElement("div");

        row.className = "leaderboard-row";

        row.innerHTML = `
            <span class="rank">#${index + 1}</span>
            <span>${entry.name}</span>
            <strong>${entry.score}/${QUESTIONS_PER_QUIZ}</strong>
            <span class="leaderboard-date">${entry.date}</span>
        `;

        leaderboardElement.appendChild(row);
    });
}


function restartQuiz() {
    clearInterval(timerInterval);

    participantInput.value = participantName;

    showScreen(startScreen);
}


startButton.addEventListener("click", startQuiz);

participantInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        startQuiz();
    }
});

submitButton.addEventListener("click", submitAnswer);

reviewButton.addEventListener("click", displayReview);

restartButton.addEventListener("click", restartQuiz);

backResultButton.addEventListener("click", () => {
    showScreen(resultScreen);
});


displayLeaderboard();