/* DESCRIPTION:
vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100" */

/* function vowelOne(s){
    let stringDeNumeros = []
    var stringMinuscula = s.toLowerCase()
    for(var i = 0; i < stringMinuscula.length;i++){
      if(stringMinuscula[i] == 'a'){
        stringDeNumeros.push('1')
      }else if(stringMinuscula[i] == 'e'){
        stringDeNumeros.push('1')
      }else if(stringMinuscula[i] == 'i'){
        stringDeNumeros.push('1')
      }else if(stringMinuscula[i] == 'o'){
        stringDeNumeros.push('1')
      }else if(stringMinuscula[i] == 'u'){
        stringDeNumeros.push('1')
      }else{
        stringDeNumeros.push('0')
      }
    }
    return stringDeNumeros.toString().replace(/,/g,'')
  }

  console.log(vowelOne('Uma STringG')); */

  function vowelOne(s){
    let stringDeNumeros = []
    let vogais = ['a','e','i','o','u']
    var stringMinuscula = s.toLowerCase()

    for(var i = 0; i < stringMinuscula.length;i++){
      let existe = vogais.find(letra => letra == stringMinuscula[i])
      console.log(existe);
      existe ? stringDeNumeros.push('1') : stringDeNumeros.push('0')
      
    }
    return stringDeNumeros.toString().replace(/,/g,'')
  }

  console.log(vowelOne('Uma STringG'));

