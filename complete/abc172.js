function Main1(input){
    const a = Number(input);

    return console.log(a + a*a + a*a*a);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main("2");
// Main("10");

function Main2(input){
    const ST = input.split('\n');
    const S = ST[0];
    const T = ST[1];
    let count = 0;
    for(let i=0;i<S.length;i++){
        if(S[i] !== T[i]){
            count++;
        }
    }
    console.log(count);
}
//Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main("cupofcoffee\ncupofhottea")
// Main("abcde\nbcdea")
// Main("apple\napple")

// 
/**
 * N: Aに積まれている本の数
 * M: Bに積まれている本の数
 * K:合計時間
 */ 
function Main3_1(input){
    const arr = input.trim().split('\n');
    const NMK = arr[0].split(' ').map(Number);
    let An  =   arr[1].split(' ').map(Number);
    let Bn  =   arr[2].split(' ').map(Number);
    let readCount = 0;
    let remainingTime = NMK[2];
    let ai = 0; // Aのイテレータ
    let bi = 0; // Bのイテレータ

    while(true){
        // 残数が0の場合と残り時間と読む時間を考慮する
        if(ai === NMK[0] && bi === NMK[1]){ 
            // AもBも読む本がない
            break;
        } else if(ai === NMK[0]){
            // Bの本を読む
            // 残り時間を差し引く
            remainingTime -= Bn[bi];
            // 残り時間が0以下になるなら処理終了
            if(remainingTime<0) break;
            // 読破！
            readCount++;
            bi++;
        } else if(bi === NMK[1]){ 
            // Aの本を読む
            // 残り時間を差し引く
            remainingTime -= An[ai];
            // 残り時間が0以下になるなら処理終了
            if(remainingTime<0) break;
            // 読破！
            readCount++;
            ai++;
        }else{
            if(An[ai] < Bn[bi]){
                // Aの本を読む
                // 残り時間を差し引く
                remainingTime -= An[ai];
                // 残り時間が0以下になるなら処理終了
                if(remainingTime<0) break;
                // 読破！
                readCount++;
                ai++;
            } else {
                // Bの本を読む
                // 残り時間を差し引く
                remainingTime -= Bn[bi];
                // 残り時間が0以下になるなら処理終了
                if(remainingTime<0) break;
                // 読破！
                readCount++;
                bi++;
            }
        }
    }
    console.log(readCount);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// Main("3 4 240\n60 90 120\n80 150 80 150")
// Main("3 4 730\n60 90 120\n80 150 80 150")
// Main("5 4 1\n1000000000 1000000000 1000000000 1000000000 1000000000\n1000000000 1000000000 1000000000 1000000000")
// Main("3 150 200000\n20000 40 10\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1")
// Main("3 4 730\n60 90 120\n10 10 10 10")

// Main("3 4 730\n160 10 10\n160 1 1 1")

function Main3_2(input){
    const arr = input.trim().split('\n');
    const NMK = arr[0].split(' ').map(Number);
    let An  =   arr[1].split(' ').map(Number);
    let Bn  =   arr[2].split(' ').map(Number);
    let answer = 0;
    let remainingTime = NMK[2];
    for(let ai=0; ai<An.length; ai++){
        let remainingTime = NMK[2];
        let readCount = ai;
        for(let bi=0, remainingTimeB = remainingTime; bi<Bn.length; bi++){
            if(remainingTimeB < 0){ // Bで読み終えた
                if(answer < readCount) answer = readCount + bi;
                break;
            }
            readCount++;
        }
        remainingTime -= An[ai];
        if(remainingTime < 0){ // Aで読み終えた
            if(answer < readCount) answer = readCount;
            break;
        }
    }
    console.log(answer);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main("3 4 240\n60 90 120\n80 150 80 150")
// Main("3 4 730\n60 90 120\n80 150 80 150")
// Main("5 4 1\n1000000000 1000000000 1000000000 1000000000 1000000000\n1000000000 1000000000 1000000000 1000000000")

/**
 * 全探索ですべてのパターンの読破数を計算する
 * A→B→B-→
 */
/**
 * N: Aに積まれている本の数
 * M: Bに積まれている本の数
 * K:合計時間
 */ 
function Main(input){
    const arr = input.trim().split('\n');
    const NMK = arr[0].split(' ').map(Number);
    let An  =   arr[1].split(' ').map(Number);
    let Bn  =   arr[2].split(' ').map(Number);
    let answer = 0;
    let remainingTime = NMK[2];
    const dfs = (An,Bn,ai,bi) => {
        if(ai == NMK[0] &&  bi == NMK[1] ){ // 全部読み終えた!
            return ai + bi;
        } else if(ai == NMK[0]){
            return dfs(An, Bn, ai, bi+1);
        } else if(bi == NMK[1]){
            return dfs(An, Bn, ai+1, bi);
        }
        // まだ読めるなら
        // Aで読んだパターン
        return dfs(An.shift(),Bn, i+1);
    }
    dfs(An, Bn, 0, 0)
}