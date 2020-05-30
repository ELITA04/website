export function SelectionSortTest(array){
    var arr = SelectionSort(array);
    return arr;
}

function SelectionSort(array){
    for(let i = 0; i < array.length; i++){
        let min = i;
        for(let j = i + 1; j < array.length; j++){
            if (array[j] < array[min]){
                min = j
            }
        }
        if(min != i){
            swap(array, min, i);
        }
    }
    //console.log("Test selection sort: ", array);
    return array;
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}