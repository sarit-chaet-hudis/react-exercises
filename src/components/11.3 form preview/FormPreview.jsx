import React from "react";
import InputForm from "./InputForm";
import PreviewBeforeSubmit from "./PreviewBeforeSubmit";

class FormPreview extends React.Component {
  state = { showForm: null, showPreview: null };

  submitForPreview(childState) {
    console.log(childState);
  }

  componentDidMount() {
    this.setState({ showForm: true, showPreview: true });
  }
  renderContent = () => {
    if (this.state.showForm) {
      return <InputForm submitForPreview={this.submitForPreview} />;
    }
    if (this.state.showPreview) {
      return <PreviewBeforeSubmit />;
    }
  };

  render() {
    return <>{this.renderContent()}</>;
  }
}

export default FormPreview;
