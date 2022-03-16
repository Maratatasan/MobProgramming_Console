import { AxiosPromise } from 'axios'


export interface IGameService{
  retrieve: () => AxiosPromise<string[]>;
  create: (game: string) => AxiosPromise<string[]>;
}
