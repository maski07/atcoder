/**
 * ABC171問題
 */
function Main1(input){
    const largeFlag = input.trim().match(/^[A-Z]+$/);
    return console.log(largeFlag ? 'A' : 'a');
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main('B')
// Main('a')

function Main2(input){
    const arr = input.split('\n');
    const NK = arr[0].split(' ').map(Number);
    const pn = arr[1].split(' ').map(Number);
    let answer = 0;
    pn.sort((a,b)=> a - b);
    for(let i=0; i<NK[1]; i++){
        answer += pn[i];
    }
    console.log(answer);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main('5 3\n50 100 80 120 80');
// Main('1 1\n1000');

function Main2(input){
    let arr =[];
    const num = Number(input);
    const arphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const allen = arphabet.length;
    if(1 <= num && num <= 26){
        return console.log(arphabet[num-1]);
    } else if(num <= (26*26 + 26)){
        const num_2 = num - 26 -1;
        const digit_1 = num_2 % allen;
        const digit_2 = Math.floor(num_2 / allen) % allen;
        return console.log(arphabet[digit_2] + arphabet[digit_1]);
    } else if(num <= (26*26*26 + (26*26 + 26))){
        const num_2 = num - (26*26 + 26) -1;
        const digit_1 = num_2 % allen;
        const digit_2 = Math.floor(num_2 / allen) % allen;
        const digit_3 = Math.floor(digit_2 / allen) % allen;
        return console.log(arphabet[digit_3] +arphabet[digit_2] + arphabet[digit_1]);
    } else if(num <= (26*26*26*26 + (26*26*26 + 26))){
        const num_2 = num - (26*26*26 + 26) -1;
        const digit_1 = num_2 % allen;
        const digit_2 = Math.floor(num_2 / allen) % allen;
        const digit_3 = Math.floor(digit_2 / allen) % allen;
        const digit_4 = Math.floor(digit_3 / allen) % allen;
        return console.log(arphabet[digit_4] + arphabet[digit_3] +arphabet[digit_2] + arphabet[digit_1]);
    } else if(num <= (26*26*26*26*26 + (26*26*26*26 + 26))){
        const num_2 = num - (26*26*26*26 + 26) -1;
        const digit_1 = num_2 % allen;
        const digit_2 = Math.floor(num_2 / allen) % allen;
        const digit_3 = Math.floor(digit_2 / allen) % allen;
        const digit_4 = Math.floor(digit_3 / allen) % allen;
        const digit_5 = Math.floor(digit_4 / allen) % allen;
        return console.log(arphabet[digit_5] + arphabet[digit_4] + arphabet[digit_3] +arphabet[digit_2] + arphabet[digit_1]);
    }
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main2('2');
Main2('27');
Main2('702');
Main2('18278');
Main2('123456789');
"use strict"
/**
 * 敗因：
 *  ① 26文字目のZが0にしないといけないということに気付き混乱した。if文で入れ替えたら良いだけだったのに。
 *  ② 引いて割れば次の値にいけた。。
 *  ③ numをwhileで割り続ければ解が求まる
 */
function Main(input){
    let num = Number(input);
    let result = '';
    const arphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    while (0 < num) {
		var m = num % 26; // 1桁目を取得
		if (m === 0) { // z(26文字目)のときは割り切れたとき
			m = 26;
		}
		result = arphabet[m-1] + result;
		num = (num-m)/26; // 26で割って、次の桁に備える 例：10進数なら 335 -> (335 -5) / 30 = 33
    }
    console.log(result);
}
Main('2');
Main('27');
Main('702');
Main('729');
Main('18278');