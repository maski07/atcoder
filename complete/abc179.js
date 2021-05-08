'use strict'
const log = console.log;
function MainA(input){
    const last = input.split('').pop();
    console.log(last==="s" ? input + "es" : input + "s")
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA("apple")
// MainA("bus")

function MainB(input){
    const [N, ...Arr] = input.split('\n');
    let zoroCount = 0;
    const Darr = Arr.map(a => a.split(' '))
    for(let i=0; i< Darr.length; i++){
        if(Darr[i][0] == Darr[i][1]){
            zoroCount++;
        } else{
            zoroCount = 0;
        }
        if(zoroCount === 3) break; 
    }
    console.log(zoroCount === 3 ? "Yes" : "No");
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB("5\n1 2\n6 6\n4 4\n3 3\n3 2")
// MainB("5\n1 1\n2 2\n3 4\n5 5\n6 6")
// MainB("6\n1 1\n2 2\n3 3\n4 4\n5 5\n6 6")

/**
 * ループ数は10^8まで
 */
function MainC(input){
    const N = Number(input);
    let answer = 0;
    for(let A=1; A<N; A++){
        for(let B=1; B<N/A; B++){
            answer++;
        }
    }
    console.log(answer);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC("3")
// MainC("100")
// MainC("1000000") // 13969985

function MainD(input){
    const mod = 998244353;
    const [[Ns, Ks], ...LR] = input.split('\n').map(val => val.split(' '));
    const [N, K] = [Number(Ns), Number(Ks)]
    const uni = new Set();
    LR.flat().map(a => uni.add(Number(a)));
    const S = Array.from(uni);
    const DFS = (curr) => {
        if(curr > N) return 0;
        if(curr === N) return 1;
        let count = 0;
        for(let i=0; i<S.length; i++){
            count += DFS(curr+S[i]);
        }
        return count % mod;
    }
    console.log(DFS(1));
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());

MainD("5 2\n1 1\n3 4")
MainD("5 2\n3 3\n5 5")
MainD("5 1\n1 2")
MainD("60 3\n5 8\n1 3\n10 15")
