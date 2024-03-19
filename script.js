function encrypt() {
    var input = document.getElementById("inputText").value;
    var output = ""; 
    for (var i = 0; i < input.length; i++) {
      var charCode = input.charCodeAt(i);

      output += String.fromCharCode(charCode + 1);
    }
    document.getElementById("outputText").value = output;
    document.getElementById("result").style.display = "block";
  }
  
  function decrypt() {
    var input = document.getElementById("inputText").value;
    var output = ""; 
    for (var i = 0; i < input.length; i++) {
      var charCode = input.charCodeAt(i);

      output += String.fromCharCode(charCode - 1);
    }
    document.getElementById("outputText").value = output;
    document.getElementById("result").style.display = "block";
  }
  