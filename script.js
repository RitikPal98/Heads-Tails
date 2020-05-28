var randomnumber = Math.floor(Math.random()*100) + 1;
if(randomnumber%2 === 0){
  document.querySelector("h1").innerHTML = "Head Wins";
  document.querySelector("img").setAttribute("src", "images/head.png");
  document.querySelector("p").innerHTML ="Refresh to Play Again!";

}
else{
  document.querySelector("h1").innerHTML = "Tail Wins";
  document.querySelector("img").setAttribute("src", "images/tail.png");
  document.querySelector("p").innerHTML ="Now Refresh to Play Again! ";

}
