import React, { useContext, useEffect, useState } from "react";
import RollLogDisplay from "./components/RollLogDisplay";
import CurrentPlayerDisplay from "./components/CurrentPlayerDisplay";
import RollButton from "./components/RollButton";
import RollNumberDisplay from "./components/RollNumberDisplay";

import { GameContext } from "../../contexts/GameContextProvider";

function GameBoard() {
  const {
    rolledNumber,
    setRolledNumber,
    currentPlayer,
    setCurrentPlayer,
    rollsLog,
    setRollsLog,
    isGameOver,
    setIsGameOver,
    players,
    resetGame,
    startRollNumber,
  } = useContext(GameContext);

  useEffect(() => {
    if (players.length > 1) {
      setCurrentPlayer(players[0]);
    }
  }, [players]);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const roll = () => {
    let rndNumber = generateRandomNumber(
      1,
      rolledNumber === null ? startRollNumber : rolledNumber
    );

    if (rndNumber > 1) {
      players.length > currentPlayer.index + 1
        ? setCurrentPlayer(players[currentPlayer.index + 1])
        : setCurrentPlayer(players[0]);
    } else {
      setIsGameOver(true);
    }

    setRolledNumber(rndNumber);
    setRollsLog([...rollsLog, `${currentPlayer.name} rolls ${rndNumber}`]);
  };

  return (
    <div className="container">
      <div className="row h-75 p-5 border-bottom ">
        <div className="col-4 d-flex align-items-center justify-content-center">
          <CurrentPlayerDisplay
            props={{ currentPlayer: currentPlayer, players: players }}
          ></CurrentPlayerDisplay>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <RollNumberDisplay
            rollNumber={rolledNumber}
            currentPlayer={currentPlayer}
          ></RollNumberDisplay>
        </div>
        <div
          style={{ height: "100%" }}
          className="col-4 overflow-auto d-flex align-items-end justify-content-center"
        >
          <RollLogDisplay rollLog={rollsLog}></RollLogDisplay>
        </div>
      </div>

      <div className="col-12 d-flex justify-content-center h-25 p-3 ">
        <RollButton
          currentPlayer={currentPlayer}
          gameOver={isGameOver}
          roll={roll}
          resetGame={resetGame}
        ></RollButton>
      </div>
    </div>
  );
}

export default GameBoard;
