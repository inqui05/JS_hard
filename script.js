'use strict';
const daysOfTheWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    timeOfDay = ['Доброе утро!', 'Добрый день!', 'Добрый вечер!', 'Доброй ночи!'],
    h1 = document.querySelector('h1');
let date = new Date();

function addZero(number){
    if (number < 10){
        return '0' + number.toString();
    } else {
        return number;
    }
}

function addDay(){
    let day = document.createElement("p");
    if (date.getHours() >= 0 && date.getHours() < 6) {
        day.textContent = timeOfDay[3];
    } else if (date.getHours() >= 6 && date.getHours() < 12) {
        day.textContent = timeOfDay[0];
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        day.textContent = timeOfDay[1];
    } else {
        day.textContent = timeOfDay[2];
    }
    h1.after(day);
}

function addDayOfTheWeek(){
    let day = document.createElement("p");
    day.textContent = `Сегодня: ${daysOfTheWeek[date.getDay() - 1]}`;
    h1.after(day);
}

function addCurrentTime(){
    let day = document.createElement("p");
    day.textContent = `Текущее время: ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
    h1.after(day);
}

function howLongToNY(){
    let day = document.createElement("p");
    const untilNY = new Date('01/01/2021').getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (untilNY - dateNow) / 1000;

    let daysToNY = Math.floor(timeRemaining / 60 / 60 / 24);

    if (daysToNY > 4) {
        day.textContent = `До нового года осталось ${daysToNY} дней`;
    } else if(daysToNY <= 4 && daysToNY > 1) {
        day.textContent = `До нового года осталось ${daysToNY} дня`;
    } else if(daysToNY === 1) {
        day.textContent = `До нового года осталось ${daysToNY} день`;
    } else {
        day.textContent = `Уже Новый год!`;
    }
    h1.after(day);
}

    howLongToNY();
    addCurrentTime();
    addDayOfTheWeek();
    addDay();