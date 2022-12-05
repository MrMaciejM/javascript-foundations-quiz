/* Personal Notes 
// you need to convert the object in user_data into string first via JSON.stringify(data), then convert it back into object using JSON.parse()

//var userData = JSON.parse(localStorage.getItem("user_data"));
//console.log(userData);
*/

var questionWrap = document.querySelector("#questions"); // questions div
var questionTitle = document.querySelector("#question-title");

// start-screen div
var startScreen = document.querySelector("#start-screen");

// choices div
var choicesOutput = document.querySelector("#choices");

function startQuiz() {
  var currentQuestion = questions[questionTracker];
  var choices = currentQuestion.choices;
  questionTitle.innerText = currentQuestion.title;
  console.log(currentQuestion);

  choicesOutput.innerHTML = "";
  for (var i = 0; i < choices.length; i++) {
    var choice = choices[i];
    var isCorrect = currentQuestion.answer === choice;

    choicesOutput.insertAdjacentHTML(
      "beforeend",
      `
    <button data-correct=${isCorrect}>${choice}</button>`
    );
  }

  // shows the quiz
  questionWrap.classList.remove("hide");
  // hide the start-screen
  //startScreen.classList.add("hide");
}

function checkAnswer(event) {
  console.log(event.target);
}

choicesOutput.addEventListener("click", checkAnswer);

var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function () {
  console.log("test");
  startQuiz();
});
