function alphabetPosition(str){
    var anum={
        a: 1 , b: 2 , c: 3 , d: 4 , e: 5 , f: 6 , g: 7, h: 8, i: 9, j: 10, k: 11,
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26, A: 1, B: 2, C: 3, D: 4, E: 5, F: 6,
        G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18,
        S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    }
    if(str.length== 1) return anum[str] || ' ';
    return str.split('').map(letterValue).toString().replace(/,/g , " ");
}



//even better
function alphabetPosition(text) {
  return text.toLowerCase().replace(/[^a-z]/g, '')
        .replace(/./g, ([c]) => ' ' + (c.charCodeAt(0) - 'a'.charCodeAt(0) + 1))
        .substr(1);
}


//Array combiner!

function DNAStrand(dna){
  dna.replace(/a/g, "t");
  dna.replace(/t/g, "a");
  dna.replace(/c/g, "g");
  dna.replace(/g/g, "c");
  return dna;
}

function bonelessPizzaOrder(order){
  var text ="A boneless pizza with";
  var toppingNum = 1;

  for (var i=0 in order) {
   if(order[i] != ""){
     text += " " + toppingNum + ". " + order[i] ;
    }
    i++;
    toppingNum++;
  }
  if(order.topping1 == '' ){
    return "A boneless pizza with no toppings";
  }
  return text;
}
