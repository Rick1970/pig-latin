// business logic

var inputArray = [];
var translation = '';
var input = '';
var vowels = ['a', 'e', 'i', 'o', 'u'];

var translate = function(words) {
  inputArray = words.split("");
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
