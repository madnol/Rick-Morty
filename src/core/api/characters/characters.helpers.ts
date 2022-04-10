import { Character, CharacterListResponseData } from './characters.types';

export const transformCharacterList = (characters: any[]): Character[] => {
  return characters.map(character => ({
    id: character?.id,
    name: character?.name,
    image: character?.image,
    episodes: character?.episode?.map((episodeNumber: string) =>
      episodeNumber.replace(/\D/g, ''),
    ),
  }));
};

export const transformCharacterData = (
  data: any,
): CharacterListResponseData => ({
  results: transformCharacterList(data?.results),
  info: {
    count: data?.info?.count,
    pages: data?.info?.pages,
    next: data?.info?.next,
    prev: data?.info?.prev,
  },
});

export const transformEpisodeList = (episodes: any[]): Character[] => {
  return episodes.map(episode => ({
    id: episode?.id,
    name: episode?.name,
  }));
};
