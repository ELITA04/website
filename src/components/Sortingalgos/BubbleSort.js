export function bubbleSortAnimations(array){
    let auxillaryArray = array.slice();

   const animations =  bubbleSort(auxillaryArray);
    return animations;
}

function bubbleSort(auxillaryArray){
    var animations = [];
    for(let i = 0; i < auxillaryArray.length; i++){
        for(let j = 0; j < auxillaryArray.length - i - 1; j++){
            animations.push(["Comparision1",j, j+1]);
            animations.push(["Comparision2",j , j+1]);
            if(auxillaryArray[j] > auxillaryArray[j+1]){
                animations.push(["Swap",j, auxillaryArray[j+1]]);
                animations.push(["Swap",j+1, auxillaryArray[j]]);
                swap(auxillaryArray, j, j+1);
            }
        }
    }
    return animations
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}