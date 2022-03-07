import React from "react";
import "./renderPropsText.css";

export default class RenderPropsText extends React.Component {
    render() {
        return (
            <section>
                <InputAnimatedTextDisplay/>
                <InputPlainTextDisplay />
            </section>
        )
    }
}

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {text: ""}
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div style={{
                border: `1px solid ${this.props.borderColor}`,
                margin: "20px"
                }}>
                <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                {this.props.render(this.state.text)}
            </div>
        );
    }
}

function PlainTextDisplay(props) {
    return (
        <section>
            <h3>Plain Text</h3>
            <p style={{minHeight: "32px"}}>{props.text}</p>
        </section>
    )
}

function AnimatedTextDisplay(props) {
    return (
        <section>
            <h3>Animated Text</h3>
            <p style={{minHeight: "32px"}} className="size-animate">{props.text}</p>
        </section>
    )
}

class InputPlainTextDisplay extends React.Component {
    render() {
        return <InputText borderColor="white" render={text => <PlainTextDisplay text={text}/>}/>
    }
}

function InputAnimatedTextDisplay() {
    return (
        <InputText borderColor="pink" render={text => <AnimatedTextDisplay text={text}/>}/>
    )
}