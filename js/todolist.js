const todoList = document.querySelector("#todolist");
const todoForm = document.querySelector("#form-addtodo");
const plusBtn = document.querySelector("#plusbtn");
const xBtn = document.querySelector("#xbtn");

/* plusBtn 누르면 input:text 나타남 */
plusBtn.addEventListener("click", function(e){
    todoForm.firstElementChild.classList.remove("hidden");
    todoForm.firstElementChild.focus();
    plusBtn.classList.add("hidden");
    xBtn.classList.remove("hidden");
})

/* input:text에 할 일 입력하고 enter 누르면 ul에 li 생성하여 추가 */
todoForm.addEventListener("submit", addTodo);
function addTodo(e) {
    e.preventDefault();
    // 추가
    let todoValue = todoForm.firstElementChild.value;
    const li = document.createElement("li");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("checkbox");
    const text = document.createElement("span")
    text.innerHTML = todoValue;
    text.classList.add("text");
    const time = document.createElement("span");
    time.innerHTML = getClock();
    time.classList.add("time", "invisible");
    const btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.classList.add("btn", "invisible")
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time);
    li.appendChild(btn);
    todoList.appendChild(li);
    li.classList.add("list")
    todoForm.firstElementChild.value = "";

    // 완료
    check.addEventListener("click", function(e){
        if (e.target.checked == true) {
            text.classList.add("done");
        } else {
            text.classList.remove("done");
        }
        // 완료 시 완료 개수 출력
        const countDone = document.getElementsByClassName("done").length;
        const doneNum = document.querySelector("#donenum");
        doneNum.innerHTML = `${countDone}개 완료`;
        // 나머지 개수 출력
        const count = document.getElementsByClassName("list").length;
        const restNum = document.querySelector("#restnum");
        restNum.innerHTML = `${count - countDone}개 남음`;
    });

    // 삭제
    li.addEventListener("mouseenter", function(){
        time.classList.remove("invisible");
        btn.classList.remove("invisible");
    });
    btn.addEventListener("click", function(e){
        e.target.parentNode.remove();
        const countDone = document.getElementsByClassName("done").length;
        const doneNum = document.querySelector("#donenum");
        const count = document.getElementsByClassName("list").length;
        const restNum = document.querySelector("#restnum");
        if (check.checked == true) {
            doneNum.innerHTML = `${countDone}개 완료`;
        } else {
            restNum.innerHTML = `${count - countDone}개 남음`;
        }
    });
    li.addEventListener("mouseleave", function(){
        time.classList.add("invisible");
        btn.classList.add("invisible");
    })

}


/* xBtn 누르면 input:text창의 입력값 초기화 */
xBtn.addEventListener ("click", init);
function init() {
    todoForm.firstElementChild.value = "";
}


/* input:text창 빠져나오면(onblur) xBtn과 입력창 사라지고 plusBtn 나타남 */
todoForm.firstElementChild.addEventListener("blur",function(){
    todoForm.firstElementChild.classList.add("hidden");
    plusBtn.classList.remove("hidden");
    xBtn.classList.add("hidden");
})


/* 다시 input:text창에 포커스되면 xBtn 나타나고 plusBtn 사라짐 */
todoForm.firstElementChild.addEventListener("focus",function(){
    xBtn.classList.remove("hidden");
    plusBtn.classList.add("hidden");
})
