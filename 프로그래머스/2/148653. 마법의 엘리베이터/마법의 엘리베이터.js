function solution(storey) {
    let answer = 0;
    while (storey > 0){
        let now = storey % 10;
        if (now > 5) {
            answer += 10 - now;
            storey += 10;
        }
        else if (now < 5) answer += now;
        else {
            if (Math.floor(storey / 10) % 10 >= 5) {
                answer += 5;
                storey += 10;
            } else answer += 5;
        }
        storey = Math.floor(storey / 10);
    }
    return answer;
}