let timer = 30;
let val;
let hitpoint = 0;

function bubbleMaker(){
    let clutter = "";

for (let i = 1 ; i <= 140; i++ ){
    let num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num} </div>`

}
document.querySelector(".ground").innerHTML = clutter;
}

function runtime() {
    let timerun = setInterval(() =>{
        if(timer > 0 ){
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else{
            clearInterval(timerun) ;  
            document.querySelector(".ground").innerHTML = "<h1>GAME OVER</h1>"
           }
    },1000);

    }
 
function hitValue(){
     val = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = val;
}  
function scorePoint(){
    document.querySelector(".ground").addEventListener("click",(score) =>{
         let point = Number(score.target.textContent);
      
         if(val === point){
            hitpoint +=10;
            document.querySelector("#score").textContent = hitpoint;
            hitValue();
            bubbleMaker();
         }
    })
}

scorePoint();
hitValue();
bubbleMaker();
runtime();    
