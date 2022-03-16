let hora = 0;
let minuto = 0;
let segundo = 0;

let cron;

function Start(){
  cron = setInterval(()=>{Timer();},1000);
};

function Pause(){
  clearInterval(cron);
};

function Stop(){
  clearInterval(cron);
  hora = 0;
  minuto = 0;
  segundo = 0;
  
  document.getElementById('cont').innerHTML = '00:00:00';
};

function Timer(){
  segundo++;
  if(segundo == 60){
    segundo = 0;
    minuto ++;
  }
  if(minuto == 60){
    minuto = 0;
    hora ++;
  }
  format = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo);
  document.getElementById('cont').innerHTML = format;
};