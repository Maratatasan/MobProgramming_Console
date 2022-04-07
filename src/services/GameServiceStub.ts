//TODO implement axios mock for stub

// import axios from 'axios'
// import SERVER_URL from '../types/endpoints';
import { IStore } from '../reducers/rootReducer';
import { IGameService } from './GameServiceInterface';



export class GameServiceStub implements IGameService {



  public retrieve(): Promise<IStore> {
    return new Promise((resolve) => resolve({
      games: {
        callOfDuty: ['bam']
      }
    }))
  }



  public create(game: string): Promise<IStore> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          games: {
            [game]: []
          }
        })

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
