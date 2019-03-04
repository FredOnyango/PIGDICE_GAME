var randomNumber = Math.floor(Math.random()*6)+1; //1-6
var playerOneImages = "images/dice"+randomNumber+".png";
var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6
var playerOneImages1 = "images/dice"+randomNumber1+".png";

document.querySelector('.img1').setAttribute('src',playerOneImages);
document.querySelector('.img2').setAttribute('src',playerOneImages1);

if(playerOneImages>playerOneImages1){
    document.querySelector('h1').innerHTML = 'Player 1 has won';
}else if(playerOneImages<playerOneImages1){
        document.querySelector('h1').innerHTML = 'Player 2 has won';    
    }else{
        document.querySelector('h1').innerHTML = 'Roll the dice again';
    }