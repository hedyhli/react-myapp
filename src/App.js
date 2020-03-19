import React from 'react';
// import ReactDOM from 'react-dom';
import HelloName from './Components/HelloName'
import HeaderDescrpt from './Components/HeaderDescrpt'
import ListsNKeys from "./Components/ListsNKeys";

var myListItems = [5,4,3,2,1]
class App extends React.Component {
  render() {
    var helloHeader = <HelloName name=""/>;
    var headerDescrpt = <HeaderDescrpt contents="Hi"/>;
    var myList = <ListsNKeys items={myListItems}/>
    return (
      <div>
        {helloHeader}
        {headerDescrpt}
        <br/>
        <strong>Lists and Keys Demo</strong>
        {myList}
      </div>
    );
  }
}

export default App;
