 
 //write a javascript function that takes a string with lower and upper case letters
 
 function swapCase(str) {
    return str.replace(/[a-zA-Z]/g, function(char) {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    });
  }
  
  var originalString = "AmeSO ImmaCULate";
  var swappedString = swapCase(originalString);
  console.log(swappedString);