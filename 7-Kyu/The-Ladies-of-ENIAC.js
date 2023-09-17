/* Comprised of a team of five incredibly brilliant women, "The ladies of ENIAC" were the first “computors” working at the University of Pennsylvania’s Moore School of Engineering (1945). Through their contributions, we gained the first software application and the first programming classes! The ladies of ENIAC were inducted into the WITI Hall of Fame in 1997!

Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!

To keep: only alpha characters, space characters and exclamation marks.
To remove: numbers and these characters: %$&/£?@

Result should be all in uppercase. */

function radLadies(name){
    var string = ""
    for(var i = 0; i < name.length;i++){
        if (name[i] !== "%" && name[i] !== "$" && name[i] !== "&" && name[i] !== "/" && name[i] !== "£" && name[i] !== "?" && name[i] !== "@"
        && name[i] !== "1" && name[i] !== "2" && name[i] !== "3" && name[i] !== "4"  && name[i] !== "5" && name[i] !== "6" && name[i] !== "7" && name[i] !== "8" && name[i] !== "9"
        ){
        string += name[i]
      } 
      
    }
    return string.toUpperCase().replace(/ /g, "")
  }

  console.log(radLadies("e@$2$%5du!"));