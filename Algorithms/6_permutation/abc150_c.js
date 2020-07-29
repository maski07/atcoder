/**
 * 順列の全探索問題 解けない
 * 
 */
function Main(input){
    const arr = input.split('\n');
    const N = Number(arr[0]);
    const Pn = arr[1].split(' ').map(Number);
    const Qn = arr[2].split(' ').map(Number);

    // Nまでの数値の配列を作成
    const strN = '';
    for(let i=0; i<N; i++) strN + i;
    const dictionary = [];
    const createPerDic = (arrN) =>{
        const num = arrN.shift();
        if(!num) return 

        return createPerDic()
    }
}

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main('3\n1 3 2\n3 1 2')


/**
 * Nがきた時に辞書を作る
 * 2つの数値のindexをとる
 * 2つの数値のindexの差をとる
 * 
 * 辞書の作り方
 * 12345678→sortした状態のものを作成
 * 8!通りの数値を作って辞書順にソートする
 * 1 - 2 - 3 - 4 - 5 -
 *     2 - 4 - 3 - 5 - 
 
 *     3 - 2 - 4 - 5 - 
 *     4 - 2 - 3 - 4 - 
 *     5 - 
 *     6
 *     7
 *     8
 * 
 */