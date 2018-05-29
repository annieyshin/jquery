$(document).ready(function() {
  $(".click-show").click(function() {
    $(".show").fadeIn();
    $(".hidden").fadeOut();
  });
});

$(document).ready(function() {
  $(".click-hide").click(function() {
    $(".show").fadeOut();
    $(".hidden").fadeIn();
  });
});
