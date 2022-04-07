import { ActionWithPayload, IGame, IStore } from "./rootReducer";

export const REFRESH_GAMES_ACTION = "refreshGames";
// { callOfDuty: ['bam ] }
export const refreshGames = (state: IStore, payload: IStore) => {
    console.log('refreshGames', state, payload)
    return { ...state, ...payload };
};