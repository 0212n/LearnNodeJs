 
/*function palindrome(str) {
  // Good luck!
  console.log(str);
  var exp = /\W+/gi  ;
  var newStr = str.replace(exp,'');
  console.log(newStr);
  //return true;
  newStr=newStr.toLowerCase();
  console.log(newStr);
  var arr = newStr.split("");
  var revarr = arr.reverse();
  for(var i =0;i<arr.length;i++){
*/
/*
function findLongestWord(str) {
  var arr = str.split(' ');
 console.log(arr);
 var longwordlen = 0;
  for(var val in arr){
    console.log(arr[val]+ " "+arr[val].length);  
    if(longwordlen< val.length) longwordlen = val.length ;
  }
              
              
  
  return longwordle}
findLongestWord("The quick brown fox jumped over the lazy dog");*/

function titleCase(str) {
  var strArr = str.split(' ');
 console.log(strArr); 
 for(var word in strArr){
    strArr[word][0]=strArr[word][0].toUpperCase();
  }
  var returnStr = strArr.join();
  console.log(returnStr);  
return returnStr;
}

titleCase("I'm a little tea pot");

