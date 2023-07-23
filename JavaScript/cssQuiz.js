const quizData = [
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: ["color", "text-color", "font-color", "text-style"],
        correct: "color"
    },
    {
        question: "How do you select an element with id 'example' in CSS?",
        answers: ["#example", ".example", "element.example", "example"],
        correct: "#example"
    },
    {
        question: "Which CSS property is used to set the background color of an element?",
        answers: ["background-color", "color", "bgcolor", "background"],
        correct: "background-color"
    },
    {
        question: "What does 'CSS box model' refer to?",
        answers: ["A layout model used for organizing content in boxes", "A model that defines the size of the web page", "A model used for creating rounded corners", "A model for animating elements"],
        correct: "A layout model used for organizing content in boxes"
    },
    {
        question: "Which CSS property is used to add space between the elements?",
        answers: ["spacing", "margin", "padding", "border"],
        correct: "margin"
    },
    {
        question: "What is the default value of the 'position' property in CSS?",
        answers: ["static", "relative", "absolute", "fixed"],
        correct: "static"
    },
    {
        question: "How do you make the text bold using CSS?",
        answers: ["font-weight: normal", "text-style: bold", "font: bold", "font-weight: bold"],
        correct: "font-weight: bold"
    },
    {
        question: "What does CSS pseudo-class ':hover' do?",
        answers: ["Applies styles when an element is clicked", "Applies styles when an element is focused", "Applies styles when an element is hovered over with the mouse", "Applies styles when an element is active"],
        correct: "Applies styles when an element is hovered over with the mouse"
    },
    {
        question: "Which CSS property is used to control the size of the text?",
        answers: ["font-size", "text-size", "size", "font-style"],
        correct: "font-size"
    },
    {
        question: "What is the correct way to comment in CSS?",
        answers: ["/* This is a comment */", "// This is a comment", "<!-- This is a comment -->", "// This is a comment //"],
        correct: "/* This is a comment */"
    },
    {
        question: "Which CSS property is used to control the space between lines of text?",
        answers: ["line-height", "line-spacing", "text-line", "spacing"],
        correct: "line-height"
    },
    {
        question: "What is the purpose of the 'z-index' property in CSS?",
        answers: ["Controls the size of the element", "Controls the position of the element", "Controls the transparency of the element", "Controls the stacking order of the element"],
        correct: "Controls the stacking order of the element"
    },
    {
        question: "Which CSS property is used to apply a shadow effect to text?",
        answers: ["shadow-effect", "text-shadow", "text-effect", "shadow"],
        correct: "text-shadow"
    },
    {
        question: "How do you group selectors to apply the same styles to multiple elements?",
        answers: ["group: selector1, selector2", "selector1 && selector2", "selector1 + selector2", "selector1, selector2"],
        correct: "selector1, selector2"
    },
    {
        question: "What is the CSS 'display' property used for?",
        answers: ["To control the visibility of the element", "To specify how the element should be positioned", "To define the font family of the element", "To specify how the element should be displayed"],
        correct: "To specify how the element should be displayed"
    },
    {
        question: "Which CSS property is used to create rounded corners?",
        answers: ["corner-radius", "border-radius", "rounded-style", "corner-style"],
        correct: "border-radius"
    },
    {
        question: "How do you apply multiple styles to an element using CSS?",
        answers: ["styles: value1, value2", "styles: { value1, value2 }", "styles: (value1, value2)", "styles: [ value1, value2 ]"],
        correct: "styles: { value1, value2 }"
    },
    {
        question: "What is the CSS property used to control the alignment of text?",
        answers: ["text-align", "text-style", "font-align", "alignment"],
        correct: "text-align"
    },
    {
        question: "What is the CSS 'box-sizing' property used for?",
        answers: ["To set the size of the element", "To control the size of the text box", "To set the border style of the element", "To control how the total width and height of an element are calculated"],
        correct: "To control how the total width and height of an element are calculated"
    },
    {
        question: "How do you center an element horizontally in CSS?",
        answers: ["align: center", "position: center", "margin: auto", "center: true"],
        correct: "margin: auto"
    },
    {
        question: "What is the purpose of the 'opacity' property in CSS?",
        answers: ["To control the size of the element", "To control the visibility of the element", "To control the position of the element", "To control the transparency of the element"],
        correct: "To control the transparency of the element"
    },
    {
        question: "Which CSS property is used to control the space between letters of text?",
        answers: ["letter-spacing", "word-spacing", "text-spacing", "spacing"],
        correct: "letter-spacing"
    },
    {
        question: "What is the CSS 'float' property used for?",
        answers: ["To float an element to the right", "To float an element to the left", "To control the size of the element", "To control the position of the element"],
        correct: "To float an element to the left"
    },
    {
        question: "Which CSS property is used to control the background image of an element?",
        answers: ["background-image", "image", "bg-image", "img-background"],
        correct: "background-image"
    },
    {
        question: "What is the purpose of the 'transition' property in CSS?",
        answers: ["To control the transition between different web pages", "To control the transition between different sections on a web page", "To control the animation of an element", "To control the color of an element"],
        correct: "To control the animation of an element"
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
