class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const lookup = {};
        for (const number of nums) {
            if (!lookup[number]) {
                lookup[number] = true;
            }
            else {
                return true;
            }
        }
        return false;
    }
}