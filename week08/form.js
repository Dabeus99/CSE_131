const form = document.querySelector("#eventForm");
const ticketType = document.querySelector("#ticketType");
const codeField = document.querySelector("#codeField");
const codeLabel = document.querySelector("#codeLabel");
const code = document.querySelector("#code");
const eventDate = document.querySelector("#eventDate");
const output = document.querySelector("#message");

function updateCodeField() {
  const type = ticketType.value;

  if (type === "student") {
    codeField.hidden = false;
    codeLabel.textContent = "Student I#";
    code.placeholder = "Enter your 9-digit Student I#";
    code.required = true;
  } else if (type === "guest") {
    codeField.hidden = false;
    codeLabel.textContent = "Access Code";
    code.placeholder = "Enter EVENT131";
    code.required = true;
  } else {
    codeField.hidden = true;
    code.required = false;
    code.value = "";
  }
}

ticketType.addEventListener("change", updateCodeField);
updateCodeField();


// Make sure the selected date is later than today
function isPastDate(value) {
  const today = new Date();
  const chosenDate = new Date(value);

  return chosenDate <= today;
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const type = form.ticketType.value;
  const selectedDate = form.eventDate.value;
  const enteredCode = form.code.value.trim();

  // Make sure the correct student number is entered
  if (type === "student" && !/^\d{9}$/.test(enteredCode)) {
    output.textContent = "Please enter a 9-digit Student I#.";
    return;
  }

  // Make sure the correct guest code is entered
  if (type === "guest" && enteredCode !== "EVENT131") {
    output.textContent = "Please enter the access code EVENT131.";
    return;
  }

  // Make sure the date is later than today
  if (isPastDate(selectedDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  // Create the ticket
  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Event date:</strong> ${selectedDate}</p>
    <p><strong>Type:</strong> ${type}</p>
  `;

  form.reset();
  updateCodeField();
});