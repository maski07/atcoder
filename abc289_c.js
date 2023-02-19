/** メモ **/
'use strict'

/** 
 * # ビット全探索の問題
 * 集合の組み合わせを繰り返し
 *    集合の中の数値の数を繰り返し
 *      数値が1≤x≤Nの範囲内にあればanswer++
 *  answerの出力
 */
var log = console.log;
function MainC(input) {
    const arr = input.split('\n');
    const [N, M] = arr.shift().split(' ').map(Number);
    const Sm = arr.filter((val, i) => i%2).map(x => x.split(' ').map(Number));
    let answer = 0;
    /**
     * 1 << N -> 1 << 3 -> '1000' -> 8通り
    */
    for(let bit = 0; bit < (1 << N); bit++){
        const S = new Set();
        for(let i = 1; i <= M; i++){
            /**
             * 1 & (1 << 1~N) 
             * 1 & (1 << 2) -> 01 & 100 -> 0
             * 2 & (1 << 1) -> 10 & 01 -> 1
             * 2 & (1 << 2) -> 10 & 10 -> 1
             * 4 & (1 << 0)
             * 4 & (1 << 1) -> 100 & 10
             * 4 & (1 << 2) -> 100 & 100
             */
            if(bit & (1 << i-1)) {
                // 対象の組み合わせとなるSを抽出
                Sm[i-1].forEach(x => S.add(x));
            }
        }
        if(S.size === N) {
            answer++;
        }
    }
    log(answer);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());

MainC('3 3\n2\n1 2\n2\n1 3\n1\n2');
MainC('4 2\n2\n1 2\n2\n1 3');
MainC('6 6\n3\n2 3 6\n3\n2 4 6\n2\n3 6\n3\n1 5 6\n3\n1 3 6\n2\n1 4');


