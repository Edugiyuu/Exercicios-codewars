
/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    var contador = 0
    for(var i = 0; i < str.length;i++){
      if(str[i] == 'a'){
      contador += 1
      }else if(str[i] == 'e'){
        contador += 1
      }else if(str[i] == 'i'){
       contador += 1 
      }else if(str[i] == 'o'){
        contador += 1
      }else if(str[i] == 'u'){
        contador += 1
      }
    }
    return contador
  }

console.log(getCount('conta isso aqui'));
