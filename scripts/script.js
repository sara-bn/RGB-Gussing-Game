var icons = document.getElementsByTagName("i");
var start = document.getElementById("start");
var colorValue = document.getElementById("color-value");
var result = document.getElementById("result");
var randomColor;
var selectedColor;
var iconColors = [];
var rgbColors = [];

//generate 6 random rgb colors
function generateColor() {
  for (var i = 0; i < icons.length; i++) {
    for (var j = 0; j < 3; j++) {
      rgbColors[j] = Math.floor(Math.random() * 256);
    }
    iconColors[i] =
      "RGB(" + rgbColors[0] + ", " + rgbColors[1] + ", " + rgbColors[2] + ")";
    console.log(iconColors[i]);
  }
}

function displayColorValue() {
  randomColor = iconColors[Math.floor(Math.random() * icons.length)];
  colorValue.textContent = randomColor;
}

function changeColor() {
  generateColor();
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.color = iconColors[i];
  }
}

function checkValue() {
  for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", function () {
      selectedColor = this.style.color;
      if (selectedColor.toUpperCase() == randomColor) {
        result.textContent = "Success!";
      } else {
        result.textContent = "Try Again";
      }
    });
  }
}

function play() {
  changeColor();
  displayColorValue();
  checkValue();
}

onload = function () {
  start.addEventListener("click", play);
};
