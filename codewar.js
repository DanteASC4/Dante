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

//String character replacer

function DNAStrand(dna){
    var compliment={
        A : "T",
        T : "A",
        C : "G",
        G : "C"
    };
    var dnaFinal = "";
    if(dna.length >= 1){
    for(var i in dna) {
      dnaFinal = dnaFinal + compliment[dna[i]];
    }

    return dnaFinal;
}
}


//Array combiner

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


//Get all divisors of a integer

function divisors(integer){
  var factors = [],
  quotient = 0;

  for(var i = 1; i <= integer; i++){
    quotient = integer/i;

    if(quotient === Math.floor(quotient)){
      factors.push(i);
    }
  }
  return factors;
}

function divisors(integer){

    var numDivisors = 1;
    var factor = 2;

    while (factor * factor <= integer) {
        if (integer % factor === 0) {
            var exponent = 0;
            do {
                integer /= factor;
                exponent++;
            } while (n % factor === 0)
            numDivisors *= exponent + 1;
            factor = factor == 2 ? 3 : factor + 2
        }
    }
    if (integer > 1) {
        numDivisors *= 2;
    }

    return numDivisors *= 2
  }

//Count duplicates in a String

function duplicateCount(text) {
var freq = {};
for (var i=0; i<text.length;i++) {
    var character = string.charAt(i);
    if (freq[character]) {
       freq[character]++;
    } else {
       freq[character] = 1;
    }
}
return freq;
};

//Square every digit, return as number that is a combination not sum or product of all digits
//E.g. squareDigits(9119) returns 811181

function squareDigits(num){
    output = [];
    sNumber = num.toString();
    result = [];

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
    result.push(output[i] * output[i]);
}
result = result.join("");

result = parseInt(result);
return result;
}

//Tests if a number is prime

function isPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
