
function analyzeArray(arr){

    const average = (arr) => {
        let collection = 0;
        for(let i = 0 ; i < arr.length ; i++){
            collection += arr[i];
        }
        let result = Number(Math.floor((collection / arr.length) + 'e1') + 'e-1');
        return result;
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return{
        average : average(arr),
        min : min,
        max : max,
        length : length
    }
}

export default analyzeArray;