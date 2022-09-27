const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const x = 90;
function binarySearch(arr, x, i, j) {
    let mid = parseInt(i + ((j - i) / 2));
    if (i > j) return -1;
    if (arr[mid] === x) {
        return mid;
    } else if (arr[mid] < x) {
        return binarySearch(arr, x, mid + 1, j)
    } else {
        return binarySearch(arr, x, i, mid - 1)
    }
}

const index = binarySearch(arr, x, 0, arr.length - 1);
console.log("index : ", index)