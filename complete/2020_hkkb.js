'use strict'
const log = console.log;
function MainA(input){
    const [S, T] = input.split('\n');
    console.log(S=='Y'? T.toUpperCase() : T);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());

// MainA('Y\na')
// MainA('N\nb')
function MainB(input){
    const arr = input.split('\n');
    const [H, W] = arr.shift().split(' ').map(Number);
    const Sh = arr.map(x => x.split(''));
    const [P, S] = ['.', '#'];
    let answer = 0;
    for(let i=0; i<H; i++){ // 縦
        for(let j=0; j<W; j++){ // 横
            if(Sh[i][j] === P){
                if(i+1<H && Sh[i+1][j] === P) answer++; 
                if(j+1<W && Sh[i][j+1] === P) answer++;
            } 
        }
    }
    console.log(answer);
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('2 3\n..#\n#..');
// MainB('2 2\n.#\n#.')
/**
 * 解けなかった。
 * 3問 AC 9問 RE
 * 実行エラーとなるパターンがわからない。
 */
function MainC1(input){
    const [N, Pn] = input.split('\n').map(x => x.trim().split(' ').map(Number));
    const answer = [];
    const i = [];
    for(let a=0; a<=N; a++){
        i.push(a);
    }
    while(Pn !== undefined && Pn.length !== 0){
        const idx = i.indexOf(Pn.shift());
        if(idx >= 0) i.splice(idx, 1);
        answer.push(Math.min.apply(null, i));
    }
    console.log(answer.join('\n'));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('4 \n 0 0 1000000 0')
// MainC('15\n5 4 3 2 1 0 10 7 6 6 0 7 7 6 6')
// ループ数は10^8まで
    // const sortedPn = Pn.sort();
/**
 * AtCoder後、回答をみて解き直し
 * 配列のアドレスをうまく利用する問題
 */
function MainC(input) {
    const [N, Pn] = input.split('\n').map(x => x.trim().split(' ').map(Number));
    let answer = 0;
    const t = new Array(210000);
    // log(Pn)
    for(let a=0; a<N; a++) {
        t[Pn[a]]++; // 登場した数値のアドレスを++
        // log({"Pn[a]":Pn[a]})
        while(t[answer] !== undefined){
            // 0から数えた数値が登場して入れば++
            answer++;
        }
        console.log(answer);
    }
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('4 \n 0 0 1000000 0')
log("-----------")
MainC('4\n1 1 0 2')
log("-----------")
MainC('15\n5 4 3 2 1 0 10 7 6 6 0 7 7 6 6')
    