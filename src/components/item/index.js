import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  onDivClick(event) {
    let target = event.target;
    target.parentNode.style.textDecoration = "line-through";
  }

  render() {
    return (
      <div className="item" onClick={this.onDivClick}>
        <p className="number">
          <span className="check">✓</span>
          {this.props.number}
        </p>
        <p className="text">{this.props.text}</p>
      </div>
    );
  }
}

Item.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string
};

export default Item;
