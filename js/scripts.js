// business logic

var inputArray = [];
var translation = '';
var resultsArray = [];
var input = '';
var vowels = ['a','e','i','o','u'];

var translate = function(words) {
  if (Number.isInteger(parseInt(words))) {
    alert("Please input words, not numbers!!")
} else {
  var wordsArray = words.split(" ");
  wordsArray.forEach(function(word) {
  inputArray = word.split("");
  for (var i = 0; i < inputArray.length; i++) {
    if (vowels.indexOf(inputArray[0]) === -1) {
      var consonant = inputArray[0];
       if ((consonant === 'q') && (inputArray[1] === 'u')) {
         inputArray.push(consonant + inputArray[1]);
         inputArray.shift();
         inputArray.shift();
       } else {
         inputArray.push(consonant);
         inputArray.shift();
       }
    } else {
      break;

    }
  }
  inputArray.push("ay");



  translation = inputArray.join("");
  resultsArray.push(translation);
  console.log(translation);
})
};
};

// jQuery user interface logic here.
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var input = $("input#words").val();
    translate(input);
    console.log(resultsArray);
  });
});
