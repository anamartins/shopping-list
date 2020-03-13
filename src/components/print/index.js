import React from "react";
// import PropTypes from "prop-types";
import "./style.scss";

class Print extends React.Component {
  constructor(props) {
    super(props);
  }

  onPrinterClick() {
    window.print();
  }

  render() {
    return (
      <div className="print">
        <img src="img/printer.svg" onClick={this.onPrinterClick} />
      </div>
    );
  }
}

export default Print;
