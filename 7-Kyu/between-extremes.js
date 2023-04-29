/* Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
 */

/* function betweenExtremes(numbers) {
    return Math.max(...numbers) - Math.min(...numbers)
  }

  console.log(betweenExtremes([1, 41, 77, 100,20]));
 */
//-----------------------------------
/*   function realNumbers(n){
    var array = []
    for (let i = 1; i < n; i++) {
      array.push(i)
    }
   var divisiveis = array.filter(numero => numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0)
   console.log(divisiveis);
  }

  console.log(realNumbers(8)); */

  var array = []
  for (let i = 1; i < 5; i++) {
    array.push(i)
  }
  var divisiveis = array.filter(numero => numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0)
  console.log(divisiveis);