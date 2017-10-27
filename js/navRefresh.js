// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;


$(window).scroll(function (event) {
    didScroll = true;
    
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled() {
    var navbarHeight = $("#navMenuResume").height();
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.

    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#navMenuResume').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#navMenuResume').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}