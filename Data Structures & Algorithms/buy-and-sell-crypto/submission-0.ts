class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let lowestEntryPrice = Infinity;

        for (const price of prices) {
            if (price < lowestEntryPrice) {
                lowestEntryPrice = price;
            } else {
                const profit = price - lowestEntryPrice;

                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }

        return maxProfit;
    }
}
