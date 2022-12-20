

let contagem = document.getElementById("h2")
let buttonPlay = document.getElementById("buttonPlay");
let timeList = document.getElementById("timeList");

let hour = 0;
let minutes = 0;
let seconds = 0;
let time = [];
let play;



contagem.innerText = `0${hour}:0${minutes}:0${seconds}`

function stringInTime(time) {
  if (time < 10) {
    return "0"+time
  } else {
    return time
  }
}

function cont() {
  seconds += 1;
  
  contagem.innerText = `${stringInTime(hour)}:${stringInTime(minutes)}:${stringInTime(seconds)}`

  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }else if(minutes >= 60) {
    hour += 1;
    minutes = 0;
  }else if (hour === 60) {
    hour = 0;
  }
}

function start() {

  buttonPlay.setAttribute("disabled","true")
  play = setInterval(cont, 1000)
  

}

function stop() {
  
  buttonPlay.removeAttribute("disabled")
  clearInterval(play)
  
}

function reset() {

  clearInterval(play)
  hour, minutes, seconds = 0;
  contagem.innerText = `0${hour}:0${minutes}:0${seconds}`;
  buttonPlay.removeAttribute("disabled")
  time = [];
  timeList.innerHTML = " "
  
}

function addTime() {
  
  const savedTime = `${stringInTime(hour).toString()}:${stringInTime(minutes).toString()}:${stringInTime(seconds).toString()}`  
  const li = document.createElement("li");

  time.push(savedTime)
  
    li.innerText = time[time.length-1]
    li.className = "mt-3 fs-2"
    timeList.appendChild(li)
  console.log(time)


}