/** メモ **/
'use strict'
var log = console.log;
function MainB(input) {
    const [A, B, Wkg] = input.split(' ').map(Number);
    const max = Math.floor(Wkg*1000/A);
    const min = Math.ceil(Wkg*1000/B);
    if(min > max){
        log('UNSATISFIABLE');
    } else {
        log(min, max);
    }
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainB('100 200 2');
MainB('120 150 2');
MainB('300 333 1');

/**
 * カンマの数は3桁ごとに増える
 * 1000~9999 4~6文字 → 9999 - 1000 = 8999 * 1 個
 * 1000~9999 7~9文字 → 9999 - 1000 = 8999 * 1 個
*/
var log = console.log;
function MainC(input){
    const N = Number(input);
    const len = input.length;
    const frontComma = Math.floor(len / 3);
    const rearComma = Math.floor(len / 3);
    const a = len - 1 - 3;
    // まずはその桁数未満の数を足す
    const front = 8999 * (a * (a + 1) / 2);
    // その桁の数を足す 11000 → 10000~11000 → (110000 - (10 ** len)) * カンマ数(5桁 - 3)
    const rear = (N - (10 ** (len-1)) + 1) *  (len - 3);
    log({front, rear, N, len, '10len' :10 ** len})
    log(front + rear); 
}

var log = console.log;
function MainC(input){
    const n = Number(input);
    let ans = 0;
    if (n>=1000) ans+=n-999;
    if (n>=1000000) ans+=n-999999;
    if (n>=1000000000) ans+=n-999999999;
    if (n>=1000000000000) ans+=n-999999999999;
    if (n>=1000000000000000) ans+=n-999999999999999;
    log(ans);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('1010')
// MainC('10100')
// MainC('27182818284590')
