$('#mob-header-hamburger-fa').on('click', openNav)

$('.closeButton').on('click', closeNav)

$('.first-a').on('click', scrollFirst)

$('.second-a').on('click', scrollSecond)

$('.third-a, .dt-top-box-intro-connect').on('click', scrollThird)

$('.first-a-dt').on('click', scrollFirst)

$('.second-a-dt').on('click', scrollSecond)

$('.third-a-dt').on('click', scrollThird)

$('.mob-header-logo-h3').on('click', scrollThirdFromLogo)

$('.mob-top-box-intro-connect').on('click', scrollThird)

function openNav() {
    $('.sideMenu').css('width', '100%')
}

function openNavDt() {
    $('.dt-sideMenu').css('width', '30vw')
}

function closeNav() {
    $('.sideMenu').css('width', '0')
}

function closeNavDt() {
    $('.dt-sideMenu').css('width', '0')
}

function scrollFirst() {
    $('.sideMenu').css('width', '0')
    $('html').animate({
        scrollTop: $('.mob-projects-title-h2').offset().top
    }, 1000)
}

function scrollSecond() {
    $('.sideMenu').css('width', '0')
    $('html').animate({
        scrollTop: $('.mob-skills-title-h2').offset().top
    }, 1000)
}

function scrollThird() {
    $('.sideMenu').css('width', '0')
    $('html').animate({
        scrollTop: $('.mob-contact-title-h2').offset().top
    }, 1000)
}

function scrollThirdFromLogo() {
    $('.sideMenu').css('width', '0')
    $('.mob-header-logo-h3').toggleClass('mob-header-logo-h3-clicked')
    $('html').animate({
        scrollTop: $('.mob-contact-title-h2').offset().top
    }, 1000)
}