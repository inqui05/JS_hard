'use strict';
let text = 'Угадай число от 1 до 100';

function startGame(){
    let number = Math.floor(Math.random() * 100) + 1,
        attempts = 10;
    askPersonNumber(text, number, attempts);
}

function isNumber(data){
    return !isNaN(parseFloat(data)) && isFinite(data);
}

function askPersonNumber(text, number, attempts){
    if (attempts === 0){
        if (confirm('Попытки закончились, хотите сыграть еще?')) {
            startGame();
        } else {
            alert('Спасибо за игру!');
        }
    } else {
        let ask = prompt(text); 
        console.dir(ask);

        if (ask === null){
            alert('Игра окончена!');
        } else if (!isNumber(ask)){
            askPersonNumber('Введи число!', number, attempts);
        } else {
              if(+ask === number){
                if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')){
                    startGame();
                }
            } else if (+ask > number){
                attempts--;
                alert(`Загаданное число меньше, осталось ${attempts} попыток...`);
                askPersonNumber('Пробуй! Напоминаю, от 1 до 100:', number, attempts);
            } else {
                attempts--;
                alert(`Загаданное число больше, осталось ${attempts} попыток...`);
                askPersonNumber('Пробуй! Напоминаю, от 1 до 100:', number, attempts);
            }
        }
    }  
}

startGame();