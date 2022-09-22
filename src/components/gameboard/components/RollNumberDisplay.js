const RollNumberDisplay = ({ rollNumber, currentPlayer }) => {
  return (
    <div className="roll-number">
      {rollNumber === null
        ? `1 - 5000`
        : rollNumber > 1
        ? rollNumber
        : `${currentPlayer.name} Died!`}
    </div>
  );
};

export default RollNumberDisplay;
