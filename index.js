let qrcode = document.querySelector("img");
let qrbtn = document.querySelector("button");

qrbtn.addEventListener("click", generate);

function generate() {
  fetch("http://localhost:8080")
    .then((json) => json.json())
    .then((json) => {
      let size = "1000 x1000";
      let data = json.url;
      let baseUrl = "http://api.qrserver.com/v1/create-qr-code/";

      let url = `${baseUrl}?data=${data}&size=${size}`;
      qrcode.src = url;
    });
}
