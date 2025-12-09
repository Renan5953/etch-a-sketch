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
        target.classList = "hovered";
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
        container.appendChild(block);
    }

    const blocks = document.querySelectorAll(".container div");
    
    blocks.forEach(item => {
        item.style.width = `calc(100% / ${value})`;
    });
});

clearBtn.addEventListener('click', () => {
    const blocks = document.querySelectorAll(".container div");

    blocks.forEach(item => {
        item.classList = "";
    });
});