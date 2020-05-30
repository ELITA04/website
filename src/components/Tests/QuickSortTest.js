export function QuickSortTest(array){
    QuickSort(array, 0, array.length - 1);
    //console.log("Test array : ", array);
    return array;
}

function QuickSort(array, low, high){
    if(low < high){
    let part = partition(array, low, high);
    QuickSort(array, low, part - 1);
    QuickSort(array, part+1, high);
    }
}

function partition(arr, low, high){
    let pivot = arr[low];
    let i = low;
    let j = high;
    while(i < j){
        while(arr[i] <= pivot){
            i = i + 1;
        }
        while(arr[j] > pivot){
            j = j - 1;
        }
        if(i < j){
            swap(arr, i, j);
        }
    }
    swap(arr, low, j);
    return j;
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}