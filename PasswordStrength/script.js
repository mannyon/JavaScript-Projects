var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
var btn = document.getElementById("btn");
var btnImg = document.getElementById("btn-img");

function showPass(){
    if(pass.type === "password"){
        pass.type = "text";
        btnImg.src = "eye-open.png"
    }
    else {
        pass.type = "password";
        btnImg.src = "eye-close.png"
    }
}

pass.addEventListener('input', () =>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else {
        pass.style.borderColor = "#ccc";
        msg.style.display = "none";
    }
    if(pass.value.length < 4 && pass.value.length > 0){
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
})