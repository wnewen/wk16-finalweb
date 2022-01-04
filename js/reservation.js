$(document).ready(function(){
    // when a hamburger menu is clicked
    let $ul = $(".nav-ul"),
        $menu = $(".btn-hamburger");

    $($menu).click(function(){
        // toggle menu-click Class
        $ul.toggleClass("menu-click");
    });// end click event handler

    let $pageup = $(".page-up-box");
    $($pageup).hover(function(){
        
    })
});
window.addEventListener("load",function(){
    const loader=document.querySelector(".loader")
    console.log(loader);
});
