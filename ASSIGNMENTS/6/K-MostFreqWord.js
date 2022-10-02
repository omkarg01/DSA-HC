import { MinHeap } from "datastructures-js";

const words = ["priya", "bhatia", "akshay", "arpit", "priya", "arpit"];

const wordsMap = new Map();

words.forEach((eachword) => {
    if (wordsMap.has(eachword)) {
        wordsMap.set(eachword, wordsMap.get(eachword) + 1);
    } else {
        wordsMap.set(eachword, 1);
    }
})

const compareFreq = (a, b) => {
    if (a[1] > b[1]) {
        return -1;
    }
    if (a[1] < b[1]) {
        // prioratize newest cars
        return 1;
    }
    // with least price
    return a[1] < b[1] ? -1 : 1;
};

const minHeap = new MinHeap(compareFreq);
const mapEntries = [...wordsMap.entries()]
mapEntries.forEach((eachword) => {
    minHeap.push(eachword)
})


while (!minHeap.size() > 3) {
    minHeap.pop()
}

console.log(minHeap)