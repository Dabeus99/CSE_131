function displayWelcome()
{
    const headerEl = document.querySelector("header");
const dayIndex = new Date().getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const message = document.createElement("p");

const messageE1 = document.createElement("p");
messageE1.textContent = `Happy ${days[dayIndex]}`;
headerEl.appendChild(messageE1);
messageE1.id = "welcome";
}

function renderNumber(element, index){
    const number = document.createElement("span");
    number.classList.add("scripture-number");
    number.textContent = `${index + 1}`;
    element.prepend(number);
}
function addIndex()
{
    const scriptureElements = document.querySelectorAll(".scripture")
    scriptureElements.forEach(renderNumber);
}

function menu() {
    document.querySelector("nav").classList.toggle("open");
}


const menuBtn = document.querySelector(".menu-btn");
const navEl = document.querySelector(".menu-nav");

menuBtn.addEventListener("click", () => {
  navEl.classList.toggle("hide");
  menuBtn.classList.toggle("change");
});


displayWelcome();
addIndex();
