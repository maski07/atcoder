/** メモ **/
'use strict'

/** 
 * アルゴリズム：
 *  for文で、SとTを回す。
 *  宝石を受け取るパターンのうち時刻が早い方を出力する
 *    ①すぬけ君から時刻Sに渡ってくる
 *    ②高橋君から時刻Tにもらう
 *  ①の場合は、後ろの列をさかのぼっていく
 *  計算量：
 *      O(n) = 200000 * log200000 程度
 */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainC(input) {
    const arr = input.split('\n');
    const N = Number(arr.shift());
    const Sn = arr.shift().split(' ').map(Number);
    const Tn = arr.shift().split(' ').map(Number);
    let sumS = 0;
    const times = [];
    for(let i=1; i<N; i++){
        // 高橋君 < すぬけ君ならTが答え。
        const getNextIndex = index => index === N ? 0: index-1;
        const nextIndex = getNextIndex(i);
        if(Tn[i] < Sn[nextIndex]){
            times.push(Tn[i]);
        } else {
            // 違えば後ろの列を遡る
            const getHandOutTime = (j, time) => {
                const nowTime = Sn[j] + time;
                const handOutTime = Tn[j] + nowTime;
                // ループをストップする
                if(handOutTime > Tn[i]) {
                    return 10 ** 9 + 1;
                }
                const nextIndex = getNextIndex(j);
                return Math.min.apply(
                    null, 
                    [
                        handOutTime, 
                        getHandOutTime(nextIndex, nowTime),
                        Tn[j]
                    ]);
            }
            times.push(getHandOutTime(nextIndex, 0));
       }
    }
    console.log(times.join('\n'));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());

function MainC2(input) {
    const arr = input.split('\n');
    const N = Number(arr.shift());
    const Sn = arr.shift().split(' ').map(Number);
    const Tn = arr.shift().split(' ').map(Number);
    const times = Tn.splice(0, N);
    log({Sn});
    for(let i=0; i<N*2; i++) {
        const nextIndex = (i+1) % N;
        const nowIndex = i%N;
        log({nextIndex, nowIndex, times});
        log(times[nextIndex], times[nowIndex] + Sn[nowIndex])
        times[nextIndex]
            = Math.min(times[nextIndex], times[nowIndex] + Sn[nowIndex]);
    }
    console.log(times.join('\n'));
}
// MainC2(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC2('4\n4 1 5 1\n3 10 100 1');



