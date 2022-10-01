function squareRoot(num) {
    let i = 1;
    let j = Math.floor(num/2);
    // console.log(j)

    while (i < j){
        const mid = Math.floor(i + (j - i)/2);
        console.log(mid)
        if (mid * mid === num){
            return mid;
        } else if ( mid * mid < num ){
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }

    
}

const num = 15;
const squareRootVal = squareRoot(num);
console.log(squareRootVal)