import './App.css';
import React, { useEffect, useState } from "react"
import TitleBar from './components/title-bar';
import NavBar from './components/NavBar';
import Game from './components/Game'
import 'bootstrap/dist/css/bootstrap.min.css';
import GameEnd from './components/GameEnd';

function App() {

  const [gameInfo, setGame] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const entityInfoArr = [];
  const entityInfoArrToSave = [];

  useEffect(() => {
    fetch(`http://localhost:9292/new_game`)
      .then((r) => r.json())
      .then((gameInfo) => {
        // console.log(gameInfo)
        setGame(gameInfo)
      }
      );
  }, []);


  function listEntities(gameInfo_e) {
    if (!gameInfo) {
      return null;
    }
    const entities = gameInfo_e.entities
    console.log(entities)
    Object.keys(entities).map((entity) => {

      entityInfoArr.push(entities[entity].inherited_from_types_arr[0].default_emoji)
    })
  }



  listEntities(gameInfo)

  const startGame = ((condition) => {
    setGameStart(condition)
  })

  const saveGame = (() => {
    fetch(`http://localhost:9292/save_game`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: gameInfo.newSession.id,
        player_emoji: entityInfoArrToSave[0].player.emoji,
        player_position_x: entityInfoArrToSave[0].player.position.x,
        player_position_y: entityInfoArrToSave[0].player.position.y,
        clown_emoji: entityInfoArrToSave[0].clown.emoji,
        clown_position_x: entityInfoArrToSave[0].clown.position.x,
        clown_position_y: entityInfoArrToSave[0].clown.position.y,
      })
    })
  })

  console.log(gameInfo)

  function getSaveInfo(allInfo) {
    // console.log(allInfo)
    entityInfoArrToSave.pop()
    entityInfoArrToSave.push(allInfo)
    // entityInfoArrToSave.push({allInfo})
    console.log(entityInfoArrToSave)
  }
  // if (!game) return <h2>Loading game data...</h2>;
  console.log(entityInfoArrToSave)


  return (
    <div className="App">
      <TitleBar />
      <NavBar startGame={startGame} saveGame={saveGame} />
      <Game gameInfo={gameInfo} gameStart={gameStart} entities={entityInfoArr} saveInfo={getSaveInfo} />
    </div>
  );
}

export default App;
