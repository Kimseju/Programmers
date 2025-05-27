class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        String apb = Integer.toString(a) + Integer.toString(b);
        String bpa = Integer.toString(b) + Integer.toString(a);
        
        int ab = Integer.parseInt(apb);
        int ba = Integer.parseInt(bpa);
        if (ab < ba)
            answer = ba;
        else if (ab == ba)
            answer = ab;
        else
            answer = ab;
        return answer;
    }
}