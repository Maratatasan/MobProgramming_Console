import './App.css';
import {useEffect, useState, useRef} from 'react';
import axios from 'axios'
// from client, you should see a list of games
// and select what game to want to play
// register to the game with an input box for username
function App() {
  const newGameInputRef = useRef()
  const [games, setGames] = useState([])

  let userName = '';

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:8000/games',
    })
        .then(response => setGames(response.data));
  }, [])

  const onAddGame = () => {
    axios.post(
        'http://localhost:8000/addGame',
        {
          newGame: newGameInputRef.current.value
        })
        .then(response => setGames(response.data))
        .catch(error => console.log(error));
  }

  const registerUser = (game) => {
    console.log(game, userName);
    // axios.post('')
    // const userName =
  }

  return (
      <div className="App">
        <h1>Add Games</h1>
        <button onClick={onAddGame}>add</button>
        <input ref={newGameInputRef} type="text" placeholder="games"/>
        <div> all games:</div>
        <ul>{
          games.map(game => (
              <div key={game}>
                <li>{game}</li>
                <button onClick={(e) => registerUser(game)}>register</button>
                <input id={`${game}-username`} type="text"  onChange={(e)=> {userName = e.target.value}} placeholder="username..."/>
              </div>))
        }</ul>
      </div>
  );
}

export default App;
