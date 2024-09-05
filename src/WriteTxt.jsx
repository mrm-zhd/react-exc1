import React, { Component } from 'react'

export default class WriteText extends Component {
    constructor(){
        super();
        this.state = {
            text : "",
        };
    }
  render() {
    const WriteTxt = () => {
        const newTxt = document.getElementById("newText").value;
        this.setState({text: newTxt});
    }
    return (
      <div>
        <input type="text" id="newText" placeholder="Write Something.." onChange={WriteTxt}/>
        <br/>
        {this.state.text}
      </div>
    )
  }
}

