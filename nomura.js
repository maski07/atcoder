
/**
 * 1問
 * 
 */
function Main1(input){ 
    let arr = input.split(' ').map(Number);
    let min1 = arr[0] * 60 + arr[1];
    let min2 = arr[2] * 60 + arr[3];
    console.log(min2-min1- arr[4]);
}
// 900 - 600 - 30
// Main1('10 0 15 0 30');
// Main1('10 0 12 0 120');

function Main(input){   
    let answer = '';
    while(true){
        let num  = input.indexOf('?D');
        if(num == -1){
            break;
        }else{
            arr[num] == P
        }
    }
    input.split('').map(
        cur =>{
            if(cur==='?'){
                if(answer.match(/.*?D$/)){
                    return answer += 'P';
                }
                return answer += 'D';
            }
            return answer += cur;
        }
    )
    console.log(answer);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main('PDDDDDP');
Main('P?P?');
Main('D?PP');
Main('PPDDP');

/**
 * 前 次 値
 * P P D
 * P D D
 * D P D
 * D D P
 * 
 */  

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
