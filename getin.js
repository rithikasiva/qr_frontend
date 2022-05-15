const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log(params);

let tokenText = document.querySelector(".token");

tokenText.innerHTML = params.token;
