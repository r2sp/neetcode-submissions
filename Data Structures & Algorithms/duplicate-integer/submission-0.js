class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numberMap = new Set();
        for (let i = 0; i < nums.length; i++) {
            const number = nums[i]
            if (numberMap.has(number)) return numberMap.has(number)
            numberMap.add(number)
        }
        return false
    }
}
