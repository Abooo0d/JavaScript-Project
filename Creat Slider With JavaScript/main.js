// Get The Slider Items
var sliderItems = Array.from(document.querySelectorAll(".slider-container img"));
// Get The Count Of Slides
var sliderItemsCount = sliderItems.length;
// Creat The Main UL
var sliderContainer = document.createElement("ul");
// Get The Container Element
var container = document.querySelector(".indecator");
// Set An Id On The UL
sliderContainer.setAttribute("id", "slider-container");
// Creat The Curent Slider Position
var curentSliderPosition = 1;
// Get The Slider Number Elemant
var sliderNumber = document.querySelector(".slider-number");
// Creat The LIs
for (var i = 1; i <= sliderItemsCount; i++) {
  // Creat The Li 
  var sliderElement = document.createElement("li");
  // Set The Index In The data-index Attribute
  sliderElement.setAttribute("data-index", i);
  // Add The Number To The LI Text
  sliderElement.appendChild(document.createTextNode(i));
  // Add The LI To The Main Ul
  sliderContainer.appendChild(sliderElement);
}
// Appent The Main UL To The Container
container.appendChild(sliderContainer);
//Get The CreatedUl
var createdUL = document.getElementById("slider-container");
// Get The Li Items
var createdLis = Array.from(document.querySelectorAll("#slider-container li"));
// Creat Event Click On The LIs
for (var i = 0; i < createdLis.length; i++) {
  createdLis[i].onclick = function () {
    curentSliderPosition = this.getAttribute("data-index");
    slidrChecker();
  }
}
// Get The Next & Prev Button
var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
// Triger THe Checker Function
slidrChecker();

// Creat Click Event For The Buttons
nextButton.onclick = nextClick;
prevButton.onclick = prevClick;

function nextClick() {
  // Check If The nextButton Has Class Disabled
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    curentSliderPosition++;
    slidrChecker();
  }
}
function prevClick() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    curentSliderPosition--;
    slidrChecker();
  }
}
function slidrChecker() {
  // Set The Slider Number In The NumberSlider
  sliderNumber.textContent = "Num#" + curentSliderPosition;
  removeAllActive();
  // Add Active Class On The Image
  sliderItems[curentSliderPosition - 1].classList.add("active");
  // Add Class Active On The LI
  createdUL.children[curentSliderPosition - 1].classList.add("active");
  // Check If The SliderNumber Is The First
  if (curentSliderPosition == 1) {
    // Add Class Disabled On The prevButton
    prevButton.classList.add("disabled");
  } else {
    // Remove Class Disabled From The prevButton
    prevButton.classList.remove("disabled");
  }
  // Check If The SliderNumber Is The Last 
  if (curentSliderPosition == sliderItemsCount) {
    // Add Class Disabled On The nextButton
    nextButton.classList.add("disabled");
  } else {
    //Remove Class Disabled From The nextButton
    nextButton.classList.remove("disabled");
  }
}
// Remove All Active Class From The Ul Lis And Imags
function removeAllActive() {
  // Loop On The Images
  sliderItems.forEach(function (c) {
    c.classList.remove("active");
  });
  createdLis.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}