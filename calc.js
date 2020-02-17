function Calculate(){
  let totalvalue = parseFloat(document.getElementById("totalvalue").value);
  console.log(typeof totalvalue);
  let ratevalue = parseFloat(document.getElementById("ratevalue").value);
  document.getElementById("tipvalue").innerHTML = totalvalue*ratevalue/100;
  document.getElementById("taxvalue").innerHTML = totalvalue*5.50/100;
  document.getElementById("grandvalue").innerHTML = (totalvalue  + (totalvalue*ratevalue/100) + (totalvalue*5.50/100));
  return false;
}