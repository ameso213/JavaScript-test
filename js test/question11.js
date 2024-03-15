function splitStringIntoArray(string) {

    var wordsArray = string.split(" ");
  
    return wordsArray;
  }

  var sentence = "Did you have lunch?";
  var result = splitStringIntoArray(sentence);
  console.log(result);
