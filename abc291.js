/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainA(input){
	const arr = input.split('');
    for(let i=0; i<arr.length; i++){
        if(arr[i].toUpperCase() === arr[i]){
            log(i+1);
        }
    }
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('aBc');
// MainA('xxxxxxXxxx');
// MainA('Zz');

/**  */
var log = console.log;
function MainB(input){
    const [[N], [...Xn]] = input.split('\n').map(x => x.split(' ').map(Number));
    Xn.sort((a,b) => a-b); // 昇順
    const remains = Xn.slice(0 , Xn.length - N).splice(N);
    log(remains.reduce((a, b) => a + b,0)/remains.length);
} 
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('1\n10 100 20 50 30');
// MainB('2\n3 3 3 4 5 6 7 8 99 100');

/**  */
var log = console.log;
function MainC(input){
	const [N, S] = input.split('\n');
    const alreadyPassed = new Set();
    let curr = [0, 0];
    const fixedDegit = (num) =>{
        return ('000000' + num).slice(-6);
    } 
    alreadyPassed.add(fixedDegit(curr[0]) + fixedDegit(curr[1]));
    for(let i=0; i<S.length; i++){
        if(S[i] === 'R') {
            curr[0]++;
        } else if(S[i] === 'L'){
            curr[0]--;
        } else if(S[i] === 'U'){
            curr[1]++;
        } else if(S[i] === 'D'){
            curr[1]--;
        }
        const cordinate = fixedDegit(curr[0]) + fixedDegit(curr[1]);
        if(alreadyPassed.has(cordinate)){
            log('Yes');
            return;
        } else{
            alreadyPassed.add(cordinate);
        }
    }
    log('No');
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('5\nRLURU');
// MainC('20\nURDDLLUUURRRDDDDLLLL');

/** 
 * 
 */
var log = console.log;
function MainD1(input) {
    const arr = input.split('\n');
    const [N, ...ABn] = arr.map(x => x.split(' '));
    const numN = Number(N);
    let S = [];
    const mod = 998244353;
    S.push(new Set([ABn[0][0]]));
    S.push(new Set([ABn[0][1]]));
    log(S);
    for(let i=1; i<numN; i++){
        i  < 7  ? log({i, S, len: S.length}) : undefined;
        const A = ABn[i][0];
        const B = ABn[i][1];
        const temp = [];
        for(let j=0; j<S.length; j++){
            const now = S[j];
            if(!now.has(A)){
                const next = new Set(Array.from(now));
                next.add(A);
                temp.push(next);
            }
            if(!now.has(B)){
                const next = new Set(Array.from(now));
                next.add(B);
                temp.push(next);
            }
        }
        log({temp_len:temp.length});
        S = temp;
    }
    log(S.length % mod);
}
// MainD1(require("fs").readFileSync("/dev/stdin", "utf8").trim());

var log = console.log;
function MainD(input) {
    const arr = input.split('\n');
    const [N, ...ABn] = arr.map(x => x.split(' '));
    const numN = Number(N);
    const memo = [];
    memo.push([ABn[0][0], 1n]);
    memo.push([ABn[0][1], 1n]);
    const mod = 998244353n;
    for(let i=1; i<numN; i++){
        const A = ABn[i][0];
        const B = ABn[i][1];
        const pre1 = memo[0];
        const pre2 = memo[1];
        let plus1 = 0n;
        if(A !== pre1[0]){
            plus1 += pre1[1]% mod;
        }
        if(A !== pre2[0]){
            plus1 += pre2[1]% mod;
        }
        let plus2 = 0n;
        if(B !== pre1[0]){
            plus2 += pre1[1]% mod;
        }
        if(B !== pre2[0]){
            plus2 += pre2[1]% mod;
        }
        memo[0][0] = A;
        memo[0][1] = plus1;
        memo[1][0] = B;
        memo[1][1] = plus2;
    }
    log(String(memo[0][1] + memo[1][1] % mod).split('n').join());
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());

MainD('3\n1 2\n4 2\n3 4');
MainD('4\n1 5\n2 6\n3 7\n4 8');
MainD('8\n877914575 602436426\n861648772 623690081\n476190629 262703497\n971407775 628894325\n822804784 450968417\n161735902 822804784\n161735902 822804784\n822804784 161735902');

