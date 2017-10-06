
$(".hamburger").on("click", function(){
  $( ".menu" ).slideToggle( "slow", function() {
    $(".menuitems").removeClass("menuitems");
    $(".menuitems").css("float","none");
    $(".menuitems").hover("mouseenter", "a", function(){
  $(this).css("color","red");
});
});
});
