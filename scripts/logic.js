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

var correctSound = new Audio("assets/sfx/correct.wav");
var incorrectSound = new Audio("assets/sfx/incorrect.wav");
// START OF CODE:

// Timer + hide start screen
startBtn.addEventListener("click", function (event) {
  // hides start screen
  startScreen.setAttribute("class", "hide");

  // show questions
  questionWrap.removeAttribute("class", "hide");

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

// check answers, show and hide questions
function checkAndTrack() {
  // prettier-ignore
  choicesOutput.addEventListener("click", function (event) {
      var btnClick = event.target.textContent;
      var correctAnswer = questions[counter]["answer"];
      var hideQuestions = document.querySelectorAll(`.answBtns${counter}`)
      var lastButtons = document.querySelectorAll(".answBtns"); 

        // Correct choices
        if(btnClick === correctAnswer) {
          showCorrect();
          correctSound.play();
          score += 1;         
          // add +5 seconds to timer, increment score and counter
          gameTime += 5; 
          if(counter < 4) {
            counter+= 1; // ensures counter is incremented correctly
          } else if (counter >= 4) {            
            counter+= 1; // increments counter to hide buttons at the end 
            questionTitle.setAttribute("class", "hide");
            // loops through last set of choice buttons and hides them
            for(var i = 0; i < lastButtons.length; i++) {
              lastButtons[i].setAttribute("class", "hide");
            }
            // show end screen
            endScreen(); 
          }
          for(var i = 0; i < hideQuestions.length; i++) {
            hideQuestions[i].setAttribute("class", "hide")
          }            
          startQuiz()          
        }

        // Incorrect choices
        else if(btnClick !== correctAnswer) {
          showIncorrect(); 
          incorrectSound.play()
          score -= 1;
          gameTime -= 10; 
          if(counter < 4) {
            counter+= 1;
          } else if (counter >= 4) {
            counter+= 1; // increments counter to hide buttons at the end 
            questionTitle.setAttribute("class", "hide");
            for(var i = 0; i < lastButtons.length; i++) {
              lastButtons[i].setAttribute("class", "hide");
            }
            // show end screen
            endScreen(); 
          }          
          for(var i = 0; i < hideQuestions.length; i++) {
            hideQuestions[i].setAttribute("class", "hide")
          }             
          startQuiz()
        }
    });
}

//displays answer message for correct/incorrect answer
function showCorrect() {
  // displays "correct" paragraph based on user answer
  questionWrap.insertAdjacentHTML(
    "afterend",
    `<p id="showCorrect">Correct!</p>`
  );
  setTimeout(function () {
    var showCorrect = document.getElementById("showCorrect");
    showCorrect.setAttribute("class", "hide");
  }, 1000);
}
function showIncorrect() {
  questionWrap.insertAdjacentHTML(
    "afterend",
    `<p id="showIncorrect">Incorrect!</p>`
  );
  setTimeout(function () {
    var showIncorrect = document.getElementById("showIncorrect");
    showIncorrect.setAttribute("class", "hide");
  }, 1000);
}

function startQuiz() {
  // insert first set of questions using for loop
  var currentQuestion = questions[counter];
  var questionsChoices = questions[counter]["choices"];

  for (var i = 0; i < questionsChoices.length; i++) {
    var choices = currentQuestion.choices;
    var choice = choices[i];
    var isCorrect = questions[counter]["answer"] === choice;
    questionTitle.textContent = currentQuestion.title;

    // prettier-ignore
    choicesOutput.insertAdjacentHTML("beforeend", `
      <button class="answBtns answBtns${counter}" data-correct=${isCorrect}>${choice}</button>`);
    // console.log(i); // 0 1 2 3
  }
}

function endScreen() {
  var endScreen = document.getElementById("end-screen");
  var textScore = document.getElementById("final-score");
  endScreen.removeAttribute("class", "hide");
  textScore.textContent = score;

  var submitBtn = document.getElementById("submit");
  var input = document.getElementById("initials");
  submitBtn.addEventListener("click", function (e) {
    // check for empty string
    var initials = input.value.trim();
    if (initials === "") {
      return;
    }
    saveScores();
  });
}

checkAndTrack();
startQuiz();
