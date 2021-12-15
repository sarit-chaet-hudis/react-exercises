import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    firstNameTerm: "",
    lastNameTerm: "",
    textAreaTerm: "",
    selectedCoin: "",
  };

  onFNameChange(e) {
    this.setState({ firstNameTerm: e.target.value });
    console.log(`first name term is ${this.state.firstNameTerm}`);
  }

  render() {
    return (
      <form action="">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={this.state.firstNameTerm}
          onChange={(e) => this.onFNameChange(e)}
        />
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
        />
        <br />
        <select name="coin" id="coin">
          <option value="NIS" key="0">
            NIS
          </option>
          <option value="USD" key="1">
            USD
          </option>
          <option value="EUR" key="2">
            EUR
          </option>
        </select>
        <br />
        <textarea
          name="freeText"
          id="freeText"
          placeholder="Your message here.."
        />
        <br />
        <button
          type="submit"
          name="submit"
          id="submit"
          onClick={(e) => {
            e.preventDefault();
            this.props.submitForPreview(this.state);
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default InputForm;
