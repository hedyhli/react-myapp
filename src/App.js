import React from 'react';
// import ReactDOM from 'react-dom';
import HelloName from './Components/HelloName'
import HeaderDescrpt from './Components/HeaderDescrpt'
import ListsNKeys from "./Components/ListsNKeys";

class App extends React.Component {

  render() {
    var helloHeader = <HelloName name=""/>;
    var headerDescrpt = <HeaderDescrpt contents="Hi"/>;
    var myList = <ListsNKeys items={[5,4,3,2,1]}/> // FIXME:props not working (showing default items)
    return ( // TODO: add "list: " title before the list
      <div>
        {helloHeader}
        {headerDescrpt}
        <br/>
        {myList}
      </div>
    );
  }
}

export default App;
