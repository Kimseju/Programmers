function solution(num, total) {
    let middle = total / num;
    let arr = [];
    
    console.log((num - 1) / 2)
    for (let i = middle - (num - 1) / 2; i <= middle + (num - 1) / 2; i++){
        arr.push(i);
    }
    
    return arr;
}