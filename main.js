//=============GLOBAL VARIABLES DECLARATION & ASSIGNMENT============
//creating an array that stores the questions for the topic 'functions'
let quizBank= [];
//counts the number of questions we ask, starting at zero for an array
let counter = 0;
//tracks index of the quizBank array 
let index=0;
// create varibales that stores an array boolean values (true or false) when user clicks on answer choice
let correctAnswerChosen = 0;
let incorrectAnswerChosen = 0;

let testBank = [];

//assigning my HTLML element to a variable that holds the spot for the question
let questionsAppear = document.getElementsByClassName('populateQuestions');

//assigning my HTML elements with attribute class to a variable that will hold the list of answer choice.
let answersAppear = document.getElementsByClassName('answerChoice');

//creating a variable that will hold the HTML element which displays response to user after they click
let responseAppear = document.getElementsByClassName('response');

let quizElement = document.getElementById('quiz');

let elTopic1 = document.getElementById('functions')
let elTopic2 = document.getElementById('loops')
let elTopic3 = document.getElementById('objects')
let elTopic4 = document.getElementById('DOM')
let elTopic5 = document.getElementById('localStorage')
let elSubmitTopic = document.getElementById('dataSubmit');

//create a next button
let buttonHolder = document.getElementById('buttonHolder');
let questionButton= document.createElement('button');

//===========OBJECT CONSTRUCTOR & INSTANCES============

//creating an object constructor with properties and method for the questions
let Question = function(topic, question, answerOptions, userResponse, questionResult)
{
    this.topic = topic,
    this.question = question,
    //answerOptions will be an array
    this.answerOptions = answerOptions,
    this.correctAnswer = this.answerOptions[0],
    this.displayed = false; 
    this.userResponse = userResponse,
    //result will be a boolean
    this.questionResult = questionResult;
}

q01 = new Question('functions', 'To execute the code block in a function, we do what?', ['Invoke the function','Define the function','Construct the function','Declare the function'], null, null) ;

q02 = new Question('functions', 'An invoked function is the ________ thing the JavaScript interpreter executes when a page loads.', [' first','final','second','third'], null, null) ;

q03 = new Question('functions', 'Functions take _______ to return a value?', ['parameters', 'objects', 'objectives', 'variables'], null, null) ;

q04 = new Question('functions', 'Functions are known as _______ of the object?', ['methods', 'parameters', 'values', 'variables'], null, null) ;

q05 = new Question('functions', 'In a function expression, what is omitted?', ['The name', 'The interpreter', 'The value', 'The method'], null, null) ;

q11 = new Question('loops', 'Which of the following is not a loop type?', ['do for', 'do while', 'for', 'while'], null, null) ;

q12 = new Question('loops', 'Loops check a ______?', ['condition', 'variable', 'function', 'method'], null, null) ;

q21 = new Question('objects', 'In an object, variables become known as _______?', ['properties', 'scripts', 'keys', 'values'], null, null) ;

q22 = new Question('objects', 'In an object, functions become known as _______?', ['methods', 'scripts', 'keys', 'values'], null, null) ;

q23 = new Question('objects', 'An object constructor provides what main advantage?', ['Multiple instantiations', 'A single instantiation', 'Defined keys', 'Defined values'], null, null) ;

q31 = new Question('DOM', 'The DOM specifies the way in which a page is modeled using a _______?', ['DOM tree', 'DOM chart', 'DOM score', 'DOM loop'], null, null) ;

q32 = new Question('DOM', 'The DOM is ________?', ['neither part of HTML, nor part of JavaScript', 'part of HTML, and part of JavaScript', 'part of HTML, but not part of JavaScript', 'not part of HTML, but part of JavaScript'], null, null) ;

q33 = new Question('DOM', 'To access the DOM, you start by looking for ______?', ['elements', 'documents', 'attributes', 'text'], null, null) ;

q34 = new Question('DOM', 'Methods that find elements in the DOM are called what?', ['DOM queries', 'Node queries', 'Element queries', 'Attribute queries'], null, null) ;

q35 = new Question('DOM', 'A collection of nodes is known as a _______?', ['nodeList', 'nodeArray', 'nodeQuery', 'nodeScript'], null, null) ;

q41 = new Question('localStorage', 'Harold didnt create a local storage questions', ['na','na', 'na', 'na'], null, null) ;

//=========Index for tracking what questions we are on===============

//The "index" variable, declared above, will keep track of what question we are on, and we will pass this variable whereever we need to pass an index to the questions array

function indexFunc() {
    index = Math.floor(Math.random() * quizBank.length);
    return index;
} 

function randomAnswer() {
    aIndex = Math.floor(Math.random() * quizBank[index].answerOptions.length);
    return aIndex;
}

//=====POPULATING DOM DYNAMICALLY=====

//creating a function that populates question on the html page
let questionPopulate= function(){
        index = indexFunc(); 

        let newQuestion = document.createElement('p');
        quizElement.appendChild(newQuestion);
        newQuestion.setAttribute('class', 'populateQuestions');

        //prevents repeated questions
        while (quizBank[index].displayed) {
            index = indexFunc();
        }
        questionsAppear[counter].innerHTML = (counter + 1) + ". " + quizBank[index].question;
        quizBank[index].displayed = true;
        //questionsAppear = document.getElementsByClassName('populateQuestions');
}

