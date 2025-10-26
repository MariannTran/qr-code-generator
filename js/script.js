<<<<<<< HEAD
const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active");
=======
document.addEventListener("DOMContentLoaded", function() {
    const qrCodeForm = document.getElementById("qrCodeForm");
    const qrCodeInput = document.getElementById("qrCodeInput");
    const qrCodeOutput = document.getElementById("qrCodeOutput");

    qrCodeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const qrCodeValue = qrCodeInput.value;

        if (qrCodeValue) {
            generateQRCode(qrCodeValue);
        }
    });

    function generateQRCode(value) {
        qrCodeOutput.innerHTML = ""; // Clear previous QR code
        const qrCode = new QRCode(qrCodeOutput, {
            text: value,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
>>>>>>> 8ba6f2314ec6a3c8bff358f3de1a24ae8f4c7e72
    }
});