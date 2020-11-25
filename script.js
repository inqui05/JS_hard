'use strict';
let arr = ['1532', '28462.2', '956.2848', '4542', '632.1', '9595.25', '444.444'],
    maxNumber = 100;

function isWantedNumbers( str ){
    if ( +str.substring( 0, 1 ) === 2 || +str.substring( 0, 1 ) === 4){
        return true;
    } else {
        return false;
    }
}

function findNumbers(anyArr){
    let trueNumbersArr = [];
    for( let i = 0; i < anyArr.length ; i++ ){
        if ( isWantedNumbers( anyArr[i] ) ){
            trueNumbersArr.push( anyArr[i] );
        }
    }
    return trueNumbersArr;
}

/*Вообще, я и саv не знаю, нужна ли тут функция. Не знаю, насколько это важно, но решил написать
 чистую функцию выше (хотя можно туда запихнуть console.log и не дурить голову).
 Правда тут все равно уперся в то, что так не получится. Буду рад комментарию, что делать в этом случае*/
function printNumbers(anyArr){
    for( let i = 0; i < anyArr.length ; i++){
        console.log( anyArr[i] );
    }
}

//the second part of homework
function isPrimeNumber(number){
    for ( let i = 2; i < number; i++){
        if (number % i === 0 && number !== 2){
            return false;
        }
    }
    return true;
}

function printPrimeNumbers(number){
    for ( let i = 2; i < number; i++){
        if (isPrimeNumber(i)){
            console.log(i + ` - делители этого числа ${1} и ${i}`);
        }
    }
}

printNumbers( findNumbers(arr) );
printPrimeNumbers(maxNumber);