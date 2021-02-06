function computerPlay() {
    Math.random()

    let comp = Math.floor(Math.random() * 3)
    let compHand = "";

    switch (comp) {
        case 0:
            compHand = "Rock";
            break;
        case 1:
            compHand = "Paper";
            break;
        case 2:
            compHand = "Scissors";
            break;
    }

    return compHand;

}

let total=0;
let py=0;
let cm=0;

function play(playerSelection, computerSelection) {
    let loser = "";
    let winner = "";
    let win = 0; 
    //controls if player wins
    
    /*
    0=computer wins
    1=player wins
    2=tie    
    */

    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if (ps == cs) {
    win=2;
    }

    if (ps == "rock" && cs == "paper") {
        winner = cs;
        loser = ps;
    }

    if (ps == "rock" && cs == "scissors") {
        winner = ps;
        loser = cs;
        win = 1;
    }

    if (ps == "paper" && cs == "rock") {
        winner = ps;
        loser = cs;
        win = 1;
    }


    if (ps == "paper" && cs == "scissors") {
        winner = cs;
        loser = ps;
    }

    if (ps == "scissors" && cs == "paper") {
        winner = ps;
        loser = cs;
        win = 1;
    }

    if (ps == "scissors" && cs == "rock") {
        winner = cs;
        loser = ps;
    }

    //the message that contains the line with the choices and the winner  
    let msg = ""
    var puntos=""
    switch (win) {

        case 0:
            msg = "You Lose! ," + winner.toUpperCase() + " beats ," + loser.toUpperCase();
            cm++
            total+=1;
            break;

        case 1:
            msg = "You Win! ," + winner.toUpperCase() + " beats " + loser.toUpperCase();
            py++;
            total+=1;
            break;

        case 2:
            alert("tie");
            break;
    }

    puntos=msg + "\n You ("+py+") : ("+cm+") Computer";
    
    alert(puntos);
    var result = document.getElementById("result");
    
    result.innerHTML="--> player "+py+" : computer "+cm+"";

    /*--total de los juegos--*/
    
    let back=document.getElementsByClassName("body");
    
    if (cm>2){
        alert("computer wins");
        ppr.disabled=true;
        scs.disabled=true;
        rck.disabled=true;
        back.style="background-color: red;";
    }

    else if (py>2){
        alert("player wins");
        ppr.disabled=true;
        scs.disabled=true;
        rck.disabled=true;
        back.style="background-color: green;";
    }

}

/*
-------------------
starting the game
-------------------
*/

//game();