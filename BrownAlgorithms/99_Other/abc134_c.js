/**
 * 累積和の問題 → 累積Maxの問題
 */
const log = (...val) => console.log(...val);
/**
 * 途中から「RE」になる
 * 多分、実行時間制限に引っかかっている
 */
function Main(input){
    const arr = input.trim().split('\n');
    const N = Number(arr.shift());
    for(let i=0; i<arr.length; i++){
        const box = arr.concat();
        box.splice(i, 1);
        console.log(Math.max.apply(null, box));
    }
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main('2\n5\n5')
/**
 * 解き方1:出力されるのは1番大きい値か2番目に大きい値の2通り
 *        なので、for文に入る前に、出力される値を取り出しておく。
 *        Math.maxを使うと、この処理の計算量はO(N^2)になるが、O(N)にできる
 * 解き方2:右からの1つずつ比べて最大値を記録した配列と
 * 　　　　左からの1つずつ比べて最大値を記録した配列を作成
 *        2つの配列をfor文で比較して、値が同じになる箇所だけ右の一つ前と左の一つ前の最大値(値が一緒にならないやつ)
 *        で比較したら解けるはず
 */