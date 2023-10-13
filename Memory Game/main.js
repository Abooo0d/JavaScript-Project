// Fields
// Creat The Name And Score Variables 
let namespan = document.querySelector(".info .username-container .name"),
  scoersoan = document.querySelector(".info .score-container .score");
// Get The Boxes As Array
let boxescontainer = document.querySelector(".boxes"),
  boxes = Array.from(boxescontainer.children);
// Creat An Aray For Shuffling
let orderrange = [...Array(boxes.length).keys()];
let duration = 1000;
shuffl(orderrange);
// Add The Order Prop The Elements In The boxes Array
boxes.forEach((block, index) => {
  block.style.order = orderrange[index];
  block.addEventListener("click", function () {
    flipBlock(block);
  });
});





// Methods
// Add The Click Event To The  Start Button
document.querySelector(".start-form span").onclick = function () {
  let yourname = prompt("What is Your Name");
  // Check If The Name Was Empty 
  if (yourname == null || yourname == "") {
    namespan.innerHTML = "Unknone";
  } else {
    namespan.innerHTML = yourname;
  }
  // Remove The Splash Screen
  document.querySelector(".start-form").remove();
}
// Creat The Shuffling Function
function shuffl(array) {
  //Fields
  var current = array.length,
    temp,
    random;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}
function flipBlock(selectedBlock) {
  // Add is-flepped Class To The Box
  selectedBlock.classList.toggle("is-flipped");
  // Collect All The Flipped Boxes
  let allFleppedBoxes = boxes.filter(box => box.classList.contains("is-flipped"));
  if (allFleppedBoxes.length === 2) {
    stopClicking();
    checkedMatchedBlocks(allFleppedBoxes[0], allFleppedBoxes[1]);
  }
}
function stopClicking() {
  boxescontainer.classList.add("no-clicking");
  setTimeout(() => {
    boxescontainer.classList.remove("no-clicking");
  }, 1000);
}
function checkedMatchedBlocks(first, second) {
  let trise = document.querySelector(".info .score");
  if (first.dataset.type === second.dataset.type) {
    first.classList.remove("is-flipped");
    second.classList.remove("is-flipped");
    first.classList.add("has-match");
    second.classList.add("has-match");
  } else {
    trise.innerHTML = parseInt(trise.innerHTML) + 1;
    setTimeout(() => {
      first.classList.remove("is-flipped");
      second.classList.remove("is-flipped");
    }, 1000);
  }
}