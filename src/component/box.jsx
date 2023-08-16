import { useEffect } from "react";

function Box({ setBorder, border, item, index, turn, setTurn, win, setWin }) {
  function handleClick(e) {
    console.log(border);
    console.log(index);
    console.log(border[index]);
    if (border[index] === "") {
      let temp = [...border];
      temp[index] = turn;
      setBorder(temp);
      console.log(border);
      setTurn(turn === "X" ? "O" : "X");
    }
  }
  useEffect(() => {
    checkWin();
  }, [border]);
  function checkWin() {
    console.log(border);
    if (
      border[0] !== "" &&
      border[0] === border[1] &&
      border[1] === border[2]
    ) {
      border[0] === "X" ? setWin("winner is X") : setWin("winner is O");
      console.log(win);
    } else if (
      border[3] !== "" &&
      border[3] === border[4] &&
      border[4] === border[5]
    ) {
      border[3] === "X" ? setWin("winner is X") : setWin("winner is O");
      console.log(win);
    } else if (
      border[6] !== "" &&
      border[6] === border[7] &&
      border[7] === border[8]
    ) {
      border[6] === "X" ? setWin("winner is X") : setWin("winner is O");
      console.log(win);
    } else if (
      border[0] !== "" &&
      border[0] === border[3] &&
      border[3] === border[6]
    ) {
      border[0] === "X" ? setWin("winner is X") : setWin("winner is O");
      console.log(win);
    } else if (
      border[1] !== "" &&
      border[1] === border[4] &&
      border[4] === border[7]
    ) {
      border[1] === "X" ? setWin("winner is X") : setWin("winner is O");
      console.log(win);
    } else if (
      border[2] !== "" &&
      border[2] === border[5] &&
      border[5] === border[8]
    ) {
      border[2] === "X" ? setWin("winner is X") : setWin("winner is O");
      console.log(win);
    } else if (
      border[0] !== "" &&
      border[0] === border[4] &&
      border[4] === border[8]
    ) {
      border[0] === "X" ? setWin("winner is X") : setWin("winner is O");
      console.log(win);
    } else if (
      border[2] !== "" &&
      border[2] === border[4] &&
      border[4] === border[6]
    ) {
      border[2] === "X" ? setWin("winner is X") : setWin("winner is O");
      console.log(win);
    } else if (!border.some((place) => place === "")) {
      setWin("its a fucking tie");
    }
  }
  return (
    <div onClick={(e) => handleClick(e)} className="cube" key={index}>
      {item}
    </div>
  );
}
export default Box;
