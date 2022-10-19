"use strict";

$(document).ready(function () {
  $(".multiple-items").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: false
  });
  $(".multiple-items-user").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true
  });
  $(".toggle").click(function () {
    $(".mobile-menu").toggle("slow");
  });
});
//# sourceMappingURL=app.js.map
