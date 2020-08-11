/**
 * n通りの全探索の問題
 * 解けない
 */
function Main(input){
    const len  = input.trim().length;
    const s = input.trim();
    const DFS = (i, string) => {
        if (i === len-1) return string.split('+').map(Number).reduce((a,b)=>a+b);
        return DFS(i+1, string+s[i+1]) + DFS(i+1, string+'+'+s[i+1]);
    }
    console.log(DFS(0, s[0]));
}
/**
 * イメージ(125の場合)
 * (0, 1) = (1,"12") + (1,"1+2")
 *   (1,"12") = (2, "125") + (2, "12+5") 
 *   (1,"1+2") = (2, "1+25") + (2,"1+2+5")
 *      (2, "125")  = 125
 *      (2, "12+5") = 17
 *      (2, "1+25") = 26
 *      (2,"1+2+5") = 8
 *  125 + 17 + 26 + 8 = 176
 * 
 *  if (すべての数値を確認) +を連結させた数値を足していく
 *  return  (今の数値 + 次の数値) + (今の数値 "+" 次の数値(+文字列))
 * (今の数値 + 次の数値) これの次の数値が 1 + 25 になることが肝
 */
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
const log = (...val) => console.log(...val);
// log('125'.substr(1));
Main('125');
Main('9999999999');
/**
 * 深さ優先探索
 * 解法：「+」を連結させて最後に計算させる
 * 
 * 125の場合(全パターン)
 * 1 + 2 + 5
 * 1 + 25
 * 12 + 5
 * 125
 * 
 * 
 */