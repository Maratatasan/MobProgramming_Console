import { IUserAndGamesService } from "./UserAndGamesServiceInterface";

export class UserAndGamesServiceStub implements IUserAndGamesService {
  allUsers: any = [];
  allGames: any = { games: { 'Call of Poopy': [] } }


  // finish this off next time, 
  public associate(user: string, game: string): Promise<any> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          games: {
            [game]: [user]
          }
        })

      }, 500);

    })


  }
}
