
// Time complexity :- log(m*n)
function array2D(arr, target) {
    const m = arr.length;
    const n = arr[0].length;
    let left = 0;
    let right = m * n - 1;
    
    while (left < right) {
        const mid = parseInt(left + (right - left) / 2);
        const mid_elem = arr[parseInt(mid / n)][mid % n];

        if (mid_elem === target) {
            return [parseInt(mid / n), mid % n];
        } else if (mid_elem < target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return [-1, -1];
}

const arr = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const target = 11;

const res = array2D(arr, target);
console.log(res)