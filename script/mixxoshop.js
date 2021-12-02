$(document).ready(function() {

    //메뉴 마우스오버 효과
    $('.nav > ul > li').mouseover(function() {
        $(this).find('ul.subNav').stop().slideDown()
    });

    $('.nav > ul > li').mouseout(function() {
        $(this).find('ul.subNav').stop().slideUp()
    });

    //내비게이션 아이콘 클릭 이벤트
    let searIcon = $('.searchIcon').parent();
    let cateIcon = $('.categoryIcon').parent();
    let searPopup = $('.searchPopup');
    let catePopup = $('.categoryPopup');
    let searClose = $('.searClose .closeIcon');
    let cateClose = $('.cateClose .closeIcon');

    searIcon.click(function() {
        searPopup.stop().slideDown(300);
    });
    searClose.click(function() {
        searPopup.stop().slideUp(300);
    });

    cateIcon.click(function() {
        catePopup.stop().slideDown(300);
    });
    cateClose.click(function() {
        catePopup.stop().slideUp(300);
    });


    //배너 이벤트
    let currentIndex = 0;
    let slideCount = $('.bannerImg').length-1;
    let arrowLeft = $('.arrowLeft');
    let arrowRight = $('.arrowRight');
    let pointerGroup = $('.pointer > li');
    let bannerGroup = $('.bannerImg');

    //배너 슬라이드 애니메이션
    let move
    clearInterval(move);
    move = setInterval(function() {
                if(currentIndex < slideCount) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }

                let slidePosition = currentIndex * (-100) + 'vw';

                $('.banner').animate({left: slidePosition}, 600);

                pointerGroup.removeClass('onPointer');
                pointerGroup.eq(currentIndex).addClass('onPointer');

            }, 4000);
        

    //배너 좌우 슬라이드 버튼 왼
    arrowLeft.click(function(){
        if(currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = 0;
        }

        let slidePosition = currentIndex * (-100) + 'vw';
        
        $('.banner').animate({left: slidePosition}, 400);
        console.log(slidePosition);

        pointerGroup.removeClass('onPointer');
        pointerGroup.eq(currentIndex).addClass('onPointer');
    });

    //배너 좌우 슬라이드 버튼 오
    arrowRight.click(function(){
        if(currentIndex < slideCount) {
            currentIndex++;
        } else {
            currentIndex = slideCount;
        }

        let slidePosition = currentIndex * (-100) + 'vw';
        
        $('.banner').animate({left: slidePosition}, 400);
        console.log(slidePosition);

        pointerGroup.removeClass('onPointer');
        pointerGroup.eq(currentIndex).addClass('onPointer');
    });

    //포인터 클릭시 배너 이동
    pointerGroup.click(function() {
        let pointerIndex = $(this).index();
        currentIndex = pointerIndex;

        let slidePosition = currentIndex * (-100) + 'vw';
        
        $('.banner').animate({left: slidePosition}, 400);
        console.log(slidePosition);

        pointerGroup.removeClass('onPointer');
        pointerGroup.eq(currentIndex).addClass('onPointer');
    })


    //wish icon
    let wishIcon = $('.wishOff');
    let onWishIcon = $('.wishOn');
    let onPopup = $('.onBg');
    let offPopup = $('.offBg');

    wishIcon.click(function() {
        $(this).fadeOut(0);
        $(this).parent().find('.wishOn').fadeIn(0);
        onPopup.stop().fadeIn(500).delay(1500).fadeOut(300);
    })
    onWishIcon.click(function() {
        $(this).fadeOut(0);
        $(this).parent().find('.wishImg').fadeIn(0);
        offPopup.stop().fadeIn(500).delay(1500).fadeOut(300);
    })

    //상세페이지

    

});