class Solution {
public:
    int romanToInt(string s) {
        std::unordered_map<char, int> equivalences = {
            {'I' , 1},
            {'V' , 5},
            {'X' , 10},
            {'L' , 50},
            {'C' , 100},
            {'D' , 500},
            {'M' , 1000}
        };
        int result = 0;
        const int str = s.size();
      for(int i = 0; i < str; i++){
        if(equivalences[s[i]] > equivalences[s[i+1]] || equivalences[s[i]] == equivalences[s[i+1]]){
            result += equivalences[s[i]];
            }
        else if (equivalences[s[i+1]] != 0){
            result -= equivalences[s[i]];
        }
      };   
      equivalences = {};
      return result;
    }
};