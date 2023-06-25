class Solution {
public:
    bool isPalindrome(int x) {
        int i=x; 
        long int n=0;
        while(i>0)
        {
            n=i%10+n*10;
            i/=10;
        }
        return n==x;
    }
};