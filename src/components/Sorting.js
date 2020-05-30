import React from 'react';
import { NUMBER_OF_BARS, SECONDARY_COLOR, PRIMARY_COLOR, ANIMATION_TIME } from '../config';
// Test functions for each code
import { MergeSortTest } from './Tests/MergeSortTest'; 
import { BubbleSortTest } from './Tests/BubbleSortTest';
import { SelectionSortTest } from './Tests/SelectionSortTest';
import { InsertionSortTest } from './Tests/InsertionSortTest';
import { QuickSortTest } from './Tests/QuickSortTest';

// Functions that return the animations array
import { mergeSortAnimations } from './Sortingalgos/MergeSort';
import { bubbleSortAnimations } from './Sortingalgos/BubbleSort'
import { selectionSortAnimations } from './Sortingalgos/SelectionSort';
import { insertionSortAnimations } from './Sortingalgos/InsertionSort';
import { quickSortAnimations } from './Sortingalgos/QuickSort';
 
export default class Sorting extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array : [],
            isPaused : false,
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        
        const array = [];
        for(let i=0; i < NUMBER_OF_BARS; i++){
            array.push(randomInteger(25, 500));
        }
        this.setState({array});
    }

    

    TestingSort(){
        //Function used to test any algo
        for(let i = 0; i < 50; i++){
            let array = [];
            let length = randomInteger(1, 1000);
            for(let i = 0; i < length; i++){
                array.push(randomInteger(1, 500));
            }
            //just change this to given algo
            const quickSort = QuickSortTest(array);
            const javaScriptSort = array.slice().sort((a, b) => a - b);
            
        }
    }


    SortingAlgo(algo_number){
        const javaScriptSort = this.state.array.slice().sort((a, b) => a - b);
        if (arrayEqual(javaScriptSort, this.state.array)){
            alert("Array already sorted. Please generate new array");
        }else{
            this.setState({isPaused : true, array : this.state.array});
       var animations = [];
        if(algo_number === 1){
            //call bubble sort
            animations = bubbleSortAnimations(this.state.array);
        }else if(algo_number === 2){
            //call insertion sort
            animations  = insertionSortAnimations(this.state.array);
        }else if(algo_number === 3){
            //call selection sort
            animations  = selectionSortAnimations(this.state.array);
        }else if(algo_number === 4){
            //call quicksort
            animations  = quickSortAnimations(this.state.array);
        }else if(algo_number === 5){
            //call merge sort
            animations = mergeSortAnimations(this.state.array);
        }

    for(let i = 0; i < animations.length; i++){
        
        const arrayBars = document.getElementsByClassName('array-bar');
        const currentAnimation = animations[i];
        const isColor = (currentAnimation[0] == "Comparision1") || (currentAnimation[0] == "Comparision2");
        
        if (isColor){
            const[tag, barIdxOne, barIdxTwo] = currentAnimation;
            const color = (tag === "Comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                const barIdxOneStyle = arrayBars[barIdxOne].style;
                const barIdxTwoStyle = arrayBars[barIdxTwo].style;
                barIdxOneStyle.backgroundColor = color;
                barIdxTwoStyle.backgroundColor = color;
            }, i * 2 * ANIMATION_TIME);
        }else{
            setTimeout(() => {
                const[tag, barIdxOne,newHeight] = currentAnimation;
                const barIdxOneStyle = arrayBars[barIdxOne].style;
                barIdxOneStyle.height = `${newHeight}px`;
                
            }, i * 2 * ANIMATION_TIME);
        }
        if(i === animations.length - 1){
            setTimeout(() =>{
                this.setState({isPaused : false});
                var array = this.state.array.slice();
                this.setState({array : array.sort((a, b) => a - b)})
            }, i * 2 * ANIMATION_TIME);
        }
        }
        }    
    }

    render() {
        const {array, isPaused} = this.state;
        if (isPaused){
            return (
                <div>
                <h1>Sorting Algorithms Visualizer</h1>
                <div className="array-container">
                {array.map((value, index) => (
                    <div className="array-bar" key={index} style={{backgroundColor : PRIMARY_COLOR, height : `${value}px`}}></div>
                ))}
                </div>
                </div>
            )
        }else{
            return(
                <div >
            <h1>Sorting Algorithms Visualizer</h1>
            <div className="Button-design">
            <button id = "1" className = "Button" onClick={() => this.resetArray()}> Generate New Array</button>
            <button id = "2" className = "Button" onClick={() => this.SortingAlgo(5)}>Merge Sort</button>
            <button id = "3" className = "Button" onClick={() => this.SortingAlgo(1)}>Bubble Sort</button>
            <button id = "4" className = "Button" onClick={() => this.SortingAlgo(3)}>Selection Sort</button> 
            <button id = "5" className = "Button" onClick={() => this.SortingAlgo(2)}>Insertion Sort</button>    
            <button id = "6"  className = "Button" onClick={() => this.SortingAlgo(4)}>Quick Sort</button>         
            </div>
            
            <div className="array-container">
                {array.map((value, index) => (
                    <div className="array-bar" key={index} style={{backgroundColor : PRIMARY_COLOR, height : `${value}px`}}></div>
                ))}
            </div>
            </div>

            )
        }
            
    }
}


function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayEqual(arr1, arr2){
    if (arr1.length != arr2.length) return false;
    for(let i = 0; i < arr1.length; i ++){
        if (arr1[i] != arr2[i]){
            return false;
        }
    }
    return true;
}