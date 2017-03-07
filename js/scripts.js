var factorial = function(number) {
  for (var x = number - 1;x > 0; x--) {
    number *= x;
  }
  return number;
}

$(function(){
  $('form#factorial-form').submit(function(event) {
    var number = $('input#number-input').val();
    var result = factorial(number);

    $('#result').text(result);


    event.preventDefault();
  })

});
