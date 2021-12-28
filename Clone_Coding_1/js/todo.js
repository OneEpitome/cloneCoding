const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(whatToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = whatToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", handleDeleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function DeleteList(item, listID) {
    return item.id !== listID;
}

function handleDeleteToDo(event) {
    const li = event.target.parentNode;
    const parsedToDos = JSON.parse(savedToDos);
    toDos = toDos.filter( (toDo) => toDo.id !== parseInt(li.id) );
    saveToDos()
    li.remove();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const objToDo = {text : newToDo,
                    id : Date.now()}
    toDos.push(objToDo);
    saveToDos()
    paintToDo(objToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach(paintToDo);
}

