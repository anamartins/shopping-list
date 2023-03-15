import React from "react";
import Item from "../item";
import Print from "../print";
import PropTypes from "prop-types";
import "./style.scss";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.onClickItem = this.onClickItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  onClickItem(id) {
    this.props.checkItem(id);
  }

  deleteItem(id) {
    this.props.deleteItem(id);
  }

  renderItems() {
    let list = [];
    for (let i = 0; i < this.props.list.length; i++) {
      list.push(
        <Item
          key={this.props.list[i].id}
          id={this.props.list[i].id}
          number={this.props.list[i].number}
          text={this.props.list[i].text}
          isChecked={this.props.list[i].isChecked}
          onClickItem={this.onClickItem}
          deleteItem={this.deleteItem}
        />
      );
    }
    return list;
  }

  render() {
    return this.props.list.length !== 0 ? (
      <div className="list">
        {this.renderItems()}
        <Print />
      </div>
    ) : (
      <div className="doodle">
        <img src="img/girl-computer.svg" />
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.array,
  checkItem: PropTypes.func,
  deleteItem: PropTypes.func
};

export default List;
