import {saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage } from './localStorage.js';

let userInput = document.getElementById("userInput");
let Btn1 = document.getElementById("Btn1");
let Btn2 = document.getElementById("Btn2");
let Btn3 = document.getElementById("Btn3");
let inject1 = document.getElementById("inject1");
let getBtn = document.getElementById("getBtn");
let ran = document.getElementById("ran");


Btn1.addEventListener("click", () => {
  if (!userInput.value){
    alert("Enter A Name")
  }else{
  saveToLocalStorageByName(userInput.value);
  NameGenerator()
  getLocalStorage()
  CreateElements()
  
  userInput.value = ""
  }  
})

Btn2.addEventListener("click", () => {
   NameGenerator()
})  

Btn3.addEventListener("click", () =>{
  location.reload();
  removeFromLocalStorage(name)
})


function NameGenerator() {
  let random = Math.floor(Math.random() * getLocalStorage().length);
  ran.innerText = getLocalStorage()[random];      
}

function CreateElements(){
  inject1.innerHTML = ""
  let localStorageData = getLocalStorage()
  console.log(localStorageData);

  localStorageData.map(name => {
   const newDiv = document.createElement("div");
   // and give it some content
   const newContent = document.createTextNode(name);
   // add the text node to the newly created div
   newDiv.appendChild(newContent);
   inject1.appendChild(newDiv);
  })
}

CreateElements()

