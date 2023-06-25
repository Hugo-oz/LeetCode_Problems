/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    for(let i = matrix.length -2; i >= 0; i--){
        for(let j = 0; j < matrix[0].length ; j++){
            if(j == 0)                       matrix[i][j] += Math.min(                  matrix[i+1][j], matrix[i+1][j+1]);
            else if(j == matrix[0].length-1) matrix[i][j] += Math.min(matrix[i+1][j-1], matrix[i+1][j]);
            else                             matrix[i][j] += Math.min(matrix[i+1][j-1], matrix[i+1][j], matrix[i+1][j+1]);
        }
    }
    return Math.min(...matrix[0]);
};