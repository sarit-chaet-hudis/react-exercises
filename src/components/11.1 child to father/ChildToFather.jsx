import React from "react";
import CustomButton from "./CustomButton";

const colors = [
  { id: 0, color: "skyblue" },
  { id: 1, color: "pink" },
  { id: 2, color: "lightyellow" },
];

class ChildToFather extends React.Component {
  state = { selectedColor: null };
  updateColor = (color) => {
    this.setState({ selectedColor: color });
  };

  render() {
    return (
      <div>
        <h1>The selected color is: {this.state.selectedColor}</h1>
        {colors.map((cb) => {
          return (
            <CustomButton
              callBack={this.updateColor}
              id={cb.id}
              key={cb.id}
              color={cb.color}
            />
          );
        })}
      </div>
    );
  }
}

export default ChildToFather;
