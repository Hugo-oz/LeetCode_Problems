/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    var matrix = Array.from(Array(rowsCount), () => new Array(colsCount));
    var index = 0, rev = false
    if(rowsCount * colsCount !== this.length){
        return[];
    } 
    for (var i = 0; i < colsCount; i++){
        if (rev){
            for(var j = rowsCount; j > 0; j--){
                matrix[j-1][i] = this[index++]
                rev = false;
            }
        }
        else{
            for(var j = 0; j < rowsCount; j++){
                matrix[j][i] = this[index++]
            }
            rev = true;
        }
    }
    return matrix;
}