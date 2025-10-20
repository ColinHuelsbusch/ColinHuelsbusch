var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var IS_MOBILE = true;
var WINDOW_WIDTH = 0;
var WINDOW_HEIGHT = 0;
var PAGE_SCROLL = 0;

$(document).ready(function() {
  
  $('.flexslider').flexslider();
  
	$('#nav').onePageNav({
		begin: function() {
		  if( IS_MOBILE )
		    $(".toggleMenu").click();
		},
		end: function() {
		  handleResize(true);
		}
	});
	
	window.onresize = handleResize;
	window.onscroll = handleResize;
	handleResize(true);
	
	$('#filters span').click(function(){
		$('#filters span').removeClass('active');
		$(this).addClass('active');
		$('div.tab').removeClass('active');
		$('div.tab[data-filter="'+$(this).data('filter')+'"]').addClass('active');
	});
	
	$('#contact_submit').click(function(e){
		e.preventDefault();
		if( !validateEmail($('#contact_email').val()) ){
  		showPopup('email_unvalid');
    	return false;
		}
		$.post( "", { secret:'9Hk3sod1p4', name:$('#contact_name').val(), email:$('#contact_email').val(), message:$('#contact_message').val() },
		function( result ){
  	  if( result=='ok' ){
    	  showPopup('message_ok');
    	  $('#contact_name').val('Name');
    	  $('#contact_email').val('E-Mail-Adresse');
    	  $('#contact_message').val('Nachricht');
      }
  	  else
    	  showPopup('message_fail');
		});
		return false;
	});
	
	$('.getpopupbox').click(function(){
		showPopup($(this).data('content'));
	});
	$('#popupboxbg').click(closePopup);
	
	
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggle();
	});
	
});

function showPopup( content ){
	$('.popupbox').removeClass('active');
	$('#popupboxbg,.popupbox[data-content="'+content+'"]').addClass('active');
}
function closePopup(){
	$('#popupboxbg,.popupbox').removeClass('active');
}

function handleResize( force_check ){
  WINDOW_WIDTH = window.innerWidth||$(window).width();
  WINDOW_HEIGHT = window.innerHeight||$(window).height();
  IS_MOBILE = WINDOW_WIDTH<800;
  PAGE_SCROLL = window.pageYOffset;
  adjustMenu();
  
	if( IS_MOBILE ){
  	$('.logo').css({left:'10%',opacity:1});
	}
	if( force_check || PAGE_SCROLL<WINDOW_HEIGHT ){
	  $('#home').height(WINDOW_HEIGHT-55);
		if( PAGE_SCROLL>WINDOW_HEIGHT-62 ){
  		$('.header_top').css('position','fixed');
  		$('.menu').css('margin-right',0);
  		$('.logo').css({left:'10%',opacity:1});
		}
		else if( PAGE_SCROLL>WINDOW_HEIGHT-(WINDOW_HEIGHT/6) ){
  		$('.header_top').css('position','absolute');
  		$('.menu').css('margin-right',0);
  		$('.logo').css({left:'10%',opacity:1});
		}
		else{
      $('.header_top').css('position','absolute');
      $('.menu').css('margin-right',($('.wrap').width()-$('.menu').width())/2);
      $('.logo').css({left:-200,opacity:0});
    }
	}
}

var adjustMenu = function() {
	if (WINDOW_WIDTH < 800) {
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (WINDOW_WIDTH >= 800) {
		$(".toggleMenu").css("display", "none");
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
	}
}

function validateEmail( email ){
  var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  return pattern.test(email);
}

}
/*
     FILE ARCHIVED ON 13:45:11 Mar 21, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:39:36 Oct 20, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.678
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.009
  esindex: 0.014
  cdx.remote: 46.403
  LoadShardBlock: 357.159 (3)
  PetaboxLoader3.datanode: 296.882 (5)
  load_resource: 478.764 (2)
  PetaboxLoader3.resolve: 229.246 (2)
*/