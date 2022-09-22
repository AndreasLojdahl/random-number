import React, { useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContextProvider";
import { createPlayers } from "../playerFactory/PlayerFactory";

function StartMenu() {
  const { setPlayers } = useContext(GameContext);
  const [showPlayersOption, setShowPlayersOption] = useState(false);
  const [minimunPlayers, setMinimumPlayers] = useState(2);
  const [maximumPlayers, setMaximumPlayers] = useState(6);
  const [maxMinDifference, setMaxMinDifference] = useState(4);

  const createGamePlayers = (numberOfPlayers) => {
    setPlayers(createPlayers(numberOfPlayers));
  };

  const multiplePlayerOptions = () => {
    let content = [];
    for (let i = 1; i <= maxMinDifference; i++) {
      content.push(
        <div className="col-3">
          <button
            className="btn btn-dark rounded p-5"
            onClick={() => createGamePlayers(minimunPlayers + i)}
          >
            {minimunPlayers + i} Players
          </button>
        </div>
      );
    }
    return content;
  };

  return (
    <div className="container row">
      <div className="col-12 d-flex align-items-center justify-content-center">
        <button
          className="btn btn-dark rounded p-5 col-6"
          onClick={() => createGamePlayers(2)}
        >
          2 Players
        </button>
      </div>
      {showPlayersOption ? (
        <div className="col-12 d-flex align-items-center justify-content-center">
          <div className="row">{multiplePlayerOptions()}</div>
        </div>
      ) : (
        <div className="col-12 d-flex align-items-center justify-content-center">
          <button
            className="btn btn-dark rounded p-5 col-6"
            onClick={() => setShowPlayersOption(true)}
          >
            2+ Players
          </button>
        </div>
      )}
    </div>
  );
}

export default StartMenu;
