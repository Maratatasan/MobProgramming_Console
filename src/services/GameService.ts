
import axios from 'axios'
import SERVER_URL from '../types/endpoints';
import { IGameService } from './GameServiceInterface';

export class GameService implements IGameService {

    public retrieve(){
        return axios({
            method: 'get',
            url: SERVER_URL.GAME,
        });
    }

    public create(game: string) {
        return axios.post(
            SERVER_URL.GAME,
            {
                newGame: game
            });
    }
}
