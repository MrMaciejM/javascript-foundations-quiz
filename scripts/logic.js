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
var timerID = document.getElementById("time");
var gameTime = 60; // 60 seconds

// START OF CODE:

// Timer + hide start screen
startBtn.addEventListener("click", function (event) {
  // hides start screen
  startScreen.setAttribute("class", "hide");
  // starts timer
  var countdown = setInterval(function () {
    if (gameTime <= 0) {
      clearInterval(countdown);
      gameTime += 1; // fixes -1 on the timer
    }
    gameTime -= 1; // decreases time by 1 second every second
    timerID.textContent = gameTime;
    // 1000 = 1 second
  }, 1000);
});

// check answers and track questions
function checkAndTrack() {
  // will loop in startQuiz
  // <button data-correct="false">array</button>
  // prettier-ignore
  choicesOutput.addEventListener("click", function (event) {
      //
      //console.log("hello");
      var btnClick = event.target.textContent;
      var correctAnswer = questions[counter]["answer"];
      
      // TO-DO: reset the buttons at the end 
        if(btnClick === correctAnswer) {
          // add +5 seconds to timer, increment score and counter
          console.log("is correct"); 
          gameTime += 5; 
          counter += 1;
          score += 1;
          console.log(score); 
          startQuiz()
          
        }
        else if(btnClick !== correctAnswer) {
          console.log("is NOT correct"); 
          gameTime -= 5; 
          counter+= 1;
          score -= 1;
          console.log(score); 
        }
    });
}

// TO-DO: display answer message for correct/incorrect answer

// var counter = 0  // this var counts the questions
function startQuiz() {
  // insert first set of questions using for loop
  var currentQuestion = questions[counter];
  var questionsArray = questions[counter].choices;
  // loop through the questions array
  //for (var i = 0; i < questionsArray.length; i++) {
  for (var i = 0; i < questionsArray.length; i++) {
    var choices = currentQuestion.choices;
    var choice = choices[i];
    var isCorrect = questions[counter]["answer"] === choice;
    questionTitle.textContent = currentQuestion.title;

    // NOTE: counter var is set to 4

    // prettier-ignore
    choicesOutput.insertAdjacentHTML("beforeend", `
    <button data-correct=${isCorrect}>${choice}</button>`);
  }
}
checkAndTrack();
startQuiz();
