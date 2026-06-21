function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => a - b);
    for (let i in citations){
        if (citations.length - +i <= citations[i]) return citations.length - +i;
    }
    return answer;
}