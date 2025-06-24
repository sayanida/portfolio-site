//ハンバーガーメニューの動き
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        
		} else {
           $('.globalMenuSp').removeClass('active');
        }
    });
});


//要素をフワッと表示させるJS
$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

// jQueryはCDNなどで読み込んでおく

$(function () {
  var key = "language" + "=";
  var cookie = document.cookie + ";";
  var find = cookie.indexOf(key);
  var offset = find + key.length;
  var end = cookie.indexOf(";", offset);
  var val = unescape(cookie.substring(offset, end));
  if (val == "eng") {
    $(".eng").show();
    $(".jpn").hide();
  } else {
    $(".jpn").show();
    $(".eng").hide();
  }

  $(".language-btn-jp").click(function () {
    $(".jpn").show();
    $(".eng").hide();
    document.cookie = "language=jpn;";
  });

  $(".language-btn-en").click(function () {
    $(".jpn").hide();
    $(".eng").show();
    document.cookie = "language=eng;";
  });
});



