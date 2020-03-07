import React from 'react';
import ReactDOM from 'react-dom';

class HeaderDescrpt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: "Sup, I'm the body"
    }
    if (this.props.contents) {
      this.setState({contents: this.props.contents});
    }
  }
  render() {
    return <p>{this.state.contents}!</p>;
  }
}
export default HeaderDescrpt;
