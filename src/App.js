import './App.css';
import React, { useEffect, useState } from "react"
import TitleBar from './components/title-bar';
import External from './components/external-links';
import NavBar from './components/NavBar';
import Game from './components/Game'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [gameInfo, setGame] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9292/start_game`)
      .then((r) => r.json())
      .then((gameInfo) => {
        setGame(gameInfo)
        console.log(gameInfo)
      }
      );
  }, []);


  // if (!game) return <h2>Loading game data...</h2>;

  return (
    <div className="App">
      <TitleBar />
      <NavBar />
      <Game gameInfo={gameInfo} />
      <External />
    </div>
  );
}

export default App;
