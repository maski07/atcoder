/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainA(input){
    const [S , T] = input.split(' ');
    console.log(S < T ? 'Yes': 'No'); 
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('abc atcoder');
// MainA('arc agc');
// MainA('a aa');

function MainB(input){
	const contests = ['ABC' , 'ARC' , 'AGC' , 'AHC'];
    const inputs = input.split('\n');
    for(let i=0; i<contests.length; i++){
        if(!inputs.includes(contests[i])){
            return console.log(contests[i])
        }    
    }
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('ARC\nAGC\nAHC');
// MainB('AGC\nABC\nARC');

function MainC(input){
    const [N, pn] = input.split('\n').map(a => a.split(' '));
    const res = new Array(N-1).fill(0);
    for(let i=0; i<N; i++){
        res[pn[i]-1] = i+1;
    }
    console.log(res.join(' '));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());

// MainC('3\n2 3 1');
// MainC('3\n1 2 3');
// MainC('5\n5 3 2 4 1');

function MainD(input){
    const arr = input.split('\n');
    const [L, Q] = arr.shift().split(' ').map(Number);
    const cutted = [];
    for(let i=0; i<Q; i++){
        const [ci, xi] = arr[i].split(' ').map(Number);
        // 線xiを持つ木材をカットする
        if(ci === 1) {
            cutted.push(xi);
            cutted.sort((a, b) => a - b);
        // 線xiを持つ木材を出力する
        } else {
            if(cutted.length === 0) console.log(L);
            let found = false;
            for(let i=0; i<cutted.length; i++){
                if(xi > cutted[i]) {
                    if(xi < cutted[i+1]){
                        console.log(cutted[i+1] - cutted[i]);
                        found = true;
                        break;
                    }
                }
                if(i===0 && xi < cutted[i]){
                    console.log(cutted[i]);
                    found = true;
                    break;
                }
            }
            if(!found){
                const len = cutted.length;
                if(len > 0){
                    console.log(L - cutted[cutted.length-1]);
                    found = true;
                } 
            }
        }
    }
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainD('5 3\n2 2\n1 3\n2 2');
// MainD('5 3\n1 2\n1 4\n2 3');
// MainD('100 10\n1 31\n2 41\n1 59\n2 26\n1 53\n2 58\n1 97\n2 93\n1 23\n2 84');

function MainD2(input){
    const arr = input.split('\n');
    const [L, Q] = arr.shift().split(' ').map(a => Number);
    // const lumberLines = [].push(new Array(L));
    // for(let i=1; i<L+1; i++){
    //     lumberLines[0].push(i);
    // }
    const cutted = [];
    for(let i=0; i<Q; i++){
        const [ci, xi] = arr[i].split(' ').map(a => Number);
        // 線xiを持つ木材をカットする
        if(ci === 1) {
            // // カットされた木材すべてを調べる。
            // lumberLines.forEach(a => {
            //     // 数字を含んでいたらカットする
            //     if(a.includes(xi)){
            //         lumbers.splice(0, xi-1);                    
            //     }
            // });
        // 線xiを持つ木材を出力する
        } else {

        }
    }
}







