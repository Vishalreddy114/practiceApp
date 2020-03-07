$('#calc').click(function(){

    Math.GCD = function(numbers) {
      for (var i = 1 ; i < numbers.length ; i++){
        if (numbers[i] || numbers[i] === 0)
          numbers[0] = twogcd(numbers[0], numbers[i]);
      }
      return numbers[0];
    
      function twogcd(first, second) {
        if (first < 0) first = -first;
        if (second < 0) second = -second;
        if (second > first) {var temp = first; first = second; second = temp;}
        while (true) {
            first %= second;
            if (first == 0) return second;
            second %= first;
            if (second == 0) return first;
        }
       }
    };
    
    Math.LCM = function(first,second) {
        return first * (second / this.GCD(first, second)); // CANNOT FIGURE OUT HOW TO EXTEND THIS TO THREE #s
    };
    
    var first   = document.getElementById("first").value;
    var second   = document.getElementById("second").value;
    var third = document.getElementById("third").value;
    
    var numbers = [first,second,third];
    
    var GCDresult = Math.GCD(numbers);
    
    
    alert(GCDresult);
    })