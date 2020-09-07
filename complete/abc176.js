'use strict'
const log = console.log;
function MainA(input){
    const [N,X,T] = input.split(' ');
    console.log(Math.ceil(N/X) * T);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA('20 12 6');
// MainA('1000 1 1000')

function MainB(input){
    const num = input.split('').map(Number);
    if(num.length === 1 && num===0){
        console.log('Yes');
    }
    const sum = num.reduce((a,b)=> a+b);
    console.log(sum%9==0 ? 'Yes' : 'No');
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB('123456789');
// MainB('0')
// MainB('31415926535897932384626433832795028841971693993751058209749445923078164062862089986280')

function MainC(input){
    let [[N], [...Ai]] = input.split('\n').map(a=>a.split(' ').map(Number));
    let answer = 0;
    for(let i=0; i<N-1; i++){
        let box = Ai[i+1] - Ai[i];
        if(box < 0) {
            answer += -box;
            Ai[i+1] += -box; 
        }
    }
    console.log(answer);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('5\n2 1 5 4 3')
// MainC('5\n3 3 3 3 3')
function MainD(input){
    /** 配列の処理 */
    const arr = input.split('\n');
    const [H , W]  = arr[0].split(' ').map(Number);
    const [Ch, Cw] = arr[1].split(' ').map(Number);
    const [Dh, Dw] = arr[2].split(' ').map(Number);
    const Shw = [];
    for(let i=3; i<arr.length; i++){
        Shw.push(arr[i].split(''));
    }
    /** 本処理 */
    // ワープした回数は壁(#)を通った数
    /**
     * ゴールへたどる
     */
    const BFS = (curX, curY, count) => {
        // 現在地が壁ならワープ回数をプラスする
        if(Shw[curX][curY] === '#') {
            count++;
        }
        // ゴールにたどり着いたらワープした回数を返却
        if(curX === Dh-1 && curY === Dw-1) {
            return count;
        }
        /** 次のステップに値があればすすむ */
        let count1 = 10000;// 答えとしてありえない値
        if(curX+1 < H){
            count1 = BFS(curX+1, curY, count);
        }
        let count2 = 10000;// 答えとしてありえない値
        if(curY+1 < W){
            count2 = BFS(curX, curY+1, count);
        }

        // 最もワープ数が少ない値を返却
        return Math.min(count1, count2);
    }
    console.log(BFS(Ch-1, Cw-1, 0)); // 配列は0から始まる
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());

// log('..#.'.split(''))
MainD('4 4\n1 1\n4 4\n..#.\n..#.\n.#..\n.#..');
