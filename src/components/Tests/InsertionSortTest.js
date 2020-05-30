export function InsertionSortTest(array){

    for(let i = 1; i < array.length; i++){
        let j = i - 1;
        let val = array[i];
        while((j >= 0) && (array[j] > val)){
            array[j+1] = array[j];
            j = j - 1;
        }
        array[j+1] = val;
    }
    //console.log("Test function : ", array)
    return array;
}