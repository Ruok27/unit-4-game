let target = Math.floor(Math.random() * (120 - 19)) + 19;
let current = 0;
let redButton = Math.floor(Math.random() * (12 - 1)) + 1;
let blueButton = Math.floor(Math.random() * (12 - 1)) + 1;
let yellowButton = Math.floor(Math.random() * (12 - 1)) + 1;
let greenButton = Math.floor(Math.random() * (12 - 1)) + 1;
let loseCount = 0;
let winCount = 0;



$("#targetNumber").html(target);
$("#currentNumber").html(current);
$("#Wins").html(winCount);
$("#Losses").html(winCount);

$("#btn1").click(addRed);
$("#btn2").click(addBlue);
$("#btn3").click(addYellow);
$("#btn4").click(addGreen);





function win() {

    winCount++;
    current = 0;
    target = Math.floor(Math.random() * (120 - 19)) + 19;
    redButton = Math.floor(Math.random() * (12 - 1)) + 1;
    blueButton = Math.floor(Math.random() * (12 - 1)) + 1;
    yellowButton = Math.floor(Math.random() * (12 - 1)) + 1;
    greenButton = Math.floor(Math.random() * (12 - 1)) + 1;
    $("#targetNumber").html(target);
    $("#currentNumber").html(current);
    $("#Wins").html(winCount);
    $("#Losses").html(loseCount);
    
}




function lose() {

    loseCount++;
    current = 0;
    target = Math.floor(Math.random() * (120 - 19)) + 19;
    redButton = Math.floor(Math.random() * (12 - 1)) + 1;
    blueButton = Math.floor(Math.random() * (12 - 1)) + 1;
    yellowButton = Math.floor(Math.random() * (12 - 1)) + 1;
    greenButton = Math.floor(Math.random() * (12 - 1)) + 1;
    $("#targetNumber").html(target);
    $("#currentNumber").html(current);
    $("#Wins").html(winCount);
    $("#Losses").html(loseCount);

}


function addRed() {

    if (current == target) {
   
        win();
    }
    
    if (current > target) {
        lose();
    }


    current += redButton;
    $("#currentNumber").html(current);

}

function addBlue() {

    if (current == target) {
   
        win();
    }
    
    if (current > target) {
        lose();
    }

    current += blueButton;
    $("#currentNumber").html(current);

}
function addYellow() {

    if (current == target) {
   
        win();
    }
    
    if (current > target) {
        lose();
    }

    current += yellowButton;
    $("#currentNumber").html(current);

}
function addGreen() {


    if (current == target) {
   
        win();
    }
    
    if (current > target) {
        lose();
    }

    current += greenButton;
    $("#currentNumber").html(current);

}




