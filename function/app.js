let btn=document.querySelector("#btn")
let btnPrimary=document.querySelector("#btn-primary")
let btnSecondary=document.querySelector("#btn-secondary")
let output=document.querySelector("#output")

//start button
btn.addEventListener("click",clickHandler)

function clickHandler(){
output.innerText='Hello World'
}

//Stop button
btnPrimary.addEventListener("click",clickHandler2)

function clickHandler2(){
output.innerText='This is  '
}

//Reset button
btnSecondary.addEventListener("click",clickHandler3)

function clickHandler3(){
output.innerText='Stop Watch'
}