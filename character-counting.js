var counting = function(word) {

  var input = '';
  input = word.split(' ');
  input = input.join('');

  var output = {};

  for (var i of input) {
    if (!output[i]) {
      output[i] =  1;
    } else if (output[i]) {
      output[i] += 1
    }
  }
   return(output);
}

console.log(counting("lighthouse in the house"));
