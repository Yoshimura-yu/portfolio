// window.addEventListener("scroll", function() {
//     console.log("スクロールした！");
// });
window.addEventListener("scroll", function() {

    const image = document.querySelector(".background-image");

    const scroll = window.scrollY;

    image.style.right = (-200 + scroll * 0.3) + "px";

    image.style.opacity = Math.min(scroll / 500, 1);

});
