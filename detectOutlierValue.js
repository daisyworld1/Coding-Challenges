//create a function that find the outliner of a string of numbers
function detectOutlierValue(stringOfNum){
    //create an object that contains odd numbers
    var objOdd = {}
    //create an object that contains even numbers
    var objEven = {};
    //split the string using space
    var arrNum = stringOfNum.split(' ');
    //conver string to integer
    var arrInt = [];
    for(var i = 0; i < arrNum.length; i++){
        arrInt.push(Number(arrNum[i]));
    }
    
    for(var i = 0; i < arrInt.length; i++){
        if(arrInt[i] % 2 === 0){
            //add all even numbers to objEven
            objEven[i+1] = arrInt[i];
        } else if (arrInt[i] % 2 === 1){
            //add all odd numbers to objOdd
            objOdd[i+1] = arrInt[i];
        } else {
            return undefined;
        }
    }
    //count the keys of each oject
    //return the key (index) of the object whose keys length is 1
    if(Object.keys(objEven).length === 1){
        return Number(Object.keys(objEven)[0]);
    } else if (Object.keys(objOdd).length === 1){
        return Number(Object.keys(objOdd)[0]);
    } else {
        return undefined;
    }
}

//test
function assert(expected, actual, testName){
  if(expected === actual){
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] expected "' + expected + '" but got "' + actual + '"');
  }
}

expected = 4;
actual = detectOutlierValue("1234 234 456 1");
assert(expected, actual,'testFourIntegerString');
