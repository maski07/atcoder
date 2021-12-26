/** メモ **/
'use strict'

/** 
 * ■ アルゴリズム
 * 各導火線の所要秒数を算出する
 * 左と右で所要秒数が同じになるポイントを見つける
 *  左と右で同じ導火線を消化するパターン
 *   → 左からの長さ +@ 消化したパターンを算出
 *     +@ の算出方法
 *       左と右で秒数が少ない分多く消化することができる
 *  左と右できれいに導火線が消化されるパターン
 *   → 単純に左からの長さを出力
 */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainC(input){
    const arr = input.split('\n');
    const N = Number(arr.shift());
    const AnBn = arr.map(a => a.split(' ').map(Number));
    // 左と右で所要秒数が同じになるポイントを見つける
    const seconds = AnBn.map(a => a[0] / a[1]);
    for(let i=0, j=AnBn.length-1; i >= j; i++, j--) {
        const [A, B] = AnBn[i];
    }
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('3\n1 1\n2 1\n3 1');
MainC('3\n1 3\n2 2\n3 1');
MainC('5\n3 9\n1 2\n4 6\n1 5\n5 3');
