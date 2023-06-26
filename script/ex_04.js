
   document.addEventListener("keypress",function(e){
let footerDiv = document.querySelector("footer div");
footerDiv.innerHTML += e.key;
footerDiv.innerHTML = footerDiv.innerHTML.substr(-42);
   }); 
    

