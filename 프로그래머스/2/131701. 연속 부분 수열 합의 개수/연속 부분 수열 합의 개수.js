function solution(elements) {
    var answer = 0;
    let arr = [...elements, ...elements];
    const set = new Set();
    let yoho = [0];
    
    for (let i = 0; i < arr.length; i++){
        yoho.push(yoho[i] + arr[i])
    }
    
    for (let i = 1; i <= elements.length; i++){
        for (let j = 0; j < elements.length; j++){
            set.add(yoho[j + i] - yoho[j]);
        }
    }
    return set.size;
}