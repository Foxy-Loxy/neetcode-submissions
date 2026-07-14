class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        for (const c of s) {
            if (["(", "[", "{"].includes(c)) {
                stack.push(c);
            } else {
                const verify = stack.pop();

                let match = false;

                switch (verify) {
                    case "(":
                        match = c === ')';
                        break;
                    case "{":
                        match = c === '}';
                        break;
                    case "[":
                        match = c === ']';
                        break;
                }

                if (!match) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
