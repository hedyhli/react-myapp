import React from 'react';
// import ReactDOM from 'react-dom';

class HeaderDescrpt extends React.Component {
  constructor(props) {
    super(props);
    
    if (this.props.contents) {
      this.state = {contents: this.props.contents};
    } else {
      this.state = {
        contents: "This is the description for the heading."
      }
    }
  }
  render() {
    return <p>{this.state.contents}</p>;
  }
}
export default HeaderDescrpt;
