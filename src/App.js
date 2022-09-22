import "./App.css";
import Game from "./components/Game";
import GameContextProvider from "./contexts/GameContextProvider";

function App() {
  return (
    <div className="App Container d-flex align-items-center">
      <GameContextProvider>
        <Game />
      </GameContextProvider>
    </div>
  );
}

export default App;
