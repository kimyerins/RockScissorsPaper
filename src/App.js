import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

// 1. 박스 2개(타이틀,사진,결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에따라 테두리 색이 바뀐다(이기면 초록, 지면 빨강, 비기면 검은색)

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
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    const results = judgement(choice[userChoice], computerChoice);
    setUserResult(results.userResult);
    setComputerResult(results.computerResult);
  };

  const judgement = (user, computer) => {
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

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 어레이로 만들어주는 함수다.
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="box_wrap">
        <Box tit="You" item={userSelect} result={userResult} />
        <Box tit="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className="btn_wrap">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
