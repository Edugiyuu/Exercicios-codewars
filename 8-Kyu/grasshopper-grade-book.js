/* Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
 */

function getGrade (s1, s2, s3) {
    var resultado = s1 + s2 + s3
    
    if (0 < 60){
      return "F"
      }
    if (60 < 70){
        return "D"
      }
    if (70 < 80){
      return "C"
      }
    if (80 < 90){
      return "B"
      }
    if (90 < 100){
      return "A"
      }
  }