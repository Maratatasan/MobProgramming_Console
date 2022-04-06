import { createStore, applyMiddleware } from "redux";
import { GameServiceStub } from "../services/GameServiceStub";
import { UserAndGamesServiceStub } from "../services/UserAndGamesServiceStub";





const gameReducer = (
  state: any = { games: { lookOut5: ["abs"] } },
  action: any
) => {
  console.group(action.type);
  console.log(action.payload);
  console.groupEnd();
  switch (action.type) {
    case "refreshGames":
      // debugger;
      // const games: any = {};
      // action.payload.games.forEach((game: any) => {
      //   games[game] = [];
      // });
      return { ...state, games: action.payload.games }
    case "associate":
      return {
        ...state,
        games: {
          ...state.games,
          [action.payload.gameName]: [
            ...state.games[action.payload.gameName],
            action.payload.userName,
          ],
        },
      };
    default:
      return state;
  }
};


export const fetchGamesMiddleware = (store: any) => (next: any) => (action: any) => {


  if (action.type === "addGame") {

    const gamesService = new GameServiceStub();
    gamesService.create(action.payload.gameName)
      .then((response: any) => {
        return next({
          type: "refreshGames", payload: { games: { games: response } },
        });
      });

  }

  if (action.type === "associate") {
    const userAndGamesService = new UserAndGamesServiceStub();
    userAndGamesService.associate(action.payload.userName, action.payload.gameName).then((response: any) => {
      return next({
        type: "refreshGames", payload: { games: response },
      });
    });

  }

  // return next(action);
};

const addGameMiddleware = applyMiddleware(fetchGamesMiddleware);


const store = createStore(gameReducer, addGameMiddleware);

export default store;
