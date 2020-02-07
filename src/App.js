import React from 'react';
import ReactDOM from 'react-dom';

function HelloName(props) { // capitalised func name and worked! -- user-def always capitalise!
  return <h1>Hello, {props.name}!</h1>;
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
