let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hr = document.getElementById('hr');

setInterval(() => {
    let day = new Date()
    // 1 sec and 1 minute creates an angle of 6 degree. So multiple into 6 to rotate
    getSec = day.getSeconds() * 6 
    getMin = day.getMinutes() * 6 
    // 1 hour creates an angle of 30 degree. So multiple into 30 to rotate the needle
    getHr = day.getHours() * 30
    sec.style.transform = `rotate(${getSec}deg)`
    min.style.transform = `rotate(${getMin}deg)`
    hr.style.transform = `rotate(${getHr}deg)`
}, 100);
