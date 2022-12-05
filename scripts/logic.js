// header.dataset.color

// var header = document.querySelector('#header');
// var subHeader = document.querySelector('#sub-header');

// <h1 id="header" data-color="red">Header Text</h1>
// console.log(header.dataset.color);
// console.log(header.getAttribute('data-color'));

// header.getAttribute('data-color')

// subHeader.setAttribute('data-food', 'grape');
// console.log(subHeader.dataset);

// localStorage.setItem('user_data', data);
// 21:58

// ************* LocalStorage Notes ****************
// key note: local storage stores items as a string

// set items in local storage
// localStorage.setItem('color', 'blue');
// localStorage.setItem('user_data', JSON.stringify(data));

// retrieve items , this can also be stored in a variable
// localStorage.getItem('color');
// var color = localStorage.getItem('color');

// non-primitve value types

// var userData = JSON.parse(localStorage.getItem('user_data'))

//localStorage.setItem("color", "orange");

var data = {
  name: "JD",
  age: 42,
};
//localStorage.setItem("user_data", data);

//var userData = localStorage.getItem("user_data");

//localStorage.setItem("user_data", JSON.stringify(data));

// key note: you need to convert the object in user_data into string first via JSON.stringify(data), then convert it back into object using JSON.parse().
var userData = JSON.parse(localStorage.getItem("user_data"));

console.log(userData);

// button class = choice

function startQuiz() {
  // some code
}
startQuiz();
