const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    if (
      input.value === "" ||
      (input.name === "email" && !validEmail(input.value))
    ) {
      handleInvalidInput(input, event);
    } else {
      handleValidInput(input);
    }
  });
});

function validEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function handleInvalidInput(input, event) {
  input.classList.add("error");
  input.nextElementSibling.classList.remove("hide-error-text");
  event.preventDefault();
}

function handleValidInput(input) {
  input.classList.remove("error");
  input.nextElementSibling.classList.add("hide-error-text");
}
