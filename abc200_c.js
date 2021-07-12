/** メモ **/
'use strict'
/** 
 * i - j = 200 * n
 * i = 200 * n + j
 * j = 200 * n - i
 * つまり
 * |i % 200| = |j % 200|
 */
/**
 * 振り返り：計算は極力簡略化させること。
 *  Conbinationをそのままやると重い！
 */
var log = console.log;
function Main(input){
    const [[N], An] = input.split('\n').map(a => a.split(' ').map(Number));
    const tmp = new Array(200).fill(0n);
    for(let i=0; i<N; i++){
        const I = An[i] % 200;
        tmp[I] += 1n;
    }
    let ans = 0n;
    tmp.forEach(a => {
        // const Factorial = (n, r=n) => 
        //     n > 1n && r > 0n 
        //     ? n * Factorial(n-1n, r-1n) 
        //     : 1n;
        // const Conbination = (n, r) => Factorial(n)/(Factorial(n-r) * Factorial(r))
        // const add = a > 1n ? Conbination(a, 2n) : 0n;
        const add2 = a > 1n ? a * (a-1n)/2n: 0n;
        ans += add2;
    });
    log(ans.toString());
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// Main('6\n123 223 123 523 200 2000');
// Main('5\n1 2 3 4 5');
// Main('8\n199 100 200 400 300 500 600 200');
/** 
 * 200 400 600 200 → 6通り
 * 100 300 500 → 3通り
 * 組み合わせ？
*/