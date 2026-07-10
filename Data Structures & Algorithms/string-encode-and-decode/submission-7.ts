const SEPARATOR = "#";

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((str) => `${str.length}${SEPARATOR}${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        console.log({ str });

        const result = [];
        let i = 0;

        while (i < str.length) {
            let separatorIndex = i;

            while (str[separatorIndex] !== SEPARATOR) {
                separatorIndex++;
            }

            const length = +str.slice(i, separatorIndex);

            const start = separatorIndex + 1;

            const end = start + length;

            console.log({ start, end });

            result.push(str.slice(start, end));

            i = end;
        }

        return result;
    }
}
