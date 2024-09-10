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
        $("body").css("overflow", "hidden");
    });

    navbarMenuCloseButton.on("click", function () {
        navbarMenu.css("display", "none");
        $("body").css("overflow", "auto");
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
        $this.addClass("active");
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

    /***************** OWL-CAROUSEL-2 INITIALIZATION - START *****************/
    $("#latest_news_carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        items: 3,
        navText: [
            "<i class='fi fi-ts-angle-small-left'></i>",
            "<i class='fi fi-ts-angle-small-right'></i>",
        ],
        autoplay: false,
        autoplayHoverPause: true
    });

    $("#partners_owl_carousel").owlCarousel({
        loop: true,
        margin: 32,
        nav: false,
        items: 7,
        autoplay: true,
        autoplayTimeout: 2048,
        smartSpeed: 512,
        autoplayHoverPause: true
    });
    $("#projects_owl_carousel").owlCarousel({
        loop: true,
        margin: 32,
        nav: false,
        items: 5,
        autoplay: true,
        autoplayTimeout: 2048,
        smartSpeed: 512,
        autoplayHoverPause: true
    });

    /*
    
          items: 1,                   // Количество видимых элементов
      loop: true,                 // Зацикливание слайдера
      margin: 10,                 // Отступ между слайдами
      autoplay: true,             // Автозапуск
      autoplayTimeout: 3000,      // Интервал автозапуска (в миллисекундах)
      autoplayHoverPause: true,   // Приостановка автозапуска при наведении
      smartSpeed: 1000,           // Скорость анимации
      nav: true,                  // Показать навигационные стрелки
      dots: true                  // Показать точки навигации
    */
    /***************** OWL-CAROUSEL-2 INITIALIZATION - ENDED *****************/

    /***************** FAQ DROPDOWN - START *****************/
    // Устанавливаем высоту для активных элементов на старте
    $(".faq__item.active .faq__answer").each(function () {
        $(this).css("max-height", $(this).prop("scrollHeight") + "px");
    });

    $(".faq__question").on("click", function () {
        var parentItem = $(this).parent();
        var answer = parentItem.find(".faq__answer");

        // Если текущий элемент активен, то закрываем его
        if (parentItem.hasClass("active")) {
            answer.css("max-height", "0px");
            parentItem.removeClass("active");
        } else {
            // Закрываем все другие активные элементы
            $(".faq__item.active").each(function () {
                var otherAnswer = $(this).find(".faq__answer");
                otherAnswer.css("max-height", "0px");
                $(this).removeClass("active");
            });

            // Открываем текущий элемент
            answer.css("max-height", answer.prop("scrollHeight") + "px");
            parentItem.addClass("active");
        }
    });
    /***************** FAQ DROPDOWN - ENDED *****************/
});