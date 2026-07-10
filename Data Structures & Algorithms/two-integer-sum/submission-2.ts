class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numberToIndicies = new Map<number, number[]>();

        for (const [i, num] of nums.entries()) {
            const indicies = numberToIndicies.get(num) || [];

            indicies.push(i);

            numberToIndicies.set(num, indicies);
        }

        for (const [i, num] of nums.entries()) {
            const toSearch = target - num;

            if (numberToIndicies.has(toSearch)) {
                const [j] = numberToIndicies.get(toSearch).filter(ind => ind !== i);



                if (j) {
                    return [i, j]
                }
            }
        }
    }
}
