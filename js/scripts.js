$(document).ready(function() {
  $(".click-show").click(function() {
    $(".show").slideToggle();
    $(".hidden").slideToggle();
  });

  $(".click-hide").click(function() {
    $(".show").slideToggle();
    $(".hidden").slideToggle();
  });

  $(".paragraph").click(function() {
    $(".paragraph").toggleClass("highlight");
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
