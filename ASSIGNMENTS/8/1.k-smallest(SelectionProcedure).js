function selectionProcedure(arr, p, q, k) {
    if (p < q) {
        const mid = partition(arr, p, q);
        if (mid === k) {
            return arr[mid - 1];
        } else if (k < mid) {
            selectionProcedure(arr, p, mid - 2, k)
        } else {
            selectionProcedure(arr, mid, q, k)
        }
    }
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
    return i + 1;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [40, 25, 68, 79, 52, 66, 89, 97];
const k = 2;
const p = 0;
const q = arr.length - 1;

const result = selectionProcedure(arr, p, q, k);
console.log(result)