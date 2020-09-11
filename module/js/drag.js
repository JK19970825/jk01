define(function(){
    function drag(selector){
        let $ele = $(selector);
        $ele.mousedown(function(evt){
            let disX = evt.pageX - $ele.offset().left;
            let disY = evt.pageY - $ele.offset().top;
            
        })
    }
})