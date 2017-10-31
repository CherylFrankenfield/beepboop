// Code committed on 10/27/17

// function robot(digits) {
//   var splitDigits = digits.split(""); //turns input into an array
//   var result = [];
//
//   for (var index = 0; index < splitDigits.length; index++) {
//     if (splitDigits[index] === 0) {
//       var newDigit1 = digits.replace("0", "Beep");
//       result.push("newDigit1");
//     } else if (splitDigits[index] === 1) {
//       splitDigits[index].replace(1, "Boop");
//       result.push("splitDigits[index]");
//     } else if (splitDigits[index] % 3 === 0) {
//       splitDigits[index].replace(splitDigits, "I'm sorry, Dave. I'm afraid I can't do that.");
//       result.push("splitDigits[index]");
//     } else { result.push(splitDigits[index]);
//     }
//   }
//   return result.join("");
// }

// Business logic goes here
function robot(digits) {
  var splitDigits = digits.split("");
  var result = [];

  for (var index = 0; index <= splitDigits; index++) {
    if (index === 0) {
      index === "Beep!";
      result.push(index);
    } else if (index === 1) {
      index === "Boop!";
      result.push(index);
    } else if (index % 3 === 0) {
      index === "I'm sorry, Dave. I'm afraid I can't do that.";
      result.push(index);
    } else { result.push(index);
    }
    return result
}

//Interface goes here
$(document).ready(function() {
  $("form#talkForm").submit(function(event) {
    event.preventDefault();
    var digits = $("input#digits").val();

    var almostSpeak = robot(digits);
      $("#returnSpeak").empty();
        $("#returnSpeak").append("<p>" + almostSpeak + "</p>");
  });
});
