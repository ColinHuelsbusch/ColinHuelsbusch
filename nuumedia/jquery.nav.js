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

;(function($,window,document,undefined){var OnePageNav=function(elem,options){this.elem=elem;this.$elem=$(elem);this.options=options;this.metadata=this.$elem.data('plugin-options');this.$nav=this.$elem.find('a');this.$win=$(window);this.sections={};this.didScroll=false;this.$doc=$(document);this.docHeight=this.$doc.height();};OnePageNav.prototype={defaults:{currentClass:'current',changeHash:false,easing:'swing',filter:'',scrollSpeed:750,scrollOffset:0,scrollThreshold:0.5,begin:false,end:false,scrollChange:false},init:function(){var self=this;self.config=$.extend({},self.defaults,self.options,self.metadata);if(self.config.filter!==''){self.$nav=self.$nav.filter(self.config.filter);}
self.$nav.on('click.onePageNav',$.proxy(self.handleClick,self));self.getPositions();self.bindInterval();self.$win.on('resize.onePageNav',$.proxy(self.getPositions,self));return this;},adjustNav:function(self,$parent){self.$elem.find('.'+self.config.currentClass).removeClass(self.config.currentClass);$parent.addClass(self.config.currentClass);},bindInterval:function(){var self=this;var docHeight;self.$win.on('scroll.onePageNav',function(){self.didScroll=true;});self.t=setInterval(function(){docHeight=self.$doc.height();if(self.didScroll){self.didScroll=false;self.scrollChange();}
if(docHeight!==self.docHeight){self.docHeight=docHeight;self.getPositions();}},250);},getHash:function($link){return $link.attr('href').split('#')[1];},getPositions:function(){var self=this;var linkHref;var topPos;var $target;self.$nav.each(function(){linkHref=self.getHash($(this));$target=$('#'+linkHref);if($target.length){topPos=$target.offset().top;self.sections[linkHref]=Math.round(topPos)-self.config.scrollOffset;}});},getSection:function(windowPos){var returnValue=null;var windowHeight=Math.round(this.$win.height()*this.config.scrollThreshold);for(var section in this.sections){if((this.sections[section]-windowHeight)<windowPos){returnValue=section;}}
return returnValue;},handleClick:function(e){var self=this;var $link=$(e.currentTarget);var $parent=$link.parent();var newLoc='#'+self.getHash($link);if(!$parent.hasClass(self.config.currentClass)){if(self.config.begin){self.config.begin();}
self.adjustNav(self,$parent);self.unbindInterval();$.scrollTo(newLoc,self.config.scrollSpeed,{axis:'y',easing:self.config.easing,offset:{top:-self.config.scrollOffset},onAfter:function(){if(self.config.changeHash){window.location.hash=newLoc;}
self.bindInterval();if(self.config.end){self.config.end();}}});}
e.preventDefault();},scrollChange:function(){var windowTop=this.$win.scrollTop();var position=this.getSection(windowTop);var $parent;if(position!==null){$parent=this.$elem.find('a[href$="#'+position+'"]').parent();if(!$parent.hasClass(this.config.currentClass)){this.adjustNav(this,$parent);if(this.config.scrollChange){this.config.scrollChange($parent);}}}},unbindInterval:function(){clearInterval(this.t);this.$win.unbind('scroll.onePageNav');}};OnePageNav.defaults=OnePageNav.prototype.defaults;$.fn.onePageNav=function(options){return this.each(function(){new OnePageNav(this,options).init();});};})(jQuery,window,document);

}
/*
     FILE ARCHIVED ON 13:47:24 Mar 21, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:39:38 Oct 20, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.962
  exclusion.robots: 0.029
  exclusion.robots.policy: 0.012
  esindex: 0.021
  cdx.remote: 58.991
  LoadShardBlock: 1025.078 (3)
  PetaboxLoader3.datanode: 862.856 (5)
  PetaboxLoader3.resolve: 683.994 (3)
  load_resource: 913.703 (2)
*/