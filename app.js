let currentTime=0,
timerHandler;
function start(){
   setActive("start");
   if(!timerHandler){
        timerHandler=setInterval(()=>{
            currentTime++;
            updateDisplay();
        },1000)
   }
   
}

function stop(){
    setActive("stop");
    clearInterval(timerHandler);
    timerHandler=0;
}

function reset(){
    setActive("reset");
    if(timerHandler){
        clearInterval(timerHandler);
        timerHandler=0;
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

function setActive(element){
    document.querySelector(".active")?.classList.remove("active");
    document.getElementById(element).classList.add("active");
}