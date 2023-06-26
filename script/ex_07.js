window.onload = function(){
let canva = document.querySelector("canvas");
let context = canva.getContext('2d');

context.beginPath();
context.moveTo(6,6);
context.lineTo(14,10);
context.lineTo(6,14);
context.closePath();
context.lineWidth = 1;
context.strokeStyle= "#fff";
context.stroke();
context.fillStyle ="#fff";
context.fill();

let audio = new Audio('./triangle.ogg')
canva.onclick = function(){
    audio.play();
}
let pauseAudio = document.querySelectorAll('button')[0];
let stopAudio = document.querySelectorAll('button')[1];
let muteAudio = document.querySelectorAll('button')[2];
// console.log(pauseAudio,stopAudio,muteAudio);
pauseAudio.onclick = function(){
audio.pause();
}
stopAudio.onclick = function(){
    audio.pause();
    audio.currentTime = 0 ;
}
muteAudio.onclick = function(){
    
    audio.muted = !audio.muted;

    }

    
}













// window.onload =function(){
//     var canvasElement = document.querySelector("canvas");
//         var ctx = canvasElement.getContext("2d");
    
       
    
//         var triangle = {
//             x1: 6, 
//             y1: 6, 
//             x2: 14, 
//             y2: 10, 
//             x3: 6, 
//             y3: 14 
//         }
    
//         ctx.strokeStyle = "#fff";
        
//         ctx.beginPath();
//         ctx.moveTo(triangle.x1, triangle.y1);
//         ctx.lineTo(triangle.x2, triangle.y2);
//         ctx.lineTo(triangle.x3, triangle.y3);
//         ctx.lineTo(triangle.x1, triangle.y1);
//         ctx.closePath();
//         ctx.stroke();
//       }