$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $('#vote').show();
  } else {
    $('#under-21').show();
  }
});
