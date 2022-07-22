import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey, false);
  }

  handleKey(event) {
    const audio = document.getElementById(event.key.toUpperCase());
    console.log(audio);
    if(audio.paused){
      console.log("paused");
      audio.play();
    }else{
      audio.currentTime = 0;
    }
  }

  handleClick(event) {
    this.setState({
      clicked: true
    });

    setTimeout(() => {
      this.setState({
        clicked: false
      })
    }, 250);

    const audio = event.target.querySelector("audio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.state.clicked ? 'drum-pad clicked' : 'drum-pad'} id="Kick-1">
        <audio src="./sounds1/z.wav" id="Q" className="clip"></audio>Q
      </button>
    );
  }
}

export default DrumPad;