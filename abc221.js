/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainA(input){
	const [A, B] = input.split(' ').map(Number);
    console.log(32 ** (A - B));
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('6 4');
// MainA('5 5');

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input) {
    const [S, T] = input.split('\n');
    if(T === S) return console.log('Yes');
    // 隣り合う文字をすべて入れ替えてチェックする
    for(let i=1; i< S.length; i++) {
        // 文字列のコピー
        const tmp = S.split('');
        const changed = tmp[i];
        tmp[i] = tmp[i-1];
        tmp[i-1] = changed;
        if(T === tmp.join('')) return console.log('Yes');
    }
    console.log('No');
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('abc\nacb');
// MainB('aabb\nbbaa');
// MainB('abcde\nabcde');

/**
 * ■ アルゴリズム
 * ・普通に解くと
 * 各桁をすべて分離する（全パターンを作る）
 *   桁数-1でfor文を回す。
 *   深さ優先探索で先頭から数値を確定させる。
 * 最大値を取る。
 * ■ 計算量
 * (N-1) * N! + N * log N
 * 数学的な解法がありそう。
 * 123 → 321 → 3*21
 *  21 * 3 = 62
 *  → 一番でかい数値1つと、降順でソートされた数値
 * 1010 → 1 * 100
 * 1 100 = 100
 * ■ アルゴリズム2
 * 998544332
 * Nの数値から、1つだけ選択する。2つだけ選択するという処理を順に繰り返す。
 * 最大値を出力する。
 * ■ アルゴリズム3
 * 998544332
 * 数値のポイントを決める。(ポイントX)
 * ポイントXから1つずつ値を取得する。
     * (N log N) * N * (N-1) * (N-2) * ...
 */
function MainC(input) {
    const arr = input.split('').map(Number).sort((a, b) => b-a);
    const answers = [];
    // log({arr});
    for(let i=1; i<arr.length; i++){
        const temp = [...arr];
        const temp2 = [...arr];
        const A = temp.splice(0, i);
        const B = temp2.splice(i, arr.length+1);
        answers.push(A.join('') * B.join(''));
    }
    console.log(Math.max.apply(null, answers))
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('123');
MainC('1010');
MainC('998244353');
