$(document).ready(function(){

    //실사용사진 클릭시 확대
    $('.appImg').click(function() {
        $('.imgPopup').css('display', 'block');
    });

    $('.imgPopup').click(function() {
        $('.imgPopup').css('display', 'none');
    });


    //미쏘 디자인 클릭시 확대
    $('.miniView').click(function(){
        let miniView = $(this).parent().parent().index();
        let popupPage = $('.detailPageImg').eq(miniView);

        popupPage.css('display', 'block');
    });

    $('.detailPageImg').click(function(){
        $(this).css('display', 'none');
    });

    //버튼 활성화 미리보기 이미지 확대, 축소
    $('.defaultImg').click(function() {
        $(this).parent().find('.imgEx').css('display','block');
    });

    $('.imgEx').click(function() {
        $(this).css('display','none');
    });


    //마우스오버 애니메이션
    $('.defaultImg').mouseover(function() {
        $(this).stop().animate({
            top: "-10px", left: "-10px"}, 200);
    });
    $('.defaultImg').mouseout(function() {
        $(this).stop().animate({
            top: "10px", left: "10px"}, 200);
    });

});
