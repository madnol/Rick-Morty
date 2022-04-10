export type CharacterListResponseData = {
  results: Character[];
  info: {
    count?: number;
    pages?: number;
    next?: string;
    prev: null;
  };
};

export type Character = {
  id: number;
  name?: string;
  image?: string;
  episodes?: string[];
};

export type CharacterListParams = {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
};
export type EpisodesListParams = {
  ids?: number[];
};

export type Episode = {
  id: number;
  name?: string;
  air_date?: string;
  episode?: string;
  characters?: string[];
  url?: string;
  created?: string;
};
