function add(number1, number2) {
  return (number1 + number2);
}

function subtract(number1, number2) {
  return (number1 - number2);
}
function division(number1, number2) {
  return (number1 / number2);
}
function multiply (number1, number2){
  return(number1 * number2);
}


$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    console.log("1st number: " + number1);
    console.log("2nd number: " + number2);
    console.log("operator: " + operator);
    var result = add(number1,number2);
    $ ("#output").text(result);
  });
});
