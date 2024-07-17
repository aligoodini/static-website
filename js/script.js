const dropBtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");
const form = document.querySelector(".form");
const grayLayer = document.querySelector(".gray-layer");
const formBtn = document.querySelector(".form-toch");

// ---------------------------------------------------- select language

document.addEventListener("click", (e) => {
  if (e.target.className == "dropbtn") {
    if (!dropdownContent.classList.contains("show-block")) {
      dropdownContent.classList.add("show-block");
    }
  } else {
    dropdownContent.classList.remove("show-block");
  }
});

// ------------------------------------------------------ form
formBtn.addEventListener("click", () => {
  form.classList.add("show-flex");
  grayLayer.classList.add("show-flex");
});

grayLayer.addEventListener("click", () => {
  form.classList.remove("show-flex");
  grayLayer.classList.remove("show-flex");
});
