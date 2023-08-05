$(document).ready(function() {
    $('#submit_button').on('click', function(e) {
        e.preventDefault();

        const name = $('#name_input').val().trim();
        const todo = $('#todo_input').val().trim();

        if (name === '' || todo === '') {
            alert('이름과 한일을 모두 입력하세요.');
        } else {
            // 새로운 리스트 항목을 생성하고 data 속성을 추가합니다.
            var listItem = $("<li></li>")
                .text(name + ": " + todo)
                .attr("data-name", name)
                .attr("data-todo", todo);

            // 리스트에 새로운 항목을 추가합니다.
            $("#comment_list").append(listItem);

            // 입력창을 비웁니다.
            $("#name_input").val("");
            $("#todo_input").val("");
        }
    });
});

$(document).on("click", "#comment_list li", function() {
    // 클릭한 항목의 데이터를 가져옵니다.
    var name = $(this).attr("data-name");
    var todo = $(this).attr("data-todo");

    // 가져온 데이터를 칭찬 입력 창에 채워넣습니다.
    $("#name_input_praise").val(name);
    $("#praise_input").val("I appreciate you for " + todo);
});


$(document).ready(function() {
    $('#submit_button_praise').on('click', function(e) {
        e.preventDefault();

        const name_praised = $('#name_input_praise').val().trim();
        const praise = $('#praise_input').val().trim();

        if (name_praised === '' || praise === '') {
            alert('이름과 칭찬 내용을 모두 입력하세요.');
        } else {
            if (name_praised === '엘린') {
                $('.my_praised_list').append(`<li>이름: ${name_praised}, 칭찬: ${praise}</li>`);
            }

            $('.praised_list').append(`<li>이름: ${name_praised}, 칭찬: ${praise}</li>`);
            $('#name_input_praise').val('');
            $('#praise_input').val('');
        }
    });
});


$(document).on("click", "#comment_list li", function() {
    // 클릭한 항목의 데이터를 가져옵니다.
    let name = $(this).attr("data-name");
    let todo = $(this).attr("data-todo");
  
    // 가져온 데이터를 칭찬 입력 창에 채워넣습니다.
    $("#name_input_praise").val(name);
    $("#praise_input").val(todo);
  });
  