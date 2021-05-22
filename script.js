"use strict";

var scrollAnimationElm = document.querySelectorAll(".bl_sa");
var scrollAnimationFunc = function () {
  for (var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 100;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add("show");
    }
  }
};

window.addEventListener("load", scrollAnimationFunc);
window.addEventListener("scroll", scrollAnimationFunc);

// var fadeConts = document.querySelectorAll('.fadeConts'); // フェードさせる要素の取得
// var fadeContsRect = []; // 要素の位置を取得するための配列
// var fadeContsTop = []; // 要素の位置を取得するための配列
// var windowY = window.pageYOffset; // ウィンドウのスクロール位置
// var windowH = window.innerHeight; // ウィンドウの高さ
// var remainder = 100; // ちょっとはみ出させる部分
// // 要素の位置を取得
// for (var i = 0; i < fadeConts.length; i++) {
//   fadeContsRect.push(fadeConts[i].getBoundingClientRect());
// }
// for (var i = 0; i < fadeContsRect.length; i++) {
//   fadeContsTop.push(fadeContsRect[i].top + windowY);
// }
// // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
// window.addEventListener('resize', function () {
//   windowH = window.innerHeight;
// });
// // スクロールされたら
// window.addEventListener('scroll', function () {
//   // スクロール位置を取得
//   windowY = window.pageYOffset;

//   for (var i = 0; i < fadeConts.length; i++) {
//     // 要素が画面の下端にかかったら
//     if(windowY > fadeContsTop[i] - windowH + remainder) {
//       // .showを付与
//       fadeConts[i].classList.add('show');
//     } else {
//       // 逆に.showを削除
//       fadeConts[i].classList.remove('show');
//     }
//   }
// });

document.write("<p>JavaScriptファイルの読み込みテスト</p>");
