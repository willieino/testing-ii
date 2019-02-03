import React, { Component } from 'react';
//import '../App.css';
import Dashboard from './dashboard';


class Display extends Component {
    constructor(props) {
        super(props);

         this.state = {
            balls: 0,
            strikes: 0,
            outs: 0,
            fouls: 0,
            hits: 0
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
          <div className="test">
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
              </div>
            </div>
            <div className="dashboard-container">
            <Dashboard ballCounter={this.ballCounter} strikeCounter={this.strikeCounter} foulCounter={this.foulCounter} hitCounter={this.hitCounter}/>
             
            </div>
          </div>
        );
      }
    };

export default Display;