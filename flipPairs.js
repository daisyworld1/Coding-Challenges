function flipPairs(string){
  //iterate over the string and find pairs
  var flipString = ''
  for(var i=0; i < string.length; i+=2){
    //flip each pair of character
    var pair = []
    pair.push(string.slice(i,i+2));
    console.log(pair)
    for(var j=0; j < pair.length; j++){
      var flipPair = '';
      flipPair = pair[j][1] + pair[j][0];
      flipString = flipString + flipPair;
    }
  }
  //return a string
  return flipString
};

flipPairs('Hello World!')
