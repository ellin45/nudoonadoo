$(document).ready(function() {
    $('#submit_button').on('click', function(e) {
        e.preventDefault();

        const name = $('#name_input').val().trim();
        const todo = $('#todo_input').val().trim();

        if (name === '' || todo === '') {
            alert('이름과 한일을 모두 입력하세요.');
        } else {
            $('#comment_list').append(`<li>이름: ${name}, 한일: ${todo}</li>`);
            $('#name_input').val('');
            $('#todo_input').val('');
        }
    });
});

$(document).ready(function() {
    $('#submit_button_praise').on('click', function(e) {
        e.preventDefault();

        const name_praised = $('#name_input_praise').val().trim();
        const praise = $('#praise_input').val().trim();

        if (name_praised === '' || praise === '') {
            alert('이름과 칭찬 내용을 모두 입력하세요.');
        } else {
            $('.praised_list').append(`<li>이름: ${name_praised}, 칭찬: ${praise}</li>`);
            if (name_praised === '엘린') {
                $('#my_praise_list').append(`<li>내가 받은 칭찬: ${praise}</li>`);
            }
            $('#name_input_praise').val('');
            $('#praise_input').val('');
        }
    });
});



