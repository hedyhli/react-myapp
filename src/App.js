import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  var helloHeading = <h1>Hello World</h1>;
  ReactDOM.render(
    helloHeading,
    document.getElementById('root')
)
  return (
      helloHeading
    ) // worked!!!
}

export default App;