//Placeholder for creating a function to randomize the answer options each time they appear (not part of the MVP)

//creating a function that will populate the "answer options" property
let answerChoices = function(){
    //create an ordered list
    let newAnswerChoices = document.createElement('ol');
    quizElement.appendChild(newAnswerChoices);
    newAnswerChoices.setAttribute('class', 'answerChoice');
    newAnswerChoices.setAttribute('type', 'a');

    let answerArray = [];

    //append list items
    for (let i=0; i < quizBank[index].answerOptions.length; i++){
        let newAnswer = document.createElement('li');
        newAnswerChoices.appendChild(newAnswer);
        newAnswer.setAttribute('class', 'answerChoice');

        let j = randomAnswer(); 
            
        for (let k = 0; k < answerArray.length; k++) {
            while (j == answerArray[k]) {
                j = randomAnswer();
            }
        }
        answerArray.push(j);
        newAnswer.innerText = quizBank[index].answerOptions[j];
    }

    //for (let i=0; i < answersAppear.length; i++){
    //    answersAppear[i].innerText= quizBank[index].answerOptions[i];
    //}
}

//pushing the questions of the function questions objects into an array that holds all the questions for the function topic
testBank.push(q01, q02, q03, q04, q05, q11, q12, q21, q22, q23, q31, q32, q33, q34, q35, q41);

// then attach an event handler

let topicChoice1 = function(e) {
   for (z = 0; z < testBank.length; z++) {
       if (document.getElementById('functions').id === testBank[z].topic) {
           quizBank.push(testBank[z])
       }
   }
}

let topicChoice2 = function(e) {
   for (z = 0; z < testBank.length; z++) {
       if (document.getElementById('loops').id === testBank[z].topic) {
           quizBank.push(testBank[z])
       }
   }
}

let topicChoice3 = function(e) {
   for (z = 0; z < testBank.length; z++) {
       if (document.getElementById('objects').id === testBank[z].topic) {
           quizBank.push(testBank[z])
       }
   }
}

let topicChoice4 = function(e) {
   for (z = 0; z < testBank.length; z++) {
       if (document.getElementById('DOM').id === testBank[z].topic) {
           quizBank.push(testBank[z])
       }
   }
}

let topicChoice5 = function(e) {
   for (z = 0; z < testBank.length; z++) {
       if (document.getElementById('localStorage').id === testBank[z].topic) {
           quizBank.push(testBank[z])
       }
   }
}

let topicSubmit = function(e) {
    questionPopulate();
    answerChoices();
    answerEventFunc();
}

//==========FUNCTIONS FOR EVENT HANDLERS ================

//Function that will give the  response "correct" when the correct choice is clicked + score property (boolean)
let responseCheck = function(){
    let response = document.createElement('p');
    response.setAttribute('class', 'response');
    console.log("hi")
    quizElement.appendChild(response);
    responseAppear = document.getElementsByClassName('response');

    if (quizBank[index].userResponse === quizBank[index].correctAnswer){
        responseAppear[counter].innerText = "Correct";
        quizBank[index].result = true;
        correctAnswerChosen++;
    }
    
    else {
        responseAppear[counter].innerText = "Incorrect";
        quizBank[index].result = false;
        incorrectAnswerChosen++;
    }

    //if there are no more questions to be asked, do not display the "next" button
    if (counter < (quizBank.length - 1)) {
        buttonHolder.appendChild(questionButton);
        questionButton.innerText = 'Next Question'; 
    } 
    //else remove the next button
    else {
        buttonHolder.removeChild(questionButton);
        let elScore = document.getElementById('score');
        elScore.innerHTML = "Score: " + correctAnswerChosen + " / " + (correctAnswerChosen + incorrectAnswerChosen);
    }
}

let clicked = function(e) {
    quizBank[index].userResponse = e.target.innerHTML; 
    responseCheck();
    removeEventFunc();
}

let nextClicked = function (e) {
    counter++;

    questionPopulate();
    answerChoices();
    answerEventFunc();
}

//==============FIRING EVENTS + EXECUTION===============
// creating an code to run when the event click is fired in my HTML
let answerEventFunc = function() {
    for(let i= (counter * 4); i < answersAppear.length; i++){
        answersAppear[i].addEventListener('click', clicked);
    }
}

let removeEventFunc = function() {
    for(let i= (counter * 4); i < answersAppear.length; i++){
        answersAppear[i].removeEventListener('click', clicked);
    }
}

questionButton.addEventListener('click', nextClicked)

// attach event listeners to topics
elTopic1.addEventListener('click', topicChoice1);
elTopic2.addEventListener('click', topicChoice2);
elTopic3.addEventListener('click', topicChoice3);
elTopic4.addEventListener('click', topicChoice4);
elTopic5.addEventListener('click', topicChoice5);
elSubmitTopic.addEventListener('click', topicSubmit);

if (quizBank.length != 0){
    questionPopulate();
    answerChoices();
    answerEventFunc();
}