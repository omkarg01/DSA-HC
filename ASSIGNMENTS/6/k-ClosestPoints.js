import { PriorityQueue } from "datastructures-js";

function kClosestPoints(points, k) {
    // adding dist value as third elem of each point eg - [[-2, -2]] converted to [[-2, -2, 8]]
    const pointsDist = points.map((point) => {
        const dist = Math.pow(point[0], 2) + Math.pow(point[1], 2);
        point.push(dist);
        return point;
    })

    // maxHeap sorted on the basis of the distance value
    const maxHeap = PriorityQueue.fromArray(pointsDist, (a, b) => b[2] - a[2]);

    // keep the bottom k values in maxHeap and removing all top elements
    while (maxHeap.size() > k) {
        maxHeap.pop();
    }

    // storing the remaining points in res arr
    const res = [];
    while (!maxHeap.isEmpty()) {
        const point = maxHeap.pop().splice(0, 2);
        res.push(point);
    }

    console.log(res)
}

const points = [[1, 3], [-2, 2]];
const k = 1;
kClosestPoints(points, k)