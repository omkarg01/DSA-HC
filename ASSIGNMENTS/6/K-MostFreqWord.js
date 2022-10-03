import { PriorityQueue } from "datastructures-js";

function kFreq(words, k) {
    const wordsMap = new Map();

    // counting freq of each word and storing it in map
    words.forEach((eachword) => {
        if (wordsMap.has(eachword)) {
            wordsMap.set(eachword, wordsMap.get(eachword) + 1);
        } else {
            wordsMap.set(eachword, 1);
        }
    });

    // converting map to arrays eg - { priya : 2, arpit : 1}  will be covert to - [[priya, 2], [arpit, 1]]
    // this converion has been done for the ease of comparision
    const mapEntries = [...wordsMap.entries()];

    // storing entire array in minHeap : word with lowest freq will appeared at the top
    const minHeap = PriorityQueue.fromArray(mapEntries, (a, b) => a[1] - b[1]);

    // pop all words from the heap until the size of minheap is greater than k
    while (minHeap.size() > k) {
        minHeap.pop();
    }

    // clear the last k elements in minHeap which will have the max frequency and store it ini res arr
    const res = [];
    while (!minHeap.isEmpty()) {
        res.push(minHeap.pop()[0]);
    }
    console.log(res)
}

const words = ["priya", "bhatia", "akshay", "arpit", "priya", "arpit"];
const k = 3;
kFreq(words, k);