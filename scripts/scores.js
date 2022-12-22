// use localStorage to store user scores + implement delete all scores button as well

// player's score
var score = 0;
var input = document.getElementById("initials");
var scoreWrapper = document.getElementById("score-wrapper");
tallyTest = [
  {
    playerName: "",
    points: "",
  },
];
// sets up / checks scores tally
var getTally = JSON.parse(localStorage.getItem("userScores"));

if (getTally === null) {
  JSON.stringify(localStorage.setItem("userScores", JSON.stringify(tallyTest)));
}

function saveScores() {
  var scoreArr = getTally; // [{0:{name, score:}}]
  var getName = input.value.trim();
  scoreArr.push({ playerName: getName, points: score });
  localStorage.setItem("userScores", JSON.stringify(scoreArr));
  input.value = "";
}

function displayScores() {
  var getTally = JSON.parse(localStorage.getItem("userScores"));

  for (var i = 0; i < getTally.length; i++) {
    var scoreWrapper = document.getElementById("score-wrapper");
    var pResult = document.createElement("p");
    pResult.textContent = `Name: ${getTally[i]["playerName"]} | Score: ${getTally[i]["points"]}`;
    scoreWrapper.append(pResult);
  }
}
displayScores();

function clearScores() {
  // wipes localStorage data
  var clearBtn = document.getElementById("clear");
  clearBtn.addEventListener("click", function (e) {
    localStorage.clear();
    document.location.reload();
    scoreWrapper.remove();
  });
}
clearScores();
