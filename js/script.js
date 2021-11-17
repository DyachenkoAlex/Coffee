/* eslint-env jquery */
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $(".header, .logo--name--left").addClass("active");
    } else {
      $(".header, .logo--name--left").removeClass("active");
    }
  });
});

$(function () {
  $(".header__btn").click(function () {
    $(".header__btn, .navigation__cover").toggleClass("active");
  });
  $(".nav--link").click(function () {
    if ($(".navigation__cover").hasClass("active")) {
      if ($(".header__btn").hasClass("active")) {
        $(".header__btn").removeClass("active");
      }
      $(".navigation__cover").removeClass("active");
    } else {
      $(".navigation__cover").addClass("active");
    }
  });
});

$(function () {
  $(document).ready(function () {
    $(".nav").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1200);
    });
  });
});

$(function () {
  jQuery(document).ready(function ($) {
    $(".popup-content").magnificPopup({
      type: "inline",
    });
  });
  $(".popup-link").magnificPopup({
    removalDelay: 300,
    mainClass: "mfp-fade",
  });
});
