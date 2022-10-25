import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"

function App() {

  const [game, setGame] = useState({session_name: ""});

  useEffect(() => {
    fetch(`http://localhost:9292/start_game`)
    .then((r) => r.json())
      .then((game) =>  {
        setGame(game)
        console.log(game)}
        );
  }, []);
  

  // if (!game) return <h2>Loading game data...</h2>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {game["session_name"]}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's PLAY SOME ROGUE BABY!
        </a>
      </header>
    </div>
  );
}

export default App;
