export function BubbleSortTest(array){

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if (array[j] > array[j + 1]){
                swap(array, j, j+1);
            }
        }
    }
    return array;
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}