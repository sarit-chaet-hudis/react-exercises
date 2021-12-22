import React from "react";

class InputForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    textArea: "",
    selectedCoin: "",
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form action="">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={(e) => this.onChange(e)}
        />
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={(e) => this.onChange(e)}
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
        <br />
        <p>
          my name is {this.state.firstName} {this.state.lastName}
        </p>
      </form>
    );
  }
}

export default InputForm;
