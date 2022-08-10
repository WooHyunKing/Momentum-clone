const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const toDos=[];

function saveToDos(){ //toDos 배열을 로컬저장소에 저장
    localStorage.setItem("todos",JSON.stringify(toDos)); //stringify는 자바스크립트의 객체나 배열 등 모든 코드를 문자열로 만듬
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=newTodo;

    const button=document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo)

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}


function onToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //입력값 저장
    toDoInput.value=""; //텍스트 초기화(지우기)
    toDos.push(newTodo); //toDos 배열에 추가(push)
    paintToDo(newTodo); //todo 출력
    saveToDos(); //toDo 로컬저장소에 저장
}

toDoForm.addEventListener("submit",onToDoSubmit);
