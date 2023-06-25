class Solution {
public:
    vector<string> letterCombinations(string digits) {
        map<char, string> digitsMap({
            {'2', "abc"},
            {'3', "def"},
            {'4', "ghi"},
            {'5', "jkl"},
            {'6', "mno"},
            {'7', "pqrs"},
            {'8', "tuv"},
            {'9', "wxyz"}});
        vector<string> combinations;
        if (digits.empty()) {
            return combinations;
        }
        if (digits.size() == 1) {
            for (char letter : digitsMap[digits[0]]) {
                combinations.emplace_back(1, letter);
            }
            return combinations;
        }
        for (char c : digitsMap[digits[0]]) {
            for (const string& remaining : letterCombinations(digits.substr(1))) {
                combinations.emplace_back(1, c) += remaining;
            }
        }
        return combinations;
    }
};