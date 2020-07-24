/**
 * 最大公倍数の問題
 * 二つの積を最大公約数で割ったらとける
 * ユークリッドの互除法：割った数を余りで割っていく→ あまり0なら商が最大公約数
 */

function Main(input){
    const AB = input.split(' ').map(Number);

    // 最小公約数
    const GCD = (a, b) => {
        if(a % b === 0) return b;
        return GCD(b, a % b);
    }
    console.log((AB[0] * AB[1]) / GCD(AB[0], AB[1]));
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main('2 3');
Main('123 456');
Main('100000 99999');