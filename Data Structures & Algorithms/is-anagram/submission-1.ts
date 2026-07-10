class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const sMap = new Map<string, number>();

        for (const c of s.split('')) {
            if (sMap.has(c)) {
                sMap.set(c, sMap.get(c) + 1)
            } else {
                sMap.set(c, 1);
            }
        }

        for (const c of t.split('')) {
            if (!sMap.has(c)) {
                return false;
            } else {
                if (sMap.get(c) === 0) {
                    return false;
                } else {
                    sMap.set(c, sMap.get(c) - 1)
                }
            }
        }

        return true;
    }
}
