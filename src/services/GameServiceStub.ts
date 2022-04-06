//TODO implement axios mock for stub

// import axios from 'axios'
// import SERVER_URL from '../types/endpoints';
import { IGameService } from './GameServiceInterface';



export class GameServiceStub implements IGameService {

  allGames: string[] = [];

  public retrieve(): Promise<string[]> {
    return new Promise((resolve) => resolve(this.allGames))
  }



  public create(game: string): any {
    this.allGames.push(game);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.allGames)

      }, 500);

    })
    //     return axios.post(
    //         SERVER_URL.GAME,
    //         {
    //             newGame: game
    //         });
  }
}

// export { };
