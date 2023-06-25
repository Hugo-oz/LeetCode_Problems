/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let queue = [],
        oranges = 0,
        time = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[row].length; column++) {
            if (grid[row][column] === 1) oranges += 1;
            else if (grid[row][column] === 2) queue.push([row, column, 0]);
        }
    }

    const dirs = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    const endRow = grid.length - 1,
    	endColumn = grid[0].length - 1;

    while (queue.length && oranges) {
        const [actualRow, actualColumn, minutes] = queue.shift();

        if (grid[actualRow][actualColumn] === 1) {
            grid[actualRow][actualColumn] = 2;
            oranges--;
            time = minutes;
        }

        for (let [addRow, addColumn] of dirs) {
            let [newRow, newColumn] = [
                actualRow + addRow,
                actualColumn + addColumn,
            ];
            if (
                newRow < 0 ||
                newRow > endRow ||
                newColumn < 0 ||
                newColumn > endColumn
            )
                continue;
            if (grid[newRow][newColumn] === 1) {
                queue.push([newRow, newColumn, minutes + 1]);
            }
        }
    }
	return oranges ? -1 : time;
};