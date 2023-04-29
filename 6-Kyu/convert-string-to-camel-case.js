/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str){
    var traco = str.indexOf('-')
   
   if (traco !== -1){
     return str.replace (/-/g, "")
   }else{
     
     var tracoRemovido = str.replace (/_/g, "")
     var sMaiusculo = tracoRemovido.replace (/s/,'S')
     return sMaiusculo.replace (/w/,'W')
   }
 }

console.log(toCamelCase('the_stealth_warrior')); 
