
  /* Animation */
$('.main-head').addClass('animation bounceIn');
	
$('.head-bottom').waypoint(function(down) {
	$(this).addClass('animation');
	$(this).addClass('fadeInDown');
}, { offset: '70%' });

$('.contact-social').waypoint(function(down) {
	$(this).addClass('animation');
	$(this).addClass('fadeInDown');
}, { offset: '70%' });


  /* Mixpanel tracking */

$(function(){
  if(typeof $.cookie('mixpanel_tracking')=='undefined') {
    jQuery.scrollDepth();
    riveted.init();
  }
  
  // had to comment this out since I totally wiped out my Mixpanel credits

  /*mixpanel.track_pageview();
  
  new MixpanelScrollTracker({
    attribute: 'section',
    event: 'Scrolled to',
    markers: [
      { position: 200, value: 'Near Top' },
      { position: 700, value: 'Content Beginning' },
      { position: 1200, value: 'Content Middle' }
    ]
  });
  
  mixpanel.track_links("#header_carrots", "Click", {referrer: document.referrer, link_type: "nav"});
  mixpanel.track_links(".blog_snippet", "Click", {referrer: document.referrer, link_type: "nav"});
      
  mixpanel.track_links("#social_twitter", "Click", {referrer: document.referrer, link_type: "social", link_channel: "twitter"});
  mixpanel.track_links("#social_github", "Click", {referrer: document.referrer, link_type: "social", link_channel: "github"});
  mixpanel.track_links("#social_linkedin", "Click", {referrer: document.referrer, link_type: "social", link_channel: "linkedin"});
  
  $("#header_title").click(function(){
    mixpanel.track("Click", {referrer: document.referrer, click_type: "ui", ui_element: "header_title"});
  });*/
});

  /* Debug bar */
 
$(function(){
  $("#debug_tracking_disable").click(function(){
    $.cookie('mixpanel_tracking','disabled');
    mixpanel.disable();
    console.log("Mixpanel has been disabled.");
  });
  $("#debug_tracking_enable").click(function(){
    $.removeCookie('mixpanel_tracking');
    mixpanel.init();
    console.log("Mixpanel is being re-enabled.");
  });
});


  /* Scroll to GoTop */

$(".gotop").hide();

$(function(){
	$(window).scroll(function(){
	  if ($(this).scrollTop()>500)
	  {
		$('.gotop').slideDown();
	  } 
	  else
	  {
		$('.gotop').slideUp();
	  }
	});

	$('.gotop a').click(function (e) {
	  e.preventDefault();
	  $('body,html').animate({scrollTop: 0}, 1500);
	});

});

  /* Scroll Ends */
  
 
  /* Contact Slider */

$(".slider-button").click(function(e) {
	e.preventDefault();
    var $slidebtn=$(this);
    var $slidebox=$(this).parent().parent();
    if($slidebox.css('left')=="-400px"){
      $slidebox.animate({
        left:0
      },500); 
    }
    else{
      $slidebox.animate({
        left:-400
      },500);
    }
});		

  /* Contact Slider Ends */
 

