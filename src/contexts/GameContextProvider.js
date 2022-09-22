import { createContext, useState } from "react";

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const [players, setPlayers] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [rollsLog, setRollsLog] = useState([]);
  const [rolledNumber, setRolledNumber] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [startRollNumber, setStartRollNumber] = useState(5000);

  const resetGame = () => {
    setPlayers(null);
    setIsGameOver(false);
    setRollsLog([]);
    setRolledNumber(null);
    setCurrentPlayer({});
  };

  const values = {
    players,
    setPlayers,
    isGameOver,
    setIsGameOver,
    rollsLog,
    setRollsLog,
    rolledNumber,
    setRolledNumber,
    currentPlayer,
    setCurrentPlayer,
    startRollNumber,
    setStartRollNumber,
    resetGame,
  };

  return (
    <GameContext.Provider value={values}>{props.children}</GameContext.Provider>
  );
};

export default GameContextProvider;
