// use localStorage to store user scores + implement delete all scores button as well

// player's score
var score = 0;
var input = document.getElementById("initials");

tallyTest = [
  {
    playerName: "",
    points: 0,
  },
];
// sets up / checks scores tally
var getTally = JSON.parse(localStorage.getItem("userScores"));

if (getTally === null) {
  JSON.stringify(localStorage.setItem("userScores", JSON.stringify(tallyTest)));
}

function saveScores() {
  // getTally = parsed getItem localStorage
  var scoreArr = getTally; // [{0:{name, score:}}]
  var getName = input.value.trim();

  scoreArr.push({ playerName: +`${getName}`, score });
  localStorage.setItem("userScores", JSON.stringify(scoreArr));
  //console.log(scoreArr);
  console.log(getName);
  console.log(scoreArr);
}
