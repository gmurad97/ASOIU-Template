$(document).ready(function(){
    /***************** NAVBAR SEARCH & MENU BUTTONS - BEGIN *****************/
    /***************** NAVBAR SEARCH & MENU BUTTONS - ENDED *****************/

    /***************** NAVBAR MENU LOGICS - BEGIN *****************/
    /***************** NAVBAR MENU LOGICS - ENDED *****************/
});


















$(document).ready(function () {
    // Скрываем все подменю по умолчанию
    $('.menu-mobile__dropdown-list').hide();

    // Инициализация активных меню при загрузке страницы
    $('.menu-mobile__link.active').each(function () {
        var $submenu = $(this).next('.menu-mobile__dropdown-list');

        // Открываем текущее подменю, если оно существует
        if ($submenu.length) {
            $submenu.show(); // Открываем подменю без анимации
        }

        // Раскрываем все родительские подменю, если это вложенное меню
        $(this).parents('.menu-mobile__dropdown-list').show(); // Открываем все родительские подменю
    });

    // Обработчик клика по элементу с подменю
    $('.menu-mobile__item > a').on('click', function (e) {
        e.preventDefault();

        // Получаем текущее подменю
        var $submenu = $(this).next('.menu-mobile__dropdown-list');
        var $icon = $(this).find('i'); // Иконка внутри ссылки
        var $currentLink = $(this); // Текущий элемент Link (a)

        // Если текущий элемент - верхнего уровня (нет родительского dropdown-list)
        if (!$(this).parents('.menu-mobile__dropdown-list').length) {
            // Закрываем все подменю верхнего уровня, кроме того, на которое кликаем
            $('.menu-mobile__dropdown-list').not($submenu).slideUp(160);
            $('.menu-mobile__link > i').not($icon).css('transform', 'rotate(0deg)'); // Возвращаем другие иконки в исходное положение

            // Удаляем класс active со всех ссылок верхнего уровня
            $('.menu-mobile__link').removeClass('active');
        }

        // Показать или скрыть текущее подменю
        if ($submenu.length) {
            // Если подменю открыто, закрываем его и все вложенные подменю
            if ($submenu.is(':visible')) {
                $submenu.find('.menu-mobile__dropdown-list').slideUp(160); // Закрываем все вложенные подменю
                // Убираем класс active у всех вложенных ссылок
                $submenu.find('.menu-mobile__link').removeClass('active');
            }

            // Показать или скрыть текущее подменю
            $submenu.slideToggle(160);

            // Добавляем/удаляем класс active для текущего элемента Link
            $currentLink.toggleClass('active');

            // Проверяем текущее состояние иконки и изменяем угол поворота
            if ($icon.css('transform') === 'none' || $icon.css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
                $icon.css({
                    'transform': 'rotate(-180deg)',
                    'transition': 'transform 0.3s ease'
                });
            } else {
                $icon.css({
                    'transform': 'rotate(0deg)',
                    'transition': 'transform 0.3s ease'
                });
            }
        }
    });
});








