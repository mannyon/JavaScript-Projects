// let apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.querySelector("#imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQr() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else {
        qrText.classList.add('error');
        let errorSound = document.getElementById("errorSound");
        errorSound.play();
        showToast(invalidMsg)
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);

    }
}


// **************buttons***********


let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';


function showToast(msg) {

    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;


    toastBox.appendChild(toast);


    if (msg.includes('Invalid')) {
        toast.classList.add('invalid')

    }

    setTimeout(() => {
        toast.remove();
    }, 6000)
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




