/* Personal Notes 
// you need to convert the object in user_data into string first via JSON.stringify(data), then convert it back using JSON.parse()

//var userData = JSON.parse(localStorage.getItem("user_data"));
//console.log(userData);
*/

var startWrapper = document.querySelector("#start-screen");

// questions div
var questionWrap = document.querySelector("#questions");

var questionTitle = document.querySelector("#question-title");

// start-screen div
var startScreen = document.querySelector("#start-screen");
// choices div
var choicesOutput = document.querySelector("#choices");

var startBtn = document.querySelector("#start");

function startQuiz() {
  // shows the quiz
  questionWrap.classList.remove("hide");
  // hide the start-screen
  startScreen.classList.remove("hide");
  questionWrap.classList.remove("hide");

  // modify question title
  //questionTitle.innerText = questions[questionTracker].title;
  // modify answers
  //var choices = questions[questionTracker].choices;

  var currentQuestion = questions[questionTracker];
  var counter = 0;
  //var hideAllButtons = document.querySelectorAll("button1");
  questionTitle.innerText = currentQuestion.title;
  var choices = currentQuestion.choices;

  choicesOutput.innerHTML = "";
  for (var i = 0; i < choices.length; i++) {
    var choice = choices[i];
    var isCorrect = currentQuestion.answer === choice;
    choicesOutput.insertAdjacentHTML(
      "beforeend",
      `
    <button data-correct=${isCorrect}>${choice}</button>`
    );

    /* var answerBtn = document.createElement("button");
    answerBtn.classList.add("answerBtn", "button1");
    answerBtn.innerText = choices[i];
    answerBtn.setAttribute("value", choices[i]);

    document.body.appendChild(answerBtn);
    console.log(answerBtn.value);

    counter++; */
  } // end of for loop
  choicesOutput.classList.remove("hide");
  //console.log(choicesOutput);
  choicesOutput.addEventListener("click", function (e) {
    // set correct answer
    //var correctAnswer = questions[questionTracker]["answer"];
    //answerBtn.classList.add("hide");
    console.log(e.target);

    //console.log(questionTracker);
    /*
    if (e.target.value === correctAnswer) {
      console.log("correct answer");
      questionTracker += 1;
    } else {
      console.log("answer is not correct");
      questionTracker += 1;
    }
    */
    //console.log(e.target.value);
    questionTracker += 1;
    startQuiz();
  }); // end of event listener
  // question 2
  // modify question title
  //questionTitle.innerText = questions[questionTracker].title;
  // modify answers
  //var choices = questions[questionTracker].choices;
}

//function checkAnswer(event) {}
// adds eventListener to the answer buttons
//choicesOutput.addEventListener("click", checkAnswer);
//startQuiz();

startBtn.addEventListener("click", function () {
  startScreen.classList.add("hide");
});

startQuiz();

/* **** do not use 
function hideStart() {
  var btnStart = document.getElementById("start");
  btnStart.addEventListener("click", () => {
    var hideWrapper = document.querySelector("#start-screen");
    hideWrapper.classList.add("hide");
  });
}
hideStart();

questionTracker = 0;

function quizQuestion1() {
  var title = document.createElement("h2");
  title.innerText = questions[questionTracker]["title"];
  document.body.appendChild(title);

  var choices = questions[questionTracker]["choices"];
  //title.classList.remove("hide");

  // buttons
  var button1Q1 = document.createElement("button");
  button1Q1.innerText = choices[0];
  document.body.appendChild(button1Q1);
  button1Q1.addEventListener("click", () => {
    title.classList.add("hide");
  });

  var button2Q1 = document.createElement("button");
  button2Q1.innerText = choices[1];
  document.body.appendChild(button2Q1);

  var button3Q1 = document.createElement("button");
  button3Q1.innerText = choices[2];
  document.body.appendChild(button3Q1);

  var button4Q1 = document.createElement("button");
  button4Q1.innerText = choices[3];
  document.body.appendChild(button4Q1);
}
quizQuestion1();

function hideQustion1() {
  //
}
*/

// ****************************
// semi-working...

/* 
// questions div
var questionWrap = document.querySelector("#questions");

var questionTitle = document.querySelector("#question-title");

// start-screen div
var startScreen = document.querySelector("#start-screen");
// choices div
var choicesOutput = document.querySelector("#choices");

var startBtn = document.querySelector("#start");

function startQuiz() {
  // shows the quiz
  questionWrap.classList.remove("hide");
  // hide the start-screen
  startScreen.classList.remove("hide");
  questionWrap.classList.remove("hide");

  // modify question title
  questionTitle.innerText = questions[questionTracker].title;
  // modify answers
  var choices = questions[questionTracker].choices;
  console.log(choices);
  var counter = 0;

  for (var i = 0; i < choices.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.classList.add("answerBtn", "button1");
    answerBtn.innerText = choices[i];
    answerBtn.setAttribute("value", choices[i]);

    document.body.appendChild(answerBtn);
    console.log(answerBtn.value);

    answerBtn.addEventListener("click", function (e) {
      // set correct answer
      var correctAnswer = questions[questionTracker]["answer"];
      answerBtn.classList.add("hide");

      if (e.target.value === correctAnswer) {
        console.log("correct answer");
        questionTracker += 1;
      } else {
        console.log("answer is not correct");
        questionTracker += 1;
      }
      //console.log(e.target.value);
    }); // end of event listener
    counter++;
  } // end of for loop

  // question 2
  // modify question title
  questionTitle.innerText = questions[questionTracker].title;
  // modify answers
  var choices = questions[questionTracker].choices;
}

//function checkAnswer(event) {}
// adds eventListener to the answer buttons
//choicesOutput.addEventListener("click", checkAnswer);
startQuiz();
startBtn.addEventListener("click", function () {
  //console.log("test");
});

*/

// ********************
/* first attempt
  var choice = currentQuestion.choices[i];
    //console.log("current Q.answer ");
    //console.log(currentQuestion.answer);
    //console.log(choice);
    var isCorrect = currentQuestion.answer === choice;
    choicesOutput.insertAdjacentHTML(
      "beforeend",
      `<button data-correct=${isCorrect}>${choice}</button>`
    );
    console.log(choicesOutput);
    //console.log("is correct log: ");
    //console.log(isCorrect);
    /*if (isCorrect) {
      // conditional
      questionTracker + 1
    } else {
      // some code
      questionTracker + 1
    }
    // shows the quiz
    questionWrap.classList.remove("hide");
    // hide the start-screen
    //startScreen.classList.add("hide");
*/
