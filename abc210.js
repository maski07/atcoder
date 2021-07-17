/** メモ **/
'use strict'
/**  */
var log = console.log;
function MainA(input){
    const [N, A, X, Y] = input.split(' ').map(Number);
    const price = N > A ? A * X + Y * (N-A): N * X;
    log(price);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('5 3 20 15');
// MainA('10 10 100 1');

var log = console.log;
function MainB(input){
    const [N, S] = input.split('\n');
    const place = S.indexOf('1') + 1;
    log(place % 2 == 0 ? 'Aoki' : 'Takahashi');
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('5\n00101');
// MainB('3\n010');

var log = console.log;
function MainC(input){
    const lines = input.split('\n');
    const [N, K] = lines[0].split(' ').map(Number);
    const Cn = lines[1].split(' ').map(Number);
    // こいつが重い
    const tmp = new Array(99999999).fill(0);
    let ans = 0;
    let currentCandy = 0;
    for(let i=0; i<N; i++){
        // 数を足す
        tmp[Cn[i]]++;
        if(i > K){
            // キャンディの数を減らす
            tmp[Cn[i-K]]--;
            const lostCandy = tmp[Cn[i-K]];
            if(lostCandy == 0){
                currentCandy--;
            }    
        }
        const getCandy = tmp[Cn[i]];
        if(getCandy == 1){
            currentCandy++;
        }
        ans = Math.max(currentCandy, ans);
    }
    log(ans);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('10 6\n304621362 506696497 304621362 506696497 834022578 304621362 414720753 304621362 304621362 414720753');

var log = console.log;
function MainC2(input){
    const lines = input.split('\n');
    const [N, K] = lines[0].split(' ').map(Number);
    const Cn = lines[1].split(' ').map(Number);
    const tmp = new Array(K);
    let ans = 0;
    for(let i=0; i<N; i++){
        tmp[i % K] = Cn[i];
        // 最大値の算出
        if(i >= K-1){
            // ここが重い
            const candy = new Set(tmp).size;
            ans = Math.max(ans, candy);
        }
    }
    log(ans);
}
// MainC2(require("fs").readFileSync("/dev/stdin", "utf8").trim());

var log = console.log;
function MainC3(input){
    const lines = input.split('\n');
    const [N, K] = lines[0].split(' ').map(Number);
    const Cn = lines[1].split(' ').map(Number);
    const tmp = new Array(K);
    let ans = 0;
    let currentCandy = 0;
    for(let i=0; i<N; i++){
        const pre = tmp[i % K];
        const next = Cn[i];
        if(i >= K-1){
            tmp[i % K] = -1;
            log({tmp, next, pre})
            if(!tmp.includes(next)){
                currentCandy++;
            }
            tmp[i % K] = next;
            if(!tmp.includes(pre)){
                currentCandy--;
            }
        }else {
            if(!tmp.includes(next)){
                currentCandy++;
            }
            tmp[i % K] = next;
        }
        log(tmp)
        ans = Math.max(ans, currentCandy);
    }
    log(ans);
}
// MainC3(require("fs").readFileSync("/dev/stdin", "utf8").trim());
/**
 * Accept
 */
var log = console.log;
function MainC4(input){
    const lines = input.split('\n');
    const [N, K] = lines[0].split(' ').map(Number);
    const Cn = lines[1].split(' ').map(Number);
    const tmp = new Map();
    let ans = 0;
    let currentCandy = 0;
    for(let i=0; i<N; i++){
        // 数を足す
        tmp.set(Cn[i], (tmp.get(Cn[i]) || 0) + 1);
        if(i >= K-1){
            // キャンディの数を減らす
            tmp.set(Cn[i-K], tmp.get(Cn[i-K]) - 1);
            const lostCandy = tmp.get(Cn[i-K]);
            if(lostCandy === 0){
                currentCandy--;
            }
        }
        // loseして、追加して1ならおかしくなる？
        const gotCandy = tmp.get(Cn[i]);
        if(gotCandy === 1 && Cn[i-K] !== Cn[i]){
            currentCandy++;
        }
        ans = Math.max(currentCandy, ans);
    }
    log(ans);
}
// MainC4(require("fs").readFileSync("/dev/stdin", "utf8").trim());
var log = console.log;
function MainC5(input){
    const lines = input.split('\n');
    const [N, K] = lines[0].split(' ').map(Number);
    const Cn = lines[1].split(' ').map(Number);
    const tmp = new Map();
    let ans = 0;
    let currentCandy = 0;
    for(let i=0; i<K; i++){
        // 数を足す
        tmp.set(Cn[i], (tmp.get(Cn[i]) || 0) + 1);
        const gotCandy = tmp.get(Cn[i]);
        if(gotCandy === 1){
            currentCandy++;
        }
    }
    ans = currentCandy;
    for(let i=K; i<N; i++){
        // 数を足す
        tmp.set(Cn[i], (tmp.get(Cn[i]) || 0) + 1);
        // キャンディの数を減らす
        tmp.set(Cn[i-K], tmp.get(Cn[i-K]) - 1);
        const lostCandy = tmp.get(Cn[i-K]);
        if(lostCandy === 0){
            currentCandy--;
        }
        const gotCandy = tmp.get(Cn[i]);
        if(gotCandy === 1 && Cn[i-K] !== Cn[i]){
            currentCandy++;
        }
        ans = Math.max(currentCandy, ans);
    }
    log(ans);
}
// MainC5(require("fs").readFileSync("/dev/stdin", "utf8").trim()); 

var log = console.log;
function MainC6(input){
    const lines = input.split('\n');
    const [N, K] = lines[0].split(' ').map(Number);
    const Cn = lines[1].split(' ').map(Number);
    const tmp = new Map();
    let ans = 0;
    let currentCandy = 0;
    for(let i=0; i<K; i++){
        // 数を足す
        const gotCandy = tmp.get(Cn[i]);
        tmp.set(Cn[i], (gotCandy || 0) + 1);
        if(gotCandy === undefined){
            currentCandy++;
        }
    }
    ans = currentCandy;
    for(let i=K; i<N; i++){
        // 数を足す
        const gotCandy = (tmp.get(Cn[i]) || 0) + 1;
        tmp.set(Cn[i], gotCandy);
        if(gotCandy === 1 && Cn[i-K] !== Cn[i]){
            currentCandy++;
        }
        // キャンディの数を減らす
        const lostCandy = tmp.get(Cn[i-K]) - 1;
        tmp.set(Cn[i-K], lostCandy);
        if(lostCandy === 0){
            currentCandy--;
        }
        ans = Math.max(currentCandy, ans);
    }
    log(ans);
}
/**
 * 書き方変えてみる
 */
var log = console.log;
function MainC7(input){
    const lines = input.split('\n');
    const [N, K] = lines[0].split(' ').map(Number);
    const Cn = lines[1].split(' ').map(Number);
    const tmp = new Map();
    let ans = 0;
    let currentCandy = 0;
    for(let i=0; i<K; i++){
        // 数を足す
        const gotCandy = tmp.get(Cn[i]);
        tmp.set(Cn[i], (gotCandy || 0) + 1);
        if(gotCandy === undefined){
            currentCandy++;
        }
    }
    ans = currentCandy;
    for(let i=K; i<N; i++){
        const curr = Cn[i];
        const pre = Cn[i-K];
        // 数を足す
        const gotCandy = (tmp.get(curr) || 0) + 1;
        tmp.set(curr, gotCandy);
        if(gotCandy === 1 && pre !== curr){
            currentCandy++;
        }
        // キャンディの数を減らす
        const lostCandy = tmp.get(pre) - 1;
        tmp.set(pre, lostCandy);
        if(lostCandy === 0){
            currentCandy--;
        }
        ans = Math.max(currentCandy, ans);
    }
    log(ans);
}
// MainC7(require("fs").readFileSync("/dev/stdin", "utf8").trim()); 
console.time()
MainC7('7 3\n1 2 1 2 3 3 1');
MainC7('5 5\n4 4 4 4 4');
MainC7('10 6\n304621362 506696497 304621362 506696497 834022578 304621362 414720753 304621362 304621362 414720753');
console.timeEnd()
