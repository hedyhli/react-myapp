import React from 'react';
import ReactDOM from 'react-dom';
import HelloName from './MyApp/HelloName'
import HeaderDescrpt from './MyApp/HeaderDescrpt'

class App extends React.Component {

  render() {
    var helloHeader = <HelloName name=""/>;
    var headerDescript = <HeaderDescrpt contents="Hi"/>;
    return ( // return both components
      <div>
        {helloHeader}
        {headerDescript}
      </div>
    );
  }
}

export default App;
