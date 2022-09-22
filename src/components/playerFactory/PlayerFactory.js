export const createPlayers = (numberOfPlayers) => {
  let players = [];

  for (let i = 0; i < numberOfPlayers; i++) {
    let player = {
      name: `Player${i + 1}`,
      index: i,
    };
    players = [...players, player];
  }
  return players;
};
