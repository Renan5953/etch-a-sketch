const proportion = document.querySelector(".proportion");
const clearBtn = document.querySelector(".clear");
const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const block = document.createElement("div");
    container.appendChild(block);
}

container.addEventListener('mouseover', (e) => {
    const target = e.target;

    if (target.className !== "container" && target.classList.length === 0) {
        target.className = "hovered";
        target.style.opacity = "0.1";
    } else if (target.className === "hovered") {
        let opacityValue = Number(getComputedStyle(target).opacity);
        target.style.opacity = `${opacityValue += 0.1}`;
    }
});

proportion.addEventListener('click', () => {
    let value = prompt("Set the grid dimension:");

    if (value === null) {return;}

    while ((!Number.isInteger(+value)) || +value > 100 || +value <= 0) {
        alert("Enter a positive integer less than or equal to 100.");
        value = prompt("Set the grid dimension:");
        if (value === null) {return;}
    }

    container.replaceChildren();

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
        blocks[i].style.opacity = "1";
    }
});