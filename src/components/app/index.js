import React from "react";
import ReactDOM from "react-dom";
import Input from "/components/input";
import List from "/components/list";
import "./style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    let localStorageList = localStorage.getItem("list");
    let list = [];
    if (localStorageList !== null) {
      list = JSON.parse(localStorageList);
    }

    this.generateItemID = this.generateItemID.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  updateLocalStorage() {
    let list = this.state.list;
    let listStringfied = JSON.stringify(list);
    localStorage.setItem("list", listStringfied);
  }

  generateItemID() {
    let id =
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9);
    return id;
  }

  addItem(number, text) {
    let list = this.state.list;
    list.push({
      id: this.generateItemID(),
      number: number,
      text: text,
      isChecked: false
    });

    console.log("list", list);
    this.updateLocalStorage();
    this.setState({ list: list });
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Don't forget to buy!</h1>
        <Input addItem={this.addItem} />
        <List list={this.state.list} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
