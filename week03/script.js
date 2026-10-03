

/* get the elements that we want to modifyed. 
figure out when the modfiication should occur.
modify the elements
loop though each element 
figure out which one it is 
output that number.

figure out where/how we are going ot display the message...get a reference 
figure out what day it is
update the display */

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

document.querySelector(".menu-btn").addEventListener("click", menu);



displayWelcome();
addIndex();
