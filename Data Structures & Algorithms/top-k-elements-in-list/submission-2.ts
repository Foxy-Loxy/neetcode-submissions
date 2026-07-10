class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyByNumber = new Map<number, number>();

        for (const num of nums) {
            const occurances = frequencyByNumber.get(num) || 0;

            frequencyByNumber.set(num, occurances + 1)
        }

         const buckets: number[][] = Array.from(
            { length: nums.length + 1 },
            () => [],
        );

        for (const [num, frequency] of frequencyByNumber) {
            buckets[frequency].push(num);
        }

        const result: number[] = [];

        for(let frequency = buckets.length - 1; frequency > 0; frequency--) {
            const bucket = buckets[frequency];

            for(const number of bucket) {
                result.push(number);

                if (result.length === k) {
                    break;
                }
            }

            if (result.length === k) {
                break;
            }
        }

        return result;
    }
}
