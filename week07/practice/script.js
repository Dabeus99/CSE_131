const theForm = document.querySelector("#myForm");

function processForm(event) {
    event.preventDefault();
    console.log("event", event);
    console.log("theForm", theForm);
    event.target.reset();
    event.target.siValid
}

theForm.addEventListener("submit", processForm);
