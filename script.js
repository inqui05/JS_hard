/*В задание не было указано, что необходимо производить проверку входных данных, 
поэтому по умолчанию подразумевается, что пользователь вводит данные в нужном формате*/
let lang = confirm( 'Вы согласны установить русский язык? При отмене будет выставлен английский!' );
let namePerson = prompt( 'Введите имя', 'Артем' );
let arr = [
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    ['Monday', "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sanday'],
];

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
lang ? console.log(arr[0].join(', ')) : console.log(arr[1].join(', '));

//пункт 2
(namePerson === 'Артем') ? console.log( 'директор' ) : 
    (namePerson === 'Максим') ? console.log( 'преподаватель' ) : console.log( 'студент' );