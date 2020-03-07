import React from 'react';
import ReactDOM from 'react-dom';

class HeaderDescrpt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: "This is the description for the heading."
    }
    if (this.props.contents) {
      this.setState({contents: this.props.contents});
    }
  }
  render() {
    return <p>{this.state.contents}</p>;
  }
}
export default HeaderDescrpt;
