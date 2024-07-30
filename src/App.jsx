import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
// import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  // cont[gameTurns, setGameTurns]= useState([])

  function handleselectSquare() {
    setActivePlayer((cuurentPlayer) => (cuurentPlayer === "X" ? "O" : "X"));
  }
  return (
    <>
      <h1>Tic-Tac-Toe</h1>;
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onselectSquare={handleselectSquare}  activePlayerSymbol={activePlayer}/>
      </div>
      {/* <Log/> */}
    </>
  );
}

export default App;
