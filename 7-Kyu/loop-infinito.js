function filter_list(l) {
  var arrayfiltrado = []
  for(let i = 0; i < l.length; i++){
  
    if(typeof l[i] === 'number'){
      arrayfiltrado.push (l[i])
    }
}
  return arrayfiltrado
}