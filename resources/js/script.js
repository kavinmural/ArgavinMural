$(document).ready(function() {
    /* Sticky Navigation */

    $('.js--about-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '80px;'
    });

    /* Scrolling with Button */

    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({scrollTop: $('.js--contact-section').offset().top}, 1000);
    });

    /* Smooth Scrolling Nav */

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    /* Animations on Scroll */

    $('.js--about-text').waypoint(function(direction){
        $('.js--about-text').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    $('.js--projects').waypoint(function(direction){
        $('.js--projects').addClass('animated zoomIn');
    }, {
        offset: '60%'
    });

    $('.js--company-logos').waypoint(function(direction){
        $('.js--company-logos').addClass('animated zoomIn');
    }, {
        offset: '60%'
    });

    $('.js--contact-form').waypoint(function(direction){
        $('.js--contact-form').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    /* Mobile Navigation */

    $('.js--small-menu').click(function() {
        var nav_bar = $('.js--nav-bar');
        nav_bar.slideToggle(200);

        icon_nav = $('.js--small-menu-button');
        if(icon_nav.hasClass('fa-bars')) {
            icon_nav.addClass('fa-times');
            icon_nav.removeClass('fa-bars');
        } else {
            icon_nav.addClass('fa-bars');
            icon_nav.removeClass('fa-times');
        }
    });
});