$(document).ready(function () {
    /***************** NAVBAR SEARCH & MENU BUTTONS - START *****************/
    const searchButton = $("#navbar_search_btn");
    const inputContainer = $("#navbar_search_input_container");
    const closeInputContainerButton = $("#navbar_search_close_btn");
    const menuBurgerButton = $("#navbar_burger_btn");
    const navbarMenu = $("#navbar_menu");
    const navbarMenuCloseButton = $("#navbar_menu_close_btn");

    searchButton.on("click", function () {
        searchButton.fadeOut(160);
        inputContainer.animate({
            width: "380px"
        }, 320);
    });

    closeInputContainerButton.on("click", function () {
        inputContainer.animate({
            width: "0px"
        }, 320, function () {
            searchButton.fadeIn(160);
        });
    });

    menuBurgerButton.on("click", function () {
        navbarMenu.css("display", "flex");
    });

    navbarMenuCloseButton.on("click", function () {
        navbarMenu.css("display", "none");
    });
    /***************** NAVBAR SEARCH & MENU BUTTONS - ENDED *****************/

    /***************** NAVBAR MENU LOGICS - START *****************/
    $("#menu").on("click", "a[data-dropdown-observed]", function (event) {
        event.preventDefault();
        var $this = $(this);
        var targetId = $this.data("dropdown-observed");
        var $dropdown = $("#" + targetId);
        $(".menu a").removeClass("active");
        if ($dropdown.is(":visible")) {
            $dropdown.hide();
        } else {
            $(".menu__dropdown").hide();
            $(".menu__dropdown-list ul").hide();
            $dropdown.show();
        }
        $this.addClass('active');
    });

    $(".menu").on("click", ".menu__dropdown-link[data-dropdown-observed]", function (event) {
        event.preventDefault();
        var $this = $(this);
        var targetId = $this.data("dropdown-observed");
        var $dropdown = $("#" + targetId);
        $(".menu__dropdown-link").removeClass("active");
        if ($dropdown.is(":visible"))
            $dropdown.hide();
        else
            $dropdown.show();
        $this.addClass("active");
    });
    /***************** NAVBAR MENU LOGICS - ENDED *****************/
});