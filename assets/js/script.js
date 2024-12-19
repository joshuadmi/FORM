// Récupérer les éléments du DOM
const loginInput = document.getElementById("login");
const loginErrorIcon = document.getElementById("login-error-icon");
const loginValidIcon = document.getElementById("login-valid-icon");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordStrength = document.getElementById("password-strength");
const strengthText = document.getElementById("strength-text");

const passwordConfirmInput = document.getElementById("password-confirmation");

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
  return true; // Retourne true si le nom d'utilisateur est valide
}

// Fonction de validation de l'email
function emailValidation() {
  const email = emailInput.value.trim();
  const emailPattern = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

  if (!emailPattern.test(email)) {
    console.log("Email not valid");
    return false;
  } else {
    console.log("Email valid");
    return true;
  }
}

// Fonction de validation de la force du mot de passe
function passwordValidation() {
  const password = passwordInput.value.trim();
  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s]).*$/;

  if (password.length < 6) {
    passwordStrength.className = "weak";
    strengthText.textContent = "Faible";
    return false;
  } else if (password.length >= 6 && password.length < 9) {
    passwordStrength.className = "average";
    strengthText.textContent = "Moyen";
  } else {
    passwordStrength.className = "strong";
    strengthText.textContent = "Fort";
  }

  // Vérifier si le mot de passe contient au moins une lettre, un chiffre et un caractère spécial
  if (!passwordPattern.test(password)) {
    console.log("Password not valid");
    strengthText.textContent =
      "Le mot de passe doit dontenir au moins une lettre, un chiffre et un caractère spécial";
    return false;
  } else {
    console.log("Password valid");
    return true;
  }
}

// Fonction de validation de la confirmation du mot de passe
function passwordConfirmationValidation() {
  const password = passwordInput.value.trim();
  const passwordConfirm = passwordConfirmInput.value.trim();

  if (password !== passwordConfirm) {
    console.log("Passwords do not match");
    return false;
  } else {
    console.log("Passwords match");
    return true;
  }
}

// Ajouter un écouteur d'événements sur le formulaire
signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const isUsernameValid = usernameValidation();
  const isEmailValid = emailValidation();
  const isPasswordValid = passwordValidation();
  const isPasswordConfirmed = passwordConfirmationValidation();

  if (
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isPasswordConfirmed
  ) {
    console.log("Formulaire soumis avec succès");
    alert("Formulaire soumis avec succès");
  } else {
    console.log("Validation du formulaire échouée");
    alert("Validation du formulaire échouée");
  }
});

// Ajouter des écouteurs d'événements pour les entrées
window.addEventListener("load", () => {
  loginInput.addEventListener("input", usernameValidation);
  emailInput.addEventListener("input", emailValidation);
  passwordInput.addEventListener("input", () => {
    passwordValidation();
    passwordConfirmationValidation();
  });
  passwordConfirmInput.addEventListener(
    "input",
    passwordConfirmationValidation
  );
});
