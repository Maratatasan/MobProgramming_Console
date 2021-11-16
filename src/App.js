import './App.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
// from client, you should see a list of games
// and select what game to want to play
// register to the game with an input box for username

function App() {

  //fruit loops

  const [game, setGame] = useState('penis');

  const [allGames, setAllGames] = useState([])

  const gameInput = useRef()


  

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:8000/games',
    })
      .then(function (response) {
        setAllGames(response.data)
      });
  }, [])

  const handleButton = () => {
    console.log('button clicked',gameInput)
    axios.post(
      'http://localhost:8000/addGame',
      {
        newGame: gameInput.current.value
      })
      .then(function (response) {
        
        setAllGames(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const registerUser = (game) => {

    // const userName = 
  }

  return (
    <div className="App">
      <h1>Add Games</h1>
      <button onClick={handleButton}>add</button>
      <input ref={gameInput} type="text" placeholder="games"></input>

      <div> all games:</div>
      <ul>{allGames.map(game=>(<div>
      <li key={game}>{game}</li>
      <button onClick={ e => registerUser(game)}>register</button>
      <input id={`${game}-username`} type="text" placeholder="username..."></input>
      </div>))}</ul>
    </div>
  );
}

export default App;
