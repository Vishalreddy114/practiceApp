function Multiplication(){ 
    var a= document.getElementById("a").value 
     var b = document.getElementById("b").value;
     var c = document.getElementById("c").value;
     
   
   addValues(a,b,c);
 
  
 
 } 
 function addValues(a,b,c){
     var add=0;
     var add=parseInt(a)*parseInt(b)*parseInt(c); 
  
 
   document.getElementById("d").value=add;
     return add;
 }