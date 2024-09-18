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

            // Убедиться, что родительский контейнер навигации тоже занимает всю ширину
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


    // Размер таблицы
    const rows = 16;
    const cols = 16;

    // Создаем таблицу
    for (let i = 0; i <= rows; i++) {
        let row = '<tr>';
        for (let j = 0; j <= cols; j++) {
            if (i === 0 && j === 0) {
                // Верхний левый угол, пустой
                row += '<th></th>';
            } else if (i === 0) {
                // Верхние цифры (номера колонок)
                row += `<th class="col-header">${j}</th>`;
            } else if (j === 0) {
                // Левые цифры (номера рядов)
                row += `<th class="row-header">${i}</th>`;
            } else {
                // Заполняем ячейки цифрами от 1 до 16 и добавляем класс "filled" или "empty"
                let cellClass = (Math.random() > 0.7) ? 'filled' : 'empty'; // Рандомно выбираем занятость
                let cellContent = cellClass === 'filled' ? '<i class="ri-close-circle-fill"></i>' : j; // Иконка для занятых мест
                row += `<td class="${cellClass}" data-row="${i}" data-col="${j}">${cellContent}</td>`;
            }
        }
        row += '</tr>';
        $('#reservationTable').append(row);
    }

    // Клик по ячейке
    $('#reservationTable').on('click', 'td', function () {
        // Проверяем, занята ли ячейка
        if ($(this).hasClass('filled')) {
            return; // Если занята, ничего не делаем
        }

        // Если ячейка не занята, сбрасываем выделение с других ячеек
        $('#reservationTable td.selected').removeClass('selected');

        // Устанавливаем новую выбранную ячейку
        $(this).addClass('selected');

        // Обновляем скрытый инпут значением выбранной ячейки
        let row = $(this).data('row');
        let col = $(this).data('col');
        $('#selectedCell').val(`${row}-${col}`);
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