/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split(' ').map(Number);
function MainC(input) {
    const arr = input.split('\n');
    const [N, X, Y, Z] = arr.shift().split(' ').map(Number);
    const An = arr.shift().split(' ').map(Number);
    const Bn = arr.shift().split(' ').map(Number);
    const peoples = [];
    for(let i = 0; i < N; i++) {
        peoples.push({
            i: i + 1,
            math: An[i],
            eng: Bn[i]
        });
    }
    const ok = [];
    const output = (N) =>{
        for(let i=0; i<X; i++){
            if(peoples.length === 0) break;
            ok.push(peoples.shift().i);
        }
    }

    // 数学の降順
    peoples.sort((a,b) => b.math - a.math || a.i - b.i);
    // 数学者の合格者Xを出力 & peopleから捨てる
    output(X);
    // 英語
    peoples.sort((a,b) => b.eng - a.eng || a.i - b.i);
    // 英語の合格者Yを出力 & peopleから捨てる
    output(Y);

    // 数学 + 英語
    peoples.sort((a,b) => b.eng + b.math - a.eng - a.math || a.i - b.i);
    // 合格者Zを出力
    output(Z);
    log(ok.sort((a, b) => a - b).join('\n'));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('6 1 0 2\n80 60 80 60 70 70\n40 20 50 90 90 80');
// MainC('5 2 1 2\n0 100 0 100 0\n0 0 100 100 0');
MainC('15 4 3 2\n30 65 20 95 100 45 70 85 20 35 95 50 40 15 85\n0 25 45 35 65 70 80 90 40 55 20 20 45 75 100');