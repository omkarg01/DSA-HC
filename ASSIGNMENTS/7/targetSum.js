import { MinPriorityQueue } from "datastructures-js";

function targetSum(arr, i, sum, target, minHeap, k) {
    if (k === 0 && i < 5) {
        const diff = Math.abs(target - sum);
        minHeap.push(diff);
        // console.log(minHeap)
        return;
    }

    targetSum(arr, i + 1, sum + arr[i], target, minHeap, k - 1);
    targetSum(arr, i + 1, sum, target, minHeap, k - 1);

    return;
}

const minHeap = new MinPriorityQueue();
const arr = [-1, 2, 1, -4];
const target = 1;
const k = 3;
targetSum(arr, 0, 0, target, minHeap, k);
console.log(minHeap.pop())