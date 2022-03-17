export interface IGameService{
  retrieve: () => Promise<string[]>;
  create: (game: string) => Promise<string[]>;
}
