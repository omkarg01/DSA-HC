import { MinPriorityQueue } from 'datastructures-js';

function ksmallest(arr, k) {
    const minHeap = new MinPriorityQueue();

    arr.forEach(element => {
        minHeap.push(element);
        if (minHeap.size() > k) {
            minHeap.pop()
        }
    });

    return minHeap.pop()
}


const arr = [40, 25, 68, 79, 52, 66, 89, 97];
const k = 2;

const result = ksmallest(arr, k);
console.log(result)