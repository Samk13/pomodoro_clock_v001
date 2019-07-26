import React from "react";
import SetTimer from "./SetTimer";
import Timer from "./Timer";
import moment from "moment";
import Controls from "./Controls";


//---------------------------------------------------------------------------------------------------------------------

export default class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakValue: 5,
      sessionValue: 25,
      mode: "session",
      time: 25 * 60 * 1000,
      active: false,
      touched: false
    };
  }


// set the increment and decrement buttons for both session and break -----------------------------------------------
  handleSetTimers = (inc, type) => {
    if (this.state[type] === 60 && inc) return;
    if (this.state[type] === 1 && !inc) return;
    this.setState({ [type]: this.state[type] + (inc ? 1 : -1) });
  };
// reset button Logic -----------------------------------------------------reset button Logic-
  handleReset = () => {
    this.setState({
      breakValue: 5,
      sessionValue: 25,
      time: 25 * 60 * 1000,
      touched: false,
      active: false
    });
    this.setState({
        active: false
      });
    //--------------------------------------------------clearInterval
    clearInterval(this.Pomodoro);
    this.audio.pause()
    this.audio.currentTime = 0


  };


  // transition from session to break and viceversa ----------------------------Transiton

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time === 0 && prevState.mode === "session") {
      this.setState({
        time: this.state.breakValue * 60 * 1000,
        mode: "break"
      });
      this.audio.play()
    }
    if (prevState.time === 0 && prevState.mode === 'break') {
        this.setState({
            time : this.state.sessionValue *60 *1000,
            mode: 'session'
            
        })

    this.audio.play()
    }
  }

  // pla pause button logic -------------------------------------------------logic -
  handlePlayPause = () => {
    if (this.state.active) {
      clearInterval(this.Pomodoro);


      this.setState({ active: false });
    } else {
      if (this.state.touched) {
        this.Pomodoro = setInterval(
          () =>
            this.setState({
              time: this.state.time - 1000
            }),
          1000
        );
        this.setState({ active: true });
      } else {
        this.setState(
          {
            time: this.state.sessionValue * 60 * 1000,
            touched: true,
            active: true
          },
          () =>
            (this.Pomodoro = setInterval(
              () =>
                this.setState({
                  time: this.state.time - 1000
                }),
              1000
            ))
        );
      }
    }
  };


  // --------------------------------------------------------------------Render |||||||---
  render() {
    return (

      <div className="container-controls">

        
        {/*------------------------------------------------------Timer -- */}
        <Timer
          
          mode={this.state.mode}
          time={moment(this.state.time).format("mm.ss")}
          id="time-left"
        />
        <div className="settings">
         {/*-------------------------------------------------------Break- */}
          <SetTimer
            type="break"
            value={this.state.breakValue + ' Minutes'}
            handleClick={this.handleSetTimers}
          />
          {/*---------------------------------------------------Session-- */}
          <SetTimer
            type="session"
            value={this.state.sessionValue + ' Minutes'}
            handleClick={this.handleSetTimers}
          />
        </div>
        {/*----------------------------------------------------Controls-- */}
        <Controls
          active={this.state.active}
          handleReset={this.handleReset}
          hanlePlayPause={this.handlePlayPause}
        />
        {/*-------------------------------------------------------Audio-- */}

        <audio 
        id='beep'
        src='http://soundbible.com/grab.php?id=1598&type=mp3'
        ref={el => this.audio = el}
        >

        </audio>


      </div>
    );
  }
}
