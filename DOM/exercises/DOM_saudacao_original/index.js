(() => {
  const userName = prompt("Qual é o seu nome?");
  const htmlElement = document.querySelector(".top-bar p");

  console.log(htmlElement.parentElement);

  if(userName) {
    htmlElement.innerHTML += `<b>${userName}</b>`;
  } else {
    const htmlFather = htmlElement.parentElement;
    console.log(htmlFather);
    htmlFather.parentElement.removeChild(htmlFather);
  }

  // greeting.querySelector("p").innerHTML = `Bem-vindo(a), ${userName || 'sem nome'}`;
})();