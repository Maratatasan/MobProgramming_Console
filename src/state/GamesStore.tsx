import { createStore, applyMiddleware } from "redux";
import { GameServiceStub } from "../services/GameServiceStub";





const gameReducer = (
  state: any = { games: { lookOut5: ["abs"] } },
  action: any
) => {
  console.log(action);
  switch (action.type) {
    case "addGame":
      return {
        ...state,
        games: { ...state.games, [action.payload.gameName]: [] },
      };
    //   return {...state, action.payload.gameName};
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
  console.log("fetchGamesMiddleware", store, next, action);
  const gamesService = new GameServiceStub();
  if (action.type === "addGame") {
    
    gamesService.create(action.payload.gameName).then((response) => {

      // add setTimeOut inside the create method, to test if redux store is actually updated AFTER the server store is updated
      // might need to add next(action) inside the then function

      // store.dispatch({
      //   type: "addGame",
      //   payload: { gameName: action.payload.gameName },
      // });
    });
  }
  return next(action);
};

const addGameMiddleware = applyMiddleware(fetchGamesMiddleware);


const store = createStore(gameReducer,addGameMiddleware );

export default store;
