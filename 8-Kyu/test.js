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