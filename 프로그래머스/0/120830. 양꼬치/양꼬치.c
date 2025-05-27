#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n, int k) {
    int answer = 0, a;
    a = n / 10;
    answer = (k*2000)+(12000*n)-(a*2000);
    return answer;
}