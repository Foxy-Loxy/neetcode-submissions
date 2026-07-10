class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let totalProduct = nums[0];

        const result = [];

        let zeroPresent = false;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === 0) {
                if (zeroPresent) {
                    return new Array(nums.length).fill(0);
                } else {
                    zeroPresent = true;
                    continue;
                }
            }

            totalProduct = totalProduct * nums[i];
        }

        for (let i = 0; i < nums.length; i++) {
            if (zeroPresent) {
                result[i] = nums[i] === 0 ? totalProduct : 0;
            } else {
                result[i] = totalProduct / nums[i];
            }
        }

        return result;
    }
}
