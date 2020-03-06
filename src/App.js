import React from 'react';
import ReactDOM from 'react-dom';
import HelloName from './MyApp/HelloName'
import BodyStuff from './MyApp/BodyStuff'

class App extends React.Component {

  render() {
    var helloHeader = <HelloName name=""/>;
    var myBody = <BodyStuff contents="Hi"/>;
    return ( // return both components
      <div>
        {helloHeader}
        {myBody}
      </div>
    );
  }
}

export default App;
