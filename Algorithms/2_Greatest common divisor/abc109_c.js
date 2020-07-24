/**
 * 最小公約数(Greatest common divisor)
 * 他の人の解き方：while文でも実現ができる
 */
function Main(input){
    const arr = input.split('\n');
    const X = Number(arr[0].split(' ')[1]);
    const xi = arr[1].split(' ').map(Number);
    const xi_cal = xi.map(val => Math.abs(val-X));
    const GCD = (n, m) => {
        if(n % m === 0) return m;
        return GCD(m, n % m);
    }
    console.log(xi_cal.reduce((a,b) =>GCD(a,b)));
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main('3 81\n33 105 57');
Main('1 1\n1000000000');
/**
 * ユークリッドの互除法
 * 最大公約数は、割っていってあまりが0になれば答え
 * 
 * 木構造
 *  92 32 33
 *  92 / 32 →  32/ 28 → 28 / 4 -> 0  
 */