// business logic

var inputArray = [];
var translation = '';
var input = '';
var vowels = ['a','e','i','o','u'];

var translate = function(words) {
  inputArray = words.split("");
  // for (var i = 0; i < vowels.length; i++) {
    if (inputArray[0] !== vowels[0] &&
        inputArray[0] !== vowels[1] &&
        inputArray[0] !== vowels[2] &&
        inputArray[0] !== vowels[3] &&
        inputArray[0] !== vowels[4]) {
      var consonant = inputArray.shift();
      inputArray.push(consonant);
    }
  // }
  inputArray.push("ay");
  translation = inputArray.join("");
};


// jQuery user interface logic here.
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var input = $("input#words").val();

    translate(input);

    console.log(translation);
  });
});
