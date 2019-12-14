import React, { Component } from 'react'
import './header.styles.css';
export default class Header extends Component {

    render() {
        return (
            <header className='header'>
                <h1 className='logo'>Algo-Visualization</h1>
                <nav>
                    <button onClick={this.props.bubbleSort}>Bubble Sort</button>
                    <button onClick={this.props.selectionSort}>Selection Sort</button>
                    <button onClick={this.props.insertionSort}>Insertion Sort</button>
                    <button onClick={this.props.mergeSort}>Merge Sort</button>
                    <button onClick={this.props.quickSort}>Quick Sort</button>
                    <button onClick={this.props.radixSort}>Radix Sort</button>
                </nav>
                <button onClick={this.props.generateBars} className='learnMore'>Generate Bars</button>
            </header>
        )
    }
}
