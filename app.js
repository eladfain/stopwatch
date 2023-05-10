let currentTime=0,
timerHandler;
function start(){
    timerHandler=setInterval(()=>{
        currentTime++;
        updateDisplay();
    },1000)
}

function stop(){
    clearInterval(timerHandler);
}

function reset(){
    if(timerHandler){
        clearInterval(timerHandler);
    }
    currentTime=0;
    updateDisplay();
}
function updateDisplay(){
    const timespan=document.querySelector("#timespan");
    let secondes=currentTime%60,
    minutes=Math.floor(currentTime/60);
    if(secondes<10){
        secondes=`0${secondes}`;
    }
    if(minutes<10){
        minutes=`0${minutes}`
    }
    timespan.innerHTML=`${minutes}:${secondes}`
}