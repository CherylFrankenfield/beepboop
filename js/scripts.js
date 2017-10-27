// // Business logic goes here


var machineOuput = function(digits) {
  var splitDigits = digits.split("");
  var result = [];

  for (var index = 0; index < splitDigits.length; index +=1) {
    if (splitDigits[index] === 0) {
      splitDigits[index].replace(0, "Beep");
      splitDigits[index].push(result);
    } else if (splitDigits[index] === 1) {
      splitDigits[index].replace(1, "Boop");
      splitDigits[index].push(result);
    } else if (splitDigits[index] % 3 == 0) {
      splitDigits[index].replace(splitDigits, "I'm sorry, Dave. I'm afraid I can't do that.");
      splitDigits[index].push(result);
    } else {
      splitDigits[index] === splitDigits
      splitDigits[index].push(result);
    }
    return result.join("");
  }
}

//Interface goes here
$(document).ready(function() {
  $("form#talkForm").submit(function(event) {
  event.preventDefault();

  var digits = parseInt($("input#digits").val());

  var almostSpeak = machineOutput(digits);
  $("#returnSpeak").show(almostSpeak);


  });
});
