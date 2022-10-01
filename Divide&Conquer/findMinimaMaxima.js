function findMinimMaxima(arr, i, j) {

    let res = {
        "minima": Number.MAX_VALUE,
        "maxima": Number.MIN_VALUE
    }
    // For smaller problem
    if (i === j) {
        res.maxima = arr[i];
        res.minima = arr[i];
        return res;
    } else if (i === j - 1) {
        if (arr[i] < arr[j]) {
            res.minima = arr[i];
            res.maxima = arr[j];
        } else {
            res.minima = arr[j];
            res.maxima = arr[i];
        }
        return res
    } else {
        // For Bigger problem
        // 1. Divide
        let mid = Math.floor(i + (j - i) / 2);
        
        // 2. Conquer
        let left = findMinimMaxima(arr, i, mid - 1);
        let right = findMinimMaxima(arr, mid + 1, j);

        // 3. Combine
        if (left.minima < right.minima) {
            res.minima = left.minima;
        } else {
            res.minima = right.minima;
        }

        if (left.maxima < right.maxima) {
            res.maxima = right.maxima;
        } else {
            res.maxima = left.maxima;
        }
    }

    return res;
}

const arr = [2, 5, 3, 4, 6, 10, 52, 7, 68, 78, 21, 7, 1];
const result = findMinimMaxima(arr, 0, arr.length - 1)
console.log(result)