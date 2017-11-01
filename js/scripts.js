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

// Code updated 10.30.17
// function robot(digits) {
//   var splitDigits = digits.split("");
//   var result = [];
//
//   for (var index = 0; index <= splitDigits; index++) {
//     if (index === 0) {
//       index === "Beep!";
//       result.push(index);
//     } else if (index === 1) {
//       index === "Boop!";
//       result.push(index);
//     } else if (index % 3 === 0) {
//       index === "I'm sorry, Dave. I'm afraid I can't do that.";
//       result.push(index);
//     } else { result.push(index);
//     }
//     return result
// }

//Code updated 10.31.17
// function robot(digit) {
//   result = [];
//     if (digit === "0") {
//       result.push("Beep!");
//     } else if (digit === "1") {
//       result.push("Beep!","Boop!");
//     } else if (digit === "2") {
//       result.push("Beep!","Boop!","2");
//     } else if (digit % 3 === 0) {
//       result.push("Beep!","Boop!","2","I'm sorry, Dave. I'm afraid I can't do that.");
//     } else if (digit === "4") {
//       result.push("Beep!","Boop!","2","I'm sorry, Dave. I'm afraid I can't do that.","4");
//     } else if (digit === "5") {
//       result.push("Beep!","Boop!","2","I'm sorry, Dave. I'm afraid I can't do that.","4","5");
//     } else { result.push(digit);
//     }
//   return result
// }

// Business logic goes here
function robot(digit) {
  result = [];
  for (index = 0; index <= digit; index++) {
    if (index === 0) {
      result.push("Beep!");
    } else if (index === 1) {
      result.push("Boop!");
    } else if (index % 3 === 0) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else { result.push(index)
    }
  }
  return result
}

//Interface goes here
$(document).ready(function() {
  $("form#talkForm").submit(function(event) {
    event.preventDefault();
    var digit = $("input#digit").val();
    var almostSpeak = robot(digit);
    $("#returnSpeak").empty();
    $("#returnSpeak").append("<p>" + almostSpeak + "</p>");
  });
});
