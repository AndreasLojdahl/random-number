const RollLogDisplay = ({ rollLog }) => {
  return (
    <div className="">
      {rollLog.map((log, i) => {
        return <div key={i}>{log}</div>;
      })}
    </div>
  );
};

export default RollLogDisplay;
