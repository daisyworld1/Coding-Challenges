
//create a function that does binary search
//assume array has been sorted from small to large
function binarySearch(arr,num){
  //create a object whose key is the index number
  var obj = {};
  for (var i = 0; i < arr.length; i++){
    obj[arr[i]] = i;
  }
  //interate over the arr
  var halfArray = arr
  for(var i = 0; i < Math.log2(arr.length); i++){
    //compare mid point number to the target number
    var midNum = halfArray[Math.floor(halfArray.length/2)]
    
    //search left if mid point number if bigger than target number, vice versa
    if(midNum > num){
      halfArray = halfArray.slice(0,Math.floor(halfArray.length/2));
    } else if (midNum < num) {
      halfArray = halfArray.slice(Math.floor(halfArray.length/2)+1,);
    } else if (midNum === num){
      return obj[midNum];
    }
  }
};

binarySearch([1, 3, 16, 22, 31, 33, 34],33);
