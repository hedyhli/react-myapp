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

class BodyStuff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: "Sup, I'm the body"
    }
    if (this.props.contents) {
      this.setState({contents: this.props.contents});
    }
  }
  render() {
    return <p>{this.state.contents}!</p>;
  }
}

function App() {
  var helloWorld = <HelloName name=""/>;
  var myBody = <BodyStuff contents="Hi"/> // TODO - put this on page!
  ReactDOM.render(
    helloWorld,
    document.getElementById('root')
  )
  return (
    helloWorld
  ) // worked!!!
}

export default App;
