/** メモ **/
'use strict'

/** 
 * 解けた：25min(1ミス)
 * アルゴリズム：
 *  ① まず辞書を数値比較ができるようにする
 *  ② 英単語の頭から数値に変換し、比較を行いソートする。
 * 計算量：
 *  N <= 50000
 *  i <= 50000
 *  O(n) = 50000 = 10 ^ 5 程度
 * 学び：
 *  if文を逆にすると処理が簡潔にならないか確認すると良い
 *  js文字列はsplitしなくても配列アクセス可能。
 * 手こずったポイント：
 *  2文字(ab)と3文字(abc)の比較で同じ文字になるパターンの考慮が抜けてた。
 */
var log = console.log;
var splitN = (N) => N.split().split(' ').map(Number);
function MainC(input){
    const arr = input.split('\n');
    const X = arr.shift();
    const N = arr.shift();
    const dic = X.split('');// 0の数値から始まる辞書になる
    arr.sort((a, b) =>{
        const len_a = a.length;
        const len_b = b.length;
        const min = Math.min(len_a, len_b);
        for(let i=0; i<min; i++) {
            if(a[i] !== b[i]){
                return dic.indexOf(a[i]) - dic.indexOf(b[i]);
            }
        }
        // すべて同じなら、文字数が短いほうが前になる
        return len_a - len_b;
    });
    console.log(arr.join('\n'));
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC('bacdefghijklmnopqrstuvwxzy\n4\nabx\nbzz\nbzy\ncaa');
MainC('bacdefghijstklmnopqrstuvwxzy\n4\nabc\nabb\naba\nab');