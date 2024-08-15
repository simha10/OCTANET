const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = [];

addBtn.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todo = {
            text: todoText,
            id: Date.now()
        };
        todos.push(todo);
        renderTodos();
        todoInput.value = '';
    }
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.text;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            deleteTodo(todo.id);
        });
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
    });
}

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
}

renderTodos();