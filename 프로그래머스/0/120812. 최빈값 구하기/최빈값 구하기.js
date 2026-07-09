function solution(array) {
    let all = {};
    let max = 0;
    let check;
    let isP = false;
    for (let num of array){
        all[num] ? all[num]++ : all[num] = 1;
        if (all[num] > max){
            max = all[num]
            check = num;
            isP = false;
        } else if (all[num] == max && num != check){
            isP = true;
        }
    }
    
    return isP ? -1 : check;
}
