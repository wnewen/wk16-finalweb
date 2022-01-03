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


// //airplan picture
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".biography-box",{
//     x:700,
//     duration:5,
//     scrollTrigger:{
//         trigger:".biography-box",
//         start:"350px 50%",
//         end:"900px 10%",
//         scrub:1,
//         toggleActions:"play none resume none",
//         //end:()=>`+=${document.querySelector(".square").offsetHeight}`,
//         /*markers:{
//             startColor:"purple",
//             endColor:"fuchsia",
//             fontSize:"1rem",
//         }*/
//     }
// })
window.addEventListener("load",function(){
    const loader=document.querySelector(".loader")
    console.log(loader);
});