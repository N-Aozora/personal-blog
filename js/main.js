
!function(){
    var $sidebarToggle  = $("#sidebar-toggle");
    var $sidebar        = $(".sidebar");
    var $containerFluid = $(".container-fluid");
    var w = $sidebar.outerWidth();
    var isDBLclick; //判断是否双击
    var timer;

    //侧边栏展开收起效果
    $sidebarToggle.on("mouseover",function(){
        $(this).addClass("sidebar-hover");
    }).on("mouseout",function(){
        $(this).removeClass("sidebar-hover");
    }).on("click",function(){
        //在第一次点击时触发一个定时器，若已有一个定时器则不触发，当定时器执行完成时，再次点击可触发
        timer = !timer && setTimeout(function(){
            isDBLclick = false;
            timer = null; 
        },300)
        if (isDBLclick) return; 
        if ($sidebar.css("display") == "none" && !$sidebar.hasClass("sidebar-cick")){
            $sidebarToggle.removeClass("sidebar-hover").addClass("sidebar-click");
            $sidebar.css({"display":"block","padding-left":"10px"}).animate({
                right: 0,
                opacity: 1
            },"normal").animate({paddingLeft: 0},"slow");
            $containerFluid.animate({
                marginRight: w
            },"normal")
        }else {
            $sidebarToggle.removeClass("sidebar-click sidebar-hover");
            $sidebar.animate({
                right: -w,
                opacity: 0
            },"normal",function(){
                $sidebar.css("display","none")
            });
            $containerFluid.animate({
                marginRight: 0
            },"normal")
        }
        isDBLclick = true;
    })
    
    //回到顶部
    $("#backTop").on("click",function(){
        $("body,html").animate({scrollTop:0},200);
    })
    
    //模态框搜索栏焦点事件
    $("#input-search").on("focus",function(){
        $(".modal-search-header").addClass("modal-search-header-focus");
    }).on("blur",function(){
        $(".modal-search-header").removeClass("modal-search-header-focus");
    })
}()

