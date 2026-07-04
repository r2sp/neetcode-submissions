class Solution {
  twoSum(nums: number[], target: number): number[] {
    let map = new Map()
    for (let i in nums) {
      const diff = target - nums[i];
      if (map.get(diff)) {
        return [parseInt(map.get(diff)), parseInt(i)]
      }
      if (!map.get(nums[i])) {
        map.set(nums[i], i) 
      }
    }
    return [];
  }
}
