// NAV -> scroll -> Sections
$('nav a').on('click', function() {
    const goToSection = '#' + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    },1000)
})


// Arrow - show / hide
function showArrow() {
    if($(window).scrollTop() > 70) {
        $('.arrow').addClass('active');
    }
    else{
        $('.arrow').removeClass('active');
    }
}

$(window).on('scroll', showArrow);


// Arrow - scroll window
function scrollUp() {
    $('body, html').animate({
        scrollTop: $('nav').offset().top
    },1000)
}

$('.arrow').on('click', scrollUp);