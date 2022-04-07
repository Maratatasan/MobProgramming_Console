import { IStore } from "../reducers/rootReducer";

export interface IGameService {
  retrieve: () => Promise<IStore>;
  create: (game: string) => Promise<IStore>;
}
