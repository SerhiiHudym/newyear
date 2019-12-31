const countDate = new Date('Jan 1, 2020 00:00:00').getTime() //('Jan 1, 2020 00:00:00').getTime();
let wrapper = document.getElementById('wrapper')
const video = "<video autoplay width='100%' height='100%' src='./media/video/newyear.mp4' type='video/mp4'>";

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
    document.getElementById('second').innerText = s
    console.log(gap)

    if (gap < 540000) {
        song.pause();
        wrapper.innerHTML = video;
        if (gap < 420000) {
            // window.location
            window.location.replace("https://youtu.be/3Q11d6I21PE");
        }
    }
}

setInterval(function(){
    newYear();
}, 1000)