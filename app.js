const container = document.querySelector(".container");

let gridSizeButton = document.querySelector(".gridSize");
gridSizeButton.addEventListener("click", () => {
  const gridSize = window.prompt(
    "Please enter a number between 1 - 100 for your grid size (the number you pick will be the length of boxes for both width and height)"
  );
  createBoxes(gridSize);
});

function createBoxes(num) {
  if (num === NaN || num === undefined || num < 1) return console.log("ERROR");
  else {
    for (let i = 0; i < num.length; i++) {
      //create div to house the row of divs
      const div = document.createElement("div");
      div.setAttribute("class", "parentDiv");
      div.textContent = "testing nesting div";
      for (let j = 0; j < num.length; j++) {
        const nestedDiv = document.createElement("div");
        nestedDiv.setAttribute("class", "childDiv");
        nestedDiv.textContent = "testing nested div";
      }
    }
  }
}

function sumOfTripledEvens(arr) {
  const filteredArr = arr
    .filter((num) => {
      return num % 2 !== 0;
    })
    .map((num) => {
      return num * 3;
    })
    .reduce((total, accumulator) => {
      return total + accumulator;
    });
  console.log(filteredArr);
}
sumOfTripledEvens([1, 2, 3, 4, 5]);

const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums);
console.log(arr);
