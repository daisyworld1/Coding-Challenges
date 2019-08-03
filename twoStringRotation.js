//create a function that determines whether one string is the rotated version of another stringfunction 
function twoStringRotation(string1,string2){
  //interate over the first string to see if any interation matches the second string
  var isRotation = undefined;
  for(var i = 0; i < string1.length; i++){
    var newString1 = '';
    newString1 = string1.slice(i,) + string1.slice(0,i)
    //compare newString1 and string2
    //if newString1 equals to string2, return true
    if(newString1 === string2){
      return true;
    } else {
      isRotation = false;
    }
  }
  return isRotation;

}

//assertion function
function assert(expected, actual, testName){
  if(expected === actual){
    console.log('pass');
  } else {
    console.log('failed [' + testName + '] expected "' + expected + '" but got "' + actual + '"');
  }
}

//test
var expected1 = true;
var actual1 = twoStringRotation('hello world','hello world');
assert(expected1,actual1,'standardCase');

//test2
var expected1 = true;
var actual1 = twoStringRotation('apple','leapp');
assert(expected1,actual1,'standardCase');
