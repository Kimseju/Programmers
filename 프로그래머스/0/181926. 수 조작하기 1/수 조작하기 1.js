function solution(n, control) {
    for (let alpha of control){
        if (alpha == 'w') n += 1;
        else if (alpha == 's') n -= 1;
        else if (alpha == 'd') n += 10;
        else n -= 10;
    }
    return n;
}