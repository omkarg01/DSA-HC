function quickSort(arr, p, q) {
    if (p < q) {
        const mid = partition(arr, p, q);
        quickSort(arr, p, mid - 1);
        quickSort(arr, mid + 1, q);
    }
    return arr;
}

function partition(arr, p, q) {
    const pivot = arr[p];
    let i = p;
    for (let j = i + 1; j < q + 1; j++) {
        if (arr[j] < pivot) {
            i += 1;
            swap(arr, i, j)
        }
    }
    swap(arr, i, p)
    return i;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [50, 70, 29, 67, 12, 15, 46];
const p = 0;
const q = arr.length - 1;

const sortedArr = quickSort(arr, p, q);
console.log(sortedArr)
