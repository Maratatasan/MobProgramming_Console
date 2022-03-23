import "./App.css";
import { useState, useRef, useMemo } from "react";
// import axios from 'axios'
// import { GameService } from './services/GameService';
import { GameServiceStub } from "./services/GameServiceStub";
import { UserAndGamesServiceStub } from "./services/UserAndGamesServiceStub";
import { GameService } from "./services/GameService";
// from client, you should see a list of games
// and select what game to want to play
// register to the game with an input box for username
console.log(process.env.REACT_APP_ENV_TYPE === "dev");

function App() {
  const newGameInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [games, setGames] = useState<string[]>([]);
  const gameService = useMemo(() => {
    if (process.env.REACT_APP_ENV_TYPE === 'dev') {
      return new GameServiceStub();
    }
    return new GameService();
  }, []);
  const userAndGamesService = new UserAndGamesServiceStub();

  let userName = "";

  // useEffect(() => {

  //   const fetchData = async () => {
  //     const result = await gameService.retrieve();
  //     setGames(result);
  //   }

  //   fetchData();

  // }, [])

  const onAddGame = () => {
    gameService.create(newGameInputRef.current.value).then((response) => {
      setGames([...response]);
    });
  };

  const registerUser = (game: string) => {
    userAndGamesService.associate(userName, game);
    // axios.post(SERVER_URL.USER_WITH_GAME,
    //   { userName, gameName: game }).then(response => {
    //     console.log(response.data);
    //   });
  };

  const makeListOfGames = (games: string[]) => {
    console.log("from make list");
    console.log("games to map over", games);
    return (
      <ul>
        {games.map((game) => {
          console.log(game);

          return (
            <div key={game}>
              kasdjfkldsaf
              <li>{game}</li>
              <button onClick={() => registerUser(game)}>register</button>
              <input
                id={`${game}-username`}
                type="text"
                onChange={(e) => {
                  userName = e.target.value;
                }}
                placeholder="username..."
              />
            </div>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="App">
      <h1>Add Games</h1>
      <button onClick={onAddGame}>add</button>
      <input ref={newGameInputRef} type="text" placeholder="games" />
      <div> all games:</div>
      {makeListOfGames(games)}
    </div>
  );
}

export default App;