$(document).ready(function () {













    /***************** NAVBAR SEARCH & MENU BUTTONS - START *****************/
    var $searchButton = $("#navbar_search_btn");
    var $inputContainer = $("#navbar_search_input_container");
    var $closeInputContainerButton = $("#navbar_search_close_btn");
    var $menuBurgerButton = $("#navbar_burger_btn");
    var $navbarMenu = $("#navbar_menu");
    var $navbarNavigation = $(".navbar__navigation");
    var $navbarMenuCloseButton = $("#navbar_menu_close_btn");
    var $logo = $(".navbar__logo"); // Логотип
    var $navbarSearch = $(".navbar__search"); // Родительский контейнер навигации


    var initialLogoWidth = $logo.outerWidth(); // Изначальная ширина логотипа
    var initialLogoMargin = $logo.css('margin-left'); // Изначальный margin логотипа

    if ($searchButton.length) {
        $searchButton.on("click", function () {
            // Скрыть логотип
            $logo.css({
                width: "0px",
                marginLeft: "0px",
            });

            $navbarSearch.css({
                window: "100%",
            });


            // Расширить форму поиска на всю ширину
            $inputContainer.css({
                width: "100%" // Устанавливаем ширину формы на 100%
            });

            if ($(window).width() >= 575) {
                $navbarNavigation.css({
                    maxWidth: "512px" // Ширина 100% для экранов <= 524px
                });
                $logo.css({
                    width: "175px",
                    marginLeft: initialLogoMargin,
                });
            }




            $navbarNavigation.css({
                width: "100%" // Устанавливаем ширину навигационного контейнера на 100%
            });

            // Скрыть саму кнопку поиска
            $searchButton.css({
                width: "0px"
            });
        });
    }

    if ($closeInputContainerButton.length) {
        $closeInputContainerButton.on("click", function () {
            // Показать логотип обратно
            $logo.css({
                width: "175px",
                marginLeft: initialLogoMargin
            });


            $navbarNavigation.css({
                width: "0%" // Устанавливаем ширину навигационного контейнера на 100%
            });

            // Свернуть форму поиска обратно
            $inputContainer.css({
                width: "0px"
            });

            // Вернуть кнопку поиска к исходной ширине
            $searchButton.css({
                width: "90px"
            });
        });
    }


    /*     if ($searchButton.length) {
            $searchButton.on("click", function () {
                $searchButton.css({
                    width: "0px"
                });
                $inputContainer.css({
                    width: "380px"
                });
            });
        }
        if ($searchButton.length) {
            $searchButton.on("click", function () {
                $searchButton.css({
                    width: "0px"
                });
                $inputContainer.css({
                    width: "380px"
                });
            });
        }
     */
    /*     if ($closeInputContainerButton.length) {
            $closeInputContainerButton.on("click", function () {
                $inputContainer.css({
                    width: "0px"
                });
                $searchButton.css({
                    width: "90px"
                });
            });
        } */









    if ($menuBurgerButton.length) {
        $menuBurgerButton.on("click", function () {
            $navbarMenu.css("display", "flex");
            $("body").css("overflow", "hidden");
        });
    }

    if ($menuBurgerButton.length) {
        $navbarMenuCloseButton.on("click", function () {
            $navbarMenu.css("display", "none");
            $("body").css("overflow", "auto");
        });
    }

    /***************** NAVBAR SEARCH & MENU BUTTONS - ENDED *****************/





















    /***************** NAVBAR MENU LOGICS - START *****************/
    $(document).ready(function () {
        // Инициализация активных меню при загрузке страницы
        $(".menu__link.active, .menu__dropdown-link.active").each(function () {
            var $this = $(this);
            var targetId = $this.data("dropdown-observed");
            var $dropdown = $("#" + targetId);
    
            // Если есть вложенное меню, показываем его
            if ($dropdown.length) {
                $dropdown.show(); // Открываем меню
            }
    
            // Открываем все родительские dropdown, если это вложенный элемент
            $this.parents('.menu__dropdown').show();
        });
    
        // Обработчик клика по элементам с data-dropdown-observed
        $("#menu").on("click", "a[data-dropdown-observed]", function (event) {
            event.preventDefault();
            var $this = $(this);
            var targetId = $this.data("dropdown-observed");
            var $dropdown = $("#" + targetId);
            
            // Удаляем класс active со всех элементов
            $(".menu a").removeClass("active");
    
            if ($dropdown.is(":visible")) {
                $dropdown.hide();
                $this.removeClass("active"); // Убираем класс active при повторном нажатии
            } else {
                $(".menu__dropdown").hide();
                $(".menu__dropdown-list ul").hide();
                $dropdown.show();
                $this.addClass("active"); // Добавляем класс active
            }
        });
    
        $(".menu").on("click", ".menu__dropdown-link[data-dropdown-observed]", function (event) {
            event.preventDefault();
            var $this = $(this);
            var targetId = $this.data("dropdown-observed");
            var $dropdown = $("#" + targetId);
    
            // Удаляем класс active со всех ссылок
            $(".menu__dropdown-link").removeClass("active");
    
            if ($dropdown.is(":visible")) {
                $dropdown.hide();
                $this.removeClass("active"); // Убираем класс active при повторном нажатии
            } else {
                $dropdown.show();
                $this.addClass("active"); // Добавляем класс active
            }
        });
    });
    

    /***************** NAVBAR MENU LOGICS - ENDED *****************/

    /***************** OWL-CAROUSEL-2 INITIALIZATION - START *****************/
    /* var $carousel = $("#latest_news_carousel"); */


    $("#latest_news_carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        items: 3,
        navText: [
            "<i class='ri-arrow-left-s-line'></i>",
            "<i class='ri-arrow-right-s-line'></i>",
        ],
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            576: {
                items: 1
            },
            0: {
                items: 1
            }
        }
    });

    $("#partners_owl_carousel").owlCarousel({
        loop: true,
        margin: 32,
        nav: false,
        items: 7,
        autoplay: true,
        autoplayTimeout: 2048,
        smartSpeed: 512,
        autoplayHoverPause: true,
        responsive: {
            1200: {
                items: 7
            },
            992: {
                items: 5
            },
            768: {
                items: 3
            },
            576: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    $("#about-carousel").owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            1200: {
                items: 7
            },
            992: {
                items: 5
            },
            768: {
                items: 3
            },
            576: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    $("#projects_owl_carousel").owlCarousel({
        loop: true,
        margin: 32,
        nav: false,
        items: 5,
        autoplay: true,
        autoplayTimeout: 2048,
        smartSpeed: 512,
        rtl: true,
        autoplayHoverPause: true,
        responsive: {
            1200: {
                items: 7
            },
            992: {
                items: 5
            },
            768: {
                items: 3
            },
            576: {
                items: 2
            },
            0: {
                items: 1
            }
        }
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












    /***************** FAQ DROPDOWN - START (new test algo)*****************/
    //не нужен проверочный код только количество,если кол-во нет то и цикла нет
    // Устанавливаем высоту для активных элементов на старте
    $(".faq__list").each(function () {
        // Контекст конкретного блока FAQ
        var $faqList = $(this);

        // Инициализация: раскрытие активных элементов
        $faqList.find(".faq__item.active .faq__answer").each(function () {
            $(this).css("max-height", $(this).prop("scrollHeight") + "px");
        });

        // Обработка кликов на вопросах внутри конкретного списка FAQ
        $faqList.find(".faq__question").on("click", function () {
            var parentItem = $(this).parent();
            var answer = parentItem.find(".faq__answer");

            // Если текущий элемент активен, то закрываем его
            if (parentItem.hasClass("active")) {
                answer.css("max-height", "0px");
                parentItem.removeClass("active");
            } else {
                // Закрываем все другие активные элементы в текущем блоке FAQ
                $faqList.find(".faq__item.active").each(function () {
                    var otherAnswer = $(this).find(".faq__answer");
                    otherAnswer.css("max-height", "0px");
                    $(this).removeClass("active");
                });

                // Открываем текущий элемент
                answer.css("max-height", answer.prop("scrollHeight") + "px");
                parentItem.addClass("active");
            }
        });
    });


    /***************** FAQ DROPDOWN - ENDED *****************/


    
});






$(document).ready(function() {
    const rows = parseInt($('#reservation_table').data('rows-count'));
    const cols = parseInt($('#reservation_table').data('column-count'));
    const filledData = $('#reservation_table').data('filled');

    // Если data-filled не задан, используем пустой массив
    const filledCells = filledData ? filledData.split(',') : [];

    const tbody = $('<tbody></tbody>');
    $('#reservation_table').append(tbody);

    for (let i = 1; i <= rows; i++) {
        let row = '<tr>';
        for (let j = 1; j <= cols; j++) {
            const cellId = `${i}-${j}`;
            const isFilled = filledCells.includes(cellId);
            const cellClass = isFilled ? 'filled' : 'empty';
            const cellContent = isFilled ? '<div class="reservation__filled-cell"><i class="ri-close-large-fill"></i></div>' : j;

            row += `<td class="${cellClass}" data-rows="${i}" data-columns="${j}" data-fill="${cellClass}" data-cell="${cellId}">${cellContent}</td>`;
        }
        row += `<td class="row-number">${i}</td>`;
        row += '</tr>';
        tbody.append(row);
    }

    // Устанавливаем класс в зависимости от состояния таблицы
    $('#reservation_table').addClass(filledCells.length > 0 ? 'filled' : 'empty');

    $('#reservation_table').on('click', 'td:not(.row-number)', function () {
        if ($(this).hasClass('filled')) {
            return; // Если ячейка занята, ничего не делаем
        }

        // Если ячейка уже выделена, убираем выделение
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $('#reservation_selected_cell').val(''); // Очищаем значение в скрытом инпуте
        } else {
            // Сброс выделения всех ячеек
            $('#reservation_table td.selected').removeClass('selected');

            // Выделяем новую ячейку
            $(this).addClass('selected');
            let row = $(this).data('rows');
            let col = $(this).data('columns');
            $('#reservation_selected_cell').val(`${row}-${col}`); // Устанавливаем значение в скрытый инпут
        }
    });
});













new WOW().init(); // not if
Fancybox.bind("[data-fancybox='laboratory']"); // not if
Fancybox.bind("[data-fancybox='gallery']"); // not if
Fancybox.bind("[data-fancybox='summer_school_about_us']"); // not if
Fancybox.bind("[data-fancybox='news']"); // not if





$('button[data-password-toggle]').on('click', function () {
    // Получаем идентификатор из data-password-toggle
    const targetId = $(this).data('password-toggle');
    // Находим поле ввода по этому идентификатору
    const passwordField = $(targetId);
    // Переключаем тип поля ввода
    const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
    passwordField.attr('type', type);
    // Переключаем иконку
    $(this).find('i').toggleClass('ri-eye-fill ri-eye-off-fill');
});






// Open modal when eye icon is clicked
$('.teacher__social-link[data-modal]').on('click', function (event) {
    event.preventDefault();

    // Get the modal ID and show the modal
    var modalId = $(this).data('modal');
    $('#' + modalId).css('display', 'grid');
    $('body').css('overflow', 'hidden'); // Disable body scroll
});

// Close modal when close button is clicked or when clicking outside the modal content
$('.teacher__modal').on('click', function (event) {
    if ($(event.target).is('.teacher__modal, .teacher__modal-close, .teacher__modal-close *')) {
        $(this).css('display', 'none');
        $('body').css('overflow', ''); // Enable body scroll
    }
});









//Vaqif
// OPEn DROp down bezpantovo

$(document).ready(function () {
    $(".register-quick-transition__btn").click(function () {
        $(this).closest(".register-quick-transition__container").find(".register_info").slideToggle(160);
        var icon = $(this).find("i");
        if (icon.css("transform") === 'none') {
            icon.css("transform", "rotate(90deg)");
        } else {
            icon.css("transform", "none");
        }
    });
});
