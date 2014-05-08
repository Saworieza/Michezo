jQuery( function ($) {
    // Include Nevma's jQuery Slideshow
    $.fn.slideshow=function(p){var a={slide:".slide",next:".next",previous:".prev",navigation:".navigation a",navigationSelectedClass:"selected",slideshow:true,slideshowSpeed:4E3,slideshowForward:true,startFromIndex:1,transition:"fade",transitionSpeed:500,mouseOverFreeze:true,resizeMode:"none",onBeforeSlide:function(){},onAfterSlide:function(){}};jQuery.extend(a,p);this.each(function(){var c=-1,m=null,k=false,e=jQuery(this),q=jQuery(a.next,e),r=jQuery(a.previous,e),f=jQuery(a.slide,e),h=jQuery(a.navigation, e).not(a.previous).not(a.next),i=function(b,g){a.onBeforeSlide&&a.onBeforeSlide(b,c);h.eq(c).removeClass(a.navigationSelectedClass);h.eq(b).addClass(a.navigationSelectedClass);if(a.resizeMode=="auto"){var d=f.eq(b).outerHeight();e.css("height",d+"px")}f.eq(c).fadeOut(a.transitionSpeed);f.eq(b).fadeIn(a.transitionSpeed,function(){g&&g();a.onAfterSlide&&a.onAfterSlide(b,c)});c=b},n=function(b){var g=f.size(),d=c+1;if(d>g-1)d=0;i(d,b)},o=function(b){var g=f.size(),d=c-1;if(d<0)d=g-1;i(d,b)},j=function(){k= true;m=window.setTimeout(function(){if(k)a.slideshowForward?n(j):o(j)},a.slideshowSpeed)};e.css("position","relative").css("overflow","hidden");f.each(function(){jQuery(this).css("display","none")});if(a.resizeMode=="none")f.css("position","absolute").css("top","0").css("left","0");else if(a.resizeMode=="maxSlide"){var l=-1;f.each(function(){var b=jQuery(this).outerHeight();if(b>l)l=b});e.css("height",l+"px")}a.mouseOverFreeze&&e.mouseover(function(){k=false;window.clearTimeout(m);return false}).mouseout(function(){a.slideshow&& j();return false});q.click(function(){n();return false});r.click(function(){o();return false});h.click(function(){var b=jQuery(h).index(this);i(b);return false});c=a.startFromIndex-1;i(c);a.slideshow&&j()})};

    $( '.widget_tabs .widgettitle' ).remove();
    
    $_tab_titles = $( '.widget_tabs .tab-title' );
    
    var s = '<h2 class = "widgettitle">';
    
    for ( var k = 0; k < $_tab_titles.size(); k++ ) {
        var title = $( $_tab_titles.get( k ) ).html();
        $( $_tab_titles.get( k ) ).remove();
        s += '<a href = "#" class = "tab-title"><span>' + title + '</span></a>';
    }
    
    s += '</h2>';
    
    $( '.widget_tabs' ).prepend( s );
    
    $( '#tabbed-sidebar-widgets .widgettitle a:first-child' ).addClass('first');

    $( '#tabbed-sidebar-widgets .widgettitle a:last-child' ).addClass('last');

    $( '.widget ul li:last-child' ).addClass('last');
    
    $( '#tabbed-sidebar-widgets' ).slideshow({
        slide: '.tab-content',
        navigation: 'a.tab-title',
        navigationSelectedClass: 'selected',
        slideshow: false,
        slideshowSpeed: 5000,
        startFromIndex: 1,
        transition: 'fade',
        transitionSpeed: 0,
        mouseOverFreeze: true,
        resizeMode: 'maxHeight'
    });
    
});