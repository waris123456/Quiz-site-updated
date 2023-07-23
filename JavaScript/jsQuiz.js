const quizData = [
    {
        question: "What does 'JS' stand for in JavaScript?",
        answers: ["Java Script", "Just Script", "JavaScript", "Java Source"],
        correct: "JavaScript"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: ["var", "variable", "v", "let"],
        correct: "var"
    },
    {
        question: "What type of language is JavaScript?",
        answers: ["Object-Oriented", "Functional", "Procedural", "Multi-paradigm"],
        correct: "Multi-paradigm"
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        answers: ["string", "number", "boolean", "array"],
        correct: "array"
    },
    {
        question: "What will the following code output: console.log(typeof null);",
        answers: ["null", "undefined", "object", "string"],
        correct: "object"
    },
    {
        question: "What is the result of the expression '5' + 3 in JavaScript?",
        answers: ["53", "8", "NaN", "Error"],
        correct: "53"
    },
    {
        question: "Which built-in method is used to convert a string to lowercase in JavaScript?",
        answers: ["toLowerCase()", "toLower()", "changeCase('lower')", "caseLower()"],
        correct: "toLowerCase()"
    },
    {
        question: "What is the correct way to comment a single-line in JavaScript?",
        answers: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "&& This is a comment"],
        correct: "// This is a comment"
    },
    {
        question: "Which operator is used to compare both value and type in JavaScript?",
        answers: ["==", "===", "=", "equals"],
        correct: "==="
    },
    {
        question: "What is the output of the following code: console.log(2 + '2');",
        answers: ["4", "22", "NaN", "Error"],
        correct: "22"
    },
    {
        question: "Which function is used to parse a string and return an integer in JavaScript?",
        answers: ["parseInt()", "parseInteger()", "stringToInt()", "toInt()"],
        correct: "parseInt()"
    },
    {
        question: "Which method is used to add elements to the end of an array in JavaScript?",
        answers: ["push()", "add()", "append()", "insert()"],
        correct: "push()"
    },
    {
        question: "What does DOM stand for?",
        answers: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Data Oriented Model"],
        correct: "Document Object Model"
    },
    {
        question: "Which event is triggered when an element loses focus?",
        answers: ["onchange", "onblur", "onfocus", "onlose"],
        correct: "onblur"
    },
    {
        question: "What does AJAX stand for?",
        answers: ["Asynchronous JavaScript and XML", "Asynchronous JavaScript and XHTML", "Asynchronous JavaScript and XHR", "All JavaScript and XML"],
        correct: "Asynchronous JavaScript and XML"
    },
    {
        question: "Which function is used to delay the execution of code in JavaScript?",
        answers: ["setTimeout()", "setInterval()", "delay()", "wait()"],
        correct: "setTimeout()"
    },
    {
        question: "How do you write a single-line comment in JavaScript?",
        answers: ["// This is a comment", "/* This is a comment */", "' This is a comment", "<!-- This is a comment -->"],
        correct: "// This is a comment"
    },
    {
        question: "What is the scope of a global variable in JavaScript?",
        answers: ["Local to the function where it is declared", "Local to the code block where it is declared", "Available throughout the entire program", "Available within a specific object"],
        correct: "Available throughout the entire program"
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        answers: ["pop()", "remove()", "delete()", "splice()"],
        correct: "pop()"
    },
    {
        question: "What will the following code output: console.log(1 + '2' + 1);",
        answers: ["22", "32", "121", "NaN"],
        correct: "121"
    },
    {
        question: "Which function is used to retrieve the length of an array in JavaScript?",
        answers: ["length()", "size()", "len()", "arrayLength()"],
        correct: "length()"
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        answers: ["To enable strict mode", "To allow global variables", "To disable strict mode", "To restrict access to specific objects"],
        correct: "To enable strict mode"
    },
    {
        question: "Which method is used to join all elements of an array into a string?",
        answers: ["join()", "concat()", "combine()", "merge()"],
        correct: "join()"
    },
    {
        question: "What is the output of the following code: console.log(typeof NaN);",
        answers: ["number", "NaN", "undefined", "string"],
        correct: "number"
    },
    {
        question: "Which loop is used to iterate through an array in JavaScript?",
        answers: ["for", "while", "do...while", "forEach"],
        correct: "for"
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
