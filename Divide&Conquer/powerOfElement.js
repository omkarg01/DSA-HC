function powerOfElement(a, n) {
    if (n == 1) {
        return a;
    } else if (n == 0) {
        return 1;
    } else {
        const mid = n / 2;
        b = powerOfElement(a, mid);
        let result = b * b;
        if (n % 2 == 0) {
            return result;
        }
        return result * a;
    }
}

console.log(powerOfElement(4, 2))