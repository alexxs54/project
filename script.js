var yourNavigation = $(".nav");
    stickyDiv = "sticky";
    yourHeader = $('.header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});

$(".button").click(function(){
  $(".social.twitter").toggleClass("clicked");
  $(".social.facebook").toggleClass("clicked");
 $(".social.google").toggleClass("clicked");
  $(".social.youtube").toggleClass("clicked");
})