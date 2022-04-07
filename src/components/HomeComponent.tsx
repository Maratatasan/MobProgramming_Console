import "../App.css";
import { useState, useRef, useMemo } from "react";
// import axios from 'axios'
// import { GameService } from './services/GameService';
import { UserAndGamesServiceStub } from "../services/UserAndGamesServiceStub";
import { GameService } from "../services/GameService";
import { UserAndGamesService } from "../services/UserAndGamesService";
import { GameServiceStub } from "../services/GameServiceStub";
import store from "../state/GamesStore";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// from client, you should see a list of games
// and select what game to want to play
// register to the game with an input box for username

const ENV_VARIABLE = process.env.REACT_APP_ENV_TYPE;

function HomeComponent(props: any) {
  const newGameInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [games, setGames] = useState<string[]>([]);



  const gameService = useMemo(
    () => (ENV_VARIABLE === "dev" ? new GameServiceStub() : new GameService()),
    []
  );
  const userAndGamesService = useMemo(
    () =>
      ENV_VARIABLE === "dev"
        ? new UserAndGamesServiceStub()
        : new UserAndGamesService(),
    []
  );

  // const userAndGamesService = useMemo(() =>
  //   process.env.REACT_APP_ENV_TYPE === "dev"
  //     ? new UserAndGamesServiceStub()
  //     : new UserAndGamesService()
  // );

  let userName = "";

  // useEffect(() => {

  //   const fetchData = async () => {
  //     const result = await gameService.retrieve();
  //     setGames(result);
  //   }

  //   fetchData();

  // }, [])

  const onAddGame = () => {
    // gameService.create(newGameInputRef.current.value).then((response) => {
      props.actions.addGame(newGameInputRef.current.value);
    //   // setGames([...response]);
    // });

   
  };

  const registerUser = (game: string) => {
    userAndGamesService.associate(userName, game);
    props.actions.associate(userName, game);
    // axios.post(SERVER_URL.USER_WITH_GAME,
    //   { userName, gameName: game }).then(response => {
    //     console.log(response.data);
    //   });
  };
 
  const makeListOfGames = (games: string[]) => {
    return (
      <ul>
        {Object.keys(props.games).map((game) => {
          return (
            <div key={game}>
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
      <h1>{process.env.REACT_APP_ENV_TYPE}</h1>
      {JSON.stringify(props.games)}
      <h1>Add Games</h1>
      <button onClick={onAddGame}>add</button>
      <input ref={newGameInputRef} type="text" placeholder="games" />
      <div> all games:</div>
      {makeListOfGames(games)}
    </div>
  );
}

const actions = {
  addGame(gameName: string) {
    return {
      type: "addGame",
      payload: { gameName: gameName },
    };
  },
  associate(userName: string, gameName: string) {
    return {
      type: "associate",
      payload: { userName: userName, gameName: gameName },
    };
  },
};

const mapStateToProps = (state: any) => ({ games: state.games });

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
