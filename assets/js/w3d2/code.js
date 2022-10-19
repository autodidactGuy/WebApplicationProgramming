$(function(){
    $("#startBtn").click(function(){

        $(".circle").each(function(){
            $(this).remove();
        });

        let numberCircles=$("#numberCircles").val(),width=$("#width").val(),growthAmount=$("#growthAmount").val(),growRate=$("#growRate").val();
        for(let i=0;i<numberCircles;i++)
        {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            let randomPosition=Math.floor(Math.random() * 50);
            $("body").prepend($("<div>", {
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