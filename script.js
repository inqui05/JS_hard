'use strict';
const producer = document.querySelector('.add_producer'),
    model = document.querySelector('.add_model'),
    year = document.querySelector('.add_year'),
    kilometers = document.querySelector('.add_kilometers'),
    table = document.getElementById('table'),
    tbody = document.querySelector('tbody'),
    addAuto = document.querySelector('.add-auto'),
    filterAuto = document.querySelector('.filter-auto'),
    findProducer = document.querySelector('.find_producer'),
    findModel = document.querySelector('.find_model'),
    findYear = document.querySelector('.find_year'),
    findKilometers = document.querySelector('.find_kilometers');

let sortCount = 1,
    lastTarget = null;

let myRows = Array.from(table.rows);

let listOfAuto = [
    {
        producer: 'Mercedes-Benz',
        model: 'C220',
        year: 2009,
        kilometers: 184550
    },
    {
        producer: 'Mini',
        model: 'Cooper',
        year: 2012,
        kilometers: 154023
    },
    {
        producer: 'BMW',
        model: 'X3',
        year: 2015,
        kilometers: 99999
    },
    {
        producer: 'Mazda',
        model: 6,
        year: 2018,
        kilometers: 24250
    },
    {
        producer: 'Nissan',
        model: 'Qashqai',
        year: 2012,
        kilometers: 105215
    },
    {
        producer: 'Volkswagen',
        model: 'Polo',
        year: 2015,
        kilometers: 222152
    },
    {
        producer: 'Mazda',
        model: 3,
        year: 2009,
        kilometers: 259532
    },
];

const addNewAutoInTabs = obj => {
    const rows = Array.from(table.rows);

    const row = document.createElement('tr');
    row.innerHTML = `
                    <tr>
                        <td>${rows.length}</td>
                        <td>${obj.producer}</td>
                        <td>${obj.model}</td>
                        <td>${obj.year}</td>
                        <td>${obj.kilometers}</td>
                    </tr>`;
    tbody.append(row);
};

const render = () => {
    if (JSON.parse(localStorage.getItem('autoTable')) !== null) {
        if (JSON.parse(localStorage.getItem('autoTable')).length > listOfAuto.length) {
            listOfAuto = [];
            JSON.parse(localStorage.getItem('autoTable')).forEach(value => {
                listOfAuto.push(value);
            });
        }
    }

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    listOfAuto.forEach(item => {
        addNewAutoInTabs(item);
    });
    myRows = Array.from(table.rows);
};

addAuto.addEventListener('submit', event => {
    event.preventDefault();
    if (producer.value === '') {
        producer.style.backgroundColor = "red";
        return;
    } else if (model.value === '') {
        model.style.backgroundColor = "red";
        return;
    } else if (year.value === '') {
        year.style.backgroundColor = "red";
        return;
    } else if (kilometers.value === '') {
        kilometers.style.backgroundColor = "red";
        return;
    } else {
        const auto = {
            producer: producer.value,
            model: model.value,
            year: year.value,
            kilometers: kilometers.value
        };
        listOfAuto.push(auto);
        localStorage.autoTable = JSON.stringify(listOfAuto);
        addAuto.reset();
    }

    render();
});

addAuto.addEventListener('input', event => {
    if (event.target.matches('.add_year, .add_kilometers')) {
        event.target.value = event.target.value.replace(/\D/g, '');
    }
});

render();
//сортируем строки таблицы
const sortTable = (arr, index) => {
    arr = arr.slice(1);
    let sort;

    if (sortCount % 2) {
        //выделено, чтобы числа сортировались как числа, а не ASCII символы
        if (index === 4 || index === 3) {
            arr.sort((row1, row2) => (+row1.cells[index].innerHTML < +row2.cells[index].innerHTML ? 1 : -1));
        }    else {
            arr.sort((row1, row2) => (row1.cells[index].innerHTML < row2.cells[index].innerHTML ? 1 : -1));
        }
    } else {
        if (index === 4 || index === 3) {
            arr.sort((row1, row2) => (+row1.cells[index].innerHTML > +row2.cells[index].innerHTML ? 1 : -1));
        }    else {
            arr.sort((row1, row2) => (row1.cells[index].innerHTML > row2.cells[index].innerHTML ? 1 : -1));
        }
    }

    //реализованно, чтобы при сортировке номера начинались с 1
    for (let i = 0; i < arr.length; i++) {
        arr[i].cells[0].innerHTML = (i + 1);
    }
    //элементы в массиве отсортированы и после вставки удалятся со старой позиции
    table.tBodies[0].append(...arr);
};

myRows[0].addEventListener('click', event => {
    const target = event.target;
    let index;

    switch (target.textContent) {
    case '№':
        index = 0;
        break;
    case 'Марка':
        index = 1;
        break;
    case 'Модель':
        index = 2;
        break;
    case 'Год выпуска':
        index = 3;
        break;
    case 'Пробег':
        index = 4;
        break;
    }

    if (target === lastTarget) {
        sortCount++;
    } else if (target !== lastTarget) {
        lastTarget = target;
        sortCount = 1;
    }
    sortTable(myRows, index);
});

//фильтруем строки таблицы
const filterTable = (arr, input) => {
    arr = arr.slice(1);

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== '') {
            for (let j = 0; j < arr.length;) {
                if (!arr[j].cells[i + 1].innerHTML.includes(input[i])) {
                    arr.splice(j, 1);
                } else {
                    j++;
                }
            }
        }
    }

    //реализованно, чтобы при сортировке номера начинались с 1
    for (let i = 0; i < arr.length; i++) {
        arr[i].cells[0].innerHTML = (i + 1);
    }
    //очищаем таблицу, т.к. кол-во строк может уменьшиться
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    table.tBodies[0].append(...arr);
};

filterAuto.addEventListener('input', () => {
    const userInputArr = [findProducer.value, findModel.value, findYear.value, findKilometers.value];
    filterTable(myRows, userInputArr);
});
