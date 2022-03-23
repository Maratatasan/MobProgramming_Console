
import axios, { AxiosPromise } from 'axios'
import SERVER_URL from '../types/endpoints';
import { IUserAndGamesService } from './UserAndGamesServiceInterface';


export class UserAndGamesService implements IUserAndGamesService {

    public associate(user: string, game: string): void {
        axios.post(SERVER_URL.USER_WITH_GAME,
            { userName: user, gameName: game }).then(response => console.log('reslolved!'));
    }
}