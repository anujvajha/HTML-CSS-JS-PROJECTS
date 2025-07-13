let start = document.querySelector(".button1");
let stop = document.querySelector(".button2");
let reset = document.querySelector(".button3");
const time=document.querySelector("#time")
let seconds=0;
let interval = null;

function padStart (value)
{
    return String(value).padStart(2,"0");

}

function stopclock() 
{
    clearInterval(interval);
}
function resetclock () 
{
    stopclock();
    seconds=0;
    time.innerHTML="00:00";
}

function startclock () 
{
    if(interval) stopclock();
    interval = setInterval( () => {
        seconds++;
        const minutes = Math.floor(seconds/60);
        const remseconds = seconds%60;
        time.innerHTML = `${ padStart(minutes) } : ${ padStart(remseconds) }`;
    } , 1000);
}

start.addEventListener("click", startclock);
stop.addEventListener("click", stopclock);
reset.addEventListener("click", resetclock);