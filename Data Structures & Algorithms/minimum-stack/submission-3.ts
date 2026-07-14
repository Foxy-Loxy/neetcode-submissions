type StackEntry = {
    val: number;
    min_before: number;
};

class MinStack {
    private stack: StackEntry[] = [];

    private min = Infinity;

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push({
            val,
            min_before: this.min,
        });

        this.min = this.min > val ? val : this.min;
    }

    /**
     * @return {void}
     */
    pop(): void {
        const val = this.stack.pop();

        this.min = val.min_before;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1].val;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
