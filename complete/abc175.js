'use strict'
const log = console.log;
function MainA(input){

    if(input === 'SSS') log(0);
    if(input === 'SSR') log(1);
    if(input === 'SRS') log(1);
    if(input === 'SRR') log(2);
    if(input === 'RSS') log(1);
    if(input === 'RSR') log(1);
    if(input === 'RRS') log(2);
    if(input === 'RRR') log(3);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// Main('RRS')
// Main('SSS')
// Main('RSR')

function MainB(input){
    const arr = input.split('\n');
    const N = Number(arr[0]);
    const Ln = arr[1].split(' ').map(Number);
    let answer = 0;
    for(let a=0; a<Ln.length; a++){
        for(let b=a+1; b<Ln.length; b++){
            for(let c=b+1; c<Ln.length; c++){
                if(Ln[a]===Ln[b] || Ln[b]===Ln[c] || Ln[c]===Ln[a]) continue;
                if(Ln[a] + Ln[b] > Ln[c]
                   && Ln[b] + Ln[c] > Ln[a]
                   && Ln[c] + Ln[a] > Ln[b]){
                       answer++;
                   }
            }
        }
    }
    console.log(answer);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('5\n4 4 9 7 5')
// MainB('6\n4 5 4 3 3 5')
// MainB('10\n9 4 6 1 9 6 10 6 6 8')
// MainB('2\n1 1')
/** 
(1,3,4)
(1,4,5)
(2,3,4)
(2,4,5)
(3,4,5) 
1 2 4 ✖︎
1 2 5 ✖︎
1 3 4 
1 4 5 
2 3 4
2 4 5
3 4 5
 */

function MainC1(input){
    const [X, K, D] = input.split(' ').map(Number);
    let curr = X;
    let minusNum = 0;
    const iniPlusFlg = (curr>=0);

    for(let i=0; i<K; i++){
        curr = (curr>=0) ? curr-D : curr+D;
        if(iniPlusFlg && curr<0){
            minusNum = curr;
        }
        if(!iniPlusFlg && curr>0){
            minusNum = curr;
        }
        if(minusNum && curr>=0){
            curr = Math.min(Math.abs(minusNum),curr);
            if((K-(i+1)) % 2 == 0){
                break;
            } else {
                curr -= D;
                break;
            }
        }
    }
    console.log(Math.abs(curr));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
function MainC(input){
    const [X, K, D] = input.split(' ').map(Number);
 
    if(K*D >X){
        if(X%2!==0){
            console.log(X%D);
        } else {
            console.log(X%D===0 ? X : X%D);
        }
    }else{
        console.log(X-K*D);
    }
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());

MainC('6 2 4')
MainC('7 4 3')
MainC('10 1 2')
MainC('1000000000000000 1000000000000000 1000000000000000')
