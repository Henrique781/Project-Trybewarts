const loginButton = document.querySelector("#loginButton");
const emailLogin = document.querySelector("#emailLogin");
const passwordLogin = document.querySelector("#passwordLogin");

function getUserLoginButton(event) {
  event.preventDefault();

  if(emailLogin.value === "tryber@teste.com" && passwordLogin.value === "123456") {
    window.alert("Olá, Tryber!");
  } else {
    window.alert("Email ou senha inválidos.");
  }
}

loginButton.addEventListener("click", getUserLoginButton);