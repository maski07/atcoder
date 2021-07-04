/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainA(input){
    const [A, B] = input.split(' ').map(Number);
    console.log(A * 6 >= B && A <= B ? 'Yes': 'No');
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('2 11');
// MainA('2 13');
// MainA('100 600');
var log = console.log;
function MainB(input){
    const P = Number(input);
    let remainPrice = P; // 残金
    let nowPrice = 1; // 現在の金額
    let coin = 0;
    let i = 1;
    // 累積和
    while(remainPrice !== 0){
        if(nowPrice <= remainPrice){
            i++;
            nowPrice *= i;
            continue;
        } else if(nowPrice >= remainPrice){
            // 累積和がPを超えたとき最大支払い硬貨となる
            nowPrice /= i; // 一つ戻す。
            remainPrice -= nowPrice; // 支払い
            coin++; // 硬貨++
            i=1;
            nowPrice=1;
        }
    }
    console.log(coin);
}
/**
 * 32:50~がわかりやすい
 * https://www.youtube.com/watch?v=FhQVDtJyM6o&ab_channel=AtCoderLive
 */
function MainB2(input){
    let P = Number(input)
    let answer = 0;
    const factorial = i => i ? i * factorial(i-1) : 1;
    for (let i = 1; i <= 10; i++) {
        const fact = factorial(i + 1); // 2!硬貨以上でチェック
        const residue = P % fact; // n!硬貨を複数使ったあまりを出す。
        /** 
         * 階乗進法
         * 2!を3回利用 → 3!で良い
         * 3!を4回利用 → 4!で良い
         * → 9 % 3! / 2! = 利用する硬貨の数
        */
        answer += (P % fact) / factorial(i); 
        log({P, i, fact, residue, answer});
        P -= residue; // 残金を算出
    }
    log(answer);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB2('9');
// MainB2('25');
// MainB2('119');
// MainB2('10000000');

var log = console.log;
function MainC(input){
    const [arr1, arr2] = input.split('\n');
    const [N, K] = arr1.split(' ').map(a => BigInt(a));
    const an = arr2.split(' ').map(a => BigInt(a));

    const sortedAn = an.join(' ').split(' ').map(a => BigInt(a));
    sortedAn.sort();
 
    // 最低でももらえるお菓子の数
    const getRefs =  K / N; // お菓子の数 / 人数
    const ans = new Array(Number(N)).fill(getRefs);
    log(Number(K - getRefs * N));
    log(ans)
    const remainRefs = K % N; // お菓子の残数
    if(remainRefs === 0) return ans.map(a => a.split('n')[0]).join('\n');
    const Threshold = BigInt(sortedAn[Number(remainRefs)-1]); // ギリギリもらえる人
    // 残りのお菓子を配る O(n) = 10^9
    // memo: お菓子の数が半分の人数を超えてる場合は、逆から減らすと早くなる。
    const NumberN = Number(N);
    for(let i =0; i < NumberN; i++){
        if(an[i] <= Threshold){
            ans[i] += BigInt(1);
        }
    }
    // log(ans.map(a => log(a)));
    console.log(ans.map(a => a.split('n')[0]).join('\n'));
}
var log = console.log;
function MainC2(input) {
    const [arr1, arr2] = input.split('\\n');
    const [N, K] = arr1.split(' ').map(a => BigInt(a));
    const an = arr2.split(' ').map(a => BigInt(a));
    const anMap = new Map(); // key: 初期の順番 value: 数値
    for(let i=0; i< N; i++) {
        anMap.set(i, an[i]);
    }
    // [初期の順番, value]
    const sortedMap = new Map([...anMap.entries()].sort((a, b) => Number(a[1])-Number(b[1])));
    const getRefs =  K / N; // 全員もらえるお菓子の数
    const remainRefs = K % N; // お菓子の残数
    for(let i=0, j=remainRefs, key = sortedMap.keys(); i<N; i++, j--){
        const addRefs = (j > 0 ? 1n : 0n);
        const thiskey = key.next().value;
        sortedMap.set(thiskey, getRefs + addRefs);
    }
    const ans = [...sortedMap.entries()];
    ans.sort((a, b) => Number(a[0]) - Number(b[0]));
    log(ans.map(a => a[1]).join('\n'));
}
// MainC2(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC2('2 7\n1 8');
log('-----')
MainC2('1 3\n33');
log('-----')
MainC2('7 1000000000000\n99 8 2 4 43 5 3');
