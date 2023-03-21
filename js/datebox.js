function getDate() {
    let date = new Date;
    let yyyy = String(date.getFullYear()).padStart(4, "0");
    let mm = String(date.getMonth()+1).padStart(2, "0");
    let dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}년 ${mm}월 ${dd}일`;
}

const date = document.querySelector("#date");
date.innerHTML = getDate();


function getDay() {
    let date = new Date;
    let dayArray = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    let nDay = String(date.getDay());
    return dayArray[nDay];
}

const day = document.querySelector("#day");
day.innerHTML = getDay();