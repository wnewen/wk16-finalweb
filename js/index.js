$(document).ready(function(){
    // when a hamburger menu is clicked
    let $ul = $(".nav-ul"),
        $menu = $(".btn-hamburger");

    $($menu).click(function(){
        // toggle menu-click Class
        $ul.toggleClass("menu-click");
    });// end click event handler

    let $pageup = $(".page-up-box");
    $($pageup).click(function(){
        $('html,body').animate({scrollTop: 0}, 900);
    })
});
// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".web-logo",{
//     x:-600,
//     duration:8,
//     scrollTrigger:{
//         trigger:".web-logo",
//         start:"bottom 15%",
//         end:"30% 15%",
//         scrub:1,
//         toggleActions:"play none none none",
//         markers:true,
//     }     
//     })
window.addEventListener("load",function(){
        const loader=document.querySelector(".loader")
        console.log(loader);
    });
    $(function(){
        new WOW().init();
    });
