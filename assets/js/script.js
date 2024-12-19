// Récuperer les éléments du DOM
const loginInput = document.getElementById("login");
const loginErrorIcon = document.getElementById("login-error-icon");
const loginValidIcon = document.getElementById("login-valid-icon");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordStrength = document.getElementById("password-strength");
const strengthText = document.getElementById("strength-text");

const signUpForm = document.getElementById("signup-form");

// Fonction de validation du nom d'utilisateur
function usernameValidation() {
  const login = loginInput.value.trim();
  if (login.length < 3) {
    loginErrorIcon.style.display = "block";
    loginValidIcon.style.display = "none";
    return false;
  } else {
    loginErrorIcon.style.display = "none";
    loginValidIcon.style.display = "block";
  }
}
// Fonction de validation de l'email
function emailValidation() {
  const email = emailInput.value.trim();
  // Regex pour valider l'email
  const emailPattern = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  // Test de l'email avec la regex
  if (!emailPattern.test(email)) {
    console.log("Email not valid");
    return false;
  } else {
    console.log("Email valid");
    return true;
  }

  // if (email.length < 3 || !email.includes("@")) {
  //   emailInput.classList.add("is-invalid");
  // } else {
  //   emailInput.classList.remove("is-invalid");
  // }
}

function passwordValidation() {
  const password = passwordInput.value.trim();
  if (password.length < 6) {
    passwordStrength.className = "weak";
    strengthText.textContent = "Faible";
  } else if (password.length > 6 && password.length < 9) {
    passwordStrength.className = "average";
    strengthText.textContent = "Moyen";
  } else {
    passwordStrength.className = "strong";
    strengthText.textContent = "Fort";
  }
}

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Fonction de validation du mot de passe
window.addEventListener("load", () => {
  // Appeler les fonctions de validation
  usernameValidation();
  emailValidation();
  passwordValidation();

  // Ecouter les événements sur les inputs
  loginInput.addEventListener("input", usernameValidation);
  emailInput.addEventListener("input", emailValidation);
  passwordInput.addEventListener("input", passwordValidation);
});
