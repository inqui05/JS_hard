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
        let finalResult = null;
        for (let i = 0; i < arr.length; i++){
            finalResult += (checkTheDays(daysOfTheWeek, i, currentDay)) + "\n";
        }
        alert(finalResult);
    }

    print(daysOfTheWeek);

    /*жирный .bold() курсив .italics()
    */