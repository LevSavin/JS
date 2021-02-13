//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var answer, event, ok;

var questions = []; //массив вопросов
var answers = []; //массив ответов

function questionAndFork(description, option1, option2, quesNum, event) {
    do {
        ok = false;
        event = +prompt(description + option1 + option2 + '-1 - Выход из игры');

        if (event == -1) {
            break;
        } else {
            ok = isAnswer(quesNum, event);
        }
    }
    while (!ok);

    if (event == 1) answer = option1;
    else if (event == 2) answer = option2;
    else answer = '-1 - Выход из игры'

    answers.push(answer);
    questions.push(description);

    return (event);
}

event = questionAndFork(works.a00, works.a1, works.a2, works.a0, event); //Выводим первый вопрос
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        event = questionAndFork(works.b00, works.b1, works.b2, works.b0, event);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                event = questionAndFork(works.d00, works.d1, works.d2, works.d0, event);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                event = questionAndFork(works.d00, works.d1, works.d2, works.d0, event);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        event = questionAndFork(works.c00, works.c1, works.c2, works.c0, event);
        switch (event) {
            case 1: // Второе действие
                event = questionAndFork(works.d00, works.d1, works.d2, works.d0, event);
                break;
            case 2: // Второе действие
                event = questionAndFork(works.d00, works.d1, works.d2, works.d0, event);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

var i = +prompt('Введите номер вопроса', 1);
while (!(i > 0 && i <= answers.length)) {
    var i = +prompt('Введите значение от 1 до ' + (answers.length), 1);
}
i--;
alert(questions[i] + '\n' + answers[i] + '\nСпасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}