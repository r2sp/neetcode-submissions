class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let dict = {};
        for (let num of nums) {
            console.log(num)
            if (!dict[num]) {
                dict[num] = true;
            } else {
                return true;
            }
        }
        return false;
    }
}
