class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0;
        }

        const set = new Set<number>(nums);

        let topLength = 1;

        for (const [num] of set.entries()) {
            const isStartOfTheSequence = !set.has(num - 1);

            let length = 1;

            if (isStartOfTheSequence) {
                while (set.has(num + length)) {
                    length++;
                }

                if (topLength < length) {
                    topLength = length;
                }
            }
        }

        return topLength;
    }
}
