let playerNameInputOne = document.getElementById("playerNameInputOne")
let playerNumberInput = document.getElementById("playerNumberInput")
let firstScreen = document.getElementById("firstScreen")
let nameErrorFirst = document.getElementById("nameErrorFirst")
let numberErrorScnd = document.getElementById("numberErrorScnd")
let startBtnOne = document.getElementById("startBtnOne")
let startBtnTwo = document.getElementById("startBtnTwo")
let scndScreen = document.getElementById("scndScreen")
let thirdScreen = document.getElementById("thirdScreen")
let fourthScreen = document.getElementById("fourthScreen")
let fifthScreen = document.getElementById("fifthScreen")

startBtnOne.addEventListener("click", () =>{
    if(!playerNameInputOne.value == ""){
        scndScreen.classList.remove("hidden")
        firstScreen.classList.add("hidden")
    }
    else{
        nameErrorFirst.classList.remove("hidden")
    }
})

playerOneBtn.addEventListener("click", () =>{
    if(!playerNumberInput.value == ""){
        thirdScreen.classList.remove("hidden")
        scndScreen.classList.add("hidden")
    }
    else{
        numberErrorScnd.classList.remove("hidden")
    }
})
startBtnTwo.addEventListener("click", () =>{
    if(!playerNameInputTwo.value == ""){
        fourthScreen.classList.remove("hidden")
        thirdScreen.classList.add("hidden")
    }
    else{
        nameErrorFirst.classList.remove("hidden")
    }
})
playerTwoBtn.addEventListener("click", () =>{
    if(!playerNumberInputTwo.value == ""){
        fifthScreen.classList.remove("hidden")
        fourthScreen.classList.add("hidden")
    }
})




// startBtn.addEventListener("click", () =>{
//     if(!playerOneInput.value == ""){
//         secendScreen.classList.remove("hidden")
//         firstScreen.classList.add("hidden")
        
//     }
//     else{
//         nameErrorFirst.classList.remove("hidden")
//     }
// })
