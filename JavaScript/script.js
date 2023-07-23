const quizData = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlink Markup Text Language"],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        answers: ["head", "meta", "title", "h1"],
        correct: "title"
    },
    {
        question: "Which HTML element is used to specify a paragraph?",
        answers: ["para", "p", "paragraph", "text"],
        correct: "p"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: ["lb", "break", "br", "newline"],
        correct: "br"
    },
    {
        question: "Which HTML element represents the most important heading?",
        answers: ["h1", "heading", "h6", "head"],
        correct: "h1"
    },
    {
        question: "Which HTML element is used to define a hyperlink?",
        answers: ["a", "link", "href", "hyperlink"],
        correct: "a"
    },
    {
        question: "What is the correct HTML element for inserting an image?",
        answers: ["image", "img", "src", "picture"],
        correct: "img"
    },
    {
        question: "Which HTML element is used to define an unordered list?",
        answers: ["ul", "list", "ol", "unordered-list"],
        correct: "ul"
    },
    {
        question: "Which HTML element is used to define an ordered list?",
        answers: ["list", "ol", "ul", "ordered-list"],
        correct: "ol"
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        answers: ["h1", "heading", "h6", "header"],
        correct: "h1"
    },
    {
        question: "Which HTML element defines the footer of a document?",
        answers: ["footer", "bottom", "end", "section"],
        correct: "footer"
    },
    {
        question: "What is the correct HTML element for the smallest heading?",
        answers: ["header", "h6", "heading", "h1"],
        correct: "h6"
    },
    {
        question: "Which HTML element defines the navigation links in a document?",
        answers: ["nav", "navigation", "links", "menu"],
        correct: "nav"
    },
    {
        question: "What is the correct HTML element for defining important text?",
        answers: ["i", "strong", "b", "em"],
        correct: "strong"
    },
    {
        question: "Which HTML element defines a section in a document?",
        answers: ["section", "div", "article", "seg"],
        correct: "section"
    },
    {
        question: "What is the correct HTML element for defining emphasized text?",
        answers: ["i", "italic", "em", "strong"],
        correct: "em"
    },
    {
        question: "Which HTML element defines a header for a document or section?",
        answers: ["head", "header", "h1", "top"],
        correct: "header"
    },
    {
        question: "What is the correct HTML element for inserting a horizontal rule?",
        answers: ["line", "hr", "rule", "hline"],
        correct: "hr"
    },
    {
        question: "Which HTML element is used to define a table row?",
        answers: ["tr", "td", "table-row", "th"],
        correct: "tr"
    },
    {
        question: "What is the correct HTML element for defining a cell as a header in a table?",
        answers: ["cell", "h", "th", "head"],
        correct: "th"
    },
    {
        question: "Which HTML element is used to define data in a table?",
        answers: ["data", "d", "dt", "td"],
        correct: "td"
    },
    {
        question: "What is the correct HTML element for superscript text?",
        answers: ["super", "sup", "s", "script"],
        correct: "sup"
    },
    {
        question: "Which HTML element is used to define a form?",
        answers: ["form", "input", "button", "label"],
        correct: "form"
    },
    {
        question: "What is the correct HTML element for an input field where users can enter text?",
        answers: ["input", "type", "text", "textfield"],
        correct: "input"
    },
    {
        question: "Which HTML element displays a checkbox for users to select?",
        answers: ["checkbox", "input type='checkbox'", "check", "input type='check'"],
        correct: "input type='checkbox'"
    },
    {
        question: "What is the correct HTML element for a dropdown list?",
        answers: ["dropdown", "input type='dropdown'", "select", "input type='select'"],
        correct: "select"
    }
];



const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next");
const resultContainer = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionData = quizData[currentQuestion];
    const answers = questionData.answers.map(
        answer => `<label>
                      <input type="radio" name="question" value="${answer}">
                      ${answer}
                   </label>`
    ).join("");

    const questionHTML = `
        <div class="question">${questionData.question}</div>
        <div class="answers">${answers}</div>
    `;

    quizContainer.innerHTML = questionHTML;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (!selectedOption) return; // No answer selected, do nothing

    const userAnswer = selectedOption.value;
    const correctAnswer = quizData[currentQuestion].correct;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const totalQuestions = quizData.length;
    const resultHTML = `<h2>Your Score: ${score} out of ${totalQuestions}</h2>`;
    resultContainer.innerHTML = resultHTML;
}

nextButton.addEventListener("click", checkAnswer);

// Display the first question when the page loads
displayQuestion();
