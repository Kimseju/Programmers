function gcd(numer, denom){
    if (denom == 0) return numer;
    return gcd(denom, numer % denom);
}

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    let num = gcd(numer, denom)
    
    return [numer / num, denom / num];
}