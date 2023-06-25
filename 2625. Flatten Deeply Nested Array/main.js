/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    var arrFinder = false;
    var flatedArr = [];
    if(n == 0){
        return arr;
    }
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            for(var j = 0; j < arr[i].length; j++){
                flatedArr.push(arr[i][j]);
            }
            arrFinder = true;
            arr[i] = 0;
        }
        else{
            flatedArr.push(arr[i]);
        }
    }
    if(arrFinder){
        arr = 0;
        return flat(flatedArr, n-1);
    }
    return flatedArr;
};