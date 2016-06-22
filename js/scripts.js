// business logic

var inputArray = [];


// jQuery user interface logic here.
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var input = $("input#words").val();
    inputArray = input.split("")
  });
});
