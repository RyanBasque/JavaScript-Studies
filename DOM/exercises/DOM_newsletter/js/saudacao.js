const getInputValue = () => {
  const txtEmail = document.getElementById("txtEmail");
  const emailValue = txtEmail.value;
  console.log(emailValue);

  if(emailValue.includes('@')) {
    const div = document.createElement('div');
    div.innerHTML = `<p>Deu certo, bem-vindo, ${emailValue}!</p>`
    document.querySelector('#newsletterFeedback').appendChild(div);
  } else {
    alert("Insira um email válido");
  }
};