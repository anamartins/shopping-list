import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      text: ""
    };

    this.onNumberChange = this.onNumberChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  updateLocalStorage() {}

  onNumberChange(event) {
    this.setState({ number: event.target.value });
  }

  onTextChange(event) {
    this.setState({ text: event.target.value });
  }
  onKeyPress(event) {
    if (event.key === "Enter") {
      this.onClickButton();
    }
  }

  onClickButton() {
    this.props.addItem(this.state.number, this.state.text);
    this.setState({ number: 0, text: "" });
  }

  render() {
    return (
      <div className="input">
        <input
          type="number"
          value={this.state.number}
          onChange={this.onNumberChange}
        ></input>
        <input
          type="text"
          value={this.state.text}
          onChange={this.onTextChange}
          onKeyPress={this.onKeyPress}
        ></input>
        <button type="button" onClick={this.onClickButton}>
          + add
        </button>
      </div>
    );
  }
}

Input.propTypes = {
  addItem: PropTypes.func
};

export default Input;
