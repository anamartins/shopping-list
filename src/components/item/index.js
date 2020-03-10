import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item">
        <p>{this.props.number}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

Item.propTypes = {
  number: PropTypes.string,
  text: PropTypes.string
};

export default Item;
