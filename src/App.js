import React from 'react';
import ReactDOM from 'react-dom';

class HelloName extends React.Component { // user-def always capitalise first letter!
  constructor(props) {
    super(props);
    this.props.name ? this.name = this.props.name : 
    this.name = "World" // if nothing provided then set it as "World"
  }
  render() {
    return <h1>Hello, {this.name}!</h1>;
  }
}

function App() {
  var helloWorld = <HelloName name=""/>;
  ReactDOM.render(
    helloWorld,
    document.getElementById('root')
  )
  return (
    helloWorld
  ) // worked!!!
}

export default App;
