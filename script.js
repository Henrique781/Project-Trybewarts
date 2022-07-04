const loginButton = document.querySelector("#loginButton");
const emailLogin = document.querySelector("#emailLogin");
const passwordLogin = document.querySelector("#passwordLogin");

function getUserLoginButton(event) {
  event.preventDefault();

  if(emailLogin.value === "trybe@teste.com" && passwordLogin.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos");
    console.log(emailLogin.textContent);
    console.log(passwordLogin.textContent);
  }
}

loginButton.addEventListener("click", getUserLoginButton);