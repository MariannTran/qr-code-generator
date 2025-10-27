document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector(".wrapper");
    const qrInput = document.querySelector("#qr-input");
    const generateBtn = document.querySelector(".generate-btn");
    const qrImg = document.querySelector(".qr-code img");
    const downloadBtn = document.querySelector(".download-btn");

    // Debug logging
    console.log('DOM Loaded', {
        input: qrInput,
        button: generateBtn,
        image: qrImg
    });

    function generateQR() {
        const value = qrInput.value.trim();
        
        if (!value) {
            alert("Please enter text or URL");
            return;
        }

        generateBtn.classList.add('loading');
        
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(value)}`;
        qrImg.src = qrUrl;
        
        qrImg.onload = function() {
            wrapper.classList.add('active');
            generateBtn.classList.remove('loading');
        };
    }

    generateBtn.addEventListener('click', generateQR);
    
    qrInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateQR();
    });
});