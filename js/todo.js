const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos=[];

function saveToDos(){ //toDos 배열을 로컬저장소에 저장
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); //stringify는 자바스크립트의 객체나 배열 등 모든 코드를 문자열로 만듬
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

function sayHello(item){
    console.log("This is the turn of",item);
}

const savedToDos =localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos=JSON.parse(savedToDos);
    console.log(parsedToDos);
    //parsedToDos.forEach(sayHello); forEach는 배열의 각 item에 대해 처리하는 반복문
    parsedToDos.forEach((item)=>console.log("This is the turn of ",item)); //위 코드와 동일(Arrow function, 화살표 함수)
}
