/* const valores = [2,6,7, 8,2]

const valoresnovos = valores.map(valor => valor +2)

console.log(valoresnovos);
 */

//Primeiro passo percorrer o array com map
//Segundo passo verificar o valor da posição do array
//Terceiro passo retornar o valor da posição do array
function filter_list(l) {
  return l.filter(valorDaPosicao => isNaN (valorDaPosicao) ? null: valorDaPosicao
      
    )
  }

  function isNumber(value) {
    return typeof value === 'number'
  }

 console.log(filter_list([1,3,"eu",6,"p"])); 