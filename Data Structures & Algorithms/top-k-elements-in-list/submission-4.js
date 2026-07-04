class Solution {
    topKFrequent(nums, k) {
        var _a;
        const lookup = new Map();
        const frequencies = new Array(nums.length);
        const result = new Array();
        if (nums.length == 1) {
            return nums;
        }
        for (const number of nums) {
            if (!lookup.has(number)) {
                lookup.set(number, 1);
            }
            else {
                lookup.set(number, lookup.get(number) + 1);
            }
        }
        console.log("LOGGING", lookup);
        for (const [key, value] of lookup) {
            (_a = frequencies[value]) !== null && _a !== void 0 ? _a : (frequencies[value] = []);
            frequencies[value].push(key);
        }
        console.log("freq", frequencies);
        for (let i = frequencies.length; i > 0; i--) {
            if (!Array.isArray(frequencies[i]) || !frequencies[i].length)
                continue;
            result.push(...frequencies[i]);
            if (result.length == k) {
                return result;
            }
        }
        return [];
    }
}