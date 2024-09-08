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










    
    $('#menu').on('click', 'a[data-dropdown-observed]', function (event) {
        event.preventDefault(); // предотвращаем переход по ссылке

        var $this = $(this);
        var targetId = $this.data('dropdown-observed');
        var $dropdown = $('#' + targetId);

        // Переключаем видимость первого уровня dropdown
        if ($dropdown.is(':visible')) {
            $dropdown.hide(); // если видимый, скрыть
        } else {
            $('.dropdown-content').hide(); // скрываем все остальные dropdown
            $('.menu__dropdown-list ul').hide(); // скрываем все вложенные списки
            $dropdown.show(); // показываем текущий dropdown
        }

        // Добавляем/убираем класс active у текущего элемента меню
        $this.toggleClass('active');
        $this.closest('ul').find('a').not($this).removeClass('active');
    });

    // Обработчик для второго и третьего уровней
    $('.menu').on('click', '.menu__dropdown-link[data-dropdown-observed]', function (event) {
        event.preventDefault(); // предотвращаем переход по ссылке

        var $this = $(this);
        var targetId = $this.data('dropdown-observed');
        var $dropdown = $('#' + targetId);

        // Переключаем видимость второго и третьего уровня dropdown
        if ($dropdown.is(':visible')) {
            $dropdown.hide(); // если видимый, скрыть
        } else {
            $dropdown.show(); // показываем текущее подменю
        }

        // Добавляем/убираем класс active у текущего элемента подменю
        $this.toggleClass('active');
        $this.closest('ul').find('a').not($this).removeClass('active');
    });


});


