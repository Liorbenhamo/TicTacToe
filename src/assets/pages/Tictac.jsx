import { useState } from "react";
import "./tictac.css";
import Box from "../../component/box";

function Tictac() {
  const [turn, setTurn] = useState("X");
  const [border, setBorder] = useState(["", "", "", "", "", "", "", "", ""]);
  const [win, setWin] = useState();

  function handleClick2() {
    setBorder(["", "", "", "", "", "", "", "", ""]);
    setWin(undefined);
    setTurn("X");
  }

  return (
    <div id="bodydiv">
      {win === undefined ? (
        <div id="border">
          {border.map((item, index) => {
            return (
              <Box
                setWin={setWin}
                setBorder={setBorder}
                setTurn={setTurn}
                win={win}
                turn={turn}
                border={border}
                key={index}
                item={item}
                index={index}
              />
            );
          })}
        </div>
      ) : (
        <p>{win}</p>
      )}

      <button onClick={() => handleClick2()}>reset</button>
    </div>
  );
}

export default Tictac;
