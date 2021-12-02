$(document).ready(function() {
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

});