
// 配置路径
require.config({
    paths : {
        "jquery" : "./jquery-1.12.4.min",
        "cookie" : "./jquery.cookie"
    }
})

// 导入模块
require(['jquery','cookie'],($,cook)=>{
    $(function(){
        $('body').append('<h1>jQuery导入成功</h1>');
    })
})
