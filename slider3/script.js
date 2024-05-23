$(document).ready(function () {
  $(".btn").click(function (event) {
    event.preventDefault();
    let index = $(this).index();
    $(".images").css("margin-left", -100 * index + "%");
    $(this).addClass("active").siblings().removeClass("active");
  });
});
