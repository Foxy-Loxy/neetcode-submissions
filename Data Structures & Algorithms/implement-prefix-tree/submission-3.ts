class PrefixTree {
    private isEnd = false;

    private map = new Map<string, PrefixTree>();

    constructor() {
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        if (!word) {
            this.isEnd = true;
            return;
        }
        const c = word[0];

        const rest = word.slice(1);

        let nextTree = this.map.get(c);

        if (!nextTree) {
            nextTree = new PrefixTree();
            this.map.set(c, nextTree);
        }

        nextTree.insert(rest || '');


    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        if (!word) {
            return this.isEnd;
        }

        const c = word[0];

        const rest = word.slice(1);

        let nextTree = this.map.get(c);

        if (!nextTree) {
            return false;
        }

        return nextTree.search(rest);
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        console.log({ looking_for: prefix })

        if (!prefix) {
            return true;
        }

        const c = prefix[0];

        const rest = prefix.slice(1);

        const nextTree = this.map.get(c);

        if (!nextTree) {
            return false;
        }

        return nextTree.startsWith(rest);
    }
}