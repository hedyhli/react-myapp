import React from 'react';
import ReactDOM from 'react-dom';

class HelloName extends React.Component { // user-def always capitalise first letter!
  constructor(props) {
    super(props);
    this.state = {
      name: "World"
    }
    if (this.props.name) {
      this.setState({name: this.props.name});
    }
    // if nothing provided then let it still be "World"
  }
  render() {
    return <h1>Hello, {this.state.name}!</h1>;
  }
}

export default HelloName;
