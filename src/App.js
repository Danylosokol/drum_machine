import React from 'react';
// import sound1 from "./kick1.mp3";


class App extends React.Component {
  constructor(props){
    super(props);

    

    this.play = this.play.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  handleKey(event){
    console.log("test");
    console.log(event.key);
  }

  componentWillMount: function() {
    window.addEventListener('keydown', this.handleKeyDown);
  },

  componentWillUnmount: function() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },

  play(event){
    const audio = event.target.querySelector("audio");
    audio.play();
  }

  render(){
    return (
      <div id="drum-machine" tabIndex={0} onKeyDown={this.handleKey}>
        <div class="grid-container">
          <div className="drum-pad">Q</div>
          <div onClick={this.play} className="drum-pad">
            <audio src="./kick1.mp3" crossOrigin="anonymous"></audio>W
          </div>
          <div className="drum-pad">E</div>

          <div className="drum-pad">A</div>
          <div className="drum-pad">S</div>
          <div className="drum-pad">D</div>

          <div className="drum-pad">Z</div>
          <div className="drum-pad">X</div>
          <div className="drum-pad">C</div>
        </div>
        <div>
          <div id="display"></div>
        </div>
      </div>
    );
  }
}

export default App;
