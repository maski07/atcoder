/** メモ **/
'use strict'
/** 
 * 普通にやると。。
 *  アルゴリズム：
 *   A * N のループを行い最小値を出力する
 *  計算量：
 *   O(N*
 * M) = 2×10^5 × 2×10^5 = 4 × 10^10
 *  → 10^7を超えるとTREになるのでだめ
 * ------------------
 *  アルゴリズム２：
 *   ①AとBをソートする
 *   ② AとBのループでA[i] > B[j]となれば、Bのindex++;
 *   ③最小値となるものを出力する。
 *  計算量：
 *   ソート + 2重for文
 *   (2*10^5 log 2*10^5) × 2くらい？ 
 */
var log = console.log;
function MainC(input){
    const arr = input.split('\n');
    const [N, M] = arr.shift().split(' ').map(Number);
    const An = arr.shift().split(' ').map(Number);
    const Bn = arr.shift().split(' ').map(Number);
    An.sort();
    Bn.sort();
    let i=0;
    let j=0;
    while(i<N && j < M){
        ans = Math.min(ans, Math.abs(An[i] - Bn[j]));
        if(An[i] < Bn[j]){
            i++;
        } else {
            j++;
        }
    }
    console.log(ans);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('2 2\n1 6\n4 9');
MainC('1 1\n10\n10');
MainC('6 8\n82 76 82 82 71 70\n17 39 67 2 45 35 22 24');

/**
 * 3 4 8 10
 * 2 7 8 9
 */
