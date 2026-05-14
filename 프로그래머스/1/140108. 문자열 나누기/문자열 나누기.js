function solution(s) {
    var answer = 0;
    let count = 1;
    let countwo = 0;
    while ( s.length != 0 ) {
        if (count == countwo) {
            s = s.slice(count + countwo);
            count = 1;
            countwo = 0;
            ++answer;
        }
        if (s[0] != s[(count+countwo)]) {
            ++countwo;
        }
        else ++count;
    }
    return answer;
}