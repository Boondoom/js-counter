const value = document.querySelector("#value");
const reset = document.querySelector(".reset");
const plus = document.querySelector(".inc");
const minus = document.querySelector(".dec");
const inputRange = document.querySelector("#input-range");
const themeBtn = document.querySelector(".theme-btn");
const body = document.body;
const container = document.querySelector(".container");

let count = 0;
let maxValue = 200;


function updateDisplay() {
    value.textContent = count;
    const currentCountString = count.toString();

    if (currentCountString[currentCountString.length - 1] === "0") {
   
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = body.classList.contains("dark-mode") ? "#f4f4f4" : "#333";
    }
}


minus.addEventListener("click", function () {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});


plus.addEventListener("click", function () {
    if (count < maxValue) {
        count++;
    } else {
        count = 0;
    }
    updateDisplay();
});


reset.addEventListener("click", function () {
    count = 0;
    updateDisplay();
});


inputRange.addEventListener("input", function () {
    maxValue = parseInt(this.value);
});


themeBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    updateDisplay();
});


updateDisplay();

