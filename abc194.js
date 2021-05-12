/** メモ **/
'use strict'
/** 
 * １：全パターン網羅なら？
 * 各作業者の和を求める
 * N * log(N-1) 通り + N
 * → 100万通り TRE?? 
 * 各作業者の和を求める
 * Aの最小とBの最小の人を出す
 *  → 同じならA, Bの2番目をそれぞれ出す
*/
var log = console.log;
function MainB(input){
	const [N, ...AnBn] = input.split('\n').map(a => a.split(' ').map(Number));
    // 各作業者の和とminを求める
    const sumMin = Math.min.apply(null, AnBn.map(a=> a[0] + a[1]));
    let answer = 10 ** 10;
    // 作業者の全パターン網羅
    for(let i = 0; i < N; i++) {
        for(let j = i+1; j < N; j++) {
            // answerとi作業者とj作業者がAB作業の2パターンでminをとる
            answer = Math.min.apply(null, [answer, Math.max(AnBn[i][0], AnBn[j][1]), Math.max(AnBn[i][1], AnBn[j][0])]);
        }
    }
    log(Math.min(answer, sumMin));
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('3\n8 5\n4 4\n7 9');
// MainB('3\n11 7\n3 2\n6 7');
/**
 * (Ai - Aj)^2
 *  (i+1)(i+2)(2*i+3)/6
 */
var log = console.log;
function MainC(input) {

}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
