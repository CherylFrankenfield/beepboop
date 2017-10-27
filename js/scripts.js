// Business logic goes here



//Interface goes here
$(document).ready(function() {
  $("form#talkForm").submit(function(event) {
  event.preventDefault();

  var digits = $("input#digits").val();
    for (var index = 0; index < digits.length; index +=1) {
      if (digits === 0) {
        $("#digits").show("Beep");
      } else if (digits === 1) {
        $("#digits").show("Boop");
      } else {
        alert("Do not compute. Please enter number.");
      }
    }

  // $("#returnSpeak").show(finalResponse);

  });
});
