import React, { Component } from "react";

export default class BoxClass extends Component {
  getResultClass = () => {
    if (this.props.result === "Win") return "win";
    if (this.props.result === "Lose") return "lose";
    if (this.props.result === "tie") return "tie";
    return "";
  };
  render() {
    return (
      <div className={`box ${this.getResultClass()}`}>
        <h1>{this.props.tit}</h1>
        <img src={this.props.item && this.props.item.img} />
        <h2>{this.props.result}</h2>
      </div>
    );
  }
}
