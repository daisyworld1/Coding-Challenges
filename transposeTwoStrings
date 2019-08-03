//create a function that will transpose two strings
function transposeTwoStrings(word1, word2){
  var result = '';
  //find the longer word
  if(word1.length > word2.length){
    //interate through both words
    for(var i = 0; i < word1.length; i++){
      //concatenate letter from each word
      if(i < word2.length){
        result += word1[i] + word2[i] + '\n';
      } else {
        result += word1[i]+ ' ' +'\n';
      }
    } 
  } else {
    //interate through both words
    for(var i = 0; i < word2.length; i++){
      //concatenate letter from each word
      if(i < word1.length){
        result += word1[i] + word2[i] + '\n';
      } else {
        result +=  ' ' + word2[i] + '\n';
      }
    } 
  }
  return result;
}
//assertion function
function assert(expected, actual, testName){
  if(expected === actual){
    console.log('passed');
  } else {
    console.log('failed ['+testName+'] expected "' + expected + '" but got "' + actual + '"');
  }
}

//test
var expected = 'as\nwa\ne \n';
var actual = transposeTwoStrings('awe','sa');
assert(expected,actual,'test longer word1');

var expected2 = 'sa\naw\n e\n';
var actual2 = transposeTwoStrings('sa','awe');
assert(expected2,actual2,'test longer word2');
