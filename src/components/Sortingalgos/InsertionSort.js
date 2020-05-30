export function insertionSortAnimations(array){
    var aux_array = array.slice();
    var animations = insertionSort(aux_array);
    return animations;
}

function insertionSort(aux_array){
    var animations = []
    
    for(let i = 1; i < aux_array.length; i++){
        var val = aux_array[i];
        let j = i - 1;
        
        animations.push(["Comparision1", i, j]);
        animations.push(["Comparision2", i, j]);
        while((j >= 0) && (aux_array[j] > val)){
            animations.push(["Reorder", j+1, aux_array[j]]);
            aux_array[j + 1] = aux_array[j];
            j = j - 1;
            if(j >= 0){
                animations.push(["Comparision1", i, j]);
                animations.push(["Comparision2", i, j]);
            }
            
        }
        animations.push(["Reorder", j+1, val]);
        aux_array[j+1] = val;
    }
    return animations;
}