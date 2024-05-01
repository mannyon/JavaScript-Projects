const apiUrl = "https://api.quotable.io/random";
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const authorCont = document.getElementById("author-cont");
const paraCont = document.getElementById("para-cont");

async function quoteDay () {
    try {
        const result = await fetch(apiUrl);
        let ans = await result.json();
        const author = ans.author;
        const quote = ans.content;
        paraCont.innerHTML = quote;
        authorCont.innerHTML = `<p>~ ${author}</p>`
      } catch (error) {
        console.error(error);
      }
}

// quoteDay();

btn1.addEventListener("click", function() {
    quoteDay();
})
