var randomNumber1=(Math.floor(Math.random()*6)+1);

var randomDieceImage = "dice"+randomNumber1+".png";

var randomImageSource="images/"+randomDieceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

// for player two
var randomNumber2=(Math.floor(Math.random()*6)+1);
var imageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

// chhosing winner

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="player one win!🚩";
}else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").textContent="player 2 win!🚩";
}else
{
    document.querySelector("h1").textContent="match draw🏁";
}