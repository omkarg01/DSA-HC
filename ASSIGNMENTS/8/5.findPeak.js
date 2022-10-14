function binarySearch(nums, p, q) {
    if (p <= q) { // left pointer crosses the right pointer call will stop
        const mid = Math.floor(p + (q - p) / 2);

        // mid is other than the first and last element of an array
        if (mid > 0 && mid < nums.length - 1) {
            // if the mid element is greater than both of its neighbours [1, 3, 5, 10, 7, 6, 4]
            if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            // if the mid element is smaller than its left neighbour (we are at the left side of the peak) [1, 3, 5, 7, 10, 4, 2]
            else if (nums[mid] < nums[mid + 1]) {
                return binarySearch(nums, mid + 1, q);
            }
            // if the mid element is smaller than its right neighbour (we are at the right side of the peak) [1, 3, 10, 9, 8, 4, 2]
            else if (nums[mid] < nums[mid - 1]) {
                return binarySearch(nums, p, mid - 1);
            }
        }
        // mid first element of an array
        else if (mid === 0) {
            // if the first element is greater than its right neighbour [10, 8, 4, 2, 1]
            if (nums[0] > nums[mid + 1]) {
                return 0;
            }
            // if the first element is smaller than its right neighbour [1, 10, 8, 4, 2]
            else {
                return 1;
            }
        }
        // mid is last element of an array 
        else if (mid === nums.length - 1) {
            // if the last element is greater than its left neighbour [1, 2, 4, 8, 10]
            if (nums[nums.length - 1] > nums[nums.length - 2]) {
                return nums.length - 1;
            }
            // if the last element is smaller than its left neighbour [1, 2, 4, 8, 10, 4]
            else {
                return nums.length - 2;
            }
        }
    }
}

const arr = [1, 3, 5, 10, 7, 6, 4];
const p = 0; // start index
const q = arr.length - 1; // end index

const peakIndex = binarySearch(arr, p, q);
console.log(peakIndex)

// Time Complexity : O(logn)
// Space Compelxity : O(logn) (height of tree)
