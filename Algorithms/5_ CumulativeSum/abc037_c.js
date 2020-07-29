
/**
 * 累積話の問題
 * 解法：重複数値は計算しない
 * JavaScriptでは精度15桁なので注意する
 */
function Main(input){
    const arr = input.trim().split('\n');
    const NK = arr[0].split(' ').map(Number);
    const an = arr[1].split(' ').map(BigInt);
    let answer = BigInt(0);
    let cal = BigInt(0);
    const one = BigInt(1);
    for(let i=0; i<NK[1]; i++){
        cal += an[i];
    }
    
    answer = cal;
    for(let i=1; i<NK[0]-NK[1]+1; i++){
        cal -= an[i-1];
        cal += an[i+NK[1]-1];
        answer += cal;
    }
    console.log(String(answer).replace('n',''));
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
const log = (...val) => console.log(...val);
Main('5 3\n1 2 4 8 16');
Main('20 10\n100000000 100000000 98667799 100000000 100000000 100000000 100000000 99986657 100000000 100000000 100000000 100000000 100000000 98995577 100000000 100000000 99999876 100000000 100000000 99999999')
