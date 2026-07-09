function solution(str1, str2) {
    var answer = '';
    for (index in str1) answer += str1[index] + str2[index];
    return answer;
}