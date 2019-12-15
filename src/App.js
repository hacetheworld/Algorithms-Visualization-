import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.components';
import Sidebar from './components/sidebar/sidebar.components';
import Main from './components/main/main.component';
import BubbleSort from './components/algorithms/bubbleSort.component';
import MergeSort from './components/algorithms/mergeSort.component';
import QuickSortAnimation from './components/algorithms/quickSort';
import InsertionSortAnimation from './components/algorithms/insertionSort';
import SelectionSortAnimation from './components/algorithms/selection';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 100;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 15;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'blue';


// This is the main color of the array bars.
//const WIDTH_OF__BAR = '25px';


// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'orange';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: [40, 15, 170, 59, 50, 100]
    };
  }



  // Generate Bars
  generateBars = () => {
    let bars = [];
    let height;
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      height = Math.floor(Math.random() * 300 + 20);
      bars.push(height);
    }
    this.setState({ bars: bars });
    //return bars;
  }

  // Bubble Sort
  bubbleSort = () => {

    //Store all the animations in tis variable
    let animations = BubbleSort(this.state.bars);

    // Start loop here
    for (let i = 0; i < animations.length; i++) {

      // Select Bar
      const arrayBars = document.getElementsByClassName('bar');

      // console.log(animations[i]);

      // Get current bar indexes
      const [barOneIdx, barTwoIdx] = animations[i][0];
      // Add color to the current bars
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      // const color = 2 % i === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;

      // Add color to little time
      setTimeout(() => {
        barOneStyle.backgroundColor = SECONDARY_COLOR;
        barTwoStyle.backgroundColor = PRIMARY_COLOR;
      }, i * ANIMATION_SPEED_MS);

      // Check if animation actully happend
      if (animations[i][1][0].isSwap) {
        let [barOneIdx, barTwoIdx] = animations[i][0];

        // if animation happend we will swap or change current bars height by each other so it loooks like they swaped
        setTimeout(() => {
          const [newHeight1, newHeight2] = animations[i][1][0].height;
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight2}px`;
          barTwoStyle.height = `${newHeight1}px`;
          arrayBars[barOneIdx].innerHTML = `${newHeight2}`;
          arrayBars[barTwoIdx].innerHTML = `${newHeight1}`;
        }, i * ANIMATION_SPEED_MS);
      }

    }


  }

  // Insertion Sort


  insertionSort = () => {
    const animations = InsertionSortAnimation(this.state.bars);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');
      const [barOneIdx, barTwoIdx] = animations[i][0];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      // const color = 2 % i === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = SECONDARY_COLOR;
        barTwoStyle.backgroundColor = PRIMARY_COLOR;
      }, i * ANIMATION_SPEED_MS);


      if (animations[i][1][0].isSwap) {
        let [barOneIdx, barTwoIdx] = animations[i][0];

        setTimeout(() => {
          const [newHeight1, newHeight2] = animations[i][1][0].height;
          // console.log(newHeight1, newHeight2);

          // Change Style Of Both current Bars
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight2}px`;
          let lastHeight = parseInt(arrayBars[barTwoIdx].innerHTML);
          barTwoStyle.height = (animations[i][1][0].islastSwap) ? (`${lastHeight}px`) : (`${newHeight1}px`);

          arrayBars[barOneIdx].innerHTML = `${newHeight2}`;
          arrayBars[barTwoIdx].innerHTML = (animations[i][1][0].islastSwap) ? (`${lastHeight}`) : (`${newHeight1}`);
        }, i * ANIMATION_SPEED_MS);
      }

    }


  }


  // Selection Sort

  selectionSort = () => {
    const animations = SelectionSortAnimation(this.state.bars);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');

      // console.log(animations[i]);

      const [barOneIdx, barTwoIdx] = animations[i][0];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      // const color = 2 % i === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = SECONDARY_COLOR;
        barTwoStyle.backgroundColor = PRIMARY_COLOR;
      }, i * ANIMATION_SPEED_MS);


      if (animations[i][1][0].isSwap) {


        setTimeout(() => {
          const [newHeight1, newHeight2] = animations[i][1][0].height;
          let [barOneIdx, barTwoIdx] = animations[i][0];

          // Change Style Of Both current Bars

          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;


          barOneStyle.height = `${newHeight2}px`;
          barTwoStyle.height = `${newHeight1}px`;

          // Change text Of Both current Bars
          arrayBars[barOneIdx].innerHTML = `${newHeight2}`;
          arrayBars[barTwoIdx].innerHTML = `${newHeight1}`;
        }, i * ANIMATION_SPEED_MS);
      }

    }



  }


  // mergeSort

  mergeSort = () => {

    const animations = MergeSort(this.state.bars);

    for (let i = 0; i < animations.length; i++) {

      //  Select  Bar from ui

      const arrayBars = document.getElementsByClassName('bar');
      const isColorChange = i % 3 !== 2;

      // Change Style Of Both current Bars
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;

          // Change Style  current Bars

          barOneStyle.height = `${newHeight}px`;
          arrayBars[barOneIdx].innerHTML = `${newHeight}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }

  }



  // Quick Sort

  quickSort = () => {

    const animations = QuickSortAnimation(this.state.bars);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');

      const [barOneIdx, barTwoIdx] = animations[i][0];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;

      // Change Style Of Both current Bars


      // const color = 2 % i === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = SECONDARY_COLOR;
        barTwoStyle.backgroundColor = PRIMARY_COLOR;
      }, i * ANIMATION_SPEED_MS);


      if (animations[i][1][0].isSwap) {
        let [barOneIdx, barTwoIdx] = animations[i][0];

        setTimeout(() => {
          const [newHeight1, newHeight2] = animations[i][1][0].height;
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;


          // Change Style Of Both current Bars


          barOneStyle.height = `${newHeight2}px`;
          barTwoStyle.height = `${newHeight1}px`;


          // Change text Of Both current Bars

          arrayBars[barOneIdx].innerHTML = `${newHeight2}`;
          arrayBars[barTwoIdx].innerHTML = `${newHeight1}`;
        }, i * ANIMATION_SPEED_MS);
      }

    }


  }



  render() {
    return (
      <div className="App">
        <Header
          generateBars={this.generateBars}
          mergeSort={this.mergeSort}
          bubbleSort={this.bubbleSort}
          quickSort={this.quickSort}
          insertionSort={this.insertionSort}
          selectionSort={this.selectionSort}

        />
        <Sidebar />
        <Main generateBars={this.state.bars} color={PRIMARY_COLOR} />
      </div>
    );
  }
}

export default App;






