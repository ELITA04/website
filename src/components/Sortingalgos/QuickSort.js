export function quickSortAnimations(array){
    var aux_arr = array.slice();
    var animations = []
    QuickSort(aux_arr,0, aux_arr.length - 1, animations);
    for(let i = 0; i < animations.length;i++){
        console.log(animations[i]);
    }
    return animations;
}

function QuickSort(aux_arr, low, high, animations){
    if(low < high){
        let part = partition(aux_arr, low, high, animations);
        QuickSort(aux_arr, low, part - 1, animations);
        QuickSort(aux_arr, part+1, high, animations);
    }
}

function partition(aux_arr, low, high, animations){
    let pivot = aux_arr[high];
    let pivotIndex = low;

    for(let i = low; i< high; i++){
        animations.push(["Comparision1", i, pivotIndex]);
        animations.push(["Comparision2", i, pivotIndex]);
        if(aux_arr[i] <= pivot){
            animations.push(["Swap", i , aux_arr[pivotIndex]]);
            animations.push(["Swap", pivotIndex, aux_arr[i]]);
            swap(aux_arr, i, pivotIndex);
            pivotIndex = pivotIndex + 1;
        }
    }
    animations.push(["Swap", pivotIndex, aux_arr[high]]);
    animations.push(['Swap', high, aux_arr[pivotIndex]]);
    swap(aux_arr, pivotIndex, high);
    return pivotIndex;
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}