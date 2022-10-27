import './App.css';
import React, { useEffect, useState } from "react"
import TitleBar from './components/title-bar';
import External from './components/external-links';
import NavBar from './components/NavBar';
import Game from './components/Game'
import 'bootstrap/dist/css/bootstrap.min.css';
import GameEnd from './components/GameEnd';

function App() {

  const [gameInfo, setGame] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const entityInfoArr = [];

  useEffect(() => {
    fetch(`http://localhost:9292/new_game`)
      .then((r) => r.json())
      .then((gameInfo) => {
        console.log(gameInfo)
        setGame(gameInfo)
      }
      );
  }, []);


  function listEntities(gameInfo_e) {
      if (!gameInfo) {
          return null;
      }
      const entities = gameInfo_e.entities
      Object.keys(entities).map((entity) => {
          entityInfoArr.push(entities[entity].inherited_from_types_arr[0].default_emoji)
      })
  }

  

  listEntities(gameInfo)

  const startGame = ((condition) => {

    setGameStart(condition)
  })


  // if (!game) return <h2>Loading game data...</h2>;


  return (
    <div className="App">
      <TitleBar />
      <NavBar startGame={startGame}/>
      <Game gameInfo={gameInfo} gameStart={gameStart} entities={entityInfoArr}/>
      <External />
    </div>
  );
}

export default App;
