const grid = document.querySelector(".grid");


// Create Grid
for(let y=0; y<16;y++){
    // Create rows
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    grid.append(row);

    // Add boxes to rows
    for (let x=0; x<16; x++) {
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        // Change colour if hover
        box.addEventListener("mouseover", () => {box.setAttribute("style", "background-color: #1d3557;")}, false);
        box.addEventListener("mouseout", () => {box.setAttribute("style", "background-color: #1d3557;")}, false);
        row.append(box);
    }
}

