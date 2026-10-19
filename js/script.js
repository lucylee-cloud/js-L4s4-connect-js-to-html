// console.log("test");
let mainTitle = document.querySelector("h1");
console.log(mainTitle.outerHTML);
// Why do you not need to declare mainTitle w/ the new val?: let mainTitle.innerText="Yay, JavaScript!";
mainTitle.innerText = "Yay, JavaScript!";

let body = document.querySelector("body");
console.log(body);
body.style.backgroundColor = "#fef2f1";
