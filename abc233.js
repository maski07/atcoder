/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainA(input){
    const [X, Y] = input.split(' ').map(Number);
    console.log(X - Y > 0 ? 0 : Math.ceil((Y-X)/10));
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('80 94');
// MainA('1000 63');
// MainA('270 750');


/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainB(input){
    const arr = input.split('\n');
    const [L, R] = arr.shift().split(' ').map(Number);
    const S = arr.shift();
    const revTaget = S.slice(L-1, R).split('').reverse().join('');
    console.log(S.slice(0, L-1) + revTaget + S.slice(R, S.length));
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('3 7\nabcdefgh');
// MainB('1 7\nreviver');
// MainB('4 13\nmerrychristmas');

/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainC(input){
    const arr = input.split('\n');
    const [strN, X] = arr.shift().split(' ');
    const [N, bigX] = [Number(strN), BigInt(X)];
    const Laij = arr.map(a => {
        const tmp = a.split(' ');
        return [tmp[0], [...tmp.splice(1)]];
    });
    let count = 0;
    // log({...Laij}, {X})
    const DFS = (multipled, index) => {
        if(index >= N) return;
        const tmp = Laij[index];
        const L = Number(tmp[0]);
        const aij = tmp[1];
        // log({aij, index, multipled})
        if(index === N-1){
            for(let i=0; i<L; i++){
                // log({L, aij});
                if(multipled * BigInt(aij[i]) === bigX){
                    count++;
                }
            }
        }
        for(let i=0; i<L; i++){
            DFS(multipled * BigInt(aij[i]), index+1);
        }
    };
    DFS(1n, 0);
    console.log(count);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('2 40\n3 1 8 4\n2 10 5');
// MainC('3 200\n3 10 10 10\n3 10 10 10\n5 2 2 2 2 2');
// MainC('3 1000000000000000000\n2 1000000000 1000000000\n2 1000000000 1000000000\n2 1000000000 1000000000');


/**
 * 累積和を作って
 * 各数値の5を引いた数が存在する値をカウントする
 */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainD(input){ 
    const arr = input.split('\n');
    const [N, K] = arr.shift().split(' ').map(Number);
    const [...An] = arr.shift().split(' ').map(Number);
    const cumulativeSumsSet = new Set();
    let cumulativeSum = 0;
    let count = 0;
    An.forEach(num => {
        cumulativeSum += num;
        if(num === K) {
            count++;
        }
        if(cumulativeSumsSet.has(cumulativeSum - K)){
            count++;
        }
        cumulativeSumsSet.add(cumulativeSum);
    });
    console.log(count);
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainD2(require("fs").readFileSync("/dev/stdin", "utf8").trim()); 
MainD('6 5\n8 -3 5 7 0 -4');
// MainD('6 5\n8 -3 5 7 0 -4 9');
// MainD('2 -1000000000000000\n1000000000 -1000000000');
/**
    8 -3 5 7 0 -4 9
    8 5 10 17 17 13 22
*/