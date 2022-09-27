const arr = [20, 45, 27, 47, 55, 67, 75, 88, 90];

function linearSearch(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 88) {
            console.log(i);
        }
    }
}

linearSearch(arr);
// Time Complexity : O(n)
// Space Complexity : O(1)