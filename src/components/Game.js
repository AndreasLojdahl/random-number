import StartMenu from "./startMenu/StartMenu";
import GameBoard from "./gameboard/GameBoard";
import { useContext } from "react";
import { GameContext } from "../contexts/GameContextProvider";

const Game = () => {
  const { players } = useContext(GameContext);

  return (
    <div className="container">
      <div className=" p-4 d-flex mx-auto  game rounded">
        {players === null ? <StartMenu /> : <GameBoard />}
      </div>
    </div>
  );
};

export default Game;
