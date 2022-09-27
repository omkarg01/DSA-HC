// Time complexity : O(n)
// Two Pointer Approach
function findSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum > target) {
            right = right - 1;
        } else {
            left = left + 1;
        }
    }
    return [-1, -1];
}


const arr = [20, 40, 60, 80, 90, 120, 240];
const target = 210;

const res = findSum(arr, target);
console.log(res);