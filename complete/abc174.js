const log = (...val) => console.log(...val);
/**
 * A問題
 */
function MainA(input){
    console.log(Number(input.trim()) >=30 ? 'Yes' : 'No');
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8"));
// const log = (...val) => console.log(...val);
// Main('25')
// Main('30')
/**
 * B問題
 */
function MainB(input){
    const XY = input.split('\n').map(a => a.split(' '));
    const ND = XY.shift();
    for(let i=0; i<XY.length; i++){}

}
// Main('4 5\n0 5\n-2 4\n3 4\n4 -4')

/**
 * C問題
 */
function MainC(input){
    let num = Number(input);
    if(num%2===0){
        console.log('-1');
        return;
    }
    const numLen = input.length;
    let answer = numLen;
    let seven = '';
    for(let i=0; i<numLen; i++) seven += '7';

    seven = BigInt(seven);
    num = BigInt(num);
    while(true){
        answer++;
        seven = seven * BigInt(10) + BigInt(7);
        if(seven % num === 0) break;
        log(answer);
        if(answer >= 999982) break;
    }
    console.log(answer);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main('101');
// Main('2');
// Main('999983');
/**
 * 解法:
 * 101の場合
 * 
 * 7
 * 77
 * 777
 * 7777
 * 77777
 * 
 * 
 */
/**
 * D問題
 */
function MainD(input){
    const arr = input.split('\n');
    const N = arr[0];
    const Ci = arr[1].split('');
    let answer = 0;

    // Wの数を数える
    let Wnum = 0;
    for(let i=0; i<Ci.length; i++){
        if(Ci[i] === 'W'){
            Wnum++;
        }
    }
    if(Wnum===0) return console.log(0); // Wが現れなかったら0を出力

    // Rの数以降のRの数を数える
    for(let i=Ci.length-Wnum; i<Ci.length; i++){
        if(Ci[i] === 'R'){
            answer++;
        }
    }
    console.log(answer);
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8"));
MainD('4\nWWRR')
MainD('2\nRR')
MainD('8\nWRWWRWRR')
