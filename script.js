const proportion = document.querySelector(".proportion");
const clearBtn = document.querySelector(".clear");
const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const block = document.createElement("div");
    container.appendChild(block);
}

container.addEventListener('mouseover', (e) => {
    const target = e.target;

    if (target.className !== "container") {
        target.className = "hovered";
    }
});

proportion.addEventListener('click', () => {
    container.replaceChildren();

    let value = +prompt("Set the grid dimension:");

    while ((!Number.isInteger(value)) || value > 100 || value <= 0) {
        alert("Enter a positive integer less than or equal to 100.");
        value = +prompt("Set the grid dimension:");
    }

    for (let i = 0; i < (value ** 2); i++) {
        const block = document.createElement("div");
        block.style.width = `calc(100% / ${value})`;
        container.appendChild(block);
    }
});

clearBtn.addEventListener('click', () => {
    const blocks = container.children;

    for (let i = 0, length = blocks.length; i < length; i++) {
        blocks[i].className = "";
    }
});