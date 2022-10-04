import { PriorityQueue } from "datastructures-js";

function targetSum(arr, i, sum, target, minHeap, k) {

    // if k = 0 (i.e. sum = addition of all 3 elements) push the diff in minHeap, this heap will have lowest diff on the top
    if (k === 0 && i < arr.length + 1) {
        const diff = Math.abs(target - sum);

        const diffs = [];   // diffs[] contains [sum, diff]
        diffs.push(sum);
        diffs.push(diff)

        minHeap.push(diffs);   // pushing diffs into minHeap, heap will sort elements with minimum diff on the top

        return;
    }

    // if i exceeds the lenght of arr then return  
    if (i > arr.length){
        return;
    }

    // including the element in sum
    targetSum(arr, i + 1, sum + arr[i], target, minHeap, k - 1);
    // excluding the element in sum
    targetSum(arr, i + 1, sum, target, minHeap, k);
    return;
}

const minHeap = new PriorityQueue((a, b) => a[1] - b[1]);
const arr = [-1, 2, 1, -4];
const target = 1;
const k = 3; // no. of elements to be considered for sum

targetSum(arr, 0, 0, target, minHeap, k);
const sum = minHeap.pop()[0];  // sum which is closest to target
console.log(sum)

