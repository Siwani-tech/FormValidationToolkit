let form = document.getElementById("form");

let username = document.getElementById("username");

let email = document.getElementById("email");

let zipCode = document.getElementById("zipCode");

let password = document.getElementById("password");

let confirmPassword = document.getElementById("confirmPassword");

// validate username

username.addEventListener("input", (e) => {
  let reguser = /^[a-zA-Z0-9]+$/;
  if (reguser.test(e.target.value)) {
    username.setCustomValidity("");
    console.log("Username is valid");
  } else {
    username.setCustomValidity(
      "Invalid username it should be /^[a-zA-Z0-9]+$/"
    );
    console.log("Username is invalid it should be /^[a-zA-Z0-9]+$/");
  }
});

//zip valiadte

zipCode.addEventListener("input", function () {
  if (zipCode.value.trim() === "") {
    zipInput.setCustomValidity("Please enter a zipCode");
  } else {
    zipCode.setCustomValidity("");
  }
});
// email validate

email.addEventListener("input", (e) => {
  const input = e.target;
  const value = input.value;

  if (input.validity.typeMismatch) {
    input.setCustomValidity("Please enter a correct email address.");
  } else if (input.validity.tooShort) {
    input.setCustomValidity("Email address is too short.");
  } else {
    input.setCustomValidity(""); // Clear custom validity message
  }
});

// password validation

function validatePassword() {
  let userPassword = password.value;

  let userConfirmPassword = confirmPassword.value;

  if (userPassword.length < 8) {
    password.setCustomValidity("password should length of 8");
  } else if (!/\d/.test(userPassword) || !/[a-zA-Z]/.test(userPassword)) {
    password.setCustomValidity(
      "Password must contain both letters and numbers"
    );
  } else if (userPassword !== userConfirmPassword) {
    confirmPassword.setCustomValidity("password doesn't match");
  } else {
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
  }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  } else {
    e.preventDefault();
    clearInput();
    alert("form submited successfully ");
  }
  resetBorderColors();
});

function clearInput() {
  const inputFields = document.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="password"],input[type="number"],select'
  );
  inputFields.forEach((input) => {
    input.value = "";
  });
}

function resetBorderColors() {
  const inputFields = document.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="password"], input[type="number"], select'
  );
  
  inputFields.forEach((input) => {
    input.style.borderBottom = "2px solid #000"; // Reset border color to black
  });
}

