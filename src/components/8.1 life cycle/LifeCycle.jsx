import React from "react";

class LifeCycle extends React.Component {
  state = { favoriteColor: "pink" };

  changeFavColor = () => {
    this.setState(() => {
      return { favoriteColor: "yellow" };
    });
  };

  componentDidMount() {
    setTimeout(this.changeFavColor, 1000);
  }

  componentDidUpdate() {
    document.getElementById(
      "myDiv"
    ).innerText = `the updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <>
        <h1>my favorite color is pink</h1>
        <div id="myDiv"></div>
      </>
    );
  }
}

export default LifeCycle;
