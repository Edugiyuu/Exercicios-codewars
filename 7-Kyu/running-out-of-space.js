/* Kevin is noticing his space run out! Write a function that removes the spaces
 from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] 
would produce ['i','ihave','ihaveno','ihavenospace'] */
/* 
function spacey(array){
    var resultado = [];
    var stringJunto = '';
    for (let i = 0; i < array.length; i++) {
      stringJunto += array[i]
      resultado.push(stringJunto);
    }
    return resultado;
  }

console.log(spacey(['ola','eu','sou','eu'])); */

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
    return contador
    }
  }