class WordDictionary {
    private isEnd = false;

    private map = new Map<string, WordDictionary>();

    constructor() {}

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        if (!word) {
            this.isEnd = true;
            return;
        }
        const c = word[0];

        const rest = word.slice(1);

        let nextTree = this.map.get(c);

        if (!nextTree) {
            nextTree = new WordDictionary();
            this.map.set(c, nextTree);
        }

        nextTree.addWord(rest || "");
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        console.log({ word })

        if (!word) {
            return this.isEnd;
        }

        const c = word[0];

        const rest = word.slice(1);

        if (c === ".") {
            console.log({ dot: `${c}${rest}`})
            const children = this.map.entries();

            const found = Array.from(children).find(([c, nextTree]) => {
                

                const res = nextTree.search(`${rest}`)

                console.log({ looking_for:`${c}${rest}`, result: res })

                return res;
            });

            console.log({ found })

            return !!found;
        } else {
        
            let nextTree = this.map.get(c);

            if (!nextTree) {
                return false;
            }

            return nextTree.search(rest);
        }
    }
}
