export interface IStardbData {
  gender?: string;
  eye_color?: string;
  summary?: string;
  name?: string;
  link?: string;
  rotation_period?: string;
  population?: string;
  diameter?: string;
  type?: string;
  [key: string]: any;
}

export interface IStardbState {
  dataRandom: IStardbData | null;
  loadingRandom: boolean;
  errorRandom: null | string;
  [key: string]: any;
}

export interface IDataState {
  data: IStardbData[] | null;
  currentData: IStardbData | null;
  loadingData: boolean;
  sourceData: 'local' | 'server';
  errorData: null | string;
  [key: string]: any;
}
