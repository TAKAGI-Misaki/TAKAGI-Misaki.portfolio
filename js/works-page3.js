// JavaScript Document
$(function(){   
    
   //メニューボタン
    $('.menu-btn').click(function(){
        
        if($('.bar1').hasClass('bar1-deg')){
 
       $('.manu-nav-list').slideToggle('swing');
        $('.bar1').removeClass('bar1-deg');
        $('.bar2').removeClass('bar2-deg');
        $('.bar3').removeClass('bar3-deg');
            
        } else {
            
       $('.manu-nav-list').slideToggle('swing');
        $('.bar1').addClass('bar1-deg');
        $('.bar2').addClass('bar2-deg');
        $('.bar3').addClass('bar3-deg'); 
            
        }
        
        return false;
    });
    
    //scroll 
    $('#page-top').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#1313').offset().top}, { duration: 'slow', easing: 'swing', });  
    });
    
    $('#1313-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#1313').offset().top}, { duration: 'slow', easing: 'swing', });  
    });
         
});
