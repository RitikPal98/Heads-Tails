document.querySelector("button").addEventListener("click", imagechanger);

document.querySelector("button").addEventListener("click", alterno);

function alterno(){var randomnumber = Math.floor(Math.random()*100) + 1;

}

function imagechanger(){
  var randomnumber = Math.floor(Math.random()*100) + 1;
  if (randomnumber%2 === 0){
document.querySelector("img").setAttribute("src", "images/head.png");
document.querySelector("h1").innerHTML = "Head Wins";
document.querySelector("p").innerHTML ="Press Start to Playagain";



  }else {
    document.querySelector("img").setAttribute("src", "images/tail.png");
    document.querySelector("h1").innerHTML = "Tail Wins";
    document.querySelector("p").innerHTML ="Press Start to Playagain";



  }
}
