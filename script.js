const loginButton = document.querySelector("#loginButton");
const emailLogin = document.querySelector("#emailLogin");
const passwordLogin = document.querySelector("#passwordLogin");
const agreementsCheck = document.querySelector("#agreement");
const submitButton = document.querySelector("#submit-btn");

function getUserLoginButton(event) {
  event.preventDefault();

  if(emailLogin.value === "tryber@teste.com" && passwordLogin.value === "123456") {
    window.alert("Olá, Tryber!");
  } else {
    window.alert("Email ou senha inválidos.");
  }
}

function getUserAgreementCheck(event) {
  if(agreementsCheck.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

loginButton.addEventListener("click", getUserLoginButton);
agreementsCheck.addEventListener("click", getUserAgreementCheck);