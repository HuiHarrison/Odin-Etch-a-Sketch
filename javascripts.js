const grid = document.querySelector(".grid");
const gridInput = document.querySelector("#myRange");
const sliderValue = document.querySelector(".PB-range-slidervalue");
const rainbowBtn = document.querySelector(".rainbowBtn");
const clearBtn = document.querySelector(".clearBtn")
const rubberBtn = document.querySelector(".rubberBtn")
const rubberBtnTop = document.querySelector(".rubberBtn .button-top")

// Generate random value between 0 - 255
function getRandomRGBValue(){
    return Math.floor(Math.random() * 256);
} 

// Grid Slider Bar
gridInput.addEventListener("input", createGrid);

// Clear Button
clearBtn.addEventListener("click", () => {
    for (box of document.querySelectorAll(".box")) {
        box.setAttribute("style", "background-color: white;");
    }
})

// Toggle Rainbow Mode
let isRainbowModeOn = false;

function rainbowMode(isRainbowModeOn) {
    if (isRainbowModeOn) {
        rainbowBtn.setAttribute("id", "rainbowOn");
    } else {
        rainbowBtn.removeAttribute("id", "rainbowOn");
    }
}

rainbowBtn.addEventListener("click", () => {
    isRainbowModeOn = !isRainbowModeOn;
    rainbowMode (isRainbowModeOn)

    // Turn off Rubber Mode
    isRubberOn = false;
    rubberMode(isRubberOn)
});

// Toggle Rubber
let isRubberOn = false;

function rubberMode(isRubberOn) {
    if (isRubberOn) {
        rubberBtnTop.setAttribute("style", "color: white;")
    } else {
        rubberBtnTop.removeAttribute("style", "color: white;")
    }
}

rubberBtn.addEventListener("click", () => {
    isRubberOn = !isRubberOn;
    rubberMode(isRubberOn)

    // Turn off Rainbow Mode
    isRainbowModeOn = false;
    rainbowMode(isRainbowModeOn);
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

            // Change colour if mouse is hover over
            box.addEventListener("mouseover", () => {
                if (isRubberOn) {
                    box.setAttribute("style", "background-color: white;")
                }
                else {
                    if (isRainbowModeOn) {
                        box.setAttribute("style", `background-color: rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()});`)
                    }
                    else {
                        box.setAttribute("style", "background-color: black;")
                    }
                }
            });

            // Change colour if mouse is hover out
            box.addEventListener("mouseout", () => {
                if (isRubberOn) {
                    box.setAttribute("style", "background-color: white;")
                }
                else {
                    if (isRainbowModeOn) {
                        box.setAttribute("style", `background-color: rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()});`)
                    }
                    else {
                        box.setAttribute("style", "background-color: black;")
                    }
                }
            });
            row.append(box);
        }
    }
}
    

createGrid()