import React, { Component } from 'react';
import '../App.css';

class Display extends Component {
    constructor(props) {
        super(props);

       /*  this.state = {
            balls: 0,
            strikes: 0,
            outs: 0
        } */
    }

    render() {
    
        return (
            <div className="display">
                <div className="ball-container">
                    <div className="balls" data-testid="balls">{this.props.balls}</div>
                    <div className="balls-text">Balls</div>
                </div>
                <div className="strikes-container">
                    <div className="strikes">{this.props.strikes}</div>
                    <div className="strikes-text">Strikes</div>
                </div>
                <div className="outs-container">
                    <div className="outs">{this.props.outs}</div>
                    <div className="outs-text">Outs</div>
                </div>
            </div>
        );
    }
}

export default Display;