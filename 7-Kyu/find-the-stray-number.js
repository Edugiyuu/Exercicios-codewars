/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
 */

 function stray(numbers) {
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] !== numbers[i + 1]) {
        return numbers[i + 1];
      }else if(numbers[i] !== numbers[i + 2]){
        return numbers[i + 2]
      }
    }
  }

console.log(stray([2, 1, 1])); 

//-----------------------------------------------------
/* 
function stray(numbers) {
    numbers.sort();
      if (numbers[0] !== numbers[1]) {
        return numbers[0];
      }else{
        return numbers[numbers.length - 1];
      }
  }

console.log(stray([11,11,11,11,5,11,11])); */