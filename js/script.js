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
    }
});