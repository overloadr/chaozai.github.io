let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
   
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storeName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storeName}`;
}

myButton.onclick = function() {
    setUserName();
};