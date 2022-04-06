import { IUserAndGamesService } from "./UserAndGamesServiceInterface";

export class UserAndGamesServiceStub implements IUserAndGamesService {
  allUsers: any = [];
  allGames: any = { games: { 'Call of Poopy': [] } }


  // finish this off next time, 
  public associate(user: string, game: string): Promise<any> {
    const doesGameAlreadyExist = this.allGames.games.hasOwnProperty(game);

    if (doesGameAlreadyExist) {
      this.allGames.games[game].push(user)
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.allGames)

      }, 500);

    })


  }
}
