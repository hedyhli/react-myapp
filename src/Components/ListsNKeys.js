import React from 'react';
// import ReactDOM from 'react-dom';

class ListsNKeys extends React.Component {
  constructor(props) {
    super(props);
    
    if(props.items) {
      const items = props.items
      let temp = items.map((n) => 
        <li key={n.toString()}>
          {n}
        </li>
      );
      this.state = {items: temp};
    } else {
      this.state = { items: [1,2,3,4,5] };
      const items = this.state.items;
      let temp = items.map((n) => 
        <li key={n.toString()}>
          {n}
        </li>
      );
      this.state = {items: temp};
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
