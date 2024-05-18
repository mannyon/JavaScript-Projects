let nameVal = document.querySelector("#name");
let btn = document.getElementById("btn");

let namePar = document.querySelector(".name");
let phonePar = document.querySelector(".phone");
let phoneVal = document.querySelector("#phone");

btn.addEventListener('click', function(e){
    e.preventDefault();

    if(nameVal.value.length === 0){
        let spanTag = document.createElement("span");
        spanTag.innerHTML = "Name is required";
        namePar.insertBefore(spanTag, namePar.children[2]);
    }
    else {
        spanTag.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        namePar.insertBefore(spanTag, namePar.children[2]);
    }

    if(phoneVal.value.length === 0){
        let spanTag = document.createElement("span");
        spanTag.innerHTML = "Phone No. is required";
        phonePar.insertBefore(spanTag, phonePar.children[2]);
    }
    else {
        spanTag.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        phonePar.insertBefore(spanTag, phonePar.children[2]);
    }

})



