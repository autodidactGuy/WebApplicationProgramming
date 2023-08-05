$(function(){
    $("#startBtn").click(function(){

        $(".circles").remove();

        let numberCircles=$("#numberCircles").val(),width=$("#width").val(),growthAmount=$("#growthAmount").val(),growRate=$("#growRate").val();
        let circles=$("<div>",{
            "class":"circles"
        });
        for(let i=0;i<numberCircles;i++)
        {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            let randomPosition=Math.floor(Math.random() * 50);
            circles.append($("<div>", {
                "class": "circle",
                "css": {
                    "width":width,
                    "height":width,
                    "background-color":"#"+randomColor,
                    "left":randomPosition+"vw"
                },
                "click": function() {
                    $(this).remove();
                }
             }));
        }
        $("body").prepend(circles);

        setInterval(function(){
                $(".circle").each(function(){
                    $(this).css("height", function(idx, old) {
                        return (parseInt(old) + parseInt(growthAmount)) + "px";
                    }); 
                    $(this).css("width", function(idx, old) {
                        return (parseInt(old) + parseInt(growthAmount)) + "px";
                    }); 
                });
        },growRate);

        
        
    });
});