function mergeSort(arr, p, q) {
    if (p < q) {
        const mid = Math.floor(p + (q - p) / 2);
        mergeSort(arr, p, mid);
        mergeSort(arr, mid + 1, q);
        mergeProcedure(arr, p, mid, q)
    }
}

function mergeProcedure(arr, p, mid, q) {

    const left = arr.slice(p, mid + 1);
    const right = arr.slice(mid + 1, q + 1);

    console.log(left);
    console.log(right)

    let i = 0;
    let j = 0;
    let k = p;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            i += 1;
        } else {
            arr[k] = right[j];
            j += 1;
        }
        k += 1;
    }

    while (i < left.length) {
        arr[k] = left[i];
        i += 1;
        k += 1;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j += 1;
        k += 1;
    }



}

const arr = [50, 70, 29, 67, 12, 15, 46];
const p = 0;
const q = arr.length - 1;
mergeSort(arr, p, q);
// mergeProcedure(arr, 0, 3, arr.length - 1)
console.log(arr)