export function mergeSortAnimations(array){
    const animations = [];
    if(array.length <= 1) return array;
    const auxillaryArray = array.slice();
    const temp = array.slice();
    mergeSort(temp, auxillaryArray, 0, array.length - 1, animations)
    return animations;
}

function mergeSort(array, auxillaryArray, startIndex, endIndex, animations){
    if (startIndex == endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSort(auxillaryArray, array, startIndex, middleIndex, animations);
    mergeSort(auxillaryArray, array, middleIndex + 1, endIndex, animations);
    doMerge(array, startIndex,middleIndex, endIndex, auxillaryArray, animations);
}

function doMerge(mainArray, startIndex, middleIndex, endIndex, auxillaryArray, animations){
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;
    while(i <= middleIndex && j <= endIndex){
        //change the color
        animations.push(["Comparision1",i,j]);
        //revert back the color
        animations.push(["Comparision2",i,j]);
        if(auxillaryArray[i] <= auxillaryArray[j]){
            animations.push(["Reorder", k, auxillaryArray[i]]);
            mainArray[k++] = auxillaryArray[i++];
        }else{
            animations.push(["Reorder", k, auxillaryArray[j]]);
            mainArray[k++] = auxillaryArray[j++];
        }
    }
    while(i <= middleIndex){
        //change the color
        animations.push(["Comparision1" ,i, i]);
        //revert the color
        animations.push(["Comparision2", i, i]);

        animations.push(["Reorder" ,k, auxillaryArray[i]]);
        mainArray[k++] = auxillaryArray[i++];
    }

    while(j <= endIndex){
        //change the color
        animations.push(["Comparision1", j, j]);
        //revert the color
        animations.push(["Comparision2",j, j]);
        animations.push(["Reorder" ,k, auxillaryArray[j]]);
        mainArray[k++] = auxillaryArray[j++];
    }
}