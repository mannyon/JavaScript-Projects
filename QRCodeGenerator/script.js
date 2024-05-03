// let apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.querySelector("#imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQr() {
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else {
        qrText.classList.add('error');
        let errorSound = document.getElementById("errorSound");
        errorSound.play();
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);

    }
}


// let qrImage = document.getElementById("qrImage");
// let inputBox = document.getElementById("input-box");


// function generateQr() {
//     let ans = inputBox.value;
//     if(ans == ''){
//         alert("type something or insert url");
//     }
//     else {
//         qrImage.src = apiUrl + ans;
//         imgBox.appendChild(qrImage);
//     }
// }




