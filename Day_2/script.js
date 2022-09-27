function updateTime(){
    const date = new Date();
    const hour = {element: document.querySelector('.hour-hand'), value: ((360/12))*(date.getHours() > 12?date.getHours()-12: date.getHours())};
    const minute = {element: document.querySelector('.minute-hand'), value: (360/60)*date.getMinutes()};
    const second = {element: document.querySelector('.second-hand'), value: (360/60) * date.getSeconds()};
    [hour, minute, second].forEach(timeElement => timeElement.element.style.transform = `rotate(${timeElement.value+90}deg)`);
}

updateTime();
setInterval(() => {
    updateTime();
}, 1000);