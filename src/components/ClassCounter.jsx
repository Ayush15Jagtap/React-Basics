import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    };

    increment=()=>this.setState({counter:this.state.counter+1});
  render() {

    return (
        <>
      <div>ClassCounter</div>
      <div>
        <button onClick={this.increment}>Count Is:{this.state.counter}</button>
      </div>
      
        </>
    )
  }
}
