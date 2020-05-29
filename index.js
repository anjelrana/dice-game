var name= prompt("Your Name?")


var randomNumber1 = Math.floor( Math.random()*6) ;
var randomNumber2 = Math.floor( Math.random()*6) ;

if (randomNumber1===0 || randomNumber2 ===0 ) {
    var a = "images/dice1.png";
} if (randomNumber1===1 || randomNumber2===1)  {
    var b = "images/dice2.png";
} if (randomNumber1===2 || randomNumber2===2) {
    var c = "images/dice3.png";
} if (randomNumber1===3 || randomNumber2===3) {
    var d = "images/dice4.png";
} if (randomNumber1===4 || randomNumber2===4) {
    var e = "images/dice5.png";
} if (randomNumber1===5 || randomNumber2===5) {
    var f = "images/dice6.png";
}


var img = [a, b,c, d, e, f ];



document.querySelector(".img1").setAttribute( "src", img[randomNumber1]);
document.querySelector(".img2").setAttribute( "src", img[randomNumber2]);
document.querySelector(".Player1").textContent = "Anjel";
document.querySelector(".Player2").innerHTML = name;


if ( randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Anjel  won";
   
} else if ( randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML =  name +" won";
  
} else if (randomNumber1 === randomNumber2 ) {
    document.querySelector("h1").innerHTML = "It's a Draw";
}
