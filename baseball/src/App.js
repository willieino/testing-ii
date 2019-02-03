import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balls: 0,
      strikes: 0,
      outs: 0,
      fouls: 0,
      hits: 0,
      singles: 0,
      doubles: 0,
      triples: 0,
      hr: 0,
      inning: 0,
      home: 0,
      visitor: 0
    }
  }

  ballCounter = () => {
    let balls = this.state.balls;
    if (balls < 3) {
      balls = balls + 1;
      this.setState(() => ({ balls: balls }));
    } else {
      balls = 0;
      let strikes = 0;
      let hits = 0;
      let fouls = 0;
      //let hits = 0
      //let fouls = 0
      this.setState(() => ({
        balls: balls,
        strikes: strikes,
        hits: hits,
        fouls: fouls
      }));
    }

  }

  strikeCounter = () => {
    let strikes = this.state.strikes;
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
        let fouls = 0;
        this.setState(() => ({
          balls: balls,
          strikes: strikes,
          outs: outs,
          fouls: fouls
        }));
      } else {
        outs = 0;
        strikes = 0;
        balls = 0;
        let fouls = 0;
        this.setState(() => ({
          balls: balls,
          strikes: strikes,
          outs: outs,
          fouls: fouls
        }));
      }
    }
  }

  foulCounter = () => {
    let fouls = this.state.fouls;
    let strikes = this.state.strikes;
    if (strikes < 2) {
      fouls = fouls + 1;
      strikes = strikes + 1;
      this.setState(() => ({ fouls: fouls, strikes: strikes })); 
    } else {
      let outs = this.state.outs;
      let balls = this.state.balls;
      if (outs < 2) {
        outs = outs + 1;
        strikes = 0;
        balls = 0
        fouls = 0;
        this.setState(() => ({
          balls: balls,
          strikes: strikes,
          outs: outs,
          fouls: fouls
        }));
      } else {
        outs = 0;
        strikes = 0;
        balls = 0;
       fouls = 0;
        this.setState(() => ({
          balls: balls,
          strikes: strikes,
          outs: outs,
          fouls: fouls
        }));
   
      }
    }
  }

  hitCounter = () => {
    let strikes = 0;
    let hits = 0;
    let fouls = 0;
    let balls = 0;
    this.setState(() => ({
      balls: balls,
      strikes: strikes,
      hits: hits,
      fouls: fouls
    }));
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
            <div className="fouls-container">
              <div className="fouls" data-testid="fouls">{this.state.fouls}</div>
              <div className="fouls-text">Fouls</div>
            </div>
            <div className="hits-container">
              <div className="hits" data-testid="hits">{this.state.hits}</div>
              <div className="hits-text">Hits</div>
            </div>
            <div className="singles-container">
              <div className="singles" data-testid="singles">{this.state.singles}</div>
              <div className="singles-text">Singles</div>
            </div>
            <div className="doubles-container">
              <div className="doubles" data-testid="doubles">{this.state.doubles}</div>
              <div className="doubles-text">Doubles</div>
            </div>
            <div className="triples-container">
              <div className="triples" data-testid="triples">{this.state.triples}</div>
              <div className="triples-text">Triples</div>
            </div>
            <div className="hr-container">
              <div className="hr" data-testid="hr">{this.state.hr}</div>
              <div className="hr-text">HR</div>
            </div>
            <div className="inning-container">
              <div className="inning" data-testid="inning">{this.state.inning}</div>
              <div className="inning-text">Inning</div>
            </div>
            <div className="home-container">
              <div className="home" data-testid="home">{this.state.home}</div>
              <div className="home-text">Home</div>
            </div>
            <div className="visitor-container">
              <div className="visitor" data-testid="visitor">{this.state.visitor}</div>
              <div className="visitor-text">Visitor</div>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard">
            <div className="ball-button-container">
              <button data-testid="ballcounter" className="ball-button" onClick={this.ballCounter}>Balls</button>
            </div>
            <div className="strikes-button-container">
              <button data-testid="strikecounter" className="strikes-button" onClick={this.strikeCounter}>Strikes</button>
            </div>
            <div className="outs-button-container">
              <button className="outs-button" onClick={this.outCounter}>Outs</button>
            </div>
            <div className="fouls-button-container">
              <button data-testid="foulcounter" className="fouls-button" onClick={this.foulCounter}>Fouls</button>
            </div>
            <div className="hits-button-container">
              <button data-testid="hitcounter" className="hits-button" onClick={this.hitCounter}>Hits</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;

