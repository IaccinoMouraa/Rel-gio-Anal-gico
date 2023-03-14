const currentTime = () => {         
    const clockTime = document.querySelector(".clock-time");
    const markingSecunds = document.querySelecotr(".marking-secunds");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh <10 ? `0${hh}` : hh;
    hh = hh <10 ? `0${mm}` : mm;
    hh = hh <10 ? `0${ss}` : ss;

    const ssDegrees = (ss / 60) * 360;
    markingSecunds.style.transform = `rotate(${ssDegrees}deg)`;

    let time = `${hh}:${mm}`;
    clockTime.innerText = time;
};

currentTime();
setInterval(currentTime, 1000);