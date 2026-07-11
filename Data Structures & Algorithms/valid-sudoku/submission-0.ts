class Solution {
    isGroupValid(group: string[]): boolean {
        const groupSet = new Set<string>();

        for (const num of group) {
            // Skip empty
            if (num === ".") {
                continue;
            }

            if (groupSet.has(num)) {
                return false;
            }

            groupSet.add(num);
        }

        return true;
    }

    validateRows(board: string[][]): boolean {
        for (const row of board) {
            if (!this.isGroupValid(row)) {
                return false;
            }
        }

        return true;
    }

    validateColumns(board: string[][]): boolean {
        for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
            const columnGroup: string[] = [];

            for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
                columnGroup.push(board[rowIndex][columnIndex]);
            }

            if (!this.isGroupValid(columnGroup)) {
                return false;
            }
        }

        return true;
    }

    extractSquareGroup(board: string[][], xOffset: number, yOffset: number) {
        return [
            board[yOffset][xOffset],
            board[yOffset][xOffset + 1],
            board[yOffset][xOffset + 2],
            board[yOffset + 1][xOffset],
            board[yOffset + 1][xOffset + 1],
            board[yOffset + 1][xOffset + 2],
            board[yOffset + 2][xOffset],
            board[yOffset + 2][xOffset + 1],
            board[yOffset + 2][xOffset + 2],
        ];
    }

    validateSquares(board: string[][]): boolean {
        for (let yOffset = 0; yOffset < board.length; yOffset = yOffset + 3) {
            for (let xOffset = 0; xOffset < board.length; xOffset = xOffset + 3) {
                const squareGroup = this.extractSquareGroup(board, xOffset, yOffset);

                if (!this.isGroupValid(squareGroup)) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowsValid = this.validateRows(board);

        console.log({ rowsValid});

        const columnsValid = this.validateColumns(board);

        console.log({ columnsValid });

        const squaresValid = this.validateSquares(board);

        console.log({ squaresValid });

        return rowsValid
            && columnsValid
            && squaresValid;
    }
}