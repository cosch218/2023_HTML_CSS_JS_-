function getClock() {
    let date = new Date;
    let hour = String(date.getHours()).padStart(2, "0");
    let minute = String(date.getMinutes()).padStart(2, "0");
    return `${hour}:${minute}`;
}

const clock = document.querySelector("#clock");
clock.innerHTML = getClock();