function Main1(input){
    const arr = input.split(' ').map(Number);
    const num = arr.indexOf(0);
    console.log(num + 1);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function Main2(input){
    const XY = input.split(' ').map(Number);
    for(let i=0; i<=XY[0]; i++){
        for(let k=0; k<=XY[0]; k++){
            if(i+k > XY[0]) break;
            if(2*i + 4*k == XY[1] && i+k==XY[0]){
                console.log("Yes");
                return;
            }
        }
    }
    console.log("No");
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main("3 8");
// Main("2 100");
// Main("100 100");
// Main("1 0");

function Main3_0(input){
    const arr = input.split('\n');
    const XN = arr[0].split(' ').map(Number);
    if(XN[1] == 0){
        console.log(XN[0]);
        return;
    }
    const pn = arr[1].split(' ').map(Number);
    const box = pn.map(a=> Math.abs(a - XN[0]));
    const num = Math.min.apply(null, box);
    const ansIndex = box.indexOf(num);

    console.log(pn[ansIndex]);
}

/**
 * 問題文をちゃんと読むこと。ひっかけがあった
 */
function Main3(input){
    const arr = input.trim().split('\n');
    const XN = arr[0].split(' ').map(Number);
    if(XN[1] == 0){
        console.log(XN[0]);
        return;
    }
    const pn = arr[1].split(' ').map(Number);
    let diff = 999;
    let answer = 0;
    for(i=0; i<=101; i++){
        if(pn.indexOf(i)>=0) continue;
        if(Math.abs(XN[0]-i) < diff){
            diff = XN[0]-i;
            answer = i;
        }
    }
    console.log(answer);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main("6 5\n4 7 10 6 5")
// Main("10 5\n4 7 10 6 5")
// Main("100 0")
// Main("10 5\n4 7 10 6 5")
// Main("10 100\n 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100")
// 溶けなかった。
function Main4(input){
    const arr = input.trim().split('\n');
    const N  = Number(arr[0]);
    const An = arr[1].split(' ').map(Number);
    let count = 0;
    for(let i=0; i<N; i++){
        let ngFlag = 0;
        for(let j=0; j<N; j++){
            if(ngFlag) break;
            if(i==j) continue;
            if(An[i] % An[j] == 0) ngFlag = 1;
        }
        if(!ngFlag) count++;
    }
    console.log(count);
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main("5\n24 11 8 3 16");
Main("4\n5 5 5 5");
Main("10\n33 18 45 28 8 19 89 86 2 4");

