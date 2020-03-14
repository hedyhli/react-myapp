import React from 'react';
import ReactDOM from 'react-dom';

class ListsNKeys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1,2,3,4,5]
    }

    if(this.props.item) {
      let temp = props.items.map((n) => 
        <ul>{n}</ul>
      );
      this.setState({this: temp})
    }

  }
  render() {
    return (
      <div>
        <li>{this.state.items}</li>
      </div>
    );
  }
}

export default ListsNKeys
