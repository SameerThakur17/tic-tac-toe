import { useState } from "react";
import Box from "./components/Box";
import Reset from "./components/Reset";

function App() {
  const initialState = new Array(9).fill(null);
  const [boardState, setBoardState] = useState(initialState);
  const [playerXActive, setPlayerXActive] = useState(true);

  const winTriplet = [];

  const handleClick = (index) => {
    if (boardState[index] !== null || winner) {
      return;
    }
    const copyBoard = [...boardState];
    copyBoard[index] = playerXActive ? "X" : "O";
    setBoardState(copyBoard);
    setPlayerXActive((prev) => !prev);
  };
  const checkWinner = () => {
    const winnerTriplet = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let triplet of winnerTriplet) {
      const [a, b, c] = triplet;
      if (
        boardState[a] !== null &&
        boardState[a] === boardState[b] &&
        boardState[b] === boardState[c]
      ) {
        winTriplet.push(a, b, c);
        return boardState[a];
      }
    }
    return false;
  };
  const winner = checkWinner();

  const resetGame = () => {
    setBoardState(initialState);
    setPlayerXActive(true);
  };
  return (
    <>
      <div className="flex w-screen h-screen bg-gray-950 text-white justify-evenly items-center flex-col ">
        <div>
          <h1 className="text-5xl font-semibold">Tic Tac Toe</h1>
        </div>

        {winner ? (
          <div
            className={` ${
              winner == "X" ? "bg-red-600" : "bg-blue-600"
            } w-fit h-24 px-16  flex justify-center items-center text-5xl font-semibold rounded-xl transition duration-150 ease-in-out`}
          >
            {winner} Won 🏆
          </div>
        ) : (
          <div
            className={`w-fit h-24 p-10 flex justify-center items-center text-4xl font-semibold rounded-xl transition duration-100 ease-in-out ${
              playerXActive ? "bg-red-700" : "bg-blue-700"
            } `}
          >
            {playerXActive ? "X" : "O"} turn
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Box
              change={() => handleClick(0)}
              value={boardState[0]}
              index={0}
              winTriplet={winTriplet}
            />
            <Box
              change={() => handleClick(1)}
              value={boardState[1]}
              index={1}
              winTriplet={winTriplet}
            />
            <Box
              change={() => handleClick(2)}
              value={boardState[2]}
              index={2}
              winTriplet={winTriplet}
            />
          </div>
          <div className="flex gap-2">
            <Box
              change={() => handleClick(3)}
              value={boardState[3]}
              index={3}
              winTriplet={winTriplet}
            />
            <Box
              change={() => handleClick(4)}
              value={boardState[4]}
              index={4}
              winTriplet={winTriplet}
            />
            <Box
              change={() => handleClick(5)}
              value={boardState[5]}
              index={5}
              winTriplet={winTriplet}
            />
          </div>
          <div className="flex gap-2">
            <Box
              change={() => handleClick(6)}
              value={boardState[6]}
              index={6}
              winTriplet={winTriplet}
            />
            <Box
              change={() => handleClick(7)}
              value={boardState[7]}
              index={7}
              winTriplet={winTriplet}
            />
            <Box
              change={() => handleClick(8)}
              value={boardState[8]}
              index={8}
              winTriplet={winTriplet}
            />
          </div>
        </div>
        <div>
          <Reset reset={resetGame} />
        </div>
      </div>
    </>
  );
}

export default App;
