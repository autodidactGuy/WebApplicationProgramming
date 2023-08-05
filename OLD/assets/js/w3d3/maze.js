$(function(){
    let isPlaying=false,inTrack=false;

     $("#start").click(function(){
        isPlaying=true;
     });
     $("#maze").mouseover(function(){
        inTrack=true;
     });
     $("#maze").mouseleave(function(){
        inTrack=false;
        if(isPlaying)
        {
            isPlaying=false;
            $(".boundary").addClass('fail');
            $("#status").text("You lose!");
            resetGame();
        } 
     });
     $(".boundary").mouseover(function(){
        if(isPlaying){
            isPlaying=false;
            $(".boundary").addClass('fail');
            $("#status").text("You lose!");
            resetGame();
        }
     });
     $("#end").mouseover(function(){
        if(isPlaying && inTrack){
            isPlaying=false;
            $("#status").text("You win!");
            resetGame();
        }
     });
     function resetGame(){
        setTimeout(function(){
            $(".boundary").removeClass('fail');
            $("#status").text('Click the "S" to begin.');
            isPlaying=false;
        },3000);
     }
});