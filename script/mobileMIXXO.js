$(document).ready(function() {
    //desktop menu mouseover
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


    $('.rightIconBox .iconArea').click(function() {
        let i = $(this).index();
        console.log(i)
    })
    //popup open & close
    let openSearch = $('.search');
    let openCategory = $('.category');
    
    openCategory.click(function() {
        $('.categoryWin').slideDown(200);
        $('html, body').addClass('not_scroll');
    });
    $('.closeBtn').click(function() {
        $('.categoryWin').slideUp(200);
        $('html, body').removeClass('not_scroll');
        if (matchMedia("screen and (max-width: 767px").matches) {
            $(upBtn).parent().find('.subMenuBox').hide();
            $(upBtn).hide();
            $(upBtn).parent().find(downBtn).show();
        }
        
    });

    //popup win btn event
    let downBtn = $('.downBtn');
    let upBtn = $('.upBtn');
    
    downBtn.click (function() {
        $(this).parent().find('.subMenuBox').slideDown(200);
        $(this).hide();
        $(this).parent().find(upBtn).show();
    });
    upBtn.click (function() {
        $(this).parent().find('.subMenuBox').slideUp(200);
        $(this).hide();
        $(this).parent().find(downBtn).show();
    });


    //wish icon
    let wishIcon = $('.wishOff');
    let onWishIcon = $('.wishOn');
    let onPopup = $('.onBg');
    let offPopup = $('.offBg');

    wishIcon.click(function() {
        $(this).fadeOut(0);
        $(this).parent().find('.wishOn').css("display","block");
        onPopup.stop().fadeIn(500).delay(1500).fadeOut(300);
    })
    onWishIcon.click(function() {
        $(this).fadeOut(0);
        $(this).parent().find('.wishOff').css("display","block");
        offPopup.stop().fadeIn(500).delay(1500).fadeOut(300);
    })


    //detail page event
    //bottom bar
    $('.cartBtn, .buyBtn').click (function() {
        $('.bottomPopup').show()
        $('.optionBottom').show()
        $('.bottomOff').show()
        $('.bottomPopup').animate({bottom: '0px'}, 600);
    })
    $('.bottomOff').click(function() {
        $('.bottomPopup').hide()
        $('.optionBottom').hide()
        $('.bottomOff').hide()
        $('.bottomPopup').animate({bottom: '-190px'}, 600);
    })

    //option btn
    let colorBtn = $('.color .option');
    let sizeBtn = $('.size .option');

    colorBtn.click(function() {
        $(this).addClass('optionOn');
        colorBtn.not(this).removeClass('optionOn');
        var colorValue = $(this).text();
    });
    sizeBtn.click(function() {
        $(this).addClass('optionOn');
        sizeBtn.not(this).removeClass('optionOn');
        var sizeValue = $(this).text();
    });

    $('.option').click(function() {
        if (colorValue = 0) {

        }
    })

});
