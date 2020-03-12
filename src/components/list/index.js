import React from "react";
import Item from "/components/item";
import PropTypes from "prop-types";
import "./style.scss";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.onClickItem = this.onClickItem.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  onClickItem(id) {
    this.props.checkItem(id);
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
        />
      );
    }
    console.log("list on list", list);
    return list;
  }

  render() {
    return <div className="list">{this.renderItems()}</div>;
  }
}

List.propTypes = {
  list: PropTypes.array,
  checkItem: PropTypes.func
};

export default List;
