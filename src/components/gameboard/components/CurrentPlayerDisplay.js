const CurrentPlayerDisplay = ({ props }) => {
  const { currentPlayer, players } = props;
  return (
    <div>
      {players.map((player) => {
        return (
          <div
            className="rounded p-3"
            style={{
              backgroundColor:
                currentPlayer.index === player.index && "#282c34",
              color: currentPlayer.index === player.index && "white",
            }}
            key={player.index}
          >
            {player.name}
          </div>
        );
      })}
    </div>
  );
};

export default CurrentPlayerDisplay;
