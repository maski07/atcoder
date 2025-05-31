/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainA(input){
	const [N, [...An]] = input.split('\n').map(a => a.split(' ').map(Number));
    const ans = An.filter(a => a%2 === 0).join(' ');
    log(ans);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('5\n1 2 3 5 6');
// MainA('5\n2 2 2 3 3');
// MainA('10\n22 3 17 8 30 15 12 14 11 17');

/**  */
var log = console.log;
function MainB(input){
    const arr = input.split('\n');
    const [H, W] = arr.shift().split(' ').map(Number);
    const Ahw = arr.map(a => a.split(' ').map(Number));
    const out = []
    for(let h=0; h<H; h++){
        const outW = [];
        for(let w=0; w<W; w++){
            const num  = Ahw[h][w];
            if(num === 0){
                outW.push('.');
            } else {
                outW.push(String.fromCharCode(64 + num));
            }
        }
        out.push(outW.join(''));
    }
    log(out.join('\n'));
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('2 3\n0 1 2\n0 0 3');
// MainB('3 3\n24 0 0\n0 25 0\n0 0 26');
// MainB('3 1\n2\n9\n4');
// MainB('24 60\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 13 13 14 0 0 0 10 0 0 0 0 0 15 24 14 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 13 23 7 25 24 13 10 0 10 12 0 0 0 0 19 9 23 0 0 0 0 10 10 14 0 0 0 10 14 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 13 5 0 0 23 11 14 14 0 0 12 9 1 21 19 0 0 9 12 10 25 3 10 6 0 0 9 13 23 24 14 0 0 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 13 14 6 0 0 0 10 5 25 13 0 0 25 0 0 0 0 0 0 0 0 0 0 10 16 0 0 13 21 13 13 14 23 14 0 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 13 8 2 0 0 0 0 0 13 11 13 19 0 0 1 2 5 9 12 12 5 9 9 20 6 0 14 14 14 9 0 0 0 14 14 18 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 10 23 13 13 13 13 13 13 14 14 14 13 14 14 13 7 0 0 0 0 0 0 0 0 0 0 0 0 13 13 13 2 0 0 0 0 13 11 13 16 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 13 1 0 0 0 9 20 9 20 20 20 20 13 20 20 13 20 23 8 8 8 20 8 20 7 8 17 7 10 13 14 13 19 0 0 0 0 0 22 14 25 13 16 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 13 9 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 20 20 20 13 13 7 20 26 13 8 6 14 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 5 0 0 0 0 0 0 0 1 2 20 20 23 13 2 7 2 10 12 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 20 20 23 13 0 0 0 0 0 0 0 0 0\n0 0 0 0 13 0 0 0 0 0 0 0 0 1 0 0 0 13 12 9 14 13 13 9 9 20 12 0 0 0 0 0 0 0 0 0 0 0 1 9 9 9 9 12 0 0 0 0 0 0 0 20 0 0 0 0 0 0 0 0\n0 0 0 2 0 0 0 0 0 0 0 0 0 0 19 0 0 14 13 14 14 13 13 0 0 9 5 16 0 0 0 0 0 0 5 20 20 13 2 2 20 9 13 14 14 20 12 12 0 0 0 0 9 13 0 0 0 0 0 0\n0 0 1 9 0 0 0 0 0 0 0 0 0 0 0 13 10 13 13 13 13 2 5 12 10 5 0 0 0 0 0 0 0 0 20 16 0 0 0 13 14 13 13 13 13 0 0 10 8 0 0 0 0 0 20 7 0 0 0 0\n0 0 4 2 0 0 0 0 0 0 0 0 0 0 0 0 9 7 14 10 10 14 13 5 0 0 0 0 0 0 0 0 0 0 0 23 13 12 13 13 13 13 13 9 13 0 14 4 0 0 0 0 0 0 0 9 16 0 0 0\n0 0 22 13 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 20 13 13 13 2 9 14 2 20 14 0 0 0 0 0 0 0 0 0 2 0 0 0\n0 0 0 5 13 0 0 0 2 7 13 13 13 13 13 13 13 2 9 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 20 20 9 0 0 0 0 0 0 0 0 0 0 0 0 0 19 0 0 0\n0 0 0 0 20 13 12 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 21 14 7 2 20 24 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 6 0 0 0\n0 0 0 0 0 0 9 14 14 0 0 20 20 13 13 20 13 9 0 0 10 0 0 0 0 0 0 9 23 13 9 0 0 0 0 0 0 0 10 6 0 0 7 0 0 9 20 13 13 14 2 0 0 0 0 5 0 0 0 0\n0 0 0 0 0 0 0 0 20 13 14 0 0 0 0 0 0 0 0 13 9 0 0 0 0 0 0 0 0 13 11 0 0 0 0 0 0 0 14 9 0 0 0 20 25 14 7 0 0 0 0 9 1 14 7 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 9 13 13 20 0 0 0 0 0 9 12 0 0 0 0 0 0 0 14 13 14 0 0 0 0 0 0 0 6 0 0 0 0 0 0 0 0 9 9 20 14 14 4 14 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 20 2 9 0 0 0 0 9 9 20 21 7 13 20 0 0 20 23 7 7 2 12 7 6 0 0 0 0 0 0 0 0 0 0 0 0 5 5 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 20 20 9 9 20 24 10 12 10 0 0 0 0 0 0 0 0 20 20 0 0 0 0 0 20 7 7 13 22 2 5 9 2 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 20 5 20 5 2 5 7 20 5 14 14 5 11 5 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0');


/**  */
var log = console.log;
function MainC(input){
    const arr = input.split('\n');
    const [N, M] = arr.shift().split(' ').map(Number);
    const [...An] = arr.shift().split(' ').map(Number);
    const [...Bn] = arr.shift().split(' ').map(Number);
    let i = 0, j = 0, now = 1;
    let A = An[0], B = Bn[0];
    const ansA = [], ansB = [];
    while(true){
        if(A < B){
            ansA.push(now);
            // 残りのBを詰める
            if(++i === N){
                for(let x=0; x < M-j; x++){
                    ansB.push(x + now + 1);
                }
                break;
            } else{
                A = An[i];
            }
        } else {
            ansB.push(now);
            if(++j === M){
                // 残りのAを詰める
                for(let x=0; x < N-i; x++){
                    ansA.push(x + now + 1);
                }
                break;
            } else {
                B = Bn[j];
            }
        }
        now++;
    }
    log(ansA.join(' ') + '\n' + ansB.join(' '));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('4 3\n3 14 15 92\n6 53 58');
// MainC('4 4\n1 2 3 4\n100 200 300 400');
// MainC('8 12\n3 4 10 15 17 18 22 30\n5 7 11 13 14 16 19 21 23 24 27 28');

/**  */
var log = console.log;
function MainD(input){
    const arr = input.split('\n');
    const [N, Q] = arr.shift().split(' ').map(Number);
    const Eq = arr.map(a => a.split(' ').map(Number));
    const went = new Set();
    let min = 1;
    const ans = [];
    for(let i=0; i<Q; i++) {
        const event = Eq[i][0];
        if(event === 1) {

        } else if(event === 2){
            const goes = Eq[i][1];
            went.add(goes);
        } else if(event === 3) {
            while(went.has(min)) min++;
            ans.push(min);
        }
    }
    log(ans.join('\n'));
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainD('4 10\n1\n1\n3\n2 1\n1\n2 3\n3\n1\n2 2\n3');

/**  */
var log = console.log;
function MainE(input){
    const arr = input.split('\n');
    const [L, N1, N2] = arr.shift().split(' ').map(Number);
    const vl = arr.map(a => a.split(' ').map(Number));
    const N1arr = [];
    const N2arr = [];
    for(let i = 0; i < N1; i++){
        N1arr.push([vl[i][0], vl[i][1]]);
    }
    for(let i = 0; i < N2; i++){
        N2arr.push([vl[i+N1][0], vl[i+N1][1]]);
    }
    // solve 
    // p,qはprevious place
    let i=0, j=0, p=0, q=0, ans = 0;
    while(i < N1 && j < N2) {
        // log({i,j,p,q}, N1arr[i][1] , N2arr[j][1],{ans});
        // 数値の比較
        if(N1arr[i][0] === N2arr[j][0]) {
            // 同じなら共通部分をたす。
            ans += Math.min(p+N1arr[i][1],
                 q+N2arr[j][1]) - Math.max(p,q);
        }
        // 現在地を確認し、先に進んでいない方を次へ進める
        if(N1arr[i][1] + p < N2arr[j][1] + q){
            p += N1arr[i][1];
            i++;
        } else if(N1arr[i][1]+p === N2arr[j][1]+q){
            p += N1arr[i][1];
            q += N2arr[j][1];
            i++, j++;
        } else{
            q += N2arr[j][1];
            j++;
        }
    }
    log(ans);
}
// MainE(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainE('8 4 3\n1 2\n3 2\n2 3\n3 1\n1 4\n2 1\n3 3');
MainE('10000000000 1 1\n1 10000000000\n1 10000000000');
MainE('1000 4 7\n19 79\n33 463\n19 178\n33 280\n19 255\n33 92\n34 25\n19 96\n12 11\n19 490\n33 31');