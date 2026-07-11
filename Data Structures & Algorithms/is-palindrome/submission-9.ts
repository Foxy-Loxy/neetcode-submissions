const ALPHANUM_REGEX = /[a-zA-Z0-9]/;

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let p1 = 0;
        let p2 = s.length - 1;

        while (p1 < p2) {
            while (!this.isAlphanumeric(s[p1])) {
                p1++;
            }

            while (!this.isAlphanumeric(s[p2])) {
                p2--;
            }

            
            if (p2 < 0) {
                return true;
            }

            if (s[p1].toLowerCase() !== s[p2].toLowerCase()) {
                return false;
            }

            p1++;
            p2--;
        }

        return true;
    }

    isAlphanumeric(char: string): boolean {
        return ALPHANUM_REGEX.test(char);
    }
}
