// JavaScript Document
$(function(){ 
    
$(window).load(function () {
// 処理
    $('#wrapper').fadeIn();
    $('#load').fadeOut();
//start
    
　setTimeout(function(){
       

          // 繰り返し処理
          $('.works-list li').each(function(i) {
          // 遅延させてフェードイン
          $(this).delay(300 * i).animate({ opacity: 1}, { duration: 1000, easing: 'swing'});
          });
     
},400);
    
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
    
    
    //scroll 
  $('#works-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#works').offset().top}, { duration: 'slow', easing: 'swing', });  
  });     
    
  $('#about-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#about').offset().top }, { duration: 'slow', easing: 'swing', });  
  }); 

    
  $('#other-works-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#other-works').offset().top +120}, { duration: 'slow', easing: 'swing', });  
  }); 
    
  $('#contact-btn').click(function(){
      event.preventDefault();
    $("html,body").animate({scrollTop:$('#contact').offset().top}, { duration: 'slow', easing: 'swing', });  
  });
    
    // スクロールフェードイン
    
    
    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 1000) {

          $('.me-box').animate({ opacity: 1}, { duration: 3000, easing: 'swing'});
            
        }
    });
    
     
    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 1900) {

          // 繰り返し処理
          $('.other-works-list li').each(function(i) {
          // 遅延させてフェードイン
          $(this).delay(250 * i).animate({ opacity: 1}, { duration: 500, easing: 'swing'});
          });
        
        }
    });
        
    // モーダル open
    
    $('#Owunit1').click(function(){
        
    winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target);
        
        $('#Owmodal1').fadeIn();
        $('.modal-overlay').fadeIn();
        $( '#echo' ).attr( 'src','https://www.youtube.com/embed/4tryrRmC0Mk' );
        $('html').css('overflow-y','hidden');
        return false;
    });

    $('#Owunit2').click(function(){
        
    winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target);
        
        $('#Owmodal2').fadeIn();
        $('.modal-overlay').fadeIn();
        $( '#kutushita' ).attr( 'src','https://player.vimeo.com/video/247259958?autoplay=1' );
        $('html').css('overflow-y','hidden');
        return false;
    });

    $('#Owunit3').click(function(){
        
    winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target);
        
        $('#Owmodal3').fadeIn();
        $('.modal-overlay').fadeIn();
        $( '#yamanosachi' ).attr( 'src','https://www.youtube.com/embed/h4Ycq5H2MVQ' );
        $('html').css('overflow-y','hidden');
        return false;
    });
    
    $('#Owunit4').click(function(){
        
    winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target);
        
        $('#Owmodal4').fadeIn();
        $('.modal-overlay').fadeIn();
        $( '#tyuka' ).attr( 'src','https://www.youtube.com/embed/kC8m6-09jtM' );
        $('html').css('overflow-y','hidden');
        return false;
    });

    $('#Owunit5').click(function(){
        
    winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target);
        
        $('#Owmodal5').fadeIn();
        $('.modal-overlay').fadeIn();
        $( '#m' ).attr( 'src','https://www.youtube.com/embed/71STim5VKt4' );
        $('html').css('overflow-y','hidden');
        return false;
    });
    
    $('#Owunit6').click(function(){
        
    winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target);
        
        $('#Owmodal6').fadeIn();
        $('.modal-overlay').fadeIn();
        $( '#owl' ).attr( 'src','https://www.youtube.com/embed/64Fq-V4rLPY' );
        $('html').css('overflow-y','hidden');
        return false;
    });
    
    $('#Owunit7').click(function(){
        
    winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target);
        
        $('#Owmodal7').fadeIn();
        $('.modal-overlay').fadeIn();
        $( '#ise' ).attr( 'src','https://www.youtube.com/embed/uwbrhLew9fQ' );
        $('html').css('overflow-y','hidden');
        return false;
    });
    
    $('#Owunit8').click(function(){
        
    winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target);
        
        $('#Owmodal8').fadeIn();
        $('.modal-overlay').fadeIn();
        $( '#melodica' ).attr( 'src','https://www.youtube.com/embed/qKE2qrN8lfg' );
        $('html').css('overflow-y','hidden');
        return false;
    });
    
    // モーダル close
    
    $('.batu').click(function(){
        $('.other-works-modal').fadeOut();
        $('.modal-overlay').fadeOut();
        $( '#echo').removeAttr( "src" );
        $( '#kutushita').removeAttr( "src" );
        $( '#yamanosachi').removeAttr( "src" );
        $( '#tyuka').removeAttr( "src" );
        $( '#m').removeAttr( "src" );
        $( '#owl').removeAttr( "src" );
        $( '#ise').removeAttr( "src" );
        $( '#melodica').removeAttr( "src" );
    $('html').css('overflow-y','auto');
    return false;
    }); 
    
    $('.modal-overlay').click(function(){
        $('.other-works-modal').fadeOut();
        $('.modal-overlay').fadeOut();
        $( '#echo').removeAttr( "src" );
        $( '#kutushita').removeAttr( "src" );
        $( '#yamanosachi').removeAttr( "src" );
        $( '#tyuka').removeAttr( "src" );
        $( '#m').removeAttr( "src" );
        $( '#owl').removeAttr( "src" );
        $( '#ise').removeAttr( "src" );
        $( '#melodica').removeAttr( "src" );
    $('html').css('overflow-y','auto');
    return false;
    });
   
  
   //copy-btn 
   $('#js-copybtn').hover(function(){  
      $('#text-copy').text("copy click!");
      $('#text-copy').fadeIn("fast");
   }, function(){
       
       $('#text-copy').hide();
   
   });


   // コピーテキストボタンを実装

    $('#js-copybtn').click(function() {
        
	var range = document.createRange();
	var element = document.getElementById('target');
	range.selectNodeContents(element);
	
	var selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
        
    document.execCommand('copy click!');
        
        $('#text-copy').text("copied");
        $('#text-copy').show();
        $('#text-copy').fadeOut(600);
    });
    
    
});
