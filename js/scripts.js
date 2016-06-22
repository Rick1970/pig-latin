// business logic

var inputArray = [];
var translation = '';


// jQuery user interface logic here.
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var input = $("input#words").val();
    inputArray = input.split("");
    inputArray.push("ay");
    translation = inputArray.join("");
  });
});
