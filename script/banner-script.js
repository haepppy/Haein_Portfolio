const img = document.querySelectorAll(".section__cont img");
const onClickImgWid = document.querySelector(".on_click_width");
const onClickImgHei = document.querySelector(".on_click_height");
const onBackground = document.querySelector("#bg");

const ON_CLICK_WIDTH = "on_click_width";
const ON_CLICK_HEIGHT = "on_click_height";
const ON_CLICK_BG = "on_click_bg";


function imgClick(e) {
    e.preventDefault();

    const imgWidth = e.target.offsetWidth;
    const imgHeight = e.target.offsetHeight;
    const imgRatio = imgWidth / imgHeight;

    if (imgRatio <= 1) {
        e.target.classList.toggle(ON_CLICK_HEIGHT);
    } else if (imgRatio > 1) {
        e.target.classList.toggle(ON_CLICK_WIDTH);
    };

    onBackground.classList.toggle(ON_CLICK_BG);
}

img.forEach(item => {
    item.addEventListener("click", imgClick);
});
