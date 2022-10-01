function countWays(n) {
    if (n == 1){
        return 1;
    } else if(n == 2){
        return 2;
    } else {
        let n1 = countWays(n - 1);
        let n2 = countWays(n - 2);

        return n1 + n2;
    }
}

console.log(countWays(5));