/** メモ **/
'use strict'
/**  */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainA(input){
	const [X, Y] = input.split('.').map(Number);
    let code = undefined;
    if(0 <= Y && Y <= 2){
        code = '-';
    } else if(3 <= Y && Y <= 6){
        code = '';
    } else {
        code = '+';
    }
    console.log(X + code);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('15.8');
// MainA('1.0');
// MainA('12.5');

function MainB(input) {
	const ST = input.split('\n');
    const N = ST.shift();
    ST.sort(); // n^2
    // n
    for(let i = 0; i < N-1; i++){
        if(ST[i] === ST[i+1]){
            return console.log('Yes');
        }
    }
    console.log('No');
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('3\ntanaka taro\nsato hanako\ntanaka taro');
// MainB('3\nsaito ichiro\nsaito jiro\nsaito saburo');
// MainB('4\nsypdgidop bkseq\nbajsqz hh\nozjekw mcybmtt\nqfeysvw dbo');

function MainC(input){
	let N = BigInt(input);
    // 10進2進変換みたいな感じ
    let result = '';
    while(N > 1n) {
        if(N % 2n === 1n){
            result = 'BA' + result;
        } else{
            result = 'B' + result;
        }
        N /= 2n;
    }
    console.log('A' + result);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('5');
MainC('14');

/**
 * 
 */
function MainD(input){

}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());

function MainE(input){

}
// MainE(require("fs").readFileSync("/dev/stdin", "utf8").trim());



