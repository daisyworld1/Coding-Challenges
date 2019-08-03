//create a function that flips every n charaters of a string
function flipEveryNChars(input, n){
//split a string every n charaters
  var flippedString = '';
  var arr = [];
  for(var i=0;i<input.length;i+=n){
    arr.push(input.slice(i,i+n));
  }
  //flip every charater in each chunk of character 
  for(var j = 0; j < arr.length; j++){
  //concatenate the flipped charaters
    flippedString += flipChar(arr[j]);
  }
//return the new string 
return flippedString
}

//helper function to reverse all charaters in a string
function flipChar(string){
  var flippedString = '';
  for(var i = 0; i < string.length; i++){
    flippedString = string[i] + flippedString;
  }
  return flippedString;
}

flipChar('apple')

flipEveryNChars('hello world!',3)
