// // Business logic goes here


var robot = function(digits) {
  var splitDigits = digits.split("");
  var result = [];

  for (var index = 0; index < splitDigits.length; index +=1) {

    if (splitDigits[index] === 0) {
      console.log(digits);
      splitDigits[index].replace(0, "Beep");
      result.push(splitDigits[index]);
    } else if (splitDigits[index] === 1) {
      splitDigits[index].replace(1, "Boop");
      result.push(splitDigits[index]);
    } else if (splitDigits[index] % 3 === 0) {
      splitDigits[index].replace(splitDigits, "I'm sorry, Dave. I'm afraid I can't do that.");
      result.push(splitDigits[index]);
    } else {
      splitDigits[index] === splitDigits
      result.push(splitDigits[index]);
    }
    return result.join("");
  }
}

//Interface goes here
$(document).ready(function() {
  $("form#talkForm").submit(function(event) {
  event.preventDefault();

  var digits = $("input#digits").val();

  var almostSpeak = robot(digits); //calls robot function on integer, now named digits
  $("#returnSpeak").show(almostSpeak);

  });
});
