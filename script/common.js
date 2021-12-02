var scroll = function(){
    
    var $nav = null,
        $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false; // 새로 만든 변수

    $(document).ready(function(){
        init();
        initEvent();
    });
    
    var init = function(){
        $cnt = $("#fullPage");
        $nav = $(".header a");
    };
    
    var initEvent = function(){

        $("html ,body").scrollTop(0);
        winResize();

        $(window).resize(function(){
            winResize();
        });

        $nav.on("click", function(){
            moveIndex = $(this).parent("li").index();
            moving(moveIndex);
            return false;
        });

        $('.nextPage').on('click', function(){
            if(moveIndex < 3) {
                moveIndex += 1;
            moving(moveIndex);
            return false;
            };
        });

        $('.previousPage').on('click', function(){
            if (moveIndex > 0) {
                moveIndex -= 1;
            moving(moveIndex);
            return false;  
            };
        });

        $cnt.on("mousewheel", function(e){
            if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
              wheel(e);
            }
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        $cnt.children("div").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 3){
                moveIndex += 1;
                moving(moveIndex);
            };
        }else{
            if(moveIndex > 0){
                moveIndex -= 1;
                moving(moveIndex);
            };
        };
    };
    
    var moving = function(index){
        time = true // 휠 이벤트가 실행 동시에 true로 변경
        moveCnt = $cnt.children("div").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 1000, function(){
          time = false; // 휠 이벤트가 끝나면 false로 변경
        });
        $nav.parent("li").eq(index).addClass("on").siblings().removeClass("on");
        $('.mobileBtn > li').eq(index).addClass("active").siblings().removeClass("active");
    };
    
};


scroll();

$(document).ready(function(){
    $('div.openMenu').click(function() {
        $('div.openMenu').css('display','none');
        $('div.closeMenu, div.categoryOpen').css('display', 'block');
    });
    $('div.closeMenu').click(function() {
        $('div.closeMenu, div.categoryOpen').css('display','none');
        $('div.openMenu').css('display', 'block');
    });

    $('div.hoverText').css('display','none');
    $('div.thumnail > a > img').mouseover(function() {
        $(this).parent().find('div.hoverText').css('display', 'block');
    });  
    $('div.hoverText').mouseout(function() {
        $(this).parent().find('div.hoverText').css('display', 'none');
    });
});