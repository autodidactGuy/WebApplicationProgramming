window.onload = function(){
    "use strict";

    function getAnimation(a)
    {
        return ANIMATIONS[a].split("=====\n");
    }

    var anim=getAnimation("Blank");
    var currentFrame=0,isLoop=true,currentSpeed=250,isTurbo=false,currentAnimation="Blank",currentStatus=false;
    const turboSpeed=50,normalSpeed=250;
    const FONTSIZE={"Tiny": 7,"Small":10,"Medium":12,"Large":16,"Extra Large":24,"XXL":32};
    function nextFrame() {
        document.getElementById("text-area").value=anim[currentFrame];
        setTimeout(function() {
            currentFrame++;                    
            if (currentFrame < anim.length) {
                if(currentStatus){
                    nextFrame();
                }
            }
            else{
                if(isLoop){
                    currentFrame=0;
                    if(currentStatus){
                        nextFrame();
                    }
                }
            }
        }, currentSpeed)
    }
    
    

    document.getElementById("start").onclick=function(e){
        currentStatus=true;
        e.target.disabled=true;
        document.getElementById("stop").disabled=false;
        currentFrame=0;
        currentSpeed=normalSpeed;
        if(isTurbo){
            currentSpeed=turboSpeed;
        }
        document.getElementById("text-area").style.fontSize=FONTSIZE["Medium"]+"pt";
        anim=getAnimation(currentAnimation);
        nextFrame();
    }

    document.getElementById("stop").onclick=function(e){
        currentStatus=false;
        e.target.disabled=true;
        document.getElementById("start").disabled=false;
        currentFrame=0;
        document.getElementById("text-area").value="";
    }

    document.getElementById("animation").onchange=function(e){
        currentAnimation=e.target.value;
        anim=getAnimation(currentAnimation);
        currentFrame=0;
    }

    document.getElementById("fontsize").onchange=function(e){
        document.getElementById("text-area").style.fontSize=FONTSIZE[e.target.value]+"pt";
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