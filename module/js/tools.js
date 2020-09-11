define(function(){
    return {
        drag : function(selector){
            let $ele = $(selector);
            $ele.mousedown(function(evt){
                let disX = evt.pageX - $ele.offset().left;
                let disY = evt.pageY - $ele.offset().top;
                $(document).mousemove(function(evt){
                    $ele.css({left : evt.pageX - disX,top : evt.pageY})
                })
                $(document).mouseup(function(){
                    $(this).off();
                })
                return false;
            })
        },
        randomInt : function(min,max){
            if(min > max){
                [min,max] = [max,min];
            }
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        randomColor : function(){
            return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
        }
    }

})
