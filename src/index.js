// You should implement your task here.

module.exports = function towelSort(matrix) {

    let result = []

    if(matrix === undefined || matrix.length === 0) {
        return []
    }
    matrix.forEach((arr,index) => {
        if(index % 2 !== 0){
            arr.reverse()
        }
        result = result.concat(arr)
    })

    return result;
}
