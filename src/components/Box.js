import React from "react";

export const Box = (props) => {
  const getResultClass = () => {
    if (props.result === "Win") return "win";
    if (props.result === "Lose") return "lose";
    if (props.result === "tie") return "tie";
    return "";
  };

  return (
    <div className={`box ${getResultClass()}`}>
      <h1>{props.tit}</h1>
      <img src={props.item && props.item.img} />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
