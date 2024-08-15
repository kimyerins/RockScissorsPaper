import React, { Component } from "react";
import "./App.css";
import BoxClass from "./components/BoxClass";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    const choice = {
      rock: {
        name: "Rock",
        img: "https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg",
      },
      scissors: {
        name: "Scissors",
        img: "https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png",
      },
      paper: {
        name: "Paper",
        img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg",
      },
    };
    this.state = {
      userSelect: null,
      computerSelect: null,
      userResult: "",
      computerResult: "",
    };

    this.choice = choice;
  }

  play = (userChioce) => {
    let computerChoice = this.randomChoice();
    let results = this.judgement(this.choice[userChioce], computerChoice);

    this.setState({
      userSelect: this.choice[userChioce],
      computerSelect: computerChoice,
      userResult: results.userResult,
      computerResult: results.computerResult,
    });
  };

  judgement = (user, computer) => {
    // user === computer -> 비김(tie)
    // user === rock, computer === scissors -> user Win
    // user === rock, computer === paper -> user Lose
    // user === scissors, computer === paper -> user Win
    // user === scissorsm, computer === rock -> user Lose
    // user === paper, computer === rock -> user Win
    // user === paper, computer === scissors -> user Lose

    if (user.name === computer.name) {
      return { userResult: "tie", computerResult: "tie" };
    } else if (user.name === "Rock")
      return computer.name === "Scissors"
        ? { userResult: "Win", computerResult: "Lose" }
        : { userResult: "Lose", computerResult: "Win" };
    else if (user.name === "Scissors")
      return computer.name === "Paper"
        ? { userResult: "Win", computerResult: "Lose" }
        : { userResult: "Lose", computerResult: "Win" };
    else if (user.name === "Paper")
      return computer.name === "Rock"
        ? { userResult: "Win", computerResult: "Lose" }
        : { userResult: "Lose", computerResult: "Win" };
  };

  randomChoice = () => {
    let itemArray = Object.keys(this.choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return this.choice[final];
  };

  render() {
    return (
      <div>
        <div className="box_wrap">
          <BoxClass
            tit={"You"}
            item={this.state.userSelect}
            result={this.state.userResult}
          />
          <BoxClass
            tit={"Computer"}
            item={this.state.computerSelect}
            result={this.state.computerResult}
          />
        </div>
        <div className="btn_wrap">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}
