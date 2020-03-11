import React from "react";
import Item from "/components/item";
import PropTypes from "prop-types";
import "./style.scss";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    let list = [];
    for (let i = 0; i < this.props.list.length; i++) {
      list.push(
        <Item
          key={this.props.list[i].id}
          number={this.props.list[i].number}
          text={this.props.list[i].text}
          isChecked={this.props.list[i]}
        />
      );
    }
    return list;
  }

  render() {
    return <div className="list">{this.renderItems()}</div>;
  }
}

List.propTypes = {
  list: PropTypes.array
};

export default List;
