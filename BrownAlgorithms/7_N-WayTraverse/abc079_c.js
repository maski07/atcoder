/**
 * bit全探索
 * 改行コードがついてるというせこい問題
 */
function Main(input){
    let Numarr = input.trim().split('\n')[0].split('');
    let answer = '';
    const DFS = (numarr, str, num) => {
        const thisNum = numarr[0];
        if(thisNum == null && num === 7) return answer = str + '=7';
        if(thisNum == null) return;
        DFS(numarr.slice(1), str + '+' + thisNum, num + Number(thisNum))
        DFS(numarr.slice(1), str + '-' + thisNum, num - Number(thisNum))
        return
    }
    const n = Number(Numarr.shift())
    DFS(Numarr ,n,n)
    console.log(answer);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
const log = (...val) => console.log(...val);
Main('1222')
Main('0290')
Main('3242')

/**
 * やりたいこと
 * 123
 * 1 + 2 + 3 = 7
 * 1 + 2 - 3 = 7
 * 1 - 2 + 3 = 7
 * 1 - 2 - 3 = 7
 * すべての式と結果を作成し、結果が7になった式を出力する
 * 
 */