let game = ["r", "p", "s"]
let playerChoice 
let computerChoice
let win = 0
let loses = 0
let ties = 0

for(i =0; i<game.length;i++){
    computerChoice = game[Math.floor(Math.random()*game.length)]
    
    playerChoice = prompt("pick either rock(r) or paper(p) or scissors (s)  to play")
    playerChoice = playerChoice.toLocaleLowerCase();
    if (game.indexOf(playerChoice) !== -1){
        if(playerChoice === "r" || playerChoice === "p" || playerChoice === "s"){
        alert(`computer chose ${computerChoice}`)
    }if (playerChoice === computerChoice){
        ties++
        alert(`you have tied ${ties} time(s)`)
    }else if (
        (playerChoice == "r" && computerChoice === "s") ||
        (playerChoice == "s" && computerChoice === "p") ||
        (playerChoice == "p" && computerChoice === "r")
    ){
        win++
        alert(`you have won ${win} time(s)`)
    }else{
        loses++
        alert(`you have lost ${loses} time(s)`)
    }
    
        
    } else {
        confirm("please select r or p or s")
    }
    
}

alert(`you won ${win} times, lost ${loses} times and tied ${ties} times`)