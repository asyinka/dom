myHeader = document.createElement("h1");
myHeader.textContent = "Good day, World";
document.body.append(myHeader);

const myTitle = document.querySelector("#firstTitle");
myTitle.style.color = "red";
myTitle.style.textAlign = "center";


const Fruits = document.querySelector("#myList");
const listsItem = document.createElement("li");
listsItem.textContent = "Grape";
Fruits.append(listsItem);
listsItem.textContent = "Banana";
Fruits.append(listsItem);

// const clickButton =  document.getElementById("testButton");
// clickButton.onclick = showMe;

const testIn = document.getElementById("testnput")
testIn.onchange = showInput;

document.body.onload = showMe;
function showMe() {
    alert("You are doing great")
}
function showInput() {
    alert("You have spoken")
}

const testDiv = document.querySelector("#myBox");
testDiv.onmouseover = showColour;
testDiv.onmouseout =  showBaseColor;
testDive.onmousedown = showGreen;
function showColour() {
    testDiv.style.backgroundColor = "red";
}
function showBaseColor() {
    testDiv.style.backgroundColor = "yellow";
}
function showGreen() {
    testDiv.style.backgroundColor = "Green";
}