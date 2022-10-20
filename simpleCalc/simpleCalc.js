"use strict"

"use strict";

window.onload = init;

function init() 
{
   const helloBtn = document.getElementById("helloBtn");
   helloBtn.onclick = onHelloBtnClicked;
}
function onHelloBtnClicked() 
{
  console.log("i just created an alert")
  alert("Hi there!");
}
function onHelloBtnClicked() 
{