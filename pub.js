function computeFinalPosition(width, height, position, portalA, portalB, moves) {
    // Write yourcode here
    // To debug: console.error('Debug messages...');
    const movesList = moves.split('');
    const now = position;
    new Set().con
    for(move of movesList){
        if(move === 'D') {
            if(now[0] < height){
                now[0]++;
            }
        } else if(move === 'R') {
            if(now[1] < width){
                now[1]++;
            }
        } else if(move === 'L'){
            if(0 < now[1]){
                now[1]--;
            }
        } else{
            throw new Error('mistaken args');
        }
        // teleport
        if(now[0] === portalA[0]
            && now[1] === portalA[1]){
                now[0] = portalB[0];
                now[1] = portalB[1];
        } else if(now[0] === portalB[0]
            && now[1] === portalB[1]){
                now[0] = portalA[0];
                now[1] = portalA[1];
            }
    }
    return now;
}

/* Ignore and do not change the code below */
// #region main
const width = parseInt(readline());
const height = parseInt(readline());
const moves = readline();
const position = readline().split(' ').map(j => parseInt(j));
const portalA = readline().split(' ').map(j => parseInt(j));
const portalB = readline().split(' ').map(j => parseInt(j));
const oldWrite = process.stdout.write;
process.stdout.write = chunk => { console.error(chunk); return true }
const finalPosition = computeFinalPosition(width, height, position, portalA, portalB, moves);
process.stdout.write = oldWrite;
for (let i = 0; i < 2; i++) {
    console.log(finalPosition[i]);
}
// #endregion
