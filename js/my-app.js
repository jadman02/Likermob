// Initialize your app
var myApp = new Framework7({
  init: false //Disable App's automatica initialization
});



// Export selectors engine
var $$ = Dom7;


//Now we add our callback for initial page
myApp.onPageInit('index', function (page) {
  //Do something here with home page

$( '#result' ).empty();

$.getJSON('http://www.smilesavers.net.au/map_data.php', function(response) {
    

alert('got data');


})


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