let firstScreen = document.getElementById("firstScreen")
let playerNameInputOne = document.getElementById("playerNameInputOne")
let nameErrorFirst = document.getElementById("nameErrorFirst")
let startBtnOne = document.getElementById("startBtnOne")
let scndScreen = document.getElementById("scndScreen")
let scndScreenPlayerOneName = document.getElementById("scndScreenPlayerOneName")
let playerOneBtn = document.getElementById("playerOneBtn")
let numberErrorScnd = document.getElementById("numberErrorScnd")
let playerNumberInputOne = document.getElementById("playerNumberInputOne")
let thirdScreen = document.getElementById("thirdScreen")
let playerNameInputTwo = document.getElementById("playerNameInputTwo")
let startBtnTwo = document.getElementById("startBtnTwo")
let nameErrorScnd = document.getElementById("nameErrorScnd")
let forthScreenPlayerTwoName = document.getElementById("forthScreenPlayerTwoName")
let playerNumberInputTwo = document.getElementById("playerNumberInputTwo")
let playerTwoBtn = document.getElementById("playerTwoBtn")
let numberErrorLast = document.getElementById("numberErrorLast")
let fifthScreen = document.getElementById("fifthScreen")
let playerTwoWin = document.getElementById("playerTwoWin")
let playerOneWin = document.getElementById("playerOneWin")


startBtnOne.addEventListener("click", ()=>{
    if(!playerNameInputOne.value == ""){
        firstScreen.classList.add("hidden")
        scndScreen.classList.remove("hidden")
        scndScreenPlayerOneName.innerHTML = playerNameInputOne.value

    }
    else{
        nameErrorFirst.classList.remove("hidden")

    }
})
playerOneBtn.addEventListener("click",()=>{
    if(!playerNumberInputOne.value == ""){
        scndScreen.classList.add("hidden")
        thirdScreen.classList.remove("hidden")
    }
    else{
        numberErrorScnd.classList.remove("hidden")
    }
})
startBtnTwo.addEventListener("click", ()=>{
    if(!playerNameInputTwo.value == ""){
        fourthScreen.classList.remove("hidden")
        thirdScreen.classList.add("hidden")
        forthScreenPlayerTwoName.innerHTML = playerNameInputTwo.value
    }
    else{
        nameErrorScnd.classList.remove("hidden")
    }
})
playerTwoBtn.addEventListener("click",()=>{
    if(!playerNumberInputTwo == ""){
        fourthScreen.classList.add("hidden")
        fifthScreen.classList.remove("hidden")

    }
    else{
        numberErrorLast.classList.remove("hidden")
    }
})
playerTwoBtn.addEventListener("click", ()=>{
    if(playerNumberInputOne.value == playerNumberInputTwo.value){
        playerTwoWin.classList.remove("hidden")
        // playerTwoWin.innerHTML = `${playerNameInputTwo.value} Win!`
        document.getElementById("playerTwoWin").innerText = playerNameInputTwo.value + " " + "Win!"
    }
    else{
        playerOneWin.classList.remove("hidden")
        // playerOneWin.innerHTML = `${playerNameInputOne.value} Win!`
        document.getElementById("playerOneWin").innerText = playerNameInputOne.value + " " + "Win!"

    }
})

































































// let playerNameInputOne = document.getElementById("playerNameInputOne")
// let playerNameInputTwo = document.getElementById("playerNameInputTwo")
// let playerNumberInput = document.getElementById("playerNumberInput")
// let playerNumberInputTwo = document.getElementById("playerNumberInputTwo")
// let numberErrorLast = document.getElementById("numberErrorLast")
// let firstScreen = document.getElementById("firstScreen")
// let nameErrorFirst = document.getElementById("nameErrorFirst")
// let nameErrorScnd = document.getElementById("nameErrorScnd")
// let numberErrorScnd = document.getElementById("numberErrorScnd")
// let startBtnOne = document.getElementById("startBtnOne")
// let startBtnTwo = document.getElementById("startBtnTwo")
// let scndScreen = document.getElementById("scndScreen")
// let thirdScreen = document.getElementById("thirdScreen")
// let fourthScreen = document.getElementById("fourthScreen")
// let fifthScreen = document.getElementById("fifthScreen")
// let scndScreenPlayerOneName = document.getElementById("scndScreenPlayerOneName")

// startBtnOne.addEventListener("click", () =>{
//     if(!playerNameInputOne.value == ""){
//         scndScreen.classList.remove("hidden")
//         firstScreen.classList.add("hidden")
//         scndScreenPlayerOneName.innerHTML=playerNameInputOne.value
//     }
//     else{
//         nameErrorFirst.classList.remove("hidden")
//     }
// })

// playerOneBtn.addEventListener("click", () =>{
//     if(!playerNumberInput.value == ""){
//         thirdScreen.classList.remove("hidden")
//         scndScreen.classList.add("hidden")
//     }
//     else{
//         numberErrorScnd.classList.remove("hidden")
//     }
// })
// startBtnTwo.addEventListener("click", () =>{
//     if(!playerNameInputTwo.value == ""){
//         fourthScreen.classList.remove("hidden")
//         thirdScreen.classList.add("hidden")
//     }
//     else{
//         nameErrorScnd.classList.remove("hidden")
//     }
// })
// playerTwoBtn.addEventListener("click", () =>{
//     if(!playerNumberInputTwo.value == ""){
//         fifthScreen.classList.remove("hidden")
//         fourthScreen.classList.add("hidden")
//     }
//     else{
//         numberErrorLast.classList.remove("hidden")
//     }
// })




