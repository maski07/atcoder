/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainA(input){
    let answer = input;
    for(let i=0; i< 4 - input.length; i++){
        answer = '0' + answer;
    }
    console.log(answer);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('321');
// MainA('7777');

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
	const arr = input.split('\n');
    const [N, P] = arr.shift().split(' ').map(Number);
    const An = arr.shift().split(' ').map(Number);
    let answer = 0;
    for(let i=0; i<N; i++){
        if(An[i] < P) answer++;
    }
    console.log(answer);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('4 50\n80 60 40 0');
// MainB('3 90\n89 89 89');
// MainB('2 22\n6 37');

/**
 * ■ アルゴリズム
 * for文：Mラウンド
 *  for文：対戦数(N回)
 *   対戦者判定
 *   勝ち負け判定
 *   順位判定
 *  ランキング順にソート（平衡2分探索木）
 * ■ アルゴリズム（前提）
 * ・順位判定
 * 勝・引・負 = 1・0・0
 * 勝ち数、勝数でソートする。
 * ・対戦者判定
 * 2k - 1 vs 2k
 * ※ k=前ラウンドの順位
 * ・勝ち負け判定
 * ■ 計算量
 * M * (N) * (N * log N *2)
 * 100 * 150 * 200 * log100 = 6 * 10^6
 */
function MainC(input){
    const arr = input.split('\n');
    const [N, M] = arr.shift().split(' ').map(Number);
    const Anm = arr.map(a => a.split(''));
    const currRate = new Array(2 * N - 1);
    for(let i =0; i<2 * N; i++) currRate[i] = {initial_i:i, rate:0};
    // ジャンケンの結果 1: win 0: lose
    const GCPResult = (a, b) => {
        if(a === b) return [0, 0];
        if(a === 'G' && b === 'C') return [1, 0];
        if(a === 'C' && b === 'P') return [1, 0];
        if(a === 'P' && b === 'G') return [1, 0];
        if(a === 'G' && b === 'P') return [0, 1];
        if(a === 'C' && b === 'G') return [0, 1];
        if(a === 'P' && b === 'C') return [0, 1];
    }
    // log(Anm);
    // log({arr:[N, M], Anm});
    for(let i=0; i<M; i++) {
        const currResult = new Array(2 * N - 1);
        // 人の数だけ対戦させる
        for(let j=0; j<2 * N; j += 2) {
            // 対戦者の手を取得
            const A = Anm[currRate[j].initial_i][i];
            const B = Anm[currRate[j+1].initial_i][i];
            // 勝ち負け判定
            const [A_result, B_result] = GCPResult(A, B);
            // log(`第${i+1}ラウンド：${j/2 + 1}戦目 ${currRate[j].initial_i} vs ${currRate[j+1].initial_i}`);
            // log({hand: [A, B], result: [A_result, B_result]});
            currRate[j].rate += A_result;
            currRate[j+1].rate += B_result;
        }
        // ランキング順にソート
        currRate.sort((a, b) => {
            const rateDiff = b.rate - a.rate;  // 第1ソート：rateの降順
            if(rateDiff === 0){
                return a.initial_i - b.initial_i; // 第2ソート：indexの昇順
            } else {
                return rateDiff;
            }
        });
    }
    console.log(currRate.map(a => a.initial_i+1).join('\n'));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('2 3\nGCP\nPPP\nCCC\nPPC');
// MainC('2 2\nGC\nPG\nCG\nPP');


