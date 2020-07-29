function Main1(input){
    const num = input.split(' ').map(Number);
    let count = 0;
    for(let i=num[0]; i<=num[1]; i++){
        if(i % num[2] == 0) count++;
    }
    console.log(count);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// Main('5 10 2');
// Main('6 20 7');
// Main('1 100 1');
/**
 * 間違えて素数の判定をしてた 
 */
function Main2_1(input){
    const num = input.split('\n')[1].split(' ').map(Number);
    const max_num = 100;//Math.max.apply(null, num);
    let odd_count = 0;
    let odd_box = new Array(max_num+1).fill(1);
    // 最大値までの素数の箱を作成 (奇数には1を入れる)
    for(let i=2; i<max_num+1; i++){
        if(odd_box[i] == 1){
            // 引っ掛かったらその倍数を全て0にする
            for(let j=i*2, k=2; j<max_num+1; j = i * ++k){
                odd_box[j] = 0;
            }
        }
    }
    // 奇数のマスのみチェック
    for(let n=0; n <num.length; n+=2){
       // 数値が奇数の箱に含まれていればcount
       if(odd_box[num[n]] == 1) {
           odd_count++;
            console.log(num[n]);
        }
    }
    // countの数を出力
    console.log(odd_count);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function Main2(input){
    const num = input.split('\n')[1].split(' ').map(Number);
    let odd_count = 0;
    // 奇数のマスのみチェック
    for(let n=0; n <num.length; n+=2){
       if(num[n] % 2 == 1)
           odd_count++;
    }
    // countの数を出力
    console.log(odd_count);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main('5\n1 3 4 5 7')
// Main('15\n13 76 46 15 50 98 93 77 31 43 84 90 6 24 14')

/** C問題 */
// 一回計算した結果を全て持っておく
function Main(input){
    const N = Number(input);
    let fn = new Array(N).fill(0);
    for(let x=1; x**2<=N; x++){
        for(let y=1; y**2<=N; y++){
            if(x+y > N) break;
            for(let z=1; z**2<=N; z++){
                const i = x**2 + y**2 + z**2 + x*y + y*z + z*x;
                if(i >N) break;
                fn[i-1]++
            }
        }
    }
    console.log(fn.join('\n'));
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// if(x**2 + y**2 + (i-x-y)**2 + x*y + y*(i-x-y) + (i-x-y)*x === i) {
Main('20')




















