import React from "react";

class Focus extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = null;

    this.setInputRef = (inputElement) => {
      this.inputRef = inputElement;
    };
  }

  componentDidMount() {
    if (this.inputRef) this.inputRef.focus();
  }

  render() {
    return (
      <>
        <input
          type="text"
          ref={this.setInputRef}
          placeholder="am I in focus?"
        />
        <input type="text" placeholder="am I not in focus?" />
      </>
    );
  }
}

export default Focus;
