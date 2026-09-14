// window.addEventListener("scroll", function() {
//     console.log("スクロールした！");
// });
window.addEventListener("scroll", function() {

    const image = document.querySelector(".background-image");

    const scroll = window.scrollY;

    image.style.right = (-200 + scroll * 0.1) + "px";
    
    // ふわっとの時間
    image.style.opacity = Math.min(scroll / 1200, 1); 

});

const tabs = document.querySelectorAll(".work-tab");
const cards = document.querySelectorAll(".work-card");

let currentIndex = 0;
let timer;


function showWork(index) {

    tabs.forEach(tab => tab.classList.remove("active"));
    cards.forEach(card => card.classList.remove("active"));

    tabs[index].classList.add("active");
    cards[index].classList.add("active");

    currentIndex = index;
}
tabs.forEach((tab, index) => {

    tab.addEventListener("mouseenter", () => {

        clearInterval(timer);

        showWork(index);
    });

});

function startAutoSlide() {

    timer = setInterval(() => {

        currentIndex++;

        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }

        showWork(currentIndex);

    }, 5000);

}
tabs.forEach(tab => {

    tab.addEventListener("mouseleave", () => {

        startAutoSlide();

    });

});

startAutoSlide();

