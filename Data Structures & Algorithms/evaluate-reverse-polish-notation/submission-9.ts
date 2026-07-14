class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for(const token of tokens) {
            const isNumber = !Number.isNaN(+token);

            if (isNumber) {
                stack.push(+token);
            } else {
                const right = stack.pop();

                const left = stack.pop();

                console.log({ eval: `${left}${token}${right}`});

                const result = Math.trunc(eval(`(${left})${token}(${right})`))

                stack.push(result);
            }
        }

        return stack[0];
    }
}
