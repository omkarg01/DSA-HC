// const arr = [1, 3, 7, 9, 12, 10, 8, 16, 18, 22, 27];
const arr = [75, 25, 35, 45, 90, 80, 60, 20, 30]


class MinHeap {
    constructor() {
        this.heap = [];
    }

    heapify(i) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        const n = this.heap.length;
        // if no child then node
        if (l >= n || r >= n)
            return;

        // if node is smaller than both child nodes then skip
        if (this.heap[l] > this.heap[i] && this.heap[r] > this.heap[i]) return;

        // if node is greater than child node, then swap with it 
        if (this.heap[l] < this.heap[i] && this.heap[l] < this.heap[r]) {
            this.swap(l, i);
            this.heapify(l)
        } else {
            this.swap(r, i);
            this.heapify(r)
        }
    }

    swap(j, i) {
        let temp = this.heap[j];
        this.heap[j] = this.heap[i];
        this.heap[i] = temp;
    }

    buildHeap(arr) {
        this.heap = arr;
        const startIndex = Math.floor(this.heap.length / 2) - 1;

        for (let i = startIndex; i > -1; i--) {
            this.heapify(i);
        }
    }
}

console.log(arr);
const obj = new MinHeap();
obj.buildHeap(arr)
console.log(obj.heap)

// Time Complexity : O(n) Building heap is highest time cosuming in the code