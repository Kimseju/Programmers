function solution(babbling) {
    let answer = 0;
    let index = 0;
    
    for (let i = 0; i < babbling.length; i++){
        index = 0;
        let sum;
        let count = 0;
        while (index < babbling[i].length){
            let string = babbling[i];
            if (string.startsWith("aya", index)) {
                if (sum == 1) {
                    count = 0;
                    sum = 0
                    break;
                }
                count++;
                sum = 1
                index += 3;
            }
            else if (string.startsWith("woo", index)) {
                if (sum == 2) {
                    count = 0;
                    sum = 0
                    break;
                }
                count++;
                sum = 2
                index += 3;
            }
            else if (string.startsWith("ye", index)) {
                if (sum == 3) {
                    count = 0;
                    sum = 0
                    break;
                }
                count++;
                sum = 3;
                index += 2;
            }
            
            else if (string.startsWith("ma", index)){
               if (sum == 4) {
                    count = 0;
                    sum = 0
                    break;
                }
                count++;
                sum = 4;
                index += 2;
            }
            
            else {
                count = 0;
                sum = 1
                break;
            }
        }
        if (count > 0) answer += 1;
    }

    return answer;
}