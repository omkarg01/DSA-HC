function sortColor(arr, p, q) {
    if (p < q) {
        const mid = sort(arr, p, q);
        sortColor(arr, p, mid - 1);
        sortColor(arr, mid + 1, q);
    }
}

function sort(arr, p, q) {
    const pivot = arr[p];
    let i = p;
    for (let j = i + 1; j <= q; j++) {
        if (arr[j] < pivot) {
            i += 1;
            swap(arr, i, j);
        }
    }
    swap(arr, i, p);
    return i;
}

const arr = [2, 0, 2, 1, 1, 0];
const p = 0;
const q = arr.length - 1;
console.log(arr)
sortColor(arr, p, q)
console.log(arr)

// Time Compexity : O(nlogn) -> Quick Sort
// Space Complexity : O(1) -> Inplace Sorting

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}