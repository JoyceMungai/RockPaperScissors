
          let compscore=0;
          let playerscore=0;
          let winner='';

          
          function computerPlay(){
          const arr = ["rock","paper","scissors"];
          const random = arr[Math.floor(Math.random()* arr.length)];
         // console.log("computer:" + arr[random]);
    return  random;
      
      }
     
    
      function playerPlay(){
         let  option = prompt("choose an action");
          return option.toLowerCase();

      }

      function playRound(ps,cs){
      

          if (ps === cs){

             return ('you draw!');
          }else if ((ps === 'rock') && (cs === 'scissors')){
            playerscore++;
            return("you win! rock beats scissors");
          } else  if (ps === 'rock' && cs === 'paper'){
            compscore++;
            return("you lose! paper  beats rock");
          }else if(ps === 'paper' && cs === 'rock'){
            playerscore++;
            return("you win! Paper beats scissors");
          }else if(ps === 'paper' && cs === 'scissors'){
            compscore++;
            return("you lose! scissors beats paper");
          }else if(ps === 'scissors' && cs === 'paper'){
            playerscore++;
            return("you win! scissors beats paper");
          }else if(ps === 'scissors' && cs === 'rock'){
            compscore++;
            
            return("you lose! rock beats scissors");
          }
        }
        
       
        //console.log("computer:" + cs);

          function game(){
        for(let i=0; i<5; i++){
          const ps=playerPlay();
          const cs = computerPlay();
      console.log  (playRound(ps,cs)); }
        
        if(playerscore> compscore){
       return ('you win!');
        }else if(playerscore<compscore){
        return('you lose');
      }else{
        return ('it is a draw');
      }
    }

      
      console.log(game());