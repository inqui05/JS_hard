'use strict';
let daysOfTheWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    currentDay = new Date();
    currentDay = currentDay.getDay();

    function checkTheDays(arr, index, day){
        if ((index + 1) === day && (arr[index] === "Суббота" || arr[index] === "Воскресенье")){
            return arr[index].bold().italics();
        } else if (arr[index] === "Суббота" || arr[index] === "Воскресенье"){
            return arr[index].italics();
        } else {
            return arr[index];
        }
    }

    function print(arr){
        for (let i = 0; i < arr.length; i++){
            document.write(checkTheDays(daysOfTheWeek, i, currentDay)  + "<br>") ;
        }
    }

    print(daysOfTheWeek);