
export function MergeSortTest(array){
    var arr = MergeSort(array);
    //console.log('Merge Sort test : ',arr)
    return arr;
}

function MergeSort(array){
    if (array.length <= 1) return array;
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return Merge(
        MergeSort(left), MergeSort(right)
    );
    
}

function Merge(left, right){
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            resultArray.push(left[leftIndex]);
            leftIndex++;
        }else{
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}