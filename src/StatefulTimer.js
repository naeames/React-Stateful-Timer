import React from "react";

import './App.css'

export default class StatefulTimer extends React.Component {
  
  state = {
    time: 0,
    play: true
  };

  
  startTimer = () => {
    this.myInterval = setInterval(() => {
      this.setState({
        play: false,
        time: this.state.time + 1
      });
    }, 1000);
  };

 
  pauseTimer = () => {
    this.myInterval = clearInterval(this.myInterval);
    this.setState({ play: true });
  };


  resetTimer = () => {
    this.setState({ time: 0, play: true });
    clearInterval(this.myInterval);
  };

  render() {

  
  let hours = String(parseInt(this.state.time / 3600)).padStart(2, "0");
  let minutes = String(parseInt((this.state.time % 3600) / 60)).padStart(2,"0");
  let seconds = String(parseInt(this.state.time % 60)).padStart(2, "0");

  return(
    <div className="container">
        {hours}:{minutes}:{seconds}
        <div>
          {this.state.play ? (
          <button className="play btn" onClick={() => this.startTimer()}/>):(<button className="pause btn" onClick={() => this.pauseTimer()}/>)}  
          <button className="reset btn" aria-hidden="true" onClick={() => this.resetTimer()} />
        
        </div>
    </div>
    );
  }
}