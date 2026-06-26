function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    lost = new Set(lost);
    reserve = new Set(reserve);
    for (let i of [...reserve]){
        if (lost.has(i)){
            lost.delete(i);
            reserve.delete(i);
        }
    }
    
    for (let i of reserve){
        if (lost.has(i - 1)) {
            lost.delete(i - 1);
        } else if (lost.has(i + 1)){
            lost.delete(i + 1);
        }
    }
    
    return n - lost.size;
}