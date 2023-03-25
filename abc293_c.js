/** メモ **/
'use strict'

/**  */
var log = console.log;
function MainC(input){
    const arr = input.split('\n');
    const [H, W] = arr.shift().split(' ').map(Number);
    const Ahw = arr.map(a => a.split(' ').map(Number));
    const DFS = (h, w, has) => {
        // log('start',{h,w,has});
        if(h === H-1 && w === W-1){
            const num = Ahw[h][w];
            // log({h,w,num,has});
            return has.find(a => a === num)  ? 0 : 1;
        } else if(h >= H || w >= W){
            return 0;
        }
        const num = Ahw[h][w];
        if(has.find(a => a === num)){
            return 0;
        }
        has.push(num);
        // log('end',{h,w,num,has});
        return DFS(h+1, w, [...has]) + DFS(h, w+1, [...has]); 
    }
    const ans = DFS(0, 0, [].slice(0));
    log(ans);
}
// MainC(require("fs").readFileSync("/dev/stdin", "utf8").trim());
MainC('3 3\n3 2 2\n2 1 3\n1 5 4');
MainC('10 10\n1 2 3 4 5 6 7 8 9 10\n11 12 13 14 15 16 17 18 19 20\n21 22 23 24 25 26 27 28 29 30\n31 32 33 34 35 36 37 38 39 40\n41 42 43 44 45 46 47 48 49 50\n51 52 53 54 55 56 57 58 59 60\n61 62 63 64 65 66 67 68 69 70\n71 72 73 74 75 76 77 78 79 80\n81 82 83 84 85 86 87 88 89 90\n91 92 93 94 95 96 97 98 99 100');

