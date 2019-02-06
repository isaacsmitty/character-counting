var counting = function(word) {

  var input = '';
  input = word.split(' ');
  input = input.join('');

//  console.log(input);

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




// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
