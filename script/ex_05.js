window.onload = function(){
   let buttonPlus = document.querySelectorAll('button')[0];
   let buttonMinus = document.querySelectorAll('button')[1];
   let select = document.querySelector('select');
   console.log(select);
   let body=document.querySelector('body');
   let font = 16;
 
   buttonPlus.addEventListener('click',function(){
font++;
body.style.fontSize = font + 'px';
   });

   buttonMinus.onclick = function(){
   font--;
   document.body.style.fontSize = font + 'px';

   }

   
   select.addEventListener('change', function(){
document.body.style.backgroundColor = select.value;;
   });

}
   
 // function changeColor(selectElement){

   //    let test = selectElement.value;
   //    switch(test){
   //       case "#bdc3c7":
   //       document.body.style.background =  '#bdc3c7';
   //       break;
   //       case "#1abc9c" :
   //          document.body.style.background =  '#1abc9c';
   //          break;
   //       case "#f1c40f" :
   //       document.body.style.background =  '#f1c40f';
   //       break;
   //       case "#d35400" : 
   //       document.body.style.background =  '#d35400';
   //       break;
   //       case "#e74c3c": 
   //        document.body.style.background =  '#e74c3c';
   //        break;
   //       case "#40d47e" : 
   //       document.body.style.background =  '#40d47e';
   //       break;
   //       case "#3498db": 
   //       document.body.style.background =  '#3498db';

   //    }

   // } 