import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Link } from "react-router-dom";

class App extends Component {

  render() {
    const style = {
      color: 'black',
      fontSize: 14,
      backgroundColor: 'pink'
    }


    return (
     <h3 style = {style}>
     Click this
     {this.props.children}
     </h3>

    );
  }
}

export class Button extends Component {

  state = {
    color: 'skyblue'
  }

  handleClick() {
    console.log('this is ', this);

  }

  makePink = () => this.setState({color: 'pink'})


  render() {
    const style = {
      padding: 30,
      textAlign: 'center',
      color: 'black',
    }

    return (
      <div>
        <App>
          <button style = {style} onClick = {(e) => {this.handleClick(e)}}>
            Click
          </button>
        </App>
      </div>

    )

  }
}

export default App;
