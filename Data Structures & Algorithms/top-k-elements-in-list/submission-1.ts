class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for (const num of nums) {
            const occurances = map.get(num) || 0;

            map.set(num, occurances + 1)
        }

        return Array.from(map.entries())
            .sort(([,a], [, b]) => b - a)
            .slice(0, k)
            .map(a => a[0]);
    }
}
