
import axios, { AxiosResponse } from 'axios'
import { IStore } from '../reducers/rootReducer';
import SERVER_URL from '../types/endpoints';
import { IGameService } from './GameServiceInterface';
export class GameService implements IGameService {

    public retrieve(): Promise<IStore>{
        return (axios({
            method: 'get',
            url: SERVER_URL.GAME,
        }) as Promise<AxiosResponse<IStore>>)
        .then(axiosResponse => axiosResponse.data);
    }

    public create(game: string): Promise<IStore> {
        return (axios.post(
            SERVER_URL.GAME,
            { newGame: game }
        ) as Promise<AxiosResponse<IStore>>)
        .then(axiosResponse => axiosResponse.data);
    }
}
