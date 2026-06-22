function solution(A, B) {
    let i = 0;
    let j = 0;
    let score = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    while (j < B.length){
        if (B[j] > A[i]){
            i++;
            j++;
            score++;
        } else j++;
    }
    return score;
}