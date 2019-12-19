const countDate = new Date('Jan 1, 2020 00:00:00').getTime();

function newYear() {
    let now = new Date().getTime()
    let gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day),
        h = Math.floor((gap % day) / hour),
        m = Math.floor((gap % hour) / minute),
        s = Math.floor((gap % minute) / second);

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
    newYear();
}, 1000)