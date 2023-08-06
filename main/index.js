$(document).ready(function() {
    $('#submit_button').on('click', function(e) {
        e.preventDefault();

        const name = $('#name_input').val().trim();
        const todo = $('#todo_input').val().trim();

        if (name === '' || todo === '') {
            alert('이름과 한일을 모두 입력하세요.');
        } else {
            var listItem = $("<li></li>")
            .html(`이름 : ${name}　<br>할일: ${todo}`) 
            .attr("data-name", name)
            .attr("data-todo", todo);
        

            $("#comment_list").append(listItem);
            $("#name_input").val("");
            $("#todo_input").val("");
        }
    });

    $('#submit_button_praise').on('click', function(e) {
        e.preventDefault();

        const name_praised = $('#name_input_praise').val().trim();
        const todo = $('#praised_todo_input').val().trim();
        const praise = $('#praise_input').val().trim();

        if (name_praised === '' || praise === '' || todo === '') {
            alert('이름과 칭찬, 한일 내용을 모두 입력하세요.');
        } else {
            if (name_praised === '엘린') {
                $('.my_praised_list').append(`<li>이름: ${name_praised}<br>한일: ${todo}<br>칭찬: ${praise}</li>`);
            }

            $('.praised_list').append(`<li>이름: ${name_praised}<br>한일: ${todo}<br>칭찬: ${praise}</li>`);
            $('#name_input_praise').val('');
            $('#praised_todo_input').val('');
            $('#praise_input').val('');
        }
    });
});

$(document).on("click", "#comment_list li", function() {
    var name = $(this).attr("data-name");
    var todo = $(this).attr("data-todo");

    $("#name_input_praise").val(name);
    $("#praised_todo_input").val(todo);
});
