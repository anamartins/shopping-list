import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.onDivClick = this.onDivClick.bind(this);
  }

  onDivClick() {
    this.props.onClickItem(this.props.id);
  }

  render() {
    return (
      <div
        className={this.props.isChecked ? "item checked" : "item"}
        onClick={this.onDivClick}
      >
        <p className="number">
          <span className={this.props.isChecked ? "invisible" : "check"}>
            ✓
          </span>
          {this.props.number}
        </p>
        <p className="text">{this.props.text}</p>
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.string,
  number: PropTypes.number,
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  onClickItem: PropTypes.func
};

export default Item;
