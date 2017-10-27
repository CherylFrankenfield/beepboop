// Business logic goes here

var splitsValue = function()
  for (var index = 0; index <= 10; index +=1) {
    if (splitDigits[index] === 0) {
      splitDigits.replace(0, "Beep");
    } else if (splitDigits[index] === 1) {
      splitDigits.replace(1, "Boop");
    } else if (splitDigits[index] === 3) {
      splitDigits.replace(3, "I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (splitDigits[index] === 9) {
      splitDigits.replace(9, "I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      splitDigits[index] === splitDigits
    }
  }

//Interface goes here
$(document).ready(function() {
  $("form#talkForm").submit(function(event) {
  event.preventDefault();

  var digits = parseInt($("input#digits").val());
  var splitDigits = digits.split("");

  var almostSpeak = splitsValue(splitDigits);
  var returnSpeak = almostSpeak.join("");
  $("#returnSpeak").show();

  });
});
