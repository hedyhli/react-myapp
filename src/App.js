import React from 'react';
import ReactDOM from 'react-dom';

class HelloName extends React.Component { // user-def always capitalise first letter!
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

function App() {
  var helloWorld = <HelloName name="World"/>;
  ReactDOM.render(
    helloWorld,
    document.getElementById('root')
  )
  return (
    helloWorld
  ) // worked!!!
}

export default App;
