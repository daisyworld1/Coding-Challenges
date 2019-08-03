//create function that finds a pair of integers that will add up to a target sum
function findPairForSum(arrNum, targetSum){
  var arrResult = [];
  //iterate through the array of integers create pairs of integers
  for (var i = 0; i < arrNum.length - 1; i++) {
    var newArray = arrNum.slice(i + 1,);
    for (var j = 0; j < newArray.length; j++) {
      //if the pair adds to up targetSum return the pair as an array
      //if the pair doesn't add up to the targetSum, continue the interation
      if (arrNum[i] + newArray[j] === targetSum) {
        arrResult = [arrNum[i], newArray[j]];
      }
    }

  }
  //return the resulting array
  return arrResult
};
//assertion function
function assert(expected,actual,testName){
  if(JSON.stringify(expected)===JSON.stringify(actual)){
    console.log('passed');
  } else {
    console.log('failed [' + testName + '] expected "' + expected + '" but got "' + actual + '"');
  }
}
//test
var expected1 = [4, 5];
var actual1 = findPairForSum([3, 34, 4, 12, 5, 2], 9);
testName1 = 'stardard case';
assert(expected1,actual1,testName1);
