import React from "react";

const DisplayMouseGreen = withMousePosition(DisplayXYGreen);
const DisplayMouseRed = withMousePosition(DisplayXYRed);

export class MouseTracker extends React.Component {
    render() {
      return (<>
        <DisplayMouseGreen/>
        <DisplayMouseRed />
      </>)
    }
  }

function withMousePosition(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }

    componentDidMount() {
      document.getElementsByTagName("body")[0].addEventListener("mousemove", this.handleMouseMove);
    }

    componentWillUnmount() {
      document.getElementsByTagName("body")[0].removeEventListener("mousemove", this.handleMouseMove);
    }
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    render() {
      return <WrappedComponent mouse={this.state}/>
    }
  }
}

function DisplayXYGreen(props) {
  return (
    <div style={{ color: 'green' }} >
      <h1>Move the mouse around!</h1>
      <p>The current mouse position is ({props.mouse.x}, {props.mouse.y})</p>
    </div>
  );
}

function DisplayXYRed(props) {
  return (
    <div style={{ color: 'red' }} >
      <h1>Move the mouse around!</h1>
      <p>The current mouse position is ({props.mouse.x}, {props.mouse.y})</p>
    </div>
  );
}