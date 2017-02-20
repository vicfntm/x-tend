$(document).ready(function () {
    $(".easyscroll").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top-55;

        //анимируем переход на расстояние - top за 800 мс. N.B. Не забудь подключить jQuery!!!
        $('body,html').animate({ scrollTop: top }, 800);
    });


});

$(document).ready(function () {

    $("#toUp").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 55;

        //анимируем переход на расстояние - top за 800 мс. N.B. Не забудь подключить jQuery!!!
        $('body,html').animate({ scrollTop: top }, 800);
    });
});