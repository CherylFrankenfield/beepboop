// Business logic goes here

var zero = function(digits) {
  return digits === "Beep";
};

//Interface goes here
$(document).ready(function() {
  $("form#talkForm").submit(function) {
    event.preventDefault();

    var digits = parseInt($("input#digits").val());
    var zeroResults = zero(digits);
    $("#zeroResults").text(zeroResults);


  // $("#returnSpeak").show(finalResponse);
  });
});
