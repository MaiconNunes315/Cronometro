

var contagem = document.getElementById("h2")

hor = 00 ;
min = 00 ;
seg = 00 ;
var pause;


function cron(){
if( seg < 60){
contagem.innerText = hor + ":" +  min + ":" + seg++;
}else if ( seg == 60 & min < 59){
  contagem.innerText = hor + ":" + min++ + ":" + (seg = 00);
}else if ( min == 59){
  contagem.innerText = hor++ + ":" + (min = 00) + ":" + (seg = 00);
}
}


function start(){
  pause = setInterval(cron, 1000);
}

function stop(){
 clearInterval(pause)
}

function reset(){
  clearInterval(pause)
  contagem.innerHTML = "00:00:00";
}

