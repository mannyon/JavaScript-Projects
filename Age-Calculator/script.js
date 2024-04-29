const calBtn = document.querySelector("#calculate-btn");
const datePicker = document.querySelector("#date");
const yourAge = document.querySelector(".your-age");

let currentDate = new Date();

// Format the date as YYYY-MM-DD (required by input type="date")
let year = currentDate.getFullYear();
let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
let day = String(currentDate.getDate()).padStart(2, '0');
let formattedDate = `${year}-${month}-${day}`;

// Set the value of the date picker input field to the current date
datePicker.value = formattedDate;

let todayDate = formattedDate;
let todayArray = todayDate.split("-");

let todayYear = todayArray[0];
let todayMonth = todayArray[1];
let todayDay = todayArray[2];
let agePara = document.createElement("p");

calBtn.addEventListener("click", () => {
    console.log(datePicker.value);
    let selectedDate = datePicker.value;
    let dateArray = selectedDate.split("-");
    let birthYear = dateArray[0];
    let birthMonth = dateArray[1];
    let birthDay = dateArray[2];

    let years;

    let days;
    let months;

    if(todayMonth < birthMonth ){
        years = todayYear - birthYear - 1;
        months = 12 + parseInt(todayMonth, 10) - parseInt(birthMonth, 10);
        console.log("years:", years);
    }
    else {
        years = todayYear - birthYear;
        months = parseInt(todayMonth, 10) - parseInt(birthMonth, 10);
        console.log("years:", years);
    }

    if(todayDay - birthDay >=0){
        days = parseInt(todayDay, 10) - parseInt(birthDay, 10);
    }
    else {
        days = 30 + parseInt(birthDay, 10) - parseInt(todayDay, 10) - 1;
    }
    agePara.innerHTML = `You are ${years} years, ${months} months and ${days} days old`;
    yourAge.appendChild(agePara);
})

