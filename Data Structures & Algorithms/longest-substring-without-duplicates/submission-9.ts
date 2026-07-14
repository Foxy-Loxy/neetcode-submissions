class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let uniqueCharacters = new Map<string, number>();
        let topLength = 0;

        let i_start = 0;

        for(let i = 0; i < s.length; i++) {
            const c = s[i];

            const already_met_c_at_id = uniqueCharacters.get(c);

            if (already_met_c_at_id !== undefined && already_met_c_at_id >= i_start) {

        
                const unique_length = i - i_start;
            

                if (unique_length > topLength) {
                    topLength = unique_length;
                }

                i_start = already_met_c_at_id + 1;                
            }

            uniqueCharacters.set(c, i)
        }

        const unique_length = s.length - i_start;

        if (unique_length > topLength) {
            topLength = unique_length;
        }

        return topLength;
    }
}
