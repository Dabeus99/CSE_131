const selectElem = document.querySelector("#theme-select");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  if (selectElem.value === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}