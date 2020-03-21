function Multiplication(){ 
    var a= document.getElementById("a").value 
     var b = document.getElementById("b").value;
     var c = document.getElementById("c").value;
     
   
   mulValues(a,b,c);
 
  
 
 } 
 function mulValues(a,b,c){
     var mul=0;
     var mul=parseInt(a)*parseInt(b)*parseInt(c); 
  
 
   document.getElementById("d").value=mul;
     return mul;
 }