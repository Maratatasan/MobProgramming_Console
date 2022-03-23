import { IUserAndGamesService } from "./UserAndGamesServiceInterface";

export class UserAndGamesServiceStub implements IUserAndGamesService {
  allUsers: any = [];

  public associate(user: string, game: string): void {
    this.allUsers.push({ user, games: [game] });

    console.log(this.allUsers)
    
  }
}
