import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, // Whether to render the ball
      posi: 0, // Position of the ball (in pixels)
      ballPosition: { left: "0px" } // Inline style to move the ball
    };

    // Bind methods
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Start button click handler
  buttonClickHandler() {
    // Set renderBall to true and remove the start button
    this.setState({ renderBall: true });
  }

  // Method to decide whether to render the ball or the start button
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  // Bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  // Handle keydown events
  handleKeyDown(event) {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      // Move the ball 5 pixels to the right
      this.setState((prevState) => {
        const newPosition = prevState.posi + 5;
        return {
          posi: newPosition,
          ballPosition: { left: `${newPosition}px` }
        };
      });
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;

