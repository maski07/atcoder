/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);

function MainB(input) {
    const [N, An, Bn] = input.split('\n').map(a => a.split(' ').map(Number));
    let count = 0;
    let count2 = 0;
    const set = new Set(An);
    // log({An, Bn})
    var debug = true;
    for(let i=0; i<N; i++){
        if(An[i] === Bn[i]){
            log(An[i], Bn[i]);
            count++;
        } else if(set.has(Bn[i])){
            count2++;
        }
    }
    log(count);
    log(count2);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('4\n1 3 5 2\n2 3 1 4');
// MainB('3\n1 2 3\n4 5 6');
// MainB('7\n4 8 1 7 9 5 6\n3 5 1 7 8 2 6');

var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainC(input) {
    const arr = input.split('\n');
    // log({arr});
    const N = arr.shift() - 0;
    const Sn = arr.pop();
    const XYn = arr.map(x => x.split(' ').map(Number));
    const has = new Array(N+1).fill({});
    for(let i=0; i<N; i++){
        const X = XYn[i][0];
        const Y = XYn[i][1];
        const S = Sn[i];
        const Xaxis = has[Y];
        log({X, Y, S, Xaxis, has});
        if(S === 'R'){
            Xaxis.Rmin = Math.min(X, Xaxis.Rmin ? Xaxis.Rmin: 10**9);
        } else {
            Xaxis.Lmax = Math.max(X, Xaxis.Lmax ? Xaxis.Lmax: -1);
        }
        // log({Y, Xaxis});
        if(Xaxis.Lmax 
            && Xaxis.Rmin
            && Xaxis.Rmin <= Xaxis.Lmax){
            log({Xaxis})
            return log('Yes');
        }
    }
    log('No');
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('3\n2 3\n1 1\n4 1\nRRL');
// MainC('2\n1 1\n2 1\nRR');
MainC('10\n1 3\n1 4\n0 0\n0 2\n0 4\n3 1\n2 4\n4 2\n4 4\n3 3\nRLRRRLRLRR');

