import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balls: 0,
      strikes: 0,
      outs: 0
    }
  }

  ballCounter = () => {
    let balls = this.state.balls;
    if (balls < 3) {
      balls = balls + 1;
      this.setState(() => ({ balls: balls }));
    } else {
      balls = 0;
      let strikes = 0
      this.setState(() => ({ balls: balls, strikes: strikes }));
    }

  }

  strikeCounter = () => {
    let strikes = this.state.strikes;
    console.log("strikes:", strikes);
    if (strikes < 2) {
      strikes = strikes + 1;
      this.setState(() => ({ strikes: strikes }));
    } else {
      let outs = this.state.outs;
     let balls = this.state.balls;
      if (outs < 2) {
        outs = outs + 1;
        strikes = 0;
        balls = 0
        this.setState(() => ({ balls: balls, strikes: strikes, outs: outs }));
      } else {
        outs = 0;
        strikes = 0;
        balls = 0;
        this.setState(() => ({ balls: balls, strikes: strikes, outs: outs }));
      }
    }
}

outCounter = () => {

}


render() {
  return (
    <div className="App">
      <header className="App-header">Testing II - Baseball
          </header>
      <div className="display-container">
      <div className="display">
                <div className="ball-container">
                    <div className="balls" data-testid="balls">{this.state.balls}</div>
                    <div className="balls-text">Balls</div>
                </div>
                <div className="strikes-container">
                    <div className="strikes" data-testid="strikes">{this.state.strikes}</div>
                    <div className="strikes-text">Strikes</div>
                </div>
                <div className="outs-container">
                    <div className="outs">{this.state.outs}</div>
                    <div className="outs-text">Outs</div>
                </div>
            </div>
      </div>
      <div className="dashboard-container">
      <div className="dashboard">
                <div className="ball-button-container">
                    <button data-testid="ballcounter" className="ball-button" onClick={this.ballCounter}>Balls</button>
                </div>
                <div className="strikes-button-container">
                    <button  data-testid="strikecounter" className="strikes-button" onClick={this.strikeCounter}>Strikes</button>
                </div>
                <div className="outs-button-container">
                    <button className="outs-button" onClick={this.outCounter}>Outs</button>
                </div>
            </div> 
      </div>
    </div>
  );
}
};

export default App;

