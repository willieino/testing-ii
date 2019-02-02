import React, { Component } from 'react';
import Display from './components/display';
import Dashboard from './components/dashboard';
import logo from './logo.svg';
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
    //if balls is less than 4 then add 1
    let balls = this.state.balls;
    console.log("balls:", balls);
    if (balls < 3) {
      balls = balls + 1;
      this.setState(() => ({ balls: balls }));
    } else {
      balls = 0;
      let strikes = 0
      this.setState(() => ({ balls: balls, strikes: strikes }));
    }


    // else set balls to 0 and strikes to 0

  }

  strikeCounter = () => {
    //if strikes is less than 2 then add 1
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

  

  // else set balls and strikes to 0 add 1 to outs
  //if outs are is less than 2 then add 1

  //else set everything to 0

}

outCounter = () => {

}


render() {
  return (
    <div className="App">
      <header className="App-header">Testing II - Baseball
          </header>
      <div className="display-container">
        <Display balls={this.state.balls} strikes={this.state.strikes} outs={this.state.outs} />
      </div>
      <div className="dashboard-container">
        <Dashboard ballCounter={this.ballCounter} strikeCounter={this.strikeCounter} outCounter={this.outCounter} />
      </div>
    </div>
  );
}
};

export default App;
