import { createStore } from "redux";

const gameReducer = (state = {games: {lookOut5: ['abs']}}, action: any) => {
  switch (action.type) {
    case "addGame":
        return {...state, games: {...state.games, [action.payload.gameName]: ['Shuheb']}}
    //   return {...state, action.payload.gameName};

    default:
      return state;
  }
};

const store = createStore(gameReducer);

export default store;

