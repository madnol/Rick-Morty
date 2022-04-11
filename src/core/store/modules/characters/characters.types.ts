import { Character, Episode } from 'core/api/characters/characters.types';

export interface State {
  characterList: {
    loading: boolean;
    list: Character[];
    info: {
      count?: number;
      pages?: number;
      next?: string;
      prev: null;
    };
    error?: string;
  };
  favorites: {
    loading: boolean;
    list: Character[];
    error?: string;
  };
  episodeList: {
    loading: boolean;
    list: Episode[];
    error?: string;
  };
}

export type { Character, Episode };
