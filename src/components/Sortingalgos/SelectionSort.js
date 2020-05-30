export function selectionSortAnimations(array){
    let aux_array = array.slice();
    let animations = selectionSort(aux_array);

    return animations;
}

function selectionSort(aux_array){
    let animations = [];

    for(let i = 0; i < aux_array.length; i++){
        let minIdx = i;
        for(let j = i+1; j < aux_array.length; j++){
            animations.push(["Comparision1", j, minIdx]);
            animations.push(["Comparision2", j, minIdx]);
            if(aux_array[j] < aux_array[minIdx]){
                minIdx = j;
            }
        }
        if(minIdx != i){
            animations.push(["Swap", i, aux_array[minIdx]]);
            animations.push(["Swap", minIdx, aux_array[i]]);
            swap(aux_array, minIdx, i);
        }
    }
    return animations;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}