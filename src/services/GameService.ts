
import axios, { AxiosResponse } from 'axios'
import SERVER_URL from '../types/endpoints';
import { IGameService } from './GameServiceInterface';
export class GameService implements IGameService {

    public retrieve(): Promise<string[]>{
        return (axios({
            method: 'get',
            url: SERVER_URL.GAME,
        }) as Promise<AxiosResponse<string[]>>)
        .then(axiosResponse => axiosResponse.data);
    }

    public create(game: string): Promise<string[]> {
        return (axios.post(
            SERVER_URL.GAME,
            { newGame: game }
        ) as Promise<AxiosResponse<string[]>>)
        .then(axiosResponse => axiosResponse.data);
    }
}
