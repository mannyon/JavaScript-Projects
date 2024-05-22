let myDate = document.getElementById("date");
let myDay = document.getElementById("day");
let myMonth = document.getElementById("month");
let myYear = document.getElementById("year");


// Create a new Date object for the current date and time
const today = new Date();

// Get the individual components of the date
const year = today.getFullYear();
const month = today.getMonth(); // Months are zero-indexed, so add 1
const day = today.getDate();
// Get the day of the week (0-6)
const dayIndex = today.getDay();

// Map the day index to the corresponding day name
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[dayIndex];
const monthsOfYear = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

// Optionally, format the date with leading zeros
const formattedMonth = month < 10 ? `0${month}` : month;
const formattedDay = day < 10 ? `0${day}` : day;

// Construct a string in the desired format (e.g., YYYY-MM-DD)
const formattedDate = `${year}-${formattedMonth}-${formattedDay}-${dayName}`;

myDate.innerHTML = formattedDay;
myDay.innerHTML = dayName;
myMonth.innerHTML = monthsOfYear[month];
myYear.innerHTML = year;


