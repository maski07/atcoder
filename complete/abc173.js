function Main1(input){
    let cal = input % 1000;
    console.log((cal == 0) ? 0 : 1000-cal);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// Main(1900)
// Main(3000)


function Main2(input){
    let arr = input.trim().split('\n');
    let count_AC = 0;
    let count_WA = 0;
    let count_TLE = 0;
    let count_RE = 0;
    for(let i=1; i <= Number(arr[0]); i++){
        if(arr[i] == 'AC')  count_AC++;
        if(arr[i] == 'WA')  count_WA++;
        if(arr[i] == 'TLE') count_TLE++;
        if(arr[i] == 'RE')  count_RE++;
    }
    console.log(`AC x ${count_AC}`);
    console.log(`WA x ${count_WA}`);
    console.log(`TLE x ${count_TLE}`);
    console.log(`RE x ${count_RE}`);
}

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main('6\nAC\nTLE\nAC\nAC\nWA\nTLE')
// Main('10\nAC\nAC\nAC\nAC\nAC\nAC\nAC\nAC\nAC\nAC')
/**
 * 再帰関数で解く方法もあるが2進数でく方が楽
 */
function Main3(input){
    const HWK = input.split('\n')[0].split(' ');
    const Cij = input.split('\n').map(a=>a.split(''));
    Cij.shift();
    let answer = 0;
    // #の数を数えるメソッド
    const cal_sharp = (cij) =>{
        let sharpNum = 0;
        for(let i=0; i<HWK[0]; i++){
            sharpNum += cij[i].filter(function(x){return x==='#'}).length;
        }
        return sharpNum;
    }
    // 何も選ばないパターン = 現状の#数
    if(cal_sharp(Cij) == HWK[2]) answer++;
    // 行だけパターン
    for(let i=0; i<HWK[0];i++){ //縦にアクセス
        // 横の要素を全て0にする
        let box = input.split('\n').map(a=>a.split(''));
        box.shift();
        box[i] = box[i].map(a => 0);
        if(cal_sharp(box) == HWK[2]) answer++;
    }  
    // 列だけパターン
    for(let j=0; j<HWK[1]; j++){ // 横にアクセス
            // 縦の要素を全て0にする
            for(let n=0; n< HWK[0]; n++) box[n][j] = 0;
            if(cal_sharp(box) == HWK[2]) answer++;
    }
    
    // 選ぶパターン
    for(let i=0; i<HWK[0];i++){ //縦にアクセス
        for(let j=0; j<HWK[1]; j++){ // 横にアクセス
            // 横の要素を全て0にする
            let box = input.split('\n').map(a=>a.split(''));
            box.shift();
            box[i] = box[i].map(a => 0);
    
            // 縦の要素を全て0にする
            for(let n=0; n< HWK[0]; n++) box[n][j] = 0;
            if(cal_sharp(box) == HWK[2]) answer++;
        }
    }
    console.log(answer);
}

// Main('2 3 2\n..#\n###');
// console.log((0b111 >> 1))
// console.log((1 << 1) & 1)
// console.log((1 << 2) & 1)
// console.log((1 << 3) & 1)
// console.log((1 << 4) & 1)
// console.log((1 << 5) & 1)
// console.log(2 ** 12)
/**
 * 間違っている。なぜかmaskCの定義がされない。
 */
function Main(input){
    let HWK = input.split('\n')[0].split(' ');
    const Cij = input.split('\n').map(a=>a.split(''));
    Cij.shift();
    let answer = 0;
    for(let maskR = 0; maskR < HWK[0]; (1 << HWK[0]) - 1){
    for (let maskC = 0; maskC < HWK[1]; (1 << HWK[1]) - 1){
            let black = 0;
            for (let i = 0; i < HWK[0]; ){
                for (let j = 0; j< HWK[1]; HWK[1]--){
                    if (((maskR >> i) & 1) == 0 && ((maskC >> j) & 1) == 0
                    && Cij[i][j] == '#') black = black + 1
                    if (black == HWK) ans = ans + 1
                }
            }
        }
    }
    console.log(answer);
}
Main('2 3 2\n..#\n###');
