/**
 * ABC 茶色問題
 * 解法：数値を配列で保持しておき、変わる部分だけ足せば良い
 */
function Main(input){
    /** 入力値の作成 */
    const arr = input.trim().split('\n');
    const N = Number(arr.shift());
    let Ai = arr.shift().split(' ').map(Number);
    const Q = Number(arr.shift());
    let BiCi = [];
    for(let i=0; i<arr.length; i++){
        BiCi.push(arr[i].trim().split(' ').map(Number));
    }
    /** ここから本処理 */
    let box = new Array(100001).fill(0);
    for(let i=0; i<Ai.length; i++){
        box[Ai[i]]++;
    }
    let sum = Ai.reduce((a,b) => a+b);
    for(let i=0; i<BiCi.length; i++){
        sum +=  (BiCi[i][1] - BiCi[i][0]) * box[BiCi[i][0]];
        box[BiCi[i][1]] += box[BiCi[i][0]];
        box[BiCi[i][0]] = 0;
        console.log(sum);
    }
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
const log = (...val) => console.log(...val);
Main('4\n1 2 3 4\n3\n1 2\n3 4\n2 4');
Main('4\n1 1 1 1\n3\n1 2\n2 1\n3 5');
Main('2\n1 2\n3\n1 100\n2 100\n100 1000');
