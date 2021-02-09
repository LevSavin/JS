var answer, ok;

var questions = []; //массив вопросов
var answers = []; //массив ответов

function question(question, option1, option2, option3, option4, rightAnsw, answer) {
    do {
        ok = false;
        answer = +prompt(question + option1 + option2 + option3 + option4 + '-1 - Выход из игры');

        if (answer == -1) {
            break;
        } else {
            ok = isAnswer(answer);
        }
    }
    while (!ok);

    if (answer == 1) answer = option1;
    else if (answer == 2) answer = option2;
    else if (answer == 3) answer = option3;
    else if (answer == 4) answer = option4;
    else answer = '-1 - Выход из игры'

    answers.push(answer);
    questions.push(question);

    if (answer == '-1 - Выход из игры')
        console.log('выход из игры')
    else if (answer !== rightAnsw) {
        alert("Правильный ответ " + rightAnsw + "Вы проиграли");
        ok = false;
    } else {
        alert("Ответ " + rightAnsw + "и это правильный ответ!");
        ok = true;
    }

    return (ok);
}

function isAnswer(answer) {
    if (isNaN(answer) || !isFinite(answer)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (answer < 1 || answer > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

event = question(question1.q, question1.a1, question1.a2, question1.a3, question1.a4, question1.rightAnsw, answer) //Выводим первый вопрос
switch (event) {
    case false:
        break;
    case true:
        event = question(question2.q, question2.a1, question2.a2, question2.a3, question2.a4, question2.rightAnsw, answer);
        switch (event) {
            case false:
                break;
            case true:
                event = question(question3.q, question3.a1, question3.a2, question3.a3, question3.a4, question3.rightAnsw, answer);
                switch (event) {
                    case false:
                        break;
                    case true:
                        alert('Вы победили!')
                }
        }
}

var i = +prompt('Введите номер вопроса', 1);
while (!(i > 0 && i <= answers.length)) {
    var i = +prompt('Введите значение от 1 до ' + (answers.length), 1);
}
i--;
alert(questions[i] + '\n' + answers[i] + '\nСпасибо за игру');