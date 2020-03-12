import React from 'react';
import ReactDOM from 'react-dom';

class ListsNKeys extends Component {
  constructor(props) {
    super(props);
    // if(this.props.item) {
    // }
  }
  render() {
    return (
      <div>
        <li>
          <ol>{this.props.item}</ol>
        </li>
      </div>
    );
  }
}

export default ListsNKeys
