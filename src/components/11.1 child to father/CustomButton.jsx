import React from "react";

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          onClick={(e) => this.props.callBack(e.target.textContent)}
          style={{ backgroundColor: this.props.color }}
        >
          {this.props.color}
        </button>
      </div>
    );
  }
}

export default CustomButton;
