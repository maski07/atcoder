/**
 * ルール
 * 所要時間
 * 100点問題 10分
 * 200点問題 20分
 * 300点問題 30分
*/
"use strict"
// AtCoder Beginners Selection
// 2問
function Main2(input){
    let cal = input.split(" ");
    const isValid = (num) => {
        return num >= 1 && num <= 10000
    }
    if(isValid(cal[0]) && isValid(cal[1])){
        console.log(((cal[0] * cal[1]) % 2) ? "Odd" : "Even");
    } else{
        console.log("error");
    }
}

// Main2("7 2"); 

// 3問
// function Main(input){
//     count = 0;
//     for(i=0; i<=2;i++)
//         count += parseInt(input.charAt(i));
//     console.log(count);
// }
function Main3(input){
    num = input.split("");
    console.log("%d",num[0]+num[1]+num[2]);
}
// 2進数の1の数のそれぞれのパターンがあるはず
// 0 -> 0個 
// 1 2 4 8 = 2ˆn  -> 1個
// 3 5 6 9 10 12 14 -> 2個
// 7 11 13 15 -> 3個

// Main3("111"); 
// Main("010"); 
// Main("011"); 
// Main("100"); 
// Main("101"); 
// Main("110"); 
// Main("111");

// 4問
// 1要素でも計算できなくなったらNG
function Main4(input){
    let arr = input.split('¥n');
    let n = arr[0]; // Nを取得
    let an = arr[1].split(' ');//A1~Anを取得
    const calculate = () =>{
        let con = true;
        let count = 0;
        return function a(arr){
                    while(con){
                        let sum = arr.reduce((a,b) => a+b);//各要素で割り切れた数だからsumしたらだめ
                        if(sum%2 == 0){
                            count++;
                            a(arr.map(x => x/2));
                        } else{
                            con = false; //割り切れないなら処理終了
                        }
                    }
                return count;
        }
    }
    let a = calculate(an);
    let count = a(an);
    // console.log(`n：${n}`);
    // console.log(`sum：${sum}`);
    // console.log(`an：${an}`);
    console.log(count);
}

// Main4("3¥n2 2 2");
//console.log(3 % 2 == 0);
// 5問
// 500円 100円 50円
function Main5(input){
    const coins = input.split('\n');
    const totalPrice = coins[3];
    let rePrice = totalPrice;
    let ways = 0;
    const cal = (n, sheetNum, rePrice) =>{
        for(let i = 1; i<=sheetNum && rePrice >= coin ;i++){
            rePrice = rePrice - coin;
        }
        return rePrice;
    }
    const price = [500, 100, 50];
    rePrice = cal(500, coins[0], rePrice);
    rePrice = cal(100, coins[1], rePrice);
    rePrice = cal(50,  coins[2], rePrice);
    if(rePrice == 0) ways++;

    // N通り
    return ways;
}
// 6問 Some Sums
// 何が間違っているのかがわからない
// console.logで出力してもうまく
function Main6(input){
    const num = input.trim().split(' ');
    var answer = 0;
    for(var i=0; i<=num[0]; i++){
        var arrNum = String(i).split('');
        var sum = arrNum.reduce((a,b) => Number(a)+Number(b));
        if(sum >= num[1] && sum <= num[2]){
            answer += i;
        }
    }
    console.log(answer);
}
/* 学び
**  ・入力値を取り出す際に、数値型に変換
**  ・reduceの配列が1つだけなら、callbackは動かない
**  ・inputはStringで入ってきているので気を付ける
*/
function Main6_1(input){
    const num = input.trim().split(' ').map((v) => Number(v));
    var answer = 0;
    for(var i=0; i<=num[0]; i++){
        var arrNum = String(i).split('').map((v) => Number(v));
        var sum = arrNum.reduce((a,b) => a + b);
        if(sum >= num[1] && sum <= num[2]){
            answer += i;
        }
    }
    console.log(answer);
}
// Main6_1('100 4 16');

// Main('100 4 16');
// console.log(101.001 | 0);

/**
 * 学び
 * ・sort()は文字列による辞書順ソート(数値も文字列になる)
 */
