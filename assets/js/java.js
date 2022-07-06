// global variables
var viewHighScoresEl = document.getElementById("view-high-score");
var timeLeftEl = document.getElementById("time-left");
var contentEl = document.getElementById("content");
var displayQuestionEl = document.getElementById("display-question");
var displayFinalScoreEl = document.getElementById("display-final-score");
var enterInitialsEL = document.getElementById("enter-initials");
var enterInitialsTextAreaEl = document.getElementById("enter-initials-text-area");
var startQuizEl =  document.getElementById("start-quiz");
var answer1BtnEl = document.getElementById("answer1");
var answer2BtnEl = document.getElementById("answer2");
var answer3BtnEl = document.getElementById("answer3");
var answer4BtnEl = document.getElementById("answer4");
var submitScoreEl = document.getElementById("submit-score");
var answerValidationEl = document.getElementById("answer-validation");
var timeLeft = 75;

// hide answer section while empty
answer1BtnEl.style.display = "none";
answer2BtnEl.style.display = "none";
answer3BtnEl.style.display = "none";
answer4BtnEl.style.display = "none";
submitScoreEl.style.display = "none";
answerValidationEl.style.display = "none";
enterInitialsTextAreaEl.style.display = "none";

//questions
var questionsObj = {
    correct: {
        0 : "How do you select an Id from your html file and link it to a var in your JS file?",
        1 : "Which type of symbol is used to tell JS that you want to make an array?",
        2 : "What tool can be use in JS to debug your code?",
        3 : "what tool can be use to see console.log results in your browser?",
        4 : "What does JS stand for?"
    }
}
//all available answers
var answerObj = {
    possibleAnswers: {
        0 : {
            0: "document(.Id);",
            1: "document.getelementbyid(.Id);",
            2: "document(#Id);",
            3: "document.getElementById('Id');"},
        1 : {
            0: "()",
            1: "[]",
            2: "{}",
            3: "''"},
        2: {
            0: "debug;",
            1: "bugcorrector;",
            2: "debugger;",
            3: "fixbug;"},
        3: {
            0: "DevToolz",
            1: "Devtools/console",
            2: "Devtoolz/console.log",
            3: "Devtools"},
        4: {
            0: "Jupiter String",
            1: "Just Script",
            2: "Java Scarlet",
            3: "Java Script"}, //coma?
    }
}
//start timer
timeLeftEl.textContent = timeLeft;
//function to check each question

//function to check answer

//event listeners