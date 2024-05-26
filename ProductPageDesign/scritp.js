
let left = document.querySelector(".left");
let model = document.getElementById("model");
let size = document.querySelector(".size");

left.onclick = function(e) {
    let ans = e.target;
    if(ans.value.includes('option1')){
        model.src = "images/image1.png";
    }
    else if(ans.value.includes('option2')){
        model.src = "images/image2.png";
    }
    else if(ans.value.includes('option3')){
        model.src = "images/image3.png";
    }
}
let flag = 0;
size.onclick = function(e){
    let ans = e.target;
    ans.style.color = 'red';
}

