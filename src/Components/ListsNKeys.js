import React from 'react';
// import ReactDOM from 'react-dom';

class ListsNKeys extends React.Component {
  constructor(props) {
    super(props);

    if(this.props.items) {
      let temp = props.items.map((n) => 
        <li>{n}</li>
      );
      this.state = {items: temp};
    } else {
      this.state = { items: [1,2,3,4,5] };
    }

  }
  render() {
    return (
      <div>
        <ul>{this.state.items}</ul>
      </div>
    );
  }
}

export default ListsNKeys
