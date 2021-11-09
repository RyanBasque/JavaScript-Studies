(() => {
  const userName = prompt("Qual é o seu nome?");

  if(userName) {
    const topBar = document.createElement("div");
    topBar.className = "top-bar";
    topBar.innerHTML = `<p>Olá, ${userName}!</p>`;

    const htmlFather = document.querySelector(".hero");
    htmlFather.insertBefore(topBar, htmlFather.firstChild);

    // firstChield vs firstElementChield
  }

})();