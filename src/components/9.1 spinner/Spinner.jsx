import "./Spinner.css";
import React from "react";

class Spinner extends React.Component {
  state = { spinnerDisplay: false };

  componentDidMount() {
    this.setState(() => {
      return { spinnerDisplay: true };
    });
    setTimeout(() => {
      this.setState(() => {
        return { spinnerDisplay: false };
      });
    }, 9000);
  }

  renderContent() {
    if (this.state.spinnerDisplay) {
      return (
        <div className="dots">
          <div className="dot hop"></div>
          <div className="dot hop delay1"></div>
          <div className="dot hop delay2"></div>
        </div>
      );
    } else {
      return <> </>;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Spinner;
