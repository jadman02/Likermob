// Initialize your app
var myApp = new Framework7({
  init: false //Disable App's automatica initialization
});



// Export selectors engine
var $$ = Dom7;


//Now we add our callback for initial page
myApp.onPageInit('index', function (page) {
  //Do something here with home page


functionEmpty();




});
 
//And now we initialize app
myApp.init();

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});




// Callbacks to run specific code for specific pages, for example for About page:

myApp.onPageInit('about', function (page) {

	$$('.create-page').on('click', function () {
        createContentPage();
    });
});





function functionEmpty() {

var track_click = 0;

$$.getJSON('http://www.smilesavers.net.au/jsonp.php?callback=?', function(response){

// Store
localStorage.setItem("total_pages", response.length);

for (i = 0; i < 5; i++) {        
$$( '#result' ).append('<li><a href="#" class="item-link item-content"><div class="item-media"><img src="http://graph.facebook.com/'+response[i][2]+'/picture?width=120&height=120" /></div><div class="item-inner">'+ '<div class="item-title-row"><div class="item-title">Yellow Submarine</div><div class="item-after">$15</div></div><div class="item-subtitle">Beatles</div><div class="item-text">Lorem ipsum dolor sit amet...</div></div></a></li>');

}
track_click++;

});


$$(".load_more").click(function (e) {

// Retrieve
var total_pages_stored == localStorage.getItem("total_pages");
var max_click = Math.ceil(total_pages_stored / 5);

if (max_click == 3) {alert('3 clicks');}

$$.getJSON('http://www.smilesavers.net.au/jsonp.php?callback=?', function(response){

var start = track_click * 5;
var finish = start + 5;

for (i = start; i < finish; i++) {        
$$( '#result' ).append('<li><a href="#" class="item-link item-content"><div class="item-media"><img src="http://graph.facebook.com/'+response[i][2]+'/picture?width=120&height=120" /></div><div class="item-inner">'+ '<div class="item-title-row"><div class="item-title">Yellow Submarine</div><div class="item-after">$15</div></div><div class="item-subtitle">Beatles</div><div class="item-text">Lorem ipsum dolor sit amet...</div></div></a></li>');

}

track_click++;

});	
	
});




}


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
