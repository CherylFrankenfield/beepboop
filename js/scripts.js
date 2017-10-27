// // Business logic goes here


function robot(digits) {
  var splitDigits = digits.split(""); //turns input into an array
  var result = [];

  for (var index = 0; index < splitDigits.length; index++) {
    if (splitDigits[index] === 0) {
      var newDigit1 = splitDigits[index].replace("0", "Beep");
      result.push("newDigit1");
    } else if (splitDigits[index] === 1) {
      splitDigits[index].replace(1, "Boop");
      result.push("splitDigits[index]");
    } else if (splitDigits[index] % 3 === 0) {
      splitDigits[index].replace(splitDigits, "I'm sorry, Dave. I'm afraid I can't do that.");
      result.push("splitDigits[index]");
    } else { result.push("splitDigits[index]");
    }
  }
  return result.join("");
}

//Interface goes here
$(document).ready(function() {
  $("form#talkForm").submit(function(event) {
  event.preventDefault();

  var digits = $("input#digits").val();

  var almostSpeak = robot(digits); //calls robot function on integer, now named digits
  // $("#returnSpeak").show(almostSpeak); // did not work
  $("#returnSpeak").append("<p>" + almostSpeak + "</p>") //displays something
  });
});
