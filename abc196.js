'use strict'
/** メモ **/
var log = console.log;
function MainA195(input){
    const [M, H] = input.split(' ').map(Number);
    log(H % M == 0 ? 'Yes' : 'No');
}
// MainA195('10 120');
// MainA195('10 125');

var log = console.log;
function MainA(input){
    const [[a, b], [c, d]] = input.split('\n').map(a => a.split(' '));
    log(Number(b) - Number(c));
}
MainA('0 10\n0 10');
MainA('-100 -100\n100 100');
MainA('-100 100\n-100 100');


var log = console.log;
function MainB(input){
	log(input.split('.')[0]);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('5.90');
// MainB('0');
// MainB('84939825309432908832902189.9092309409809091329');
/**
 * 1333
 * 2桁 or 4桁 6桁
 * 10 ~ 99 → 1~9 → 9個 2桁
 * 1000 ~ 9999 → 10~99 → 99個 4桁 
 * 100000 ~ 999999 → 999個 6桁 
 */
var log = console.log;
function MainC0(input){
    let answer = 0;
    /* 
    * まずはその桁数まで足す
    * 10 ~ 99 → 9個 2桁 → 1000 ~ 9999 → 99個 4桁 
    */
    for(let i=1, plus = '9'; i < input.length/2; i++, plus += '9') {
        answer += Number(plus);
        log({plus});
    }
    // 最大桁数の数を足す。最大桁数かつ前半の数字
    // 例：1333 → 10 11 12 13 = 13 - 10 + 1
    // 前半の数を取得 4つ 1000 → 3桁
    const pre = input.split('').splice(0, input.length/2).join('');
    answer += pre - (10 ** (pre.length-1)) + 1;
    log({pre});
    log(answer);
}
/**
 * 1333 → 1~13 - 1 + 13 < 33 ? 1 : 0;
 */
var log = console.log;
function MainC(input){
    if(input.length <= 1) {
        log(0);
        return;
    };
    const halfLen = input.length / 2;
    const isOdd = (num) => num % 2 == 1;
    if(isOdd(input.length)){
        // 200 → 1~9, 20000 → 1~99
        log('9'.repeat(halfLen));
    } else {
        // 12345 / 100 = 123
        const pre = Math.floor(Number(input)/(10 ** halfLen));
        // 12345 % 100 = 345
        const suf = Number(input) % (10  ** halfLen);
        const answer = pre - 1 + (pre <= suf ? 1 : 0);
        log(answer);
    }
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('33');
// MainC('1333');
// MainC('10000000')
// MainC('206')
// MainC('1')

/**
 * パターン2
 */
var log = console.log;
function MainC2(input) {
    const N = Number(input);
    const arr = input.split('').map(Number);
    for(let i=0; i<1000001; i++){
        if(String(i) + String(i) > N){
            log(i-1);
            return;
        }
    }
}
// MainC2(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC2('33');
// MainC2('1333');
// MainC2('10000000')
// MainC2('206')
// MainC2('1')
