import { MaxPriorityQueue } from 'datastructures-js';

function ksmallest(arr, k) {
    const maxHeap = new MaxPriorityQueue();

    arr.forEach(element => {
        maxHeap.push(element);
        if (maxHeap.size() > k) {
            maxHeap.pop()
        }
    });

    return maxHeap.pop()
}

const arr = [40, 25, 68, 79, 52, 66, 89, 97];
const k = 2;

const result = ksmallest(arr, k);
console.log(result)