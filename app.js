const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navlogo = document.querySelector('#navbar__logo')

//display Mobile Menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);
menuLinks.addEventListener('click',mobileMenu);
//Show active menu when scrolling
const highlightMenu = () =>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const CertMenu = document.querySelector('#Cert-page')
    const projectMenu = document.querySelector('#project-page')
    let scrollPos = window.scrollY

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){ 
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1500){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        CertMenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollPos < 2300){
        CertMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        projectMenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollPos < 3000){
        projectMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        CertMenu.classList.remove('highlight')
        return
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600)||elem){
        elem.classList.remove('highlight')

    }
}

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);

$('.owl-carousel').owlCarousel({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1200:{
            items:4
        }
    }
})