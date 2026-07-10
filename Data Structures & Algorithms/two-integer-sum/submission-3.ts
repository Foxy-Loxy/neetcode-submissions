class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (const [i, num] of nums.entries()) {
            const complement = target - num;

            const j = map.get(complement);

            if (j || j === 0) {
                return [i, j];
            }

            map.set(num, i);
        }
    }
}
