/**
 * 累積和 (C問題)
 * とけん！
 */
function Main(input){
    const arr = input.split('\n');
    const NQ = arr[0].split(' ').map(Number);
    const S = arr[1];
    const lq = [];
    let answer = [];
    for(let i=2; i<arr.length; i++){
        lq.push(arr[i]);
    }
    for(let i=0; i<lq.length; i++){
        let num = 0;
        const left = lq[i].split(' ')[0];
        const right = lq[i].split(' ')[1];
        const string = S.slice(left-1, right);
        let j=0;
        while(true){
            const index = string.indexOf('AC', j);
            if(index>=0){ 
                num++;
                j = index+1;
            } else {
                break;
            }
        }
        answer.push(num)
    }
    console.log(answer.join('\n'));
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

/**
 * アルゴリズムを理解したので解き直し!
 */
const log = (...val) => console.log(...val);

function Main(input){
    const arr = input.split('\n');
    const NQ = arr[0].split(' ').map(Number);
    const S = arr[1];
    const numArr = new Array(NQ[0]+1).fill(0);
    // 特定文字列の数をもったリストを作成する
    for(let i=0; i<NQ[0]; i++){
        const num = (S[i] == 'A' && S[i+1] == 'C') ? 1 : 0;
        numArr[i+1] = numArr[i] + num;
    }
    for(let i=0; i<NQ[1]; i++){
        const left = Number(arr[i+2].split(' ')[0]);
        const right  = Number(arr[i+2].split(' ')[1]);
        log({left,right});
        console.log(numArr[right-1] - numArr[left-1]);
    }
    log(numArr)
}
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

Main('8 3\nACACTACG\n3 7\n2 3\n1 8');
/**
 *  ACACTACG
 *  011222333
 *  →　こういうこと
 */
