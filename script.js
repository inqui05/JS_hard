'use strict';
/*Я бы мог сделать все одной большой функцией (вроде так в задании). Но раз лучше сразу 
делать правильно, то как я понял из теории - одна функция должна делать только одну работу*/
let data = '    It is a string! Ahahaha hohoho hihihi   ',
    maxCharacters = 30;

function isString( data ){
    if ( typeof data !== 'string' ){
        return false;
    } else {
        return true;
    }
}

function fixTheString( data ){
    data = data.trim();
    if ( data.length > maxCharacters ){
        return data.substring(0, maxCharacters) + '...' ;
    } else {
        return data;
    }
}

function checkAndFix(data){
    if (isString(data)){
        return fixTheString(data);
    } else {
        return 'Unfortunately, your data is not a string!';
    }
}

console.log( checkAndFix( data) );