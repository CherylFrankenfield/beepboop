// Business logic goes here
var outPut = function(splitDigits)


//Interface goes here
$(document).ready(function() {
  $("form#talkForm").submit(function(event) {
  event.preventDefault();

  var result = [ ];
  var Beeps = [ ];
  var Boops = [ ];

  var digits = parseInt($("input#digits").val());
  var splitDigits = digits.split("");


    for (var index = 0; index < splitDigits.length; index +=1) {
      if (splitDigits === 0) {
        Beeps.push(splitDigits);
      } else if (digits === 1) {
        Boops.push(splitDigits);
      } else {
        alert("Do not compute. Please enter number.");
      }
    }
    result = Beeps + Boops;
    return result;

  // $("#returnSpeak").show(finalResponse);

  });
});
