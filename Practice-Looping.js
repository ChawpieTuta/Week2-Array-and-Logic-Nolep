for (let x = 1; x <= 100; x++) {
    if (x % 4 == 0) {
        if (x % 7 == 0) {
            console.log("FOURSEVEN");
        } else {
            console.log("FOUR");
        }
    } else if (x % 7 == 0) {
        console.log("SEVEN");
    } else {
        console.log(x);
    }
}

let pattern = "";
for (let i = 1; i <= 5; i++) {           // Loop baris
  for (let j = 1; j <= i; j++) {         // Loop kolom (bintang per baris)
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern); 
// 089* **** **47
// 08986740834
// 100399
// 101299
// 010300
// 031299
// 100302121299
// 988 966

console.log(' ');
function nambahIniHurufBesarSetelahSpasi(word) {
    let result = '';
    for (let i = 0 ; i < word.length; i++) {
        if ( i == 0 || word[i-1] == ' ') {
            result += word[i].toUpperCase();
        } else {
            result += word[i];
        }
    }
    return result;
}

console.log(nambahIniHurufBesarSetelahSpasi("bella maharani"));
console.log(nambahIniHurufBesarSetelahSpasi('tantan sholahuddin'));
