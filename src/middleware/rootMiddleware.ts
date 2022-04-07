import { REFRESH_GAMES_ACTION } from "../reducers/refreshReducer";
import { GameServiceStub } from "../services/GameServiceStub";
import { UserAndGamesServiceStub } from "../services/UserAndGamesServiceStub";
export const ADD_GAME = "addGame";

export const ASSOCIATE = "associate";


export const rootMiddleware = (store: any) => (next: any) => (action: any) => {
    if (action.type === ADD_GAME) {

        return addGameMiddleware(action, next);

    }

    if (action.type === ASSOCIATE) {

        return associateMiddleware(action, next);

    }
};

function addGameMiddleware(action: any, next: any) {
    const gamesService = new GameServiceStub();
    gamesService.create(action.payload.gameName)
        .then((response: any) => {
            // we are assuming response from the server looks like this...
            // { games : { gameName: string[], }}
            console.log('response', response);
            return next({
                type: REFRESH_GAMES_ACTION, payload: response,
            });
        });
}

function associateMiddleware(action: any, next: any) {
    const userAndGamesService = new UserAndGamesServiceStub();
    userAndGamesService.associate(action.payload.userName, action.payload.gameName).then((response: any) => {
        return next({
            type: "refreshGames", payload: response,
        });
    });
}
