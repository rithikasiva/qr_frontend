const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log(params);

let tokenText = document.querySelector(".token");

fetch("http://localhost:8080/check", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ token: params.token }),
})
  .then((res) => res.json())
  .then((res) => {
    if (res.status === "success") {
      tokenText.innerHTML = params.token;
    } else {
      tokenText.innerHTML = "Invalid Token";
    }
  });
