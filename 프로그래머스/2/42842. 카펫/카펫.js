function solution(brown, yellow) {
    let total = brown + yellow;
    let left = 3;
    let right = total - 1;
    
    let all = [];
    
    while (left <= total){
        if (left * right == total){
            if (left >= right) all.push([left, right]);
            left++;
            right = total - 1;
        } else if (left * right < total){
            left++;
        } else {
            right--;
        }
    }
    
    return all.filter(e => (e[0] - 2) * (e[1] - 2) == yellow)[0];
    
}
