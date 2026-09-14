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

// HTMLから.work-tabを持つ要素をすべて取得
const tabs = document.querySelectorAll(".work-tab");

// HTMLから.work-cardを持つ要素をすべて取得
const cards = document.querySelectorAll(".work-card");

// 現在表示している作品番号（0 = 1番目）
let currentIndex = 0;

// 自動切り替え用のタイマーを入れる変数
let timer;


// 指定された番号の作品を表示する関数
function showWork(index) {

    // 一度すべてのタブからactiveを外す
    tabs.forEach(tab => tab.classList.remove("active"));

    // 一度すべてのカードからactiveを外す
    cards.forEach(card => card.classList.remove("active"));

    // 選ばれたタブだけactiveにする
    tabs[index].classList.add("active");

    // 選ばれたタブと同じ番号のカードもactiveにする
    cards[index].classList.add("active");

    // 現在表示している番号を記録
    currentIndex = index;
}
// 各タブにマウスを乗せたときの処理
tabs.forEach((tab, index) => {

    tab.addEventListener("mouseenter", () => {

        // 5秒ごとの自動切り替えを一旦停止
        clearInterval(timer);

        // マウスを乗せた番号の作品を表示
        showWork(index);
    });

});


// 作品を5秒ごとに自動で切り替える関数
function startAutoSlide() {

    timer = setInterval(() => {

        // 現在の作品番号を1つ進める
        currentIndex++;

        // 最後のカードを超えたら最初（0番）に戻る
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }

        // currentIndex番目の作品を表示
        showWork(currentIndex);

    }, 5000); // 5000ミリ秒 = 5秒

}
// すべてのタブに対して処理
tabs.forEach(tab => {

    // タブからマウスが離れたら
    tab.addEventListener("mouseleave", () => {

        // 自動切り替えを再開する
        startAutoSlide();

    });

});

// ページ読み込み時にも自動切り替えを開始
startAutoSlide();

