function solution(s){
    let a = 0;
    for (const char of s) {
        if(a < 0) return false;
      if (char == "(") ++a;
        else --a;
    }
    return a == 0;
}