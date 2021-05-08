/** メモ **/
'use strict'
const log = console.log;
/** メモ **/
function MainA(input){
    const ABCD = input.split(' ').map(Number);
    const sum = ABCD.reduce((a,b) => a+b);
    let eatedNum = 0;
    let answer = false;

    const DFS = (eatedNum, arr) =>{
        if(arr.length === 0) {
            if(eatedNum == sum/2) answer = true;
            return;
        }
        // 食べたパターン
        const eated = eatedNum + arr.shift();
        DFS(eated, arr.slice()); // 値渡し
        // 食べなかったパターン
        DFS(eatedNum, arr.slice()); 
    }
    DFS(eatedNum, ABCD.slice());
    console.log(answer ? 'Yes' : 'No');
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('1 3 2 4')
// MainA('1 2 4 8')
/**
 * 10^5 + 10^5 * 10^5 = 10^10
 */
function MainB(input){
    const [N, an] = input.split('\n').map(a => a.split(' ').map(Number));
    const setAn = new Set();
    an.forEach(val =>setAn.add(val));
    while(true){
        const X = Math.max(...setAn);
        const x = Math.min(...setAn);
        if(X === x) {
            return console.log(X);
        } else {
            // X-xを行う
            setAn.delete(X);
            // const nextX = Math.max(...setAn);
            // setAn.add(Math.floor((X-nextX)/x));
            setAn.add(X-x);
        }
    }
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('3\n2 6 6')
MainB('15\n546 3192 1932 630 2100 4116 3906 3234 1302 1806 3528 3780 252 1008 588')