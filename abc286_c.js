/** メモ **/
'use strict'
/**  */
/**  */
var log = console.log;
// Aを回して、回文との文字列がいくつ異なるのかを出す。
// 計算量：: (5000/2) * 5000 = out?
function MainC(input){
    const arr = input.split('\n');
    const [N, A, B] = arr.shift().split(' ').map(Number);
    const getDiffNumOfPalind = (str) => {
        let diff = 0;
        const len = str.length;
        for(let i =0; i<len; i++){
            if(str[i] !== str[len - (i + 1)]){
                diff++;
            }
        }
        return diff;
    }
    // todo: be causions it should be bigint.
    let currentPrice = 0;
    let minPrice = Number.MAX_VALUE;
    let S = arr.shift();
    const Slen = S.length;
    for(let i=0; i < Slen; i++){
        const diff = getDiffNumOfPalind(S);
        minPrice = Math.min(minPrice, currentPrice + diff/2 * B);
        // pay A yen
        S = S.slice(1, Slen) + S[0];
        currentPrice += A;
        // log({S, diff, currentPrice, minPrice, Slen});
    }
    log(minPrice);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());

MainC('5 1 2\nrrefa');
MainC('8 1000000000 1000000000\nbcdfcgaa');

