class Solution {
    productExceptSelf(nums) {
        let prefix = Array(nums.length - 1);
        let postfix = Array(nums.length - 1);
        let result = [];
        for (let j = nums.length - 1; j >= 0; j--) {
            let value = 0;
            if (j == nums.length - 1) {
                value = 1;
            }
            else {
                value = postfix[j + 1] * nums[j + 1];
            }
            postfix[j] = value;
        }
        for (let i = 0; i < nums.length; i++) {
            let value = 0;
            if (i == 0) {
                value = 1;
            }
            else {
                value = prefix[i - 1] * nums[i - 1];
            }
            prefix[i] = value;
            result.push(prefix[i] * postfix[i]);
        }
        return result;
    }
}