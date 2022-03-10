import './App.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { GameService } from './services/GameService';
import { UserAndGamesService } from './services/UserAndGamesService';
// from client, you should see a list of games
// and select what game to want to play
// register to the game with an input box for username


function App() {
  const newGameInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [games, setGames] = useState<string[]>([]);
  const gameService = new GameService();
  const userAndGamesService = new UserAndGamesService()


  let userName = '';

  useEffect(() => {

    const fetchData = async () => {
      const result = await gameService.retrieve();
      setGames(result.data);
    }

    fetchData();

  }, [])

  const onAddGame = () => {
    gameService.create(newGameInputRef.current.value).then(response => {
      setGames(response.data);
    });
    // axios.post(
    //   SERVER_URL.GAME,
    //   {
    //     newGame: newGameInputRef.current.value
    //   })
    //   .then(response => setGames(response.data))
    //   .catch(error => console.log(error));
  }

  const registerUser = (game: string) => {
    userAndGamesService.associate(userName, game);
    // axios.post(SERVER_URL.USER_WITH_GAME,
    //   { userName, gameName: game }).then(response => {
    //     console.log(response.data);
    //   });
  }

  return (
    <div className="App">
      <h1>Add Games</h1>
      <button onClick={onAddGame}>add</button>
      <input ref={newGameInputRef} type="text" placeholder="games" />
      <div> all games:</div>
      <ul>{
        games.map(game => (
          <div key={game}>
            <li>{game}</li>
            <button onClick={() => registerUser(game)}>register</button>
            <input id={`${game}-username`} type="text" onChange={(e) => { userName = e.target.value }} placeholder="username..." />
          </div>))
      }</ul>
    </div>
  );
}

export default App;
