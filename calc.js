function Calculate(){
  let Area = parseFloat(document.getElementById("Area").value);
  console.log(typeof Area);
  let radius = parseFloat(document.getElementById("radiusvalue").value);
  document.getElementById("Area").innerHTML = 3.14*radius*radius;
 
  return false;
}