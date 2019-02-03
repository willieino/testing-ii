import React, { Component } from 'react';
//import '../App.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

     
    }

    render() {

        return (
            <div className="dashboard">
            <div className="ball-button-container">
              <button data-testid="ballcounter" className="ball-button" onClick={this.props.ballCounter}>Balls</button>
            </div>
            <div className="strikes-button-container">
              <button data-testid="strikecounter" className="strikes-button" onClick={this.props.strikeCounter}>Strikes</button>
            </div>
            <div className="outs-button-container">
              <button className="outs-button" onClick={this.props.outCounter}>Outs</button>
            </div>
            <div className="fouls-button-container">
              <button data-testid="foulcounter" className="fouls-button" onClick={this.props.foulCounter}>Fouls</button>
            </div>
            <div className="hits-button-container">
              <button data-testid="hitcounter" className="hits-button" onClick={this.props.hitCounter}>Hits</button>
            </div>
          </div>
        
        );
    }
}

export default Dashboard;