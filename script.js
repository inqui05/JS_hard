'use strict';
const producer = document.querySelector('.add_producer'),
      model = document.querySelector('.add_model'),
      year = document.querySelector('.add_year'),
      kilometers = document.querySelector('.add_kilometers'),
      btn = document.getElementById('btn'),
      table = document.getElementById('table'),
      addAuto = document.querySelector('.add-auto ');

//let rows = Array.from(table.rows);
//console.log(rows[2].cells[2]);

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
        producer: 'Маzda',
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
        producer: 'Маzda',
        model: 3,
        year: 2009,
        kilometers: 259532
    },
];

const addNewAutoInTabs = (obj) => {
    let rows = Array.from(table.rows);

    const row = document.createElement('tr');
    row.innerHTML = `
                    <tr>
                        <td>${rows.length}</td>
                        <td>${obj.producer}</td>
                        <td>${obj.model}</td>
                        <td>${obj.year}</td>
                        <td>${obj.kilometers}</td>
                    </tr>`;
    table.append(row);
};

const render = () => {
    if (JSON.parse(localStorage.getItem('autoTable')) !== null){
        if (JSON.parse(localStorage.getItem('autoTable')).length > listOfAuto.length){
            listOfAuto = [];
            JSON.parse(localStorage.getItem('autoTable')).forEach((value) => {
                listOfAuto.push(value);
            });
        }
    }

    while(table.rows.length > 1) {
        table.deleteRow(1);
    }

    listOfAuto.forEach(function(item){
        addNewAutoInTabs(item);
    });
};

addAuto.addEventListener('submit', function(event){
    event.preventDefault();
    if (producer.value === ''){
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

/*const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'), 
    todoList = document.querySelector('.todo-list'), 
    todoCompleted = document.querySelector('.todo-completed'); 

    const todoData = [

    ];

    const render = function(){
        if (JSON.parse(localStorage.getItem('todo')) !== null){
            if (todoData.length === 0){
                JSON.parse(localStorage.getItem('todo')).forEach(function(value){
                    todoData.push(value);
                });
            }
        }
        
        todoList.textContent = '';
        todoCompleted.textContent = '';

        todoData.forEach(function(item){
            const li = document.createElement('li');
            li.classList.add('todo-item');

            li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
             '<div class="todo-buttons">' +
             '<button class="todo-remove"></button>' +
             '<button class="todo-complete"></button>' +
             '</div>';

            if (item.completed){
                todoCompleted.append(li);
            } else {
                todoList.append(li);
            }

            const btnTodoComplete = li.querySelector('.todo-complete');
            btnTodoComplete.addEventListener('click', function(){
                item.completed = !item.completed;
                localStorage.todo = JSON.stringify(todoData);
                render();
            });

            const btnTodoRemove = li.querySelector('.todo-remove');
            btnTodoRemove.addEventListener('click', function(){
                todoData.forEach(function(value, i){
                    if (value.value === item.value){
                        todoData.splice(todoData[i], 1);
                        localStorage.todo = JSON.stringify(todoData);
                    }
                });
                render();
            });
        });
    };

    todoControl.addEventListener('submit', function(event){
        event.preventDefault();

        const newTodo = {
            value: headerInput.value,
            completed: false
        };
        
        if(newTodo.value !== ''){
            todoData.push(newTodo);
            localStorage.todo = JSON.stringify(todoData);
            headerInput.value = '';
        }

        render();
    });

    render();*/