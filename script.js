/*change box color*/
document.addEventListener("DOMContentLoaded", function () {
  const changeColorButtons = document.querySelectorAll(".changeColorButton");
  changeColorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetBoxClass = this.dataset.target;
      const boxToChange = document.querySelector("." + targetBoxClass);
      const randomBackgroundColor = getRandomColor();
      const randomBorderColor = getRandomColor();
      boxToChange.style.backgroundColor = randomBackgroundColor;
      boxToChange.style.borderColor = randomBorderColor;
    });
  });
  function getRandomColor() {
    const colors = [
      "RosyBrown",
      "RebeccaPurple",
      "LightSlateGrey",
      "HotPink",
      "MediumTurquoise",
      "DarkOrange"
    ]; // Add more colors if needed
    return colors[Math.floor(Math.random() * colors.length)];
  }
});

/*Change ALL*/
document.addEventListener("DOMContentLoaded", function () {
  const changeColorButton = document.getElementById("changeColorButton");
  const boxes = document.querySelectorAll(".box_info");
  changeColorButton.addEventListener("click", function () {
    const backgroundColor = "Salmon";
    const borderColor = "Salmon";
    const content = "Surprise!!";
    boxes.forEach(function (box) {
      box.style.backgroundColor = backgroundColor;
      box.style.borderColor = borderColor;
      box.textContent = content;
    });
  });
});

/*Hide Box 1, 2 ,3*/
document.addEventListener("DOMContentLoaded", function () {
  const hideBoxButtons = document.querySelectorAll(".hideBoxButton");
  const boxes = document.querySelectorAll(".box_info");

  hideBoxButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetBoxClass = this.dataset.target;
      const boxToHide = document.querySelector("." + targetBoxClass);

      boxToHide.style.display = "none";
    });
  });
});

/*Hide ALl Boxes*/
document.addEventListener("DOMContentLoaded", function () {
  const hideBoxButtons = document.querySelectorAll(".hideBoxButton");
  const hideAllBoxesButton = document.getElementById("hideAllBoxesButton");
  const boxes = document.querySelectorAll(".box_info");
  hideBoxButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetBoxClass = this.dataset.target;
      const boxToHide = document.querySelector("." + targetBoxClass);
      boxToHide.style.display = "none";
    });
  });
  hideAllBoxesButton.addEventListener("click", function () {
    boxes.forEach(function (box) {
      box.style.display = "none";
    });
  });
});

/*SHOW ALL BOXES*/
document.addEventListener("DOMContentLoaded", function () {
  const allBoxes = document.querySelectorAll(".box_info");
  const showAllBoxesButton = document.getElementById("showAllBoxesButton");
  showAllBoxesButton.addEventListener("click", function () {
    allBoxes.forEach(function (box) {
      box.style.display = ""; // Resetting to default (block, flex, etc.)
    });
  });
});
/*Reset ALL BOXES*/
document.addEventListener("DOMContentLoaded", function () {
  const allBoxes = document.querySelectorAll(".box_info");
  const resetColorsButton = document.getElementById("resetColorsButton");
  const originalStyles = [];
  allBoxes.forEach(function (box) {
    originalStyles.push({
      backgroundColor: getComputedStyle(box).backgroundColor,
      borderColor: getComputedStyle(box).borderColor,
      content: box.textContent
    });
  });
  resetColorsButton.addEventListener("click", function () {
    allBoxes.forEach(function (box, index) {
      box.style.backgroundColor = originalStyles[index].backgroundColor;
      box.style.borderColor = originalStyles[index].borderColor;
      box.textContent = originalStyles[index].content;
    });
  });
});