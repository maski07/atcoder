/**
 * 茶色問題
 */
function MainC(input){
    const arr = input.split(' ');
    const num1 = BigInt(arr[0]);
    const num2 = BigInt((arr[1].split('.').join('')));
    console.log(String(num1*num2/100n).replace('n',''))
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
const log = (...val) => console.log(...val);
// MainC('198 1.10')
// MainC('1 0.01')
// MainC('1000000000000000 9.99')
/**
 * 解法:
 *  ①全ての公約数を算出する
 *    公約数の中で最小の操作を計算する
 *      → 速度が間に合わん
 *  ②下の数から順に割り切れる数を算出していく
 *      → 最大10^12繰り返し処理が発生する。速度懸念
 *      → ダメだった
 *  ③素因数分解を行う
 * 
 */
function MainD(input){
    const num = Number(input);
    let calNum = num;
    let answer = 0;
    for(let i=2; i<10**12; i++){
        if(calNum % i === 0){
            calNum /= i;
            answer ++;
        }
        if(calNum === 1) break;
    }
    console.log(answer);
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainD('24')
MainD('1')
MainD('64')
MainD('1000000007')
MainD('997764507000')