var counting = function(word) {

  var input = word.split(' ').join('');

  var index = 0;
  var output = {};

  for (var i of input) {
    if (!output[i]) {
      output[i] =  {occurances: 1, positions: []};
      output[i].positions.push(index)
    } else if (output[i]) {
      output[i].occurances += 1
      output[i].positions.push(index);
    }
    index++
  }
   return(output);
}

console.log(counting("lighthouse in the house"));