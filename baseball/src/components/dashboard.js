import React, { Component } from 'react';
import '../App.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

     
    }

    render() {

        return (
            <div className="dashboard">
                <div className="ball-button-container">
                    <button className="ball-button" onClick={this.props.ballCounter}>Balls</button>
                </div>
                <div className="strikes-button-container">
                    <button className="strikes-button" onClick={this.props.strikeCounter}>Strikes</button>
                </div>
                <div className="outs-button-container">
                    <button className="outs-button" onClick={this.props.outCounter}>Outs</button>
                </div>
            </div>
        );
    }
}

export default Dashboard;