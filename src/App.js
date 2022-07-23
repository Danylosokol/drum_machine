import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedBtn: "",
      audioData: "",
      power: true,
      volume: 50,
      bank: 1,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleBank = this.handleBank.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey, false);
  }

  handlePower(event) {
    this.setState({
      audioData: "",
      power: event.target.checked,
    });

    if (event.target.checked === false) {
      let audio = document.querySelectorAll("audio");
      audio.forEach(audio => audio.pause());
    }
  }

  handleVolume(event) {
    if (this.state.power) {
      this.setState({
        volume: event.target.value,
        audioData: `Volume: ${event.target.value}`,
      });
      let audio = document.querySelectorAll("audio");
      audio.forEach((audio) => audio.volume = event.target.value / 100);
    }
  }

  handleBank(event) {
    this.setState({
      bank: event.target.checked ? 2 : 1,
      audioData: `Audio bank: ${event.target.checked ? 2 : 1}`,
    });
  }

  handleKey(event) {
    const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    if(keys.includes(event.key.toUpperCase())){
      const id = document.getElementById(event.key.toUpperCase()).parentElement
        .id;
      this.updateState(id);
      if (this.state.power) {
        const audio = document.getElementById(event.key.toUpperCase());
        this.playSound(audio);
      }
    }
  }

  handleClick(event) {
    this.updateState(event.target.id);
    if (this.state.power) {
      const audio = event.target.querySelector("audio");
      this.playSound(audio);
    }
  }

  playSound(audio) {
    if (audio.paused) {
      audio.volume = this.state.volume / 100;
      audio.play();
    } else {
      audio.currentTime = 0;
    }
  }

  updateState(id) {
    this.setState((state) => ({
      clickedBtn: id,
      audioData: this.state.power ? id.split("-").join(" ") : "",
    }));

    setTimeout(() => {
      this.setState({
        clickedBtn: "",
      });
    }, 100);
  }

  render() {
    const folders = ["sounds1", "sounds2"];
    let folder, audioName;
    if (this.state.bank === 1) {
      folder = folders[0];
      audioName = [
        "Kick-1",
        "Kick-2",
        "Kick-3",
        "Kick-4",
        "Kick-5",
        "Kick-6",
        "Kick-7",
        "Kick-8",
        "Kick-9",
      ];
    } else {
      folder = folders[1];
      audioName = [
        "Volume-1",
        "Volume-2",
        "Volume-3",
        "Volume-4",
        "Volume-5",
        "Volume-6",
        "Volume-7",
        "Volume-8",
        "Volume-9",
      ];
    }

    return (
      <div id="drum-machine" tabIndex={0} onKeyDown={this.handleKey}>
        <div className="grid-container">
          <button
            onClick={this.handleClick}
            className={
              this.state.power && this.state.clickedBtn === audioName[0]
                ? "drum-pad clicked on"
                : this.state.clickedBtn === audioName[0]
                ? "drum-pad clicked"
                : "drum-pad off"
            }
            id={audioName[0]}
          >
            <audio
              src={`./sounds/${folder}/q.wav`}
              id="Q"
              className="clip"
            ></audio>
            Q
          </button>

          <button
            onClick={this.handleClick}
            className={
              this.state.power && this.state.clickedBtn === audioName[1]
                ? "drum-pad clicked on"
                : this.state.clickedBtn === audioName[1]
                ? "drum-pad clicked"
                : "drum-pad off"
            }
            id={audioName[1]}
          >
            <audio
              src={`./sounds/${folder}/w.wav`}
              id="W"
              className="clip"
            ></audio>
            W
          </button>

          <button
            onClick={this.handleClick}
            className={
              this.state.power && this.state.clickedBtn === audioName[2]
                ? "drum-pad clicked on"
                : this.state.clickedBtn === audioName[2]
                ? "drum-pad clicked"
                : "drum-pad off"
            }
            id={audioName[2]}
          >
            <audio
              src={`./sounds/${folder}/e.wav`}
              id="E"
              className="clip"
            ></audio>
            E
          </button>

          <button
            onClick={this.handleClick}
            className={
              this.state.power && this.state.clickedBtn === audioName[3]
                ? "drum-pad clicked on"
                : this.state.clickedBtn === audioName[3]
                ? "drum-pad clicked"
                : "drum-pad off"
            }
            id={audioName[3]}
          >
            <audio
              src={`./sounds/${folder}/a.wav`}
              id="A"
              className="clip"
            ></audio>
            A
          </button>

          <button
            onClick={this.handleClick}
            className={
              this.state.power && this.state.clickedBtn === audioName[4]
                ? "drum-pad clicked on"
                : this.state.clickedBtn === audioName[4]
                ? "drum-pad clicked"
                : "drum-pad off"
            }
            id={audioName[4]}
          >
            <audio
              src={`./sounds/${folder}/s.wav`}
              id="S"
              className="clip"
            ></audio>
            S
          </button>

          <button
            onClick={this.handleClick}
            className={
              this.state.power && this.state.clickedBtn === audioName[5]
                ? "drum-pad clicked on"
                : this.state.clickedBtn === audioName[5]
                ? "drum-pad clicked"
                : "drum-pad off"
            }
            id={audioName[5]}
          >
            <audio
              src={`./sounds/${folder}/d.wav`}
              id="D"
              className="clip"
            ></audio>
            D
          </button>

          <button
            onClick={this.handleClick}
            className={
              this.state.power && this.state.clickedBtn === audioName[6]
                ? "drum-pad clicked on"
                : this.state.clickedBtn === audioName[6]
                ? "drum-pad clicked"
                : "drum-pad off"
            }
            id={audioName[6]}
          >
            <audio
              src={`./sounds/${folder}/z.wav`}
              id="Z"
              className="clip"
            ></audio>
            Z
          </button>

          <button
            onClick={this.handleClick}
            className={
              this.state.power && this.state.clickedBtn === audioName[7]
                ? "drum-pad clicked on"
                : this.state.clickedBtn === audioName[7]
                ? "drum-pad clicked"
                : "drum-pad off"
            }
            id={audioName[7]}
          >
            <audio
              src={`./sounds/${folder}/x.wav`}
              id="X"
              className="clip"
            ></audio>
            X
          </button>

          <button
            onClick={this.handleClick}
            className={
              this.state.power && this.state.clickedBtn === audioName[8]
                ? "drum-pad clicked on"
                : this.state.clickedBtn === audioName[8]
                ? "drum-pad clicked"
                : "drum-pad off"
            }
            id={audioName[8]}
          >
            <audio
              src={`./sounds/${folder}/c.wav`}
              id="C"
              className="clip"
            ></audio>
            C
          </button>
        </div>

        <div className="controls">
          <div id="display">{this.state.audioData}</div>
          <div>
            Power
            <label className="switch">
              <input
                type="checkbox"
                checked={this.state.power}
                onChange={this.handlePower}
              ></input>
              <span className="slider"></span>
            </label>
          </div>
          <div>
            <input
              className="volume-slider"
              type="range"
              min="1"
              max="100"
              value={this.state.volume}
              onChange={this.handleVolume}
            />
          </div>
          <div>
            Bank
            <label className="switch">
              <input
                type="checkbox"
                checked={this.state.bank === 1 ? false : true}
                onChange={this.handleBank}
              ></input>
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
