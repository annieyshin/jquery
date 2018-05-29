$(document).ready(function() {
  $(".click-show").click(function() {
    $(".show").fadeIn();
    $(".hidden").fadeOut();
  });

  $(".click-hide").click(function() {
    $(".show").fadeOut();
    $(".hidden").fadeIn();
  });

  $(".removeHighlight").click(function() {
    $(".removeHighlight").addClass("highlight");
  });

  $("button#default").click(function() {
    $("body").removeClass();
    $("body").addClass("default-background");
  });

  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("day-background");
  });

  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("night-background")
  });
});
