// JavaScript Document
$(function(){ 
    
$(window).load(function () {
// 処理
    $('.wrapper').fadeIn();
    $('#load').hide();


});   
    
   //メニューボタン
    $('.menu-btn').click(function(){
        $('.menu-bg').delay(100).slideToggle('swing');
        
        if($('.bar1').hasClass('bar1-deg')){
 
       $('.manu-nav-list').fadeOut('swing');
        $('.bar1').removeClass('bar1-deg');
        $('.bar2').removeClass('bar2-deg');
        $('.bar3').removeClass('bar3-deg');
            
        } else {
            
       $('.manu-nav-list').delay(300).fadeIn('swing');
        $('.bar1').addClass('bar1-deg');
        $('.bar2').addClass('bar2-deg');
        $('.bar3').addClass('bar3-deg'); 
            
        }
        
        return false;
    });
    
    $('.menu-btn').on('click', function() {
       var w = $('html').width();
     if (w < 800,$('html').hasClass('auto-scroll')) {
      $('html').removeClass('auto-scroll');
         
     } else  {
      $('html').addClass('auto-scroll');   
     }
        return false;
         

    });
    
    //scroll 
    $('#page-top').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#wash-lush').offset().top}, { duration: 'slow', easing: 'swing', });  
    });
    
    $('#wash-lush-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#wash-lush').offset().top}, { duration: 'slow', easing: 'swing', });  
    });
         
});
