//--------------------------スクロールボタン設定--------------------

$(function () {
  var scrollBtn = $(".scroll_btn");
  scrollBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      //300より大きい時、フェードインし
      scrollBtn.fadeIn("slow"); //表示速度を第一引数で"1000"と指定しているが反映されず
    } else {
      scrollBtn.fadeOut("slow"); //300以下の場合、フェードアウトする。
    }
  });

  scrollBtn.click(function () {
    //scrollボタンをクリックした時次を実行
    $("body,html").animate(
      //対象要素にbody、htmlタグを選択
      {
        scrollTop: 0, //scrollTopを0に指定。ここを200にすると上から200進んだ位置に指定できる。
      },
      1000 // 上に戻るスピードを設定
    );
    return false;
  });

  //----------------------load resize時にブラウザの幅が980以上の時、メニューボタンクリックを実行----------------

  $(window).on("load resize", function () {
    var winW = $(window).width();
    var devW = 980;
    if (winW >= devW) {
      // 980px以上の時の処理
      $("bl_menuBtn").trigger("click"); //メニューボタンクリック発動 ※ロード毎にon offされるので、ナビメニューが閉じたり、開いたり・・・
      $("label").removeClass("bl_closeMenu");
      //と同時に全画面に閉じ範囲が拡がる設定のbl_closeMenuクラスをlabel要素から取る。
      $("div>.header_right").removeClass("flexbox");
      //  と同時にicon_textをblock表記させる
    }
  });

  //----------------------nav_menu（=開いたメニュー）クリックすると、menu_btnのclick（→メニューを閉じる）を実行----------------

  $("#nav_menu a[href]").on("click", function (event) {
    //参考:https://teratail.com/questions/173001
    $(".bl_menuBtn").trigger("click");
  });

  //参考サイト:https://webcre8tor.com/snippets/conditional-branching-jquery.html

  $(".bl_menuBtn").on("click", function (event) {
    $(".bl_drawerMenu").fadeOut("slow");
  });
  // .click(function) →　.on("click",function) に書き換え
  // $(".bl_menuBtn").click(function () {
  //   $(".bl_drawerMenu").addClass("is_show");
  // });
});

$(function () {
  var $win = $(window),
    $main = $(".article_wrapper"),
    $nav = $("nav.bl_drawerMenu"), //他のnavにも反映してしまうのでセレクタをnav→drawer_menuに変更
    navHeight = $nav.outerHeight(),
    navPos = $nav.offset().top, //nav要素のトップ位置をnavPos変数に代入
    fixedClass = "is_fixed";
  $win.on("load scroll", function () {
    // loadかscrollした時に画面（=$win）の
    var value = $(this).scrollTop(); // top位置を取得してvalue変数に代入
    if (value > navPos) {
      //スクロールトップ位置が$nav.offset().top（nav要素のトップ位置＝デフォルトの配置位置）より大きくなったら
      $nav.addClass(fixedClass);
      $main.css("margin-top", navHeight); //htmlのnav要素に「fixedClass=is-fixedクラス(top0にposition-fixed)」を追加して
    } else {
      $nav.removeClass(fixedClass);
      $main.css("margin-top", "0");
    }
  });
});
