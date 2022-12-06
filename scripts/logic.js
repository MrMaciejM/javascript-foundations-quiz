/* Personal Notes 
// you need to convert the object in user_data into string first via JSON.stringify(data), then convert it back into object using JSON.parse()

//var userData = JSON.parse(localStorage.getItem("user_data"));
//console.log(userData);
*/

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
    answerBtn.classList.add("answerBtn");
    answerBtn.innerText = choices[i];
    answerBtn.setAttribute("value", choices[i]);

    document.body.appendChild(answerBtn);
    console.log(answerBtn.value);

    answerBtn.addEventListener("click", function (e) {
      // set correct answer
      var correctAnswer = questions[questionTracker]["answer"];

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

  //answerBtn.addEventListener("click", function (event) {
  //  console.log("aaaaa");
  //});
  //choicesOutput.addEventListener("click", function () {});
}
//function checkAnswer(event) {}
// adds eventListener to the answer buttons
//choicesOutput.addEventListener("click", checkAnswer);
startQuiz();
startBtn.addEventListener("click", function () {
  //console.log("test");
});

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
