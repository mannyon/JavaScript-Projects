let ansValue = document.getElementById("ans-value");
let buttons = document.getElementById("buttons");
let ansPara = document.getElementById("ans-para");
let realAnsPara = document.createElement("p");
let singVal = 0;

function handleClick(event) {
    var clickedElement = event.target;
    var buttonInnerHtml = clickedElement.innerHTML;

    if (clickedElement.tagName === 'BUTTON') {
        ansPara.innerHTML += clickedElement.innerHTML;
    }
    let beforeNum = 0;
    let afterNum = 0;
    let realAns = 0;


    if (buttonInnerHtml === '+') {
        singVal = '+';
    }
    else if (buttonInnerHtml === '-') {
        singVal = '-';
    }
    else if (buttonInnerHtml === '*') {
        singVal = '*';
    }
    else if (buttonInnerHtml === '÷') {
        singVal = '÷';
    }

    if (clickedElement.innerHTML === '=') {

        if (singVal === '+') {
            beforeNum = ansPara.innerHTML.split('=')[0].trim();
            console.log("before", beforeNum);
            beforeNum = beforeNum.split('+')[0].trim();
            beforeNum = parseFloat(beforeNum);

            afterNum = ansPara.innerHTML.split('=')[0].trim();
            console.log("after", afterNum);
            afterNum = afterNum.split('+')[1].trim();
            afterNum = parseFloat(afterNum);

            realAns = beforeNum + afterNum;
            afterNum = ansPara.innerHTML.split(afterNum)[1].trim();

            ansPara.innerHTML = realAns;


        }
        else if (singVal === '-') {
            beforeNum = ansPara.innerHTML.split('=')[0].trim();
            beforeNum = beforeNum.split('-')[0].trim();
            beforeNum = parseFloat(beforeNum);

            afterNum = ansPara.innerHTML.split('=')[0].trim();
            afterNum = afterNum.split('-')[1].trim();
            afterNum = parseFloat(afterNum);

            realAns = beforeNum - afterNum;
            ansPara.innerHTML = realAns;
        }
        else if (singVal === '*') {
            beforeNum = ansPara.innerHTML.split('=')[0].trim();
            beforeNum = beforeNum.split('*')[0].trim();
            beforeNum = parseFloat(beforeNum);

            afterNum = ansPara.innerHTML.split('=')[0].trim();
            afterNum = afterNum.split('*')[1].trim();
            afterNum = parseFloat(afterNum);

            realAns = beforeNum * afterNum;
            ansPara.innerHTML = realAns;
        }
        else if (singVal === '÷') {
            beforeNum = ansPara.innerHTML.split('=')[0].trim();
            beforeNum = beforeNum.split('÷')[0].trim();
            beforeNum = parseFloat(beforeNum);

            afterNum = ansPara.innerHTML.split('=')[0].trim();
            afterNum = afterNum.split('÷')[1].trim();
            afterNum = parseFloat(afterNum);

            realAns = beforeNum / afterNum;
            ansPara.innerHTML = realAns;
        }
    }
}

buttons.addEventListener("click", handleClick);
