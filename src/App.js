import React from 'react';
import ReactDOM from 'react-dom';
import HelloName from './MyApp/HelloName'
import HeaderDescrpt from './MyApp/HeaderDescrpt'
import ListsNKeys from "./MyApp/ListsNKeys";

class App extends React.Component {

  render() {
    var helloHeader = <HelloName name=""/>;
    var headerDescrpt = <HeaderDescrpt contents="Hi"/>;
    return ( // return both components
      <div>
        {helloHeader}
        {headerDescrpt}
      </div>
    );
  }
}

export default App;
