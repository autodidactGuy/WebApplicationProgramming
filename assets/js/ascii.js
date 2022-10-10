window.onload = function(){
    "use strict";

    function getAnimation(a)
    {
        return ANIMATIONS[a].split("=====\n");
    }

    var anim=getAnimation("Blank");
    var animID,currentFrame=0,currentSpeed=250,isTurbo=false,currentAnimation="Blank",currentStatus=false,currentFontSize="Medium";
    const turboSpeed=50,normalSpeed=250;
    const FONTSIZE={"Tiny": 7,"Small":10,"Medium":12,"Large":16,"Extra Large":24,"XXL":32};
    
    function play() {
        document.getElementById("text-area").value=anim[currentFrame];
        currentFrame++;                    
        if (currentFrame >= anim.length) {
            currentFrame=0;
        }
    }
    
    

    document.getElementById("start").onclick=function(e){
        currentStatus=true;
        e.target.disabled=true;
        document.getElementById("stop").disabled=false;
        document.getElementById("animation").disabled=true;
        currentFrame=0;
        currentSpeed=normalSpeed;
        if(isTurbo){
            currentSpeed=turboSpeed;
        }
        document.getElementById("text-area").style.fontSize=FONTSIZE[currentFontSize]+"pt";
        anim=getAnimation(currentAnimation);
        animID=setInterval(play,currentSpeed);
    }

    document.getElementById("stop").onclick=function(e){
        currentStatus=false;
        clearInterval(animID);
        e.target.disabled=true;
        document.getElementById("start").disabled=false;
        document.getElementById("animation").disabled=false;
        currentFrame=0;
        document.getElementById("text-area").value="";
    }

    document.getElementById("animation").onchange=function(e){
        currentAnimation=e.target.value;
        anim=getAnimation(currentAnimation);
        currentFrame=0;
    }

    document.getElementById("fontsize").onchange=function(e){
        currentFontSize=e.target.value;
        document.getElementById("text-area").style.fontSize=FONTSIZE[currentFontSize]+"pt";
    }

    document.getElementById("turbo").onchange=function(e){
        if(isTurbo){
            isTurbo=false;
            currentSpeed=normalSpeed;
        }
        else{
            isTurbo=true;
            currentSpeed=turboSpeed;
        }
    }


}