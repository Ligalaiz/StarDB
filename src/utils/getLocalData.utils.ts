import { starships } from '@src/mock/data/straships';
import { planets } from '@src/mock/data/planets';
import { people } from '@src/mock/data/people';
import { IStardbData } from '@src/interfaces';

interface IMap {
  starships: IStardbData[];
  [key: string]: IStardbData[];
}

const map: IMap = {
  starships,
  planets,
  people,
};

const getLocalDataUtils = (path: string): IStardbData[] => {
  return map[`${path}`];
};

export { getLocalDataUtils };
