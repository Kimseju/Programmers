function solution(array) {
    let all = {};
    let count = 0;
    for (let num of array){
        if (all[num]) all[num]++;
        else all[num] = 1;
    }
    
    let max = Math.max(...Object.values(all));
    let max_key;
    for (let key in all){
        if (all[key] == max) {
            max_key = key;
            count++;
        }
    }
    
    return count > 1 ? -1 : +max_key;
}