import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"
import TitleBar from './components/title-bar';
import External from './components/external-links';
import NavBar from './components/NavBar';
import Game from './components/Game'

function App() {

  const [game, setGame] = useState({ session_name: "" });

  useEffect(() => {
    fetch(`http://localhost:9292/start_game`)
      .then((r) => r.json())
      .then((game) => {
        setGame(game)
        console.log(game)
      }
      );
  }, []);


  // if (!game) return <h2>Loading game data...</h2>;

  return (
    <div className="App">
      <TitleBar />
      <NavBar />
      <Game />
      <External />
    </div>
  );
}

export default App;
