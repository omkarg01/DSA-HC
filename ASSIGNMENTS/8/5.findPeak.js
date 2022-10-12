function binarySearch(nums, p, q) {
    if (p <= q) {
        const mid = Math.floor(p + (q - p) / 2);

        if (mid > 0 && mid < nums.length - 1) {
            if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
                return mid;
            } else if (nums[mid] < nums[mid + 1]) {
                return binarySearch(nums, mid + 1, q);
            } else if (nums[mid] < nums[mid - 1]) {
                return binarySearch(nums, p, mid - 1);
            }
        } else if (mid === 0) {
            if (nums[0] > nums[mid + 1]) {
                return 0;
            } else {
                return 1;
            }
        } else if (mid === nums.length - 1) {
            if (nums[nums.length - 1] > nums[nums.length - 2]) {
                return nums.length - 1;
            } else {
                return nums.length - 2;
            }
        }
    }
}

const arr = [6, 5, 4, 3, 2, 3, 2];
const p = 0;
const q = arr.length - 1;
const peak = binarySearch(arr, p, q);
console.log(peak)

// Time Complexity : O(logn)
// Space Compelxity : O(logn) (height of tree)