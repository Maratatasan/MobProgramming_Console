import { Action } from "redux";
import { refreshGames, REFRESH_GAMES_ACTION } from "./refreshReducer";

export interface IGame {
    [gameName: string]: string[]
}

export interface IStore {
    games: IGame
}

export interface ActionWithPayload<T> extends Action {
    payload: T;
}

const rootReducer = (
    state: IStore = {
        games: {
            lookOut5: ["abs"],
            callOfDuty: ['abs']
        }
    },
    action: ActionWithPayload<IStore>
) => {
    console.group(action.type);
    console.log(action.payload);
    console.groupEnd();

    switch (action.type) {
        case REFRESH_GAMES_ACTION:
            return refreshGames(state, action.payload)
        default:
            return state;
    }
};

export default rootReducer;


