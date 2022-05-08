const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const ToDOS_KEY = "todos";
let toDos = [];

function saveTodos(){
    localStorage.setItem(ToDOS_KEY,JSON.stringify(toDos));}
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    saveTodos();
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
}

function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(ToDOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}
