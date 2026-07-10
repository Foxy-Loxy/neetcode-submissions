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

        const unsorted = Array.from(map.entries());

        console.log({ unsorted });

        const sorted = unsorted.sort(([,a], [, b]) => b - a);

        console.log({ sorted });

        const sliced = sorted.slice(0, k);

        console.log({ sliced });

        return sliced.map(a => a[0])
    }
}
