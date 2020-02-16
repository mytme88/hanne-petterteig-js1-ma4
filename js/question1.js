const contactForm = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

contactForm.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  if (firstName.value.trim().length > 2) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
}
