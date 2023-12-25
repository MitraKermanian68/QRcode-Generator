let imgBox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrimage");
let qrText = document.getElementById("qrtext");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    sretTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
