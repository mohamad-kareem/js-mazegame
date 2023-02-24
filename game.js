document.addEventListener("DOMContentLoaded",function(event){

    var game_started=false;
    var game_finished=false;
    var board=document.getElementById("status");
    var start=document.getElementById("start");
    var finish=document.getElementById("end");
    var score=0
    var all_boundaries = document.querySelectorAll(".boundary:not(.boundary.example)");


    start.addEventListener("click",function(){
        for(var r=0;r<all_boundaries.length;r++){
            all_boundaries[r].style.backgroundColor="grey";
        }
        score=0

    });

     start.addEventListener("mouseover",function(){
        for(var s=0;s<all_boundaries.length;s++){
            all_boundaries[s].style.backgroundColor="green";
        }
        if(!game_started){
            game_started=true;
            game_finished=false;
            board.textContent="녹색 불, 출발 출발 출발"  /*they used this sentence in squad game it means=green light start start...*/
        }
     })
  
     
     
        for(var b = 0;b<all_boundaries.length;b++){
            all_boundaries[b].addEventListener("mouseover",function(){
                if(game_started==true && game_finished==false){
                    for(var l=0;l<all_boundaries.length;l++){
                    all_boundaries[l].style.backgroundColor="red";
                }
                score-=10
                board.textContent="You lose! & your score became: " + score + " pts"
                game_finished=true;
                game_started=false;
            }
            })
            
        }
     
        finish.addEventListener("mouseover",function(){
            /*for(var w=0;w<all_boundaries.length;w++){
                all_boundaries[w].style.backgroundColor="green";
            }*/
            if(game_started==true&&game_finished==false){
                score+=5;
                game_started=false
                board.textContent="You win! & your score became: " + score + " pts";
            }

        })


});
