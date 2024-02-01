const grid = document.querySelector(".grid");
const gridInput = document.querySelector("#myRange");
const sliderValue = document.querySelector(".PB-range-slidervalue");
const rainbowBtn = document.querySelector(".rainbowBtn");

gridInput.addEventListener("input", createGrid);

// Toggle Rainbow Mode
let isRainbowModeOn = false;

rainbowBtn.addEventListener("click", () => {
    isRainbowModeOn = !isRainbowModeOn;

    if (isRainbowModeOn) {
        rainbowBtn.classList.add("rainbow-hover");
        rainbowBtn.setAttribute("id", "rainbowOn")
    } else {
        rainbowBtn.removeAttribute("id", "rainbowOn");
    }
});

function createGrid() {
    // Update #gridSize
    gridInput.addEventListener("input", () => {sliderValue.innerText = `${gridInput.value}`});
    // Clear Grid
    grid.innerHTML = ""
    // Create Grid
    for(let y=0; y<gridInput.value; y++){
        // Create rows
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.append(row);

        // Add boxes to rows
        for (let x=0; x<gridInput.value; x++) {
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            // Change colour if hover
            box.addEventListener("mouseover", () => {box.setAttribute("style", "background-color: black;")}, false);
            box.addEventListener("mouseout", () => {box.setAttribute("style", "background-color: black;")}, false);
            row.append(box);
        }
    }
}
    

createGrid()