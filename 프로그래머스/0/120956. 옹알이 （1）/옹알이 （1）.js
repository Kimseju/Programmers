function solution(babbling) {
    let answer = 0;
    let index = 0;
    
    for (let i = 0; i < babbling.length; i++){
        index = 0;
        let count = 0;
        while (index < babbling[i].length){
            let string = babbling[i];
            if (string.startsWith("aya", index) || string.startsWith("woo", index)) {
                count++;
                index += 3;
            }
            else if (string.startsWith("ye", index) || string.startsWith("ma", index)) {
                count++;
                index += 2;
            }
            else {
                count = 0;
                break;
            }
        }
        if (count > 0) answer += 1;
    }

    return answer;
}