/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainA(input) {
	const [A, B] = input.split(' ').map(Number);
	const answer = B - A + 1;
	log(answer >= 0 ? answer :0);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('2 4')
// MainA('10 100')
// MainA('3 2')

var log = console.log;
function MainB(input){
	const [[N, X], [...An]] = input.split('\n').map(a => a.split(' ').map(Number));
	const sum = An.reduce((a, b) => a + b);
	const discount = N % 2 === 0 ? N / 2: (N-1)/2;
	const cost = sum - discount;
	log(X >= cost ? 'Yes': 'No');
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());

// MainB('2 3\n1 3');
// MainB('4 10\n3 3 4 4');
// MainB('8 30\n3 1 4 1 5 9 2 6');

var log = console.log;
function MainC(input){
	const [[N], [...Cn]] = input.split('\n').map(a => a.split(' ').map(Number));
	const mod = BigInt(10 ** 9 + 7);
	const P = (n, r) => {
		if(r === 0) return 1;
		return n > 1 ? n * P(n-1, r-1): 1
	};
	Cn.sort();
	let dup = 1;
	let ans = 1n;
	for(let i=1; i<Cn.length; i++){
		const now = Cn[i];
		const pre = Cn[i-1];
		if(now === pre){
			dup++;
			// log('now===pre', dup)
		} else {
			// i:使用済みの数 dup: 重複数
			const alreadyUsed = i-dup;// ここはすでに+1されている
			const res = P(pre-alreadyUsed, dup);
			ans *= BigInt(res);
			// log({now, pre, dup, res});
			dup = 1;
		}
		// log({i, len:Cn.length-1})
		// 最後の数ならnowも見る
		if(i === Cn.length-1){
			// i:使用済みの数 dup: 重複数
			const alreadyUsed = i-dup+1;
			if(now-alreadyUsed < dup) return log(0);
			const res = P(now-alreadyUsed, dup);
			ans *= BigInt(res);
			dup = 1;
		}
	}
	log(String((ans % mod)).split('n')[0]);
}
var log = console.log;
function MainC2(input){
	const [[N], [...Cn]] = input.split('\n').map(a => a.split(' ').map(Number));
	const mod = 1000000007n;
	let ans = 1n;
	const C = Cn.sort((a,b) => a-b);
	for(let i=0; i<N; i++){
		const res = BigInt(C[i]) - BigInt(i);
		// ans * resで、BigIntじゃないと処理できない
		ans = ans * (res > 0n ? res : 0n) % mod;
	}
	log(ans.toString());
}
// MainC2(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC2('2\n1 3');
MainC2('4\n3 3 4 4');
MainC2('2\n1 1');
MainC2('10\n999999917 999999914 999999923 999999985 999999907 999999965 999999914 999999908 999999951 999999979');

