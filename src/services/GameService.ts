
import axios, { AxiosPromise } from 'axios'
import SERVER_URL from '../types/endpoints';

export class GameService {

    constructor() {

    }

    public retrieve(): AxiosPromise<string[]> {
        return axios({
            method: 'get',
            url: SERVER_URL.GAME,
        });
    }

    public create(game: string): AxiosPromise<string[]> {
        return axios.post(
            SERVER_URL.GAME,
            {
                newGame: game
            });
    }
}