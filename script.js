'use strict';
const daysOfTheWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    timeOfDay = ['Доброе утро!', 'Добрый день!', 'Добрый вечер!', 'Доброй ночи!'];
let date = new Date();

function addZero(number){
    if (number < 10){
        return '0' + number.toString();
    } else {
        return number;
    }
}

function addWelcome(){
    const element = document.querySelector('.welcome');
    if (date.getHours() >= 0 && date.getHours() < 6) {
        element.textContent = timeOfDay[3];
    } else if (date.getHours() >= 6 && date.getHours() < 12) {
        element.textContent = timeOfDay[0];
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        element.textContent = timeOfDay[1];
    } else {
        element.textContent = timeOfDay[2];
    }
}

function addDayOfTheWeek(){
    const element = document.querySelector('.today');
    element.textContent = `Сегодня: ${daysOfTheWeek[date.getDay() - 1]}`;
}

function addCurrentTime(){
    const element = document.querySelector('.time');
    let date = new Date();
    element.textContent = `Текущее время: ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
}

function howLongToNY(){
    const element = document.querySelector('.NY');
    const untilNY = new Date('01/01/2021').getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (untilNY - dateNow) / 1000;

    let daysToNY = Math.floor(timeRemaining / 60 / 60 / 24);

    if (daysToNY > 4) {
        element.textContent = `До нового года осталось ${daysToNY} дней`;
    } else if(daysToNY <= 4 && daysToNY > 1) {
        element.textContent = `До нового года осталось ${daysToNY} дня`;
    } else if(daysToNY === 1) {
        element.textContent = `До нового года осталось ${daysToNY} день`;
    } else {
        element.textContent = `Уже Новый год!`;
    }
}

    setInterval(howLongToNY, 1000);
    setInterval(addCurrentTime, 1000);
    setInterval(addDayOfTheWeek,1000);
    setInterval(addWelcome, 1000);