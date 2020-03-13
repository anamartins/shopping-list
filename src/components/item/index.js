import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.onDivClick = this.onDivClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDivClick() {
    this.props.onClickItem(this.props.id);
  }

  onDeleteClick() {
    this.props.deleteItem(this.props.id);
  }

  render() {
    return (
      <div className={this.props.isChecked ? "item checked" : "item"}>
        <p className="number" onClick={this.onDivClick}>
          <span className={this.props.isChecked ? "invisible" : "check"}>
            ✓
          </span>
          {this.props.number}
        </p>
        <p className="text" onClick={this.onDivClick}>
          {this.props.text}
        </p>
        <span className="delete" onClick={this.onDeleteClick}>
          delete
        </span>
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.string,
  number: PropTypes.number,
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  onClickItem: PropTypes.func,
  deleteItem: PropTypes.func
};

export default Item;
