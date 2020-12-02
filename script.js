'use strict';
let daysOfTheWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", 
    "Октября", "Ноября", "Декабря"];
    //массив используется для проверки окончания Ы при выводе минут и секунд
    let endingsInTheWord1 = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];
    //массив используется для проверки окончания А при выводе минут и секунд
    let endingsInTheWord2 = [1, 21, 31, 41, 51];

    function checkHours(number){
        if (number === 1 || number === 21){
            return ' час ';
        } else if (number === 2 || number === 3 || number === 4 || number === 22  || number === 23){
            return ' часа ';
        } else {
            return ' часов ';
        }
    }

    function checkMinutes(number){
        if (endingsInTheWord1.indexOf(number) !== -1){
            return ' минуты ';
        } else if (endingsInTheWord2.indexOf(number) !== -1){
            return ' минута ';
        } else {
            return ' минут ';
        }
    }

    function checkSeconds(number){
        if (endingsInTheWord1.indexOf(number) !== -1){
            return ' секунды';
        } else if (endingsInTheWord2.indexOf(number) !== -1){
            return ' секунда';
        } else {
            return ' секунд';
        }
    }

    function addZero(number){
        if (number < 10){
            return '0' + number.toString();
        } else {
            return number;
        }
    }

    function printTheFirstWay(){
        let date = new Date();
        document.write(`Сегодня ${daysOfTheWeek[date.getDay() - 1]}, ${date.getDate()} 
        ${months[date.getMonth()]} ${date.getFullYear()} года, ${date.getHours()} 
        ${checkHours(date.getHours())} ${date.getMinutes()} ${checkMinutes(date.getMinutes())}
         ${date.getSeconds()} ${checkSeconds(date.getSeconds())}<br/>`);
    }

    function printTheSecondWay(){
        let date = new Date();
        document.write(`${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.
        ${date.getFullYear()} - ${addZero(date.getHours())}:${addZero(date.getHours())}
        :${addZero(date.getSeconds())}<br/>`);
    }

    setInterval(printTheFirstWay, 1000);
    setInterval(printTheSecondWay, 1000);