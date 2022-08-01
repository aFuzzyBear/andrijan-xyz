const submitButton = document.querySelector("#form-submit-button");

const allInputs = document.querySelectorAll(".form-input");

function showError(inputElement) {
  inputElement.classList.add("error");
  inputElement.nextElementSibling.classList.remove("hidden");
}

function showSuccess(inputElement) {
  inputElement.classList.add("success");
  inputElement.nextElementSibling.classList.add("hidden");
}

submitButton.addEventListener("click", (event) => {
  allInputs.forEach((input) => {
    if (!input.value) {
      event.preventDefault();
      showError(input);
      input.setAttribute("data-empty", "true");
    }
  });

  allInputs.forEach((input) => {
    if (input.getAttribute("data-empty") === "true") {
      input.addEventListener("blur", (event) => {
        if (event.currentTarget.value) {
          showSuccess(input);
        } else {
          console.log("Field is still empty");
        }
      });
    }
  });
});
