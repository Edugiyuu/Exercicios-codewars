/* DESCRIPTION:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */

/* function DNAStrand(dna){
    var final = '';
    for (let i=0; i < dna.length; i++) {
      if (dna[i] == 'A'){
        final += 'T'

      } else if(dna[i] == 'T'){
        final += 'A'

      }else if (dna[i] == 'G'){
        final += 'C'

      }else if (dna[i] == 'C'){
        final += 'G'
        
      }
      }
    return final
  }
console.log(DNAStrand('AATGC')) */


/* PRIMEIRA TENTATIVA USANDO SWITCH
function DNAStrand(dna){
    let final = ''
    for (let i=0; i < dna.length;i++)
    switch (dna[i]){
        case 'A':
                final += 'T';
            
        case 'T':
                final += 'A';
            
        case 'G':
                final += 'C';
                
        case 'C':
            final += 'G';
            
    }
    return final
} */

function DNAStrand(dna){
    let final = ''
    for (let i=0; i < dna.length;i++)
    switch (dna[i]){
        case 'A':
        if(dna[i] == 'A'){
            final += 'T'; 
        }
        case 'T':
            if(dna[i] == 'T'){
                final += 'A'; 
            }
          
        case 'G':
            if(dna[i] == 'G'){
                final += 'C'; 
            }
             
        case 'C':
            if(dna[i] == 'C'){
                final += 'G'; 
            }
    }
    return final
}

console.log(DNAStrand('AATCGATC'))
