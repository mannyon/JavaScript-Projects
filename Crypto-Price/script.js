let myUrl = "https://api.alternative.me/v2/ticker/?convert=USD";
let bitcoin = document.getElementById("bitcoin");
let ethereum = document.getElementById("ethereum");
let dogecoin = document.getElementById("dogecoin");

async function mine(){
    let response = await fetch(myUrl);
    let ans = await response.json();
    bitcoin.innerHTML = '$' + (ans.data[1].quotes.USD.price);
    ethereum.innerHTML = '$' + (ans.data[1027].quotes.USD.price);
    dogecoin.innerHTML = '$' + (ans.data[74].quotes.USD.price);
}

mine();