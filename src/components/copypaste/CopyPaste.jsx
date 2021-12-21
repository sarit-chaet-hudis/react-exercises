import React from "react";

class CopyPaste extends React.Component {
  constructor(props) {
    super(props);

    this.pasteRef = null;

    this.setPasteRef = (element) => {
      this.pasteRef = element;
    };

    this.toClipboard = () => {
      if (this.pasteRef) {
        console.log(this.pasteRef.value);
        navigator.clipboard.writeText(this.pasteRef.value);
        this.pasteRef.value = "copied!";
      }
    };
  }

  render() {
    return (
      <div>
        <textarea
          ref={this.setPasteRef}
          placeholder="type here and click btn to copy to clipboard"
        ></textarea>
        <button onClick={this.toClipboard}>Copy to Clipboard</button>
        <textarea placeholder="try to paste here"></textarea>
      </div>
    );
  }
}

export default CopyPaste;
