'use strict';

const todoControl = document.querySelector('.todo-control'),
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

    render();