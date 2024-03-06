import React, { Component } from 'react'

export default class ClassComp extends Component {
    state = {
        count: 0,
        status: '',
    };
    plus = () => {
        this.setState({ count: this.state.count + 1})
    }
    minus = () => {
        this.setState({ count: this.state.count - 1})
    }


    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <h1>{this.state.count}</h1>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
                <button onClick={this.props.onKill}>kill</button>
            </div>
        )
    }
}
