class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const sNormalized = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");

        let p1 = 0;
        let p2 = sNormalized.length - 1;

        if (sNormalized.length === 0) {
            return true;
        }

        while (true) {
            if (sNormalized[p1] !== sNormalized[p2]) {
                return false;
            }

            if (p1 === p2) {
                 break;
            }

            if (p1 === p2 -1) {
                break;
            }

            p1++;
            p2--;
        }

        return true;
    }
}
