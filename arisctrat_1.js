/** メモ **/
'use strict'
/**  */
function Main(digits) {
    const len = digits.length;
    const memo = Array(len).fill(undefined);

    // use DFS and return sum of valid ways from each node
    const getSumOfWays = (i) => {
        // leaves
        if(i >= len) {
            return 1;
        }
        if(memo[i] !== undefined){
            return memo[i];
        }
        const oneLetterIsValid = digits[i] !== '0';
        const twoLetterIsValid = 
            oneLetterIsValid 
                && i+1 < len
                && Number(digits[i]+digits[i+1]) <= 26;

        // log({i, 1: digits[i], oneLetterIsValid, 
                // 2: digits[i]+digits[i+1], twoLetterIsValid});

        // branches
        const useOneLetter = oneLetterIsValid 
                    ? getSumOfWays(i+1)
                    : 0;
                    
        const useTwoLetter = 
                twoLetterIsValid
                ? getSumOfWays(i+2)
                : 0;

        const res = useOneLetter + useTwoLetter;
        memo[i] = res;
        return res;
    }

    const result = getSumOfWays(0);
    console.log(result);
}

// var log = (obj) => 0 && console.log(obj);

Main("121"); // 3
Main("1234"); // 3
Main("11106"); // 2
Main("230"); // 0
