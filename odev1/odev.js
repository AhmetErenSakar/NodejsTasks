const r = process.argv[2];
const pi = 3.14;

function Alanhesabi(r, pi) {
    const alan = pi * (r * r);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${alan}`);
}

Alanhesabi(r, pi);