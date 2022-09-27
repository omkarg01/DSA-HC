const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function ternarySearch(arr, start, end, target) {
    while (start < end) {
        const mid1 = parseInt(start + (end - start) / 3);
        const mid2 = parseInt(end - (end - start) / 3);

        if (target === arr[mid1]) {
            return mid1;
        } else if (target === arr[mid2]) {
            return mid2;
        } else if (target < arr[mid1]) {
            return ternarySearch(arr, start, mid1 - 1, target);
        } else if (target > arr[mid2]) {
            return ternarySearch(arr, mid2 + 1, end, target);
        } else {
            return ternarySearch(arr, mid1 + 1, mid2 - 1, target);
        }
    }

    return -1;
}

const target = 80;
const result = ternarySearch(arr, 0, arr.length - 1, target);
console.log(result);