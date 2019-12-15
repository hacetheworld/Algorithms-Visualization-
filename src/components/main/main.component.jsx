import React, { Component } from 'react';
import './main.styles.css'
export default class Main extends Component {



    render() {
        let bars = this.props.generateBars;
        let color = this.props.color;

        return (
            <main className='main'>
                <div className='bar-container'>
                    {
                        bars.map((bar, i) =>
                            (
                                <div
                                    key={i}
                                    className='bar'
                                    style={{
                                        backgroundColor: color,
                                        height: bar
                                    }}>{bar}</div>

                            )
                        )
                    }

                </div>
            </main>
        );
    }
}
