'use strict'
/*В задание не было указано, что необходимо производить проверку входных данных, 
поэтому по умолчанию подразумевается, что пользователь вводит данные в нужном формате*/
let lang = confirm( 'Вы согласны установить русский язык? При отмене будет выставлен английский!' );
let namePerson = prompt( 'Введите имя', 'Артем' );
let dayOfTheWeek = {
    false: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sanday',
    true: 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'
};

//пункт 1 через if
if (lang){
    console.log( 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье' );
} else {
    console.log( 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sanday');
}

//пункт 1 через switch-case
switch(lang){
    case true: {
        console.log( 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье' );
        break;
    }
    case false: {
        console.log( 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sanday');
        break;
    }
}

//пункт 1 через многомерный массив и без if/switch
console.log(dayOfTheWeek[lang]);

//пункт 2
(namePerson === 'Артем') ? console.log( 'директор' ) : 
    (namePerson === 'Максим') ? console.log( 'преподаватель' ) : console.log( 'студент' );