// 7問 Card Game for Two
function Main7(input){
    const nums = input.split('\n')[1].split(' ').map(a=> a-0).sort((a,b)=>a-b);// 配列取り出して、数値にしてソートする
    var Alice = 0;
    var Bob = 0;
    while(nums.length){
        Alice += (nums.length) ? nums.pop() : 0;
        Bob   += (nums.length) ? nums.pop() : 0; 
    }
    console.log(Alice-Bob);
}

// Main("2\n3 1");
// Main("3\n2 7 4");
// Main("4\n20 18 2 18");
/**
 * 学び
 * ・Setの使い方(配列を渡しても良い)
 * ・
 */
function Main8(input){
    let args = input.split('\n').slice(1);
    let noDup = new Set(args);
    console.log(noDup.size);
}
// Main("4\n10\n8\n8\n6");
// Main("3\n15\n15\n15");
// Main("7\n50\n30\n50\n100\n50\n80\n30");

// 9問 Otoshidama
// 間違っている
function Main9(input){
    const args = input.split(' ');
    const n = Number(args[0]);
    const totalPrice = Number(args[1]);
    let remainPrice = totalPrice;
    let money = [0,0,0];
    let next = true;
    let maxPattern = [];
    let firstFlg = true;
    const cal = (remainPrice,money,numOfManey)=>{
        if(remainPrice>=10000){
            remainPrice-10000;
            money[0]++;
        }
    }
        // 最大のパターンを作成(お札の枚数が一番少ない)
        cal(remainPrice,money[0],numOfManey);
        cal(remainPrice,money[1],numOfManey);
        cal(remainPrice,money[2],numOfManey);

    // 条件が見つかったら抜ける
    if(n===numOfManey && totalPrice===remainPrice)
        next = false;
    // 条件が見つからなかった抜ける

    // 2回目以降 (10000円を減らせる場合)
    let box = maxPattern[0];
    while(box>0) {
        // 10000円を1枚減らす
        maxPattern[0]-1
        // 5000円を2枚増やす
        maxPattern[1]+2
        
        // 枚数が合わなければ
        maxPattern[0]-1
        // 5000円1枚 1000円5枚を増やす
        maxPattern[1]+1
        maxPattern[2]+5

        // 枚数が合わなければ
        // 1000円10枚を増やす    
        maxPattern[0]-1
        maxPattern[1]+0
        maxPattern[2]+10
        
        // 枚数が一致していればパターンを発見した！
    }

    // 2回目以降 (5000円を減らせる場合) 1000円
    maxPattern[0]-0
    maxPattern[1]-1
    maxPattern[2]+5
}

/**
 * 
 * 10問：白昼夢 
 * 解けなかった。
 */
function Main10(input){
    const S = input.trim();
    const arr = ['dream','dreamer','erase','eraser'];
    const arr_use = [0,0,0,0];
    let T = '';

    console.log((S == T) ? 'YES': 'NO');
}
/**
 * 問11 
 */
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function Main11(input){
    const arr = input.split('\n').sprice(1);
    let answer = false;
    let N = 0;// 移動数
    let curloc = [0,0]; // 現在地[x,y]
    // X軸の移動
    for(let x=0;x<arr[0][0]-N; x++){
        N = x; // 現在の移動数
        curloc[0] = x;
        // Y軸の移動
        for(let y=N;y<arr[0][0]-N; y++, N++,curloc[1]++){
            if(y>=arr[0][0]) break; // 試行回数に到達したらYの移動を抜ける
            for(let minus=y;minus<arr[0][0]-N; minus++){
                if(curloc[1]==0){ // y軸マイナスにはならない
                    continue;
                }
                curloc[1]--;
            }
        }
        // 試行数、現在地、インクリデクリ
    }
    console.log(answer ? 'YES' : 'NO');
}


/**
 * 問
 * Shift Only 2回目
 */
function Main(input) {
    let num  = input.split('\n')[1].split(' ').map(Number);
    let judge  = 0;
    let count = 0;

    while(!(judge>0)){
        num  = num.map(a=> {
            if(a % 2 !== 0){
                judge += 1;
            }
            return a/2;
        });
        if(!(judge>0)){
            count++
        }
    }
    console.log(count);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main('3\n8 12 40');
Main('4\n5 6 8 10');
Main('6\n382253568 723152896 37802240 379425024 404894720 471526144');
