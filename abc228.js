/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainA(input){
    const [S, T, X] = input.split(' ').map(Number);
    // 0時をまたがらない場合
    if(T - S >= 0){
        if(S <= X && X < T){
            console.log('Yes');
        } else {
            console.log('No');
        }
    } else {
        // 0時をまたがる場合
        if(S <= X || X < T){
            console.log('Yes');
        } else {
            console.log('No');
        }
    }
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('7 20 12');
// MainA('20 7 12');
// MainA('23 0 23');

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
    const [[N, X], [...An]] = input.split('\n').map(a => a.split(' ').map(Number));
    const known = new Array(N+1).fill(false);
    let i = X;
    let ans = 0;
    while(!known[i]) {
        known[i] = true;
        i = An[i-1];
        ans++;
    }
    console.log(ans);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('4 2\n3 1 1 2');
// MainB('20 12\n7 11 10 1 7 20 14 2 17 3 2 5 19 20 8 14 18 2 10 10');

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainC(input){
	const [[N, K], ...Pij] = input.split('\n').map(a => a.split(' ').map(Number));
    const scores = new Array(N);
    // 全員の点数を求める。O(n) = 10^5
    for(let i=0; i<N; i++){
        scores[i] = {
            i
            , score:Pij[i][0] + Pij[i][1] + Pij[i][2]
            , rate:0
        };  
    }
    // 全員の順位を求める。O(n) = 10^5
    scores.sort((a, b) => b.score - a.score);
    const rates = new Array(N);
    // rankを記録する 参照で突っ込む。
    for(let i=0; i<N; i++){
        rates[i] = scores[i];
    }
    // index順に戻す
    scores.sort((a, b) => a.i - b.i);
    // +100点をしたときに目的の順位にたどり着ければYes,無理ならNo O(n) = 10^5
    for(let i=0; i<N; i++){
        const score = scores[i];
        // log(score, rates[K-1]);
        // +100点して目的の順位の点数を超えるならYes
        if(score.score + 300 >= rates[K-1].score){
            console.log('Yes');
        } else {
            console.log('No');
        }
    }
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('3 1\n178 205 132\n112 220 96\n36 64 20');
// MainC('2 1\n300 300 300\n200 200 200');
// MainC('4 2\n127 235 78\n192 134 298\n28 56 42\n96 120 250');

function MainD(input){
    const [[Q], ...tx] = input.split('\n').map(a=> a.split(' ').map(Number));
    const N = 2**20;
    const An = new Array(N).fill(-1);
    // O(2 * 10^5)
    for(let i=0; i<Q; i++) {
        const [t, x] = tx[i];
        if(t === 1) {
            let h = Number(x.toString()); // 値コピー
            // ここが重い
            while(An[h % N] !== -1){
                h++;
            }
            An[h % N] = x;
        } else {
            console.log(An[x % N]);
        }
    }
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainD('4\n1 1048577\n1 1\n2 2097153\n2 3');
