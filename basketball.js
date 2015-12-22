function promptForPlayerName (player){
  var name =  prompt("What is " + player + " name?")
    if(name.length>15)
    alert("Wow , that's a long name!")
    return name;
    
}



function tryTwoPointShot (){
    var random1=Math.random();
    var random2=Math.random();
   if (random1 > 0.2 && random2 > 0.2){
       return true;
   }
   else{
       return false;
   }
   
    
}
 
 function tryThreePointShot(){
      var random1=Math.random();
    var random2=Math.random();
    if(random1 <= 0.2 || random2 >=0.8){
        return true;
    }
     else{
         return false;
     }
 }

function  getShotString(basketball, score, answer){
    if(answer){
        return(basketball + " attempted a " + score + " pointer it was good ");
    }
    else {
        return(basketball + " attempted a " + score + " pointer it was not good ");
    }
}


function updateScore(answer, score, worth ){
    if(answer){
        return(score+worth);
    }
    else{
        return(score)
    }
}

function isEndOfGame(score, name){
    if(score>=20){
            alert(" The game is over " + name + " has won ");
          
    }
}
















