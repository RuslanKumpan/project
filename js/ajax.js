$(".forms").submit(function (e) {
    //Перехват события с отправкой формой
    e.preventDefault();
    $.ajax({
        //Отправка файлов
        type: "POST",
        dataType: "json",
        url: $(this).attr("action"),
        data: $(this).serialize(),
        // Проверка на успешность
        success: function (response) {
            if(response.status == "success"){
            alert("Успешно!");
            } else{
                alert ("Не успешно: " + response.message);
            }
        },
        error: function () {
            alert("Такое сообщение от вас уже существует. Создайте нечто новое)");
        }
    });
});

$("body").on("submit", "#form-popup", function(e){
    //Перехват события с отправкой формой
    e.preventDefault();
    $.ajax({
        //Отправка файлов
        url: $(this).attr("action"),
        type: "POST",
        dataType: "json",
        data: $(this).serialize(),
        // Проверка на успешность
        success: function (response) {
            if(response.status == "success"){
                alert("Успешно!");
                return false;
            } else{
                alert ("Не успешно: " + response.message);
                return false;
            }
        },
        error: function () {
            alert("Такое сообщение от вас уже существует. Создайте нечто новое)");
            return false;
        }
    });
});