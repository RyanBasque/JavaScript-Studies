const txtEmail = document.getElementById("txtEmail")

function editarEmail() {
  txtEmail.disabled = false;
  txtEmail.value = "Teste de valor";
}

function disableEmail() {
  txtEmail.disabled = true;
}