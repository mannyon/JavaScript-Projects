const apiUrl = "https://cat-fact.herokuapp.com/facts";
const factBtn = document.querySelector(".fact-btn");
const myChoice = document.querySelector("#my-choice");
const newEle = document.createElement("option");

newEle.value = "more";
newEle.innerHTML = "More";

async function moreTo () {
    let response = await fetch(apiUrl);
    let mainC = response.json();
   mainC.then(function(result) {
    if(result.length > 0){
        const randomIndex = Math.floor(Math.random() * result.length);
        const randomCatFact = result[randomIndex];
        console.log(randomCatFact.text); 
        document.getElementById("cat1").innerHTML = randomCatFact.text;
    }
   })
}

factBtn.addEventListener("click", () =>{
    myChoice.appendChild(newEle);
    moreTo();
});

