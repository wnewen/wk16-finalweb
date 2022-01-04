$(document).ready(function(){
    // when a hamburger menu is clicked
    let $ul = $(".nav-ul"),
    $menu = $(".btn-hamburger");

    $($menu).click(function(){
        // toggle menu-click Class
        $ul.toggleClass("menu-click");
    });// end click event handler
});