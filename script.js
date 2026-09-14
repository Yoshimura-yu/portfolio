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

// =========================
// WORKS スライダー
// =========================


// HTMLから.work-tabを持つボタンを全部取得
const tabs = document.querySelectorAll(".work-tab");


// 横に動かす「レール」を取得
const worksTrack = document.querySelector(".works-track");


// カードを全部取得
// 何枚あるか調べるために使う
const cards = document.querySelectorAll(".work-card");


// 現在表示しているカード番号
// 0 = Excel
// 1 = Django
// 2 = Power Platform
let currentIndex = 0;


// 自動スライド用タイマー
let timer;


/* =========================
   指定したカードまで横移動
========================= */

function showWork(index) {

    /*
      1枚 = 100%

      0番 → 0%
      1番 → -100%
      2番 → -200%

      レール全体を左へ動かす
    */
    worksTrack.style.transform =
        `translateX(-${index * 100}%)`;


    // 一度すべてのボタンからactiveを外す
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });


    // 現在表示しているボタンだけactiveにする
    tabs[index].classList.add("active");


    // 現在の番号を記録
    currentIndex = index;
}


/* =========================
   タブにマウスを乗せたとき
========================= */

tabs.forEach((tab, index) => {

    tab.addEventListener("mouseenter", () => {

        // 自動スライドを一旦止める
        clearInterval(timer);

        // マウスを乗せたカードへ移動
        showWork(index);

    });

});


/* =========================
   自動スライド
========================= */

function startAutoSlide() {

    // タイマーが重複しないよう一度止める
    clearInterval(timer);


    timer = setInterval(() => {

        // 次のカードへ
        currentIndex++;


        // 最後まで行ったら最初へ戻る
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }


        // カードを横へスライド
        showWork(currentIndex);

    }, 5000);

}


/* =========================
   マウスがボタンから離れたら
   自動スライド再開
========================= */

tabs.forEach(tab => {

    tab.addEventListener("mouseleave", () => {

        startAutoSlide();

    });

});


// ページを開いたときから自動スライド開始
startAutoSlide();
