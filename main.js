$(document).ready(function(){
    $(".circle").each(function(q,a){
        setTimeout(function(){ Move($(a))},1);
        
    });
    
    function Move(obj){
        var position = obj.position();
        var xMove = parseInt(obj.data("xmove"));
        var yMove = parseInt(obj.data("ymove"));
        if(position.top > 580 || position.top < 9)
            xMove = xMove * -1;
        if(position.left > 780 || position.left < 9)
            yMove = yMove * -1;
        
        obj.css({"top":(position.top + xMove)+"px","left":(position.left + yMove)+"px"});
        obj.data("xmove",xMove).data("ymove",yMove);

        setTimeout(function(){ Move(obj)},1);
    }

    $(".addBall").on("click",function(){
        $("#main-div").append('<div class="circle" data-xMove="1" data-yMove="1" style="top:'+Math.floor((Math.random() * 580) + 9)+'px;left:'+Math.floor((Math.random() * 760) + 9)+'px"></div>');
        setTimeout(function(){ Move($("#main-div .circle:last-child"))},1);
    });
    
});