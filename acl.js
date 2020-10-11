'use strict'
const log = console.log;
function MainA(input){
    let num = Number(input);
    let answer = "";
    const ACL = "ACL";
    for(let i=0; i<num; i++){
        answer += ACL;
    }
    console.log(answer);
}
// MainA(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainA("2")
function MainB(input){
    const [A,B,C,D] = input.split(' ');
    if((A<=C && C<=B) || (A<=D && D<=B) || (C<=A && A<=D) || (C<=B && B<=D) ){
        console.log('Yes');
    } else {
        console.log('No');
    }
}
// MainB(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainB("10 10 20 40")
// MainB("10 20 30 40")
// MainB("1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000")
// MainB("11 11 9 10")

function MainC(input){
    const arr = input.split('\n');
    const [[N, M] , ...AB] = arr.map(a => a.split(' ').map(Number));
    let checkSet = new Set();
    let answer = 0;
    checkSet.add(AB[0][0]);
    checkSet.add(AB[0][1]);
    // 結び済み道路(checkSet)を作成
    for(let i=1; i<AB.length; i++){
        if(!(checkSet.has(AB[i][0]) || checkSet.has(AB[i][1]))){
            answer++;
        }
        checkSet.add(AB[i][0]);
        checkSet.add(AB[i][1]);
    }
    // 結ばれていない道路があればつなげる
    for(let i=1; i<=N; i++){
        if(!checkSet.has(i)){
            answer++;
        }
    }
    console.log(answer);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
// MainC("3 1\n1 2")
// MainC("5 4\n1 2\n3 3\n4 5\n7 8")
/**
 * 5 3
 * 1 2
 * 1 3
 * 4 5
 * ① セットに詰める
 * ② セットにあれば、詰める
 *    セットになければ、answerを+して詰める
 */
function MainD(input){
    const arr = input.split('\n');
    const [N, K] = arr[0].split(' ').map(Number);
    arr.shift();
    const An = arr.map(Number);
    let answer = 0;
    let preNum = An[0];
    let AnBox = [];
    for(let i=0; i<An.length-1; i++){
        AnBox.push(Math.abs(An[i+1]-An[i]));
    }
}
// MainD(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainD('10 3\n1\n5\n4\n3\n8\n6\n9\n7\n2\n4')
