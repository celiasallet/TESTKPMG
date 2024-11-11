//JS pour the switch of texts
(function($) {
    $(".tab-content").hide();  
    $("#tabone").show(); 
  
    var tabs = $(".tabs a");
    
    tabs.click(function(e) {
        e.preventDefault(); 
        
        var content = this.hash; 
        tabs.removeClass("active");  
        $(this).addClass("active"); 
        $(".tab-content").hide();  
        $(content).fadeIn(200); 
    });
})(jQuery);

//JS Pour le glissement du bouton 
var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});