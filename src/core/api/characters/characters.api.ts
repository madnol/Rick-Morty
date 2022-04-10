import { ApiFactoryClients } from '../api.types';
import { transformCharacterData } from './characters.helpers';

export default ({
  rickAndMortyServiceHttp,
}: ApiFactoryClients<'rickAndMortyServiceHttp'>) => ({
  getCharactersList: (id: number) =>
    rickAndMortyServiceHttp
      .get('/character/', {
        params: {
          id,
        },
      })
      .then(({ data }) => transformCharacterData(data)),
});